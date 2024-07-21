"use client";
import {
  BotMessageSquare,
  LifeBuoy,
  NotebookPen,
  SquareTerminal,
  SquareUser,
} from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const router = useRouter();
  const path = usePathname();
  return (
    <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r max-md:hidden">
      <div className="border-b p-2">
        <Button variant="outline" size="icon" aria-label="Home">
          <BotMessageSquare className="size-5" />
        </Button>
      </div>
      <nav className="grid gap-1 p-2 ">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(path === "/" && "bg-muted", "rounded-lg")}
              aria-label="Chat"
              onClick={() => router.push("/")}
            >
              <SquareTerminal className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Playground
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(path === "/posts" && "bg-muted", "rounded-lg")}
              aria-label="Posts"
              onClick={() => router.push("/posts")}
            >
              <NotebookPen className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Posts
          </TooltipContent>
        </Tooltip>
      </nav>
      <nav className="mt-auto grid gap-1 p-2">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mt-auto rounded-lg"
              aria-label="Help"
            >
              <LifeBuoy className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Help
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="mt-auto rounded-lg"
              aria-label="Account"
            >
              <SquareUser className="size-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Account
          </TooltipContent>
        </Tooltip>
      </nav>
    </aside>
  );
};

export default Sidebar;
