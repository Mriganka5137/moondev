// lib/actions/actions.ts
"use server";
import { headers } from "next/headers";

export async function fetchPosts() {
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
      const errorData = await res.json();
      throw new Error(errorData.error || "Failed to fetch posts");
    }

    const data = await res.json();

    if (!data.posts || data.posts.length === 0) {
      return { status: "empty", message: "No posts found" };
    }

    return { status: "success", posts: data.posts };
  } catch (error: any) {
    console.error("Error fetching posts:", error);
    return {
      status: "error",
      message: error.message || "An error occurred while fetching posts",
    };
  }
}
