/* eslint-disable react/react-in-jsx-scope */
import { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "../globals.css";
import { NextUiProviders } from "@/app/providers";
import { Navbar } from "./_components/Navbar";
import { Separator } from "@/components/ui/separator";

const inter = Urbanist({ subsets: ['latin'] })


export const metadata: Metadata = {
    title: 'HackHubb Guide',
  }
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-slate-950 text-white`}>
        <NextUiProviders>
        <div className="min-h-screen">
          <div className="h-[80px] fixed inset-y-0 w-full z-50">
              <Navbar />
              <Separator  className="text-slate-800"/>
          </div>
          <div className="max-md:hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50"> 
          </div>
            <main className="pt-[100px] h-full bg-slate-950 text-white">
              {children}
            </main>
          </div>
          </NextUiProviders>
          </body>
        </html>)
  }
  