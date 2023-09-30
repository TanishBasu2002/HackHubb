/* eslint-disable react/react-in-jsx-scope */
import { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "../globals.css";

import Topbar from "@/components/share/Topbar";
import { NextUiProviders } from "@/app/providers";

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
        <html lang="en">
        <body className={`${inter.className}`}>
        <NextUiProviders>
          <Topbar />
          <div className="bg-black text-white min-h-screen ">
              {children}
            </div>
          </NextUiProviders>
          </body>
        </html>
    )
  }
  