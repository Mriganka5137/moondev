"use client";
import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { Copy } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface PostCardProps {
  timestamp: string;
  prompt: string;
  post: string;
}

export function PostCard({ timestamp, prompt, post }: PostCardProps) {
  const { toast } = useToast();
  const [isOverflowing, setIsOverflowing] = useState(false);
  const postRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const checkOverflow = () => {
      if (postRef.current) {
        const lineHeight = parseInt(
          getComputedStyle(postRef.current).lineHeight
        );
        const maxHeight = lineHeight * 5; // 5 lines
        setIsOverflowing(postRef.current.scrollHeight > maxHeight);
      }
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);

    return () => window.removeEventListener("resize", checkOverflow);
  }, [post]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(post).then(() => {
      toast({
        title: "Copied!",
        description: "Post copied to clipboard",
      });
    });
  };

  return (
    <Card className="mb-6 overflow-hidden flex flex-col h-[450px]">
      <CardHeader className="bg-zinc-100 dark:bg-zinc-800">
        <CardTitle className="text-sm text-zinc-500 dark:text-zinc-400">
          {formatDistanceToNow(new Date(timestamp), { addSuffix: true })}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 flex-grow overflow-hidden">
        <h3 className="mb-2 font-semibold text-zinc-700 dark:text-zinc-300">
          Prompt:
        </h3>
        <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
          {prompt}
        </p>
        <h3 className="mb-2 font-semibold text-zinc-700 dark:text-zinc-300">
          Generated Post:
        </h3>
        <div className="relative">
          <p
            ref={postRef}
            className="text-sm text-zinc-600 dark:text-zinc-400 overflow-hidden"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
            }}
          >
            {post}
          </p>
          {isOverflowing && (
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="link" className="mt-2 p-0 h-auto">
                  Show more
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-xl max-h-[80vh] overflow-y-auto space-y-5">
                <DialogHeader>
                  <DialogTitle>Full Post</DialogTitle>
                </DialogHeader>
                <div className="mt-4">
                  <h3 className="mb-2 font-semibold">Prompt:</h3>
                  <p className="mb-4 text-sm">{prompt}</p>
                  <h3 className="mb-2 font-semibold">Generated Post:</h3>
                  <p className="text-sm whitespace-pre-wrap">{post}</p>
                </div>
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="w-full"
                >
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Post
                </Button>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardContent>
      <div className="p-4 mt-auto">
        <Button onClick={copyToClipboard} variant="outline" className="w-full">
          <Copy className="w-4 h-4 mr-2" />
          Copy Post
        </Button>
      </div>
    </Card>
  );
}
