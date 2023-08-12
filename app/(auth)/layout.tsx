import { ClerkProvider } from "@clerk/nextjs"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
    title: 'HackHubb',
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
            <body className={ cn(`${inter.className}`,`bg-gradient-to-br from-slate-700 via-slate-950 to-black`)}>{children}</body>
        </html>
     </ClerkProvider>
    )
  }
  