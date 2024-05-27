import type { Metadata, Viewport } from "next";
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


const APP_NAME = "Latido";
const APP_DEFAULT_TITLE = "Latido";
const APP_TITLE_TEMPLATE = "Latido";
const APP_DESCRIPTION = "The best leather company in Nepal";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <AppQueryProvider>
          <DrawerProvider>
              <AppThemeProvider>
                {children}
              </AppThemeProvider>
          </DrawerProvider>
        </AppQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
