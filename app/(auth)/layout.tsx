/* eslint-disable react/react-in-jsx-scope */
import { ClerkProvider } from "@clerk/nextjs"
import { Metadata } from "next"
import { Urbanist } from "next/font/google"
import "../globals.css"
import { cn } from "@/lib/utils"
import { Analytics } from "@vercel/analytics/react"
import { dark } from "@clerk/themes"

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
     <ClerkProvider    appearance={{
      baseTheme: dark,
    }}>
        <html lang="en">
            <body className={ cn(`${inter.className}`,`bg-gradient-to-br from-slate-700 via-slate-950 to-black`)}>
              <div className="w-full flex justify-center items-center min-h-screen">
              {children}
              <Analytics />
              </div>
            </body>
        </html>
     </ClerkProvider>
    )
  }
  