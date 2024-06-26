import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppThemeProvider from "@/providers/AppThemeProvider";
const inter = Inter({ subsets: ["latin"] });
import "swiper/css/grid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import AppQueryProvider from "@/providers/QueryProvider";
import AuthProvider from "@/providers/AuthProvider";

import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Layout/PrimaryLayout/components/Header";
import JsonLd from "@/features/JsonLd";
const APP_NAME = "Latido";
const APP_DEFAULT_TITLE = "Latido";
const APP_TITLE_TEMPLATE = "Latido";
const APP_DESCRIPTION = "The best leather company in Nepal";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: `%s - ${APP_TITLE_TEMPLATE}`,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
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
      <JsonLd />
      <body
        id="body"
        className={inter.className}
        style={{
          height: "100dvh",
          overflow: "hidden",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <div
          id="rootContainer"
          style={{
            overflow: "auto",
            position: "relative",
            scrollSnapType: "y mandatory",
            scrollSnapStop: "always",
            scrollBehavior: "smooth",
            height: "100dvh",
            scrollPaddingTop: "4.6rem",
          }}
          className="productList"
        >
          <NextTopLoader color="red" showSpinner={false} />
          <AuthProvider>
            <AppQueryProvider>
              <AppThemeProvider>
                <Header />
                {children}
              </AppThemeProvider>
            </AppQueryProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
