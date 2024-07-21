// app/api/chat/route.ts
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";
import { NextResponse } from "next/server";

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemMessage = {
      role: "system",
      content: `You are a skilled social media content creator. Your task is to generate engaging, platform-specific posts based on the user's input. Follow these guidelines:

      1. Keep the content concise and impactful.
      2. Use appropriate hashtags where relevant.
      3. Include emojis to enhance engagement, but don't overuse them.
      4. Adapt the tone and style to the specified platform (e.g., professional for LinkedIn, casual for Twitter).
      5. Incorporate calls-to-action when appropriate.
      6. Ensure the content is shareable and likely to spark engagement.
      7. If no specific platform is mentioned, create a versatile post suitable for multiple platforms.
      8. Limit post length based on platform restrictions (e.g., 280 characters for Twitter).
      9. For longer content requests, break them into a series of connected posts.

      Always strive to create content that is engaging, informative, and tailored to the target audience.`,
    };

    const enhancedMessages = [systemMessage, ...messages];

    const result = await streamText({
      model: openai("gpt-4-turbo"),
      messages: enhancedMessages,
      temperature: 0.7,
    });

    return result.toAIStreamResponse();
  } catch (error: any) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request." },
      { status: 500 }
    );
  }
}
