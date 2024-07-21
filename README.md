# Social AI Post Generator

This project is a web application that uses AI to generate social media posts based on user prompts. It allows users to create, review, edit, and save posts to a Google Spreadsheet.

## Routes

1. **Home Page** (`/app/page.tsx`)

   - Main interface for generating posts
   - Displays welcome message and how-to steps for new users
   - Shows chat interface with AI for returning users

2. **Posts Page** (`/app/posts/page.tsx`)

   - Displays all saved posts
   - Allows users to view and manage their generated posts

3. **API Routes**:
   - **Chat API** (`/app/api/chat/route.ts`)
     - Handles communication with the AI model for generating posts
   - **Sheet API** (`/app/api/sheet/route.ts`)
     - Handles saving posts to and fetching posts from Google Sheets

## Key Components

1. **ChatForm** (`/components/ChatForm.tsx`)

   - Input form for user prompts
   - Handles submission of prompts to the AI

2. **MessageItem** (`/components/MessageItem.tsx`)

   - Displays individual messages in the chat interface
   - Includes options to copy and save generated posts

3. **HowToSteps** (`/components/HowToSteps.tsx`)

   - Displays a step-by-step guide on how to use the application

4. **WelcomeSection** (`/components/WelcomeSection.tsx`)

   - Welcomes new users and provides an overview of the application

5. **Header** (`/components/Header.tsx`)

   - Application header with navigation options

6. **Sidebar** (`/components/Sidebar.tsx`)
   - Navigation sidebar for desktop view

## Functionality

1. **Post Generation**

   - Users can enter prompts to generate social media posts
   - AI processes the prompt and returns a generated post
   - Users can review and edit the generated post

2. **Post Saving**

   - Generated posts can be saved to a Google Spreadsheet
   - Saved posts include timestamp, original prompt, and generated content

3. **Post Retrieval**

   - Users can view all saved posts on the Posts page
   - Posts are fetched from the Google Spreadsheet

4. **Responsive Design**

   - The application is responsive and works on both desktop and mobile devices
   - Includes a sidebar for desktop and a mobile menu for smaller screens

5. **Error Handling**
   - Provides user feedback for errors during post generation or saving
   - Handles empty or invalid data in the spreadsheet

## Setup and Configuration

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables:
   - `GOOGLE_SHEET_ID`: ID of your Google Spreadsheet
   - `GOOGLE_CLIENT_EMAIL`: Google service account email
   - `GOOGLE_PRIVATE_KEY`: Google service account private key
   - `OPENAI_API_KEY`: Your OpenAI API key
4. Run the development server: `npm run dev`

## Deployment

This project is set up to be easily deployed on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy your application.

Make sure to set up the necessary environment variables in your Vercel project settings.

## Future Enhancements

- Implement user authentication
- Add support for multiple social media platforms
- Integrate directly with social media APIs for posting
- Implement a tagging system for organizing posts
