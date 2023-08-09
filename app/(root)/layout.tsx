import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '@/components/share/Topbar'
import LeftSidebar from '@/components/share/LeftSidebar'
import RightSidebar from '@/components/share/RightSidebar'
import Bottombar from '@/components/share/Bottombar'

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
        <body className={`${inter.className}`}>
          <Topbar />
            <main className='flex flex-row'>
              <LeftSidebar />
              <section className="main-container">
                <div className="w-full max-w-4xl">
                  {children}
                </div>
              </section>
              <RightSidebar />
            </main>
          <Bottombar />
          </body>
          
    </html>
    </ClerkProvider>
  )
}
