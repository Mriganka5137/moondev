# Social Media Post Generator

This application allows users to generate social media posts using OpenAI's API and save them to a Google Spreadsheet. It's built with Next.js 14 app router and TypeScript.

## Features

- Generate social media posts using OpenAI's API
- Save generated posts to a Google Spreadsheet
- The Generated posts are saved to the Google Spreadsheet only when the user clicks on the save button.
- User can copy the generated post to the clipboard by clicking on the copy button.
- Retrieve and display saved posts (Bonus feature)
- Error handling and user feedback for API requests (Bonus feature)
- Responsive design
- Toast notifications for user feedback

## Google Spreadsheet

You can view and edit the Google Spreadsheet used for storing posts [here](https://docs.google.com/spreadsheets/d/1acY4sD2krzP4-x63cwsfxfCjBaA77faHzxv9qKtO5Hk/).

## Code Walkthrough

Here's a brief overview of the folder structure:

- `app/`: Contains the main pages and API routes.

  - `page.tsx`: The home page with the post generation interface.
  - `posts/page.tsx`: Displays retrieved posts (Bonus feature).
  - `api/`: Contains API route handlers.
    - `chat/route.ts`: Handles post generation using OpenAI API.
    - `sheet/route.ts`: POST handler Manages saving posts to Google Sheets.
    - `sheet/route.ts`: GET handler Retrieves posts from Google Sheets (Bonus feature).

- `components/`: Contains reusable React components.

  - `ChatForm.tsx`: The form for entering prompts.
  - `header.tsx`: The header component.
  - `HowToSteps.tsx`: The steps for generating posts.
  - `PostCard.tsx`: Displays a single post.
  - `sidebar.tsx`: The sidebar component.
  - `message-item.tsx`: Displays chat messages.
  - `WelcomeSection.tsx`: The welcome section in chat.
  - `ui/` : Contains UI components.

- `lib/`: Contains utility functions and server actions.

  - `utils.ts`: Utility functions used across the application.
  - `/actions/actions.ts` : Contains Next.js Server actions .

- `public/`: Stores static assets.

## Deployment

This application is deployed using Vercel. You can access it at [https://moondev-theta.vercel.app/](https://moondev-theta.vercel.app/).

### Deployment Instructions

1. Fork this repository to your GitHub account.
2. Sign up for a [Vercel](https://vercel.com/) account if you haven't already.
3. Create a new project in Vercel and import your forked repository.
4. Set up the following environment variables in your Vercel project settings:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `GOOGLE_SHEETS_PRIVATE_KEY`: Your Google service account private key
   - `GOOGLE_SHEETS_CLIENT_EMAIL`: Your Google service account email
   - `GOOGLE_SHEETS_SPREADSHEET_ID`: Your Google Spreadsheet ID
5. Deploy the project.

## Local Development

1. Clone the repository:
   - `git clone https://github.com/Mriganka5137/moondev.git`
   - `cd moondev`
2. Install dependencies:
   - `pnpm install`
3. Set up the following environment variables in a `.env.local` file:
   - `OPENAI_API_KEY`: Your OpenAI API key
   - `GOOGLE_SHEETS_PRIVATE_KEY`: Your Google service account private key
   - `GOOGLE_SHEETS_CLIENT_EMAIL`: Your Google service account email
   - `GOOGLE_SHEETS_SPREADSHEET_ID`: Your Google Spreadsheet ID
4. Run the development server:
   - `pnpm run dev`
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Bonus Tasks Completed

1. Implemented retrieval and display of generated posts from the Google Spreadsheet.
2. Added error handling and user feedback for API requests.

## Note

The API keys used in this project are for development purposes only. In a production environment, these should be kept secure and not exposed in the client-side code.
