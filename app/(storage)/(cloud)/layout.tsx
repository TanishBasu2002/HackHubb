/* eslint-disable react/react-in-jsx-scope */
import "@/app/globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import Topbar from "@/components/share/Topbar";
import LeftSidebar from "@/components/share/LeftSidebar";
import RightSidebar from "@/components/share/RightSidebar";
import { ToasterProvider } from "@/lib/providers/toaster";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HackCloud Storage",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ToasterProvider />
        <Topbar />
        <main className="flex flex-row">
          <LeftSidebar className="max-md:hidden" />
          <section className="main-container">
            <div className="w-full max-w-4xl">{children}</div>
          </section>
          <RightSidebar />
        </main>
      </body>
    </html>
  );
}
