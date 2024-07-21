// app/page.tsx
"use client";
import { useChat } from "ai/react";
import { useToast } from "@/components/ui/use-toast";
import { MessageItem } from "@/components/message-item";
import { WelcomeSection } from "@/components/WelcomeSection";
import { ChatForm } from "@/components/ChatForm";
import { KeyboardEvent, useRef, useEffect } from "react";

export default function Home() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } =
    useChat();
  const inputRef = useRef<string>("");
  const { toast } = useToast();

  useEffect(() => {
    inputRef.current = input;
  }, [input]);

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: "An error occurred while processing your request.",
        variant: "destructive",
      });
    }
  }, [error, toast]);

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4 container">
        {messages.length === 0 ? (
          <WelcomeSection />
        ) : (
          messages.map((m, index) => (
            <MessageItem
              key={m.id}
              message={m}
              prompt={m.role === "assistant" ? inputRef.current : ""}
            />
          ))
        )}
      </div>

      <div className="p-4 container">
        <ChatForm
          input={input}
          isLoading={isLoading}
          onInputChange={handleInputChange}
          onSubmit={handleFormSubmit}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
