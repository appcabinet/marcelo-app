import { Inter } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
    title: "marcelo.app",
    description: "Marcelo's personal website.",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <Head>
          <link rel="icon" href={"/de3-icon.png"}/>
      </Head>
      <body className={dmSans.className}>{children}
      <Toaster/>
      </body>
      </html>
  );
}
