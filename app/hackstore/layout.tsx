/* eslint-disable react/react-in-jsx-scope */
import { ClerkProvider } from '@clerk/nextjs'
import '../globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import LeftSidebar from '@/components/share/LeftSidebar'
import Bottombar from '@/components/share/Bottombar'
import { ToasterProvider } from '@/lib/providers/toaster'
import Footer from '@/components/store/footer'
import Navbar from '@/components/store/navbar'
import Topbar from '@/components/share/Topbar'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HackStore',
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
        <ToasterProvider />
            <Topbar />
            <main className='flex flex-row'>
              <LeftSidebar />
              <section className="main-container">
                <div className="w-full max-w-4xl">
                  <Navbar/>
                  {children}
                  <Footer/>
                </div>
              </section>
            </main>
          <Bottombar />
          </body>
          
    </html>
    </ClerkProvider>
  )
}
