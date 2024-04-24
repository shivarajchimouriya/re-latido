import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppThemeProvider from "@/providers/AppThemeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Latido",
  description: "The best leather band in the country",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppThemeProvider>
        {children}
        </AppThemeProvider>
        </body>
    </html>
  );
}
