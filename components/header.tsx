import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

import { Settings, Rabbit, Bird, Turtle, Share } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-zinc-900 px-4">
      <h1 className="text-xl font-semibold">Social AI</h1>
      <Button variant="outline" size="sm" className="ml-auto gap-1.5 text-sm">
        <Share className="size-3.5" />
        Share
      </Button>
    </header>
  );
};

export default Header;
