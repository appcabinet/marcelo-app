import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { DM_Serif_Text } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });
const dmSerifText = DM_Serif_Text({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
    title: "marcelo.app",
    description: "Software engineering and related domains",
    icons: {
        icon: '/de3-icon.png',
    }
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={dmSans.className}>{children}
      <Toaster/>
      </body>
      </html>
  );
}
