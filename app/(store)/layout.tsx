/* eslint-disable react/react-in-jsx-scope */
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import "../globals.css"
import { Urbanist } from 'next/font/google';
import { ToasterProvider } from '@/lib/providers/toaster';
import Footer from '@/components/store/footer';
import Navbar from '@/components/store/navbar';
import { dark } from '@clerk/themes';

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
    <html lang="en">
        <body className={`${inter.className} bg-slate-950`}>
        <ToasterProvider />
                  <Navbar/>
                  {children}
                  <Footer/>
          </body>
    </html>
  )
}
