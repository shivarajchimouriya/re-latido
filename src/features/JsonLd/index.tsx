import React from "react";
import Script from "next/script";

export default function JsonLd() {
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
  return (
    <>
      <Script
        id="breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJson) }}
      />
    </>
  );
}
