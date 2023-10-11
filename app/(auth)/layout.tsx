/* eslint-disable react/react-in-jsx-scope */
import { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "../globals.css"
import { cn } from "@/lib/utils"


const inter = Urbanist({ subsets: ['latin'] })


export const metadata: Metadata = {
    title: 'HackHubb Login',
    description: 'Developer Chat',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
            <body className={ cn(`${inter.className}`,`bg-gradient-to-br from-slate-700 via-slate-950 to-black w-full flex justify-center items-center min-h-screen`)}>
              {children}
            </body>
        </html>
    )
  }
  