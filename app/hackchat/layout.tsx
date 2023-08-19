import { ClerkProvider } from "@clerk/nextjs"
import { Metadata } from "next"
import "../globals.css"

export const metadata: Metadata = {
    title: 'HackChat',
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
            <body className={`bg-dark-2`}>
              <div>
              {children}
              </div>
            </body>
        </html>
     </ClerkProvider>
    )
  }
  