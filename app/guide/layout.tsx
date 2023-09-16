/* eslint-disable react/react-in-jsx-scope */
import { Metadata } from "next"
import { Open_Sans } from "next/font/google"
import "../globals.css"
import { ClerkProvider } from "@clerk/nextjs"

import Topbar from "@/components/share/Topbar"
import { NextUiProviders } from "@/app/providers"

const inter = Open_Sans({ subsets: ['latin'] })


export const metadata: Metadata = {
    title: 'HackHubb Guide',
    description: 'Developer Chat',
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
          <div className="bg-black text-white">
              <div className="w-full flex justify-center items-center min-h-screen">
              {children}
              </div>
            </div>
          </NextUiProviders>
          </body>
        </html>
      </ClerkProvider>
    )
  }
  