import { Message } from "ai";
import { User, Bot, Copy, Save } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MessageItemProps {
  message: Message;
}

export function MessageItem({ message }: MessageItemProps) {
  const isUser = message.role === "user";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(message.content).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const saveToSpreadsheet = () => {
    // Implement the logic to save to spreadsheet here
    console.log("Saving to spreadsheet:", message.content);
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
                  >
                    <Save className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Save to spreadsheet</TooltipContent>
              </Tooltip>
            </div>
          )}
        </div>
        <p className="whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
}
