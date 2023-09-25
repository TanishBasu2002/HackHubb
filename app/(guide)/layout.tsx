/* eslint-disable react/react-in-jsx-scope */
import { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import Topbar from "@/components/share/Topbar";
import { NextUiProviders } from "@/app/providers";
import { Analytics } from "@vercel/analytics/react";

const inter = Urbanist({ subsets: ['latin'] })


export const metadata: Metadata = {
    title: 'HackHubb Guide',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ClerkProvider>
        <html lang="en">
        <body className={`${inter.className}`}>
        <NextUiProviders>
          <Topbar />
          <div className="bg-black text-white h-full">
              {children}
              <Analytics />
            </div>
          </NextUiProviders>
          </body>
        </html>
      </ClerkProvider>
    )
  }
  