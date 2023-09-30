/* eslint-disable react/react-in-jsx-scope */
import "../globals.css"
import type { Metadata } from 'next'
import { Urbanist } from 'next/font/google'
import { cn } from '@/lib/utils'
import { ModalProvider } from '@/components/chat-models/providers/modal-provider'
import { ToasterProvider } from '@/lib/providers/toaster';
import { SocketProvider } from '@/components/chat-models/providers/socket-provider';

import { QueryProvider } from '@/components/chat-models/providers/query-provider'
const inter = Urbanist({ subsets: ['latin'] })

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
    <html lang="en">
        <body className={cn(inter.className,"bg-slate-950 text-light-2")}>
        <SocketProvider>
        <ToasterProvider />
          <ModalProvider/>
            <QueryProvider>
            {children}
            </QueryProvider>
        </SocketProvider>
        </body>
    </html>
  )
}
