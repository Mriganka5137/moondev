import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

export const dynamic = "force-dynamic";

export interface SheetRequestBody {
  timestamp: string;
  prompt: string;
  post: string;
}

function getGoogleSheetsClient() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive.file",
      ],
    });

    return google.sheets({ version: "v4", auth });
  } catch (error) {
    console.error("Error initializing Google Sheets client:", error);
    throw new Error("Failed to initialize Google Sheets client");
  }
}

export async function POST(req: NextRequest) {
  try {
    const { timestamp, prompt, post } = await req.json();

    if (!timestamp || !prompt || !post) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const sheets = getGoogleSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[timestamp, prompt, post]],
      },
    });

    return NextResponse.json(
      { message: "Saved to spreadsheet" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error saving to spreadsheet:", error);

    let errorMessage = "Failed to save to spreadsheet";
    let statusCode = 500;

    if (error.message === "Failed to initialize Google Sheets client") {
      errorMessage = "Google Sheets client initialization failed";
      statusCode = 503;
    } else if (error.code === 403) {
      errorMessage =
        "Permission denied: Check your Google Sheets API credentials";
    } else if (error.code === 404) {
      errorMessage = "Spreadsheet not found: Check your GOOGLE_SHEET_ID";
    }

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}

export async function GET(req: NextRequest) {
  try {
    const sheets = getGoogleSheetsClient();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "A:C",
      valueRenderOption: "UNFORMATTED_VALUE",
      dateTimeRenderOption: "FORMATTED_STRING",
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      return NextResponse.json({ message: "No data found" }, { status: 200 });
    }

    // Filter out completely empty rows and process the data
    const posts = rows
      .slice(1) // Assuming the first row is headers
      .filter((row) => row.some((cell) => cell !== null && cell !== ""))
      .map((row) => ({
        timestamp: row[0] || "",
        prompt: row[1] || "",
        post: row[2] || "",
      }))
      .filter((post) => post.timestamp && post.prompt && post.post); // Filter out posts with missing data

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error("Error reading from spreadsheet:", error);
    return NextResponse.json(
      { error: "Failed to read from spreadsheet" },
      { status: 500 }
    );
  }
}
