import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Oluwaseun Oluwafemi - Sofware Engineer | Portfolio",
  description: 
  "Oluwaseun Oluwafemi is a Nigerian Software Engineer, specializing in building exceptional websites and applications with a focus on accessibility.",
  keywords: [
    "Software Engineer",
    "Backend Engineer",
    "Frontend Engineer",
    "Web Developer",
    "Nigeria",
    "Accessible Web Development",
    "Portfolio",
    "Websites",
    "Applications",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
    lang="en"
    className="h-full scroll-smooth antialiased"
    suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-full w-full bg-white dark:bg-zinc-900`}>
      <Providers>
          <div className="w-full">{children}</div>
        </Providers>

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
