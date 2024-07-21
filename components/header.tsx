"use client";
import React from "react";
import { Share, Menu, Home, BookOpen, HelpCircle, User } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const path = usePathname();

  return (
    <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-zinc-900 px-4">
      <h1 className="text-xl font-semibold">Social AI</h1>
      <div className="ml-auto flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Menu"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className=" text-left">
              <SheetTitle>Social AI</SheetTitle>
            </SheetHeader>
            <div className="mt-4 flex flex-col gap-4">
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => router.push("/")}
              >
                <Home className="mr-2 size-5" />
                Playground
              </Button>
              <Button
                variant="ghost"
                className="justify-start"
                onClick={() => router.push("/posts")}
              >
                <BookOpen className="mr-2 size-5" />
                Posts
              </Button>
              <Button variant="ghost" className="justify-start">
                <HelpCircle className="mr-2 size-5" />
                Help
              </Button>
              <Button variant="ghost" className="justify-start">
                <User className="mr-2 size-5" />
                Account
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
