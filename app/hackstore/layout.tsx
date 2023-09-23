/* eslint-disable react/react-in-jsx-scope */
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import "../globals.css"
import { Urbanist } from 'next/font/google';
import LeftSidebar from '@/components/share/LeftSidebar';
import { ToasterProvider } from '@/lib/providers/toaster';
import Footer from '@/components/store/footer';
import Navbar from '@/components/store/navbar';
import Topbar from '@/components/share/Topbar';
import { Analytics } from '@vercel/analytics/react';

const inter = Urbanist({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HackStore',
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
            <main className='flex flex-row text-light-2'>
              <LeftSidebar />
              <section className="main-container">
                <div className="w-full max-w-4xl">
                  <Navbar/>
                  {children}
                  <Analytics />
                  <Footer/>
                </div>
              </section>
            </main>
          </body>
          
    </html>
    </ClerkProvider>
  )
}
