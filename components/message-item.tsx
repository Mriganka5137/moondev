"use client";
import { Message } from "ai";
import { User, Bot, Copy, Save } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

interface MessageItemProps {
  message: Message;
  prompt: string;
}

export function MessageItem({ message, prompt }: MessageItemProps) {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);
  const [saving, setSaving] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const saveToSpreadsheet = async () => {
    setSaving(true);
    try {
      const data = {
        timestamp: new Date().toISOString(),
        prompt: prompt.trim(),
        post: message.content.trim(),
      };

      // Log the data being sent (for debugging)
      console.log("Sending data:", data);

      const response = await fetch("/api/sheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Success",
          description: "Saved to spreadsheet successfully",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to save");
      }
    } catch (error: any) {
      console.error("Error saving to spreadsheet:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to save to spreadsheet",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      className={`p-4 rounded-lg border flex items-start gap-3 max-md:flex-col max-md:text-sm ${
        isUser ? "border-zinc-700 bg-zinc-900" : "border-zinc-700 bg-zinc-800"
      }`}
    >
      <div
        className={`p-2 rounded-full ${
          isUser ? "bg-blue-500" : "bg-green-500"
        }`}
      >
        {isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-white" />
        )}
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <p className="font-bold">{isUser ? "User:" : "Social AI:"}</p>
          {!isUser && (
            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={copyToClipboard}>
                    <Copy className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {copied ? "Copied!" : "Copy to clipboard"}
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={saveToSpreadsheet}
                    disabled={saving}
                  >
                    <Save className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  {saving ? "Saving..." : "Save to spreadsheet"}
                </TooltipContent>
              </Tooltip>
            </div>
          )}
        </div>
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}
