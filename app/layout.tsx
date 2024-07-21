import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Social AI",
  description:
    "Social AI is a platform for genrating social media posts using AI",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.className,
          spaceGrotesk.variable,
          "h-screen w-full overflow-hidden"
        )}
      >
        <TooltipProvider>
          <div className="flex h-full">
            <Sidebar />
            <div className="flex flex-1 flex-col font-spaceGrotesk pl-[56px] max-md:pl-0">
              <Header />
              <main className="flex-1 overflow-y-auto">{children}</main>
              <Toaster />
            </div>
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
