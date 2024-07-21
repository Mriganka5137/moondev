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
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Sidebar = () => {
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
            <Link
              href="/"
              className={cn(
                path === "/" && "bg-muted",
                "rounded-lg flex justify-center items-center p-2"
              )}
            >
              <SquareTerminal className="size-5" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="right" sideOffset={5}>
            Playground
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            {/* <Button
              variant="ghost"
              size="icon"
              className={cn(path === "/posts" && "bg-muted", "rounded-lg")}
              aria-label="Posts"
              onClick={() => router.push("/posts")}
            >
              <NotebookPen className="size-5" />
            </Button> */}

            <Link
              href="/posts"
              className={cn(
                path === "/posts" && "bg-muted",
                "rounded-lg flex justify-center items-center p-2"
              )}
            >
              <NotebookPen className="size-5" />
            </Link>
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
