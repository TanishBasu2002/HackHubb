import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ToasterProvider } from "@/lib/providers/toaster";
export const metadata = {
  title: "HackSpace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <SpeedInsights />
      <html lang="en">
        <body suppressHydrationWarning>
          <ToasterProvider />
          {children}
        </body>
        <Analytics />
      </html>
    </ClerkProvider>
  );
}
