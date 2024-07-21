// app/posts/page.tsx
import { fetchPosts } from "@/lib/actions/actions";
import { PostCard } from "@/components/PostCard";
import { AlertCircle, Info } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Posts() {
  const result = await fetchPosts();

  if (result.status === "empty") {
    return (
      <div className="container my-20">
        <Alert variant="default">
          <Info className="h-4 w-4" />
          <AlertTitle>No posts found</AlertTitle>
          <AlertDescription>
            {result.message}. Try creating some posts first!
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  if (result.status === "error") {
    return (
      <div className="container my-20">
        <Alert variant="destructive" className=" bg-destructive text-white">
          <AlertCircle className="h-4 w-4 stroke-white" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{result.message}</AlertDescription>
        </Alert>
        <div className="mt-4 flex justify-start">
          <Link href="/">
            <Button>Try Again</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-10">
      <h1 className="mb-8 text-3xl font-bold text-zinc-800 dark:text-zinc-200">
        Generated Posts
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {result.posts.map((post: any, index: number) => (
          <PostCard
            key={index}
            timestamp={post.timestamp}
            prompt={post.prompt}
            post={post.post}
          />
        ))}
      </div>
    </div>
  );
}
