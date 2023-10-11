import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import { Analytics } from '@vercel/analytics/react'
import "./globals.css"
import { ToasterProvider } from '@/lib/providers/toaster'
export const metadata = {
  title: 'HackSpace',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider  appearance={{
        baseTheme: dark,
      }}>

      <html lang="en">
        <body suppressHydrationWarning>
        <ToasterProvider />
          {children}
          </body>
        <Analytics />
      </html>
    </ClerkProvider>
  )
}