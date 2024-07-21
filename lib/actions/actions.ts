"use server";
import { headers } from "next/headers";
interface Post {
  timestamp: string;
  prompt: string;
  post: string;
}

type FetchPostsResult =
  | { status: "success"; posts: Post[] }
  | { status: "empty"; message: string }
  | { status: "error"; message: string };

export async function fetchPosts(): Promise<FetchPostsResult> {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const host = headers().get("host") || "localhost:3000";
  const baseUrl = `${protocol}://${host}`;

  try {
    const res = await fetch(`${baseUrl}/api/sheet`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const errorData: { error: string } = await res.json();
      throw new Error(errorData.error || "Failed to fetch posts");
    }

    const data: { posts: Post[] } = await res.json();

    if (!data.posts || data.posts.length === 0) {
      return { status: "empty", message: "No posts found" };
    }

    // Sort posts by timestamp in descending order (most recent first)
    const sortedPosts = data.posts.sort((a, b) => {
      return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
    });

    return { status: "success", posts: sortedPosts };
  } catch (error) {
    console.error("Error fetching posts:", error);
    return {
      status: "error",
      message:
        error instanceof Error
          ? error.message
          : "An error occurred while fetching posts",
    };
  }
}
