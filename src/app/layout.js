import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import { DM_Serif_Text } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const dmSans = DM_Sans({ subsets: ["latin"] });

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
