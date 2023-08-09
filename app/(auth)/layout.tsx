import { ClerkProvider } from "@clerk/nextjs"
import { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"

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
            <body className={`${inter.className} bg-dark-1`}>{children}</body>
        </html>
     </ClerkProvider>
    )
  }
  