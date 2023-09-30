import type { Metadata } from 'next';
import "@/app/globals.css";
import { Toaster } from '@/components/ui/toaster';
import GA from './_components/GA';
import Navbar from './_components/navbar';
import { Urbanist } from 'next/font/google';
const inter = Urbanist({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'HackCloud Converter - Free Unlimited File Converter',
  keywords:
    'image converter, video converter, audio converter, unlimited image converter, unlimited video converter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <GA GA_MEASUREMENT_ID='G-52GQ441X7H' />
      <meta name="google-site-verification" content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU" />
      <body className={`${inter.className} text-white bg-gradient-to-tr from-slate-800 via-slate-900 to-slate-950 `}>
        <Navbar />
        <Toaster />
        <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
          {children}
        </div>
      </body>
    </html>
  );
}
