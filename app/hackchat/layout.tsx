/* eslint-disable react/react-in-jsx-scope */
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'
const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HackChat',
  description: 'Developers Chat',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
        <body className={cn(inter.className,"bg-gradient-to-tr from-slate-700 via-slate-800 to-slate-950")}>
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
