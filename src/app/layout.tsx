import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppThemeProvider from "@/providers/AppThemeProvider";
import LenisProvider from "@/providers/LenisProvider";
import PullToRefreshProvider from "@/providers/PullTorefreshProvider";
import DrawerProvider from "@/providers/DrawerProvider";
const inter = Inter({ subsets: ["latin"] });
import 'swiper/css/grid';

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
        <DrawerProvider>
        <LenisProvider>
        <AppThemeProvider>
        {children}
        </AppThemeProvider>
        </LenisProvider>
        </DrawerProvider>
        </body>
    </html>
  );
}
