import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/AppContext";
import Navigation from "@/components/Navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WorkFinder - Find Your Perfect Job",
  description: "Discover amazing career opportunities with WorkFinder. Swipe through jobs, apply, and connect with employers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AppProvider>
          <div className="pb-20">
            {children}
          </div>
          <Navigation />
        </AppProvider>
      </body>
    </html>
  );
}
