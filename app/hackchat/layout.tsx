/* eslint-disable react/react-in-jsx-scope */
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ModalProvider } from '@/components/chat-models/providers/modal-provider'
import { ToasterProvider } from '@/lib/providers/toaster'
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
        <body className={cn(inter.className,"bg-slate-950 text-light-1")}>
        <ToasterProvider />
        <ModalProvider/>
        {children}
        </body>
    </html>
    </ClerkProvider>
  )
}
