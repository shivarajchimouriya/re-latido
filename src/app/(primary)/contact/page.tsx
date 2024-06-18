import ContactContainer from "@/features/Auth/ContactContainer";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Contact",
  description: `We always appreciate feedback and new business inquiries. Get in touch with us.`,
  keywords: [
    "latido",
    "contact",
    "contact latido",
    "latido leather",
    "leather",
    "nepal",
    "nepali leather",
  ],
  authors: [
    { name: "latido" },
    { name: "latido nepal" },
    { name: "latido leather" },
  ],
  creator: "latido",
  publisher: "latido",
  other: {
    phone: "+977 9801154484",
    email: "help@latido.com.np",
    location: "Jhamsikhel Road, Lalitpur",
  },
};

const Page = () => {
  return <ContactContainer />;
};

export default Page;
