# Social AI Post Generator

## Overview

The Social AI Post Generator is a web application that leverages artificial intelligence to create engaging social media posts based on user prompts. This tool allows users to easily generate, review, edit, and save posts to a Google Spreadsheet, streamlining the content creation process for social media managers and content creators.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Routes](#routes)
5. [Key Components](#key-components)
6. [Functionality](#functionality)
7. [Vercel AI SDK Integration](#vercel-ai-sdk-integration)
8. [Setup and Configuration](#setup-and-configuration)
9. [Deployment](#deployment)
10. [Future Enhancements](#future-enhancements)

## Features

- AI-powered social media post generation
- User-friendly chat interface
- Post review and editing capabilities
- Save posts to Google Spreadsheet
- View and manage saved posts
- Responsive design for desktop and mobile
- Error handling and data validation

## Technologies Used

1. **Next.js**: React framework for building the web application
2. **Vercel AI SDK**: Provides easy integration with AI models for text generation
3. **Tailwind CSS**: Utility-first CSS framework for styling
4. **Google Sheets API**: Used for storing and retrieving generated posts
5. **OpenAI API**: Powers the AI model for generating social media posts
6. **TypeScript**: Adds static typing to improve code quality and developer experience

## Project Structure

- app/
  - api/
    - chat/
      - route.ts
    - sheet/
      - route.ts
  - posts/
    - page.tsx
  - layout.tsx
  - page.tsx
- components/
  - ChatForm.tsx
  - Header.tsx
  - HowToSteps.tsx
  - MessageItem.tsx
  - Sidebar.tsx
  - WelcomeSection.tsx
  - ui/
    - ... (UI components)
- lib/
  - actions/
    - actions.ts
  - utils.ts
- public/
  - ... (static files)
- README.md

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

## Vercel AI SDK Integration

This project leverages the Vercel AI SDK to streamline the integration of AI capabilities:

- **useChat Hook**: Used in the main chat interface to manage the state of the conversation and handle AI responses.
- **AI Streaming**: Implements real-time streaming of AI-generated content for a more responsive user experience.
- **API Route Integration**: The `/api/chat/route.ts` file uses Vercel AI SDK's `streamText` function to process prompts and generate responses.

The Vercel AI SDK simplifies the process of working with AI models, handling streaming, and managing the chat state, allowing for a smoother development experience and better performance.

## Setup and Configuration

1. Clone the repository:
