// components/ChatForm.tsx

import { CornerDownLeft } from "lucide-react";
import { KeyboardEvent } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

interface ChatFormProps {
  input: string;
  isLoading: boolean;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
}

export const ChatForm: React.FC<ChatFormProps> = ({
  input,
  isLoading,
  onInputChange,
  onSubmit,
  onKeyDown,
}) => (
  <form
    className="relative overflow-hidden rounded-lg bg-zinc-800 focus-within:ring-1 focus-within:ring-ring"
    onSubmit={onSubmit}
  >
    <Label htmlFor="message" className="sr-only">
      Message
    </Label>
    <Textarea
      id="message"
      placeholder="Enter your prompt here (e.g., 'Create a Twitter post about eco-friendly products')..."
      className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0 bg-zinc-800 placeholder:text-zinc-500 placeholder:font-light"
      value={input}
      onChange={onInputChange}
      onKeyDown={onKeyDown}
    />
    <div className="flex items-center p-3">
      <Button
        type="submit"
        size="sm"
        className="ml-auto gap-1.5 max-md:text-xs max-md:gap-1"
        disabled={isLoading || !input}
      >
        {isLoading ? "Generating..." : "Generate Post"}
        <CornerDownLeft className="size-3.5" />
      </Button>
    </div>
  </form>
);
