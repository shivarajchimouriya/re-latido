import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppThemeProvider from "@/providers/AppThemeProvider";
import LenisProvider from "@/providers/LenisProvider";
import PullToRefreshProvider from "@/providers/PullTorefreshProvider";
import DrawerProvider from "@/providers/DrawerProvider";
const inter = Inter({ subsets: ["latin"] });
import 'swiper/css/grid';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import AppQueryProvider from "@/providers/QueryProvider";
import AuthProvider from "@/providers/AuthProvider";

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
        <AppQueryProvider>
          <DrawerProvider>
            <LenisProvider>
              <AppThemeProvider>
        <AuthProvider>
                {children}
        </AuthProvider>
              </AppThemeProvider>
            </LenisProvider>
          </DrawerProvider>
        </AppQueryProvider>
      </body>
    </html>
  );
}
