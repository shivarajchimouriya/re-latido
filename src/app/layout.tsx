import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppThemeProvider from "@/providers/AppThemeProvider";
import LenisProvider from "@/providers/LenisProvider";
import PullToRefreshProvider from "@/providers/PullTorefreshProvider";
import DrawerProvider from "@/providers/DrawerProvider";
const inter = Inter({ subsets: ["latin"] });
import "swiper/css/grid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import AppQueryProvider from "@/providers/QueryProvider";
import AuthProvider from "@/providers/AuthProvider";

import NextTopLoader from "nextjs-toploader";
import Script from "next/script";
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

const breadcrumbJson = {
  "@context": "http://schema.org/",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.latido.com.np",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About",
      item: "https://www.latido.com.np/about",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Contact",
      item: "https://www.latido.com.np/contact",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Policy",
      item: "https://www.latido.com.np/policy",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
      <body className={inter.className}>
        <NextTopLoader color="red" showSpinner={false} />
        <AuthProvider>
          <AppQueryProvider>
            <AppThemeProvider>{children}</AppThemeProvider>
          </AppQueryProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
