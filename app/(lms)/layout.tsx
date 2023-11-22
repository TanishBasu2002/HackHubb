/* eslint-disable react/react-in-jsx-scope */
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "../globals.css";
import { Urbanist } from "next/font/google";
import { ToasterProvider } from "@/lib/providers/toaster";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackSchool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen bg-slate-950 text-white`}>
        <ToasterProvider />
        {children}
      </body>
    </html>
  );
}
