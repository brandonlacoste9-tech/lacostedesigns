import { STUDIO_NAME } from "./brand";

export const SITE_ORIGIN = "https://lacostedesigns.com";
export const STUDIO_EMAIL = "lacostedesigns@protonmail.com";

export function absUrl(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  if (path === "/") {
    return SITE_ORIGIN;
  }
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageHead(opts: {
  title: string;
  description: string;
  path: string;
  image?: string | null;
  noindex?: boolean;
}) {
  const url = absUrl(opts.path);
  const image = opts.image ? absUrl(opts.image) : undefined;

  return {
    meta: [
      { title: opts.title },
      { name: "description", content: opts.description },
      {
        name: "robots",
        content: opts.noindex
          ? "noindex, nofollow"
          : "index, follow, max-image-preview:large",
      },
      { property: "og:title", content: opts.title },
      { property: "og:description", content: opts.description },
      { property: "og:url", content: url },
      { property: "og:type", content: "website" },
      { name: "twitter:title", content: opts.title },
      { name: "twitter:description", content: opts.description },
      ...(image
        ? [
            { property: "og:image", content: image },
            { name: "twitter:image", content: image },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const BUSINESS_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE_ORIGIN}/#studio`,
      name: STUDIO_NAME,
      url: SITE_ORIGIN,
      email: STUDIO_EMAIL,
      image: `${SITE_ORIGIN}/assets/logo.svg`,
      logo: `${SITE_ORIGIN}/assets/logo.svg`,
      description:
        "Website design for businesses in Montreal and the West Island. We rebuild yours, or we build the one you do not have yet.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montreal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      areaServed: [
        { "@type": "City", name: "Montreal" },
        { "@type": "Place", name: "West Island" },
        { "@type": "City", name: "Pointe-Claire" },
        { "@type": "City", name: "Dollard-Des-Ormeaux" },
        { "@type": "City", name: "L'Île-Perrot" },
      ],
      knowsLanguage: ["en", "fr"],
      priceRange: "$$",
      currenciesAccepted: "CAD",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website design",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Basic website" },
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "2900",
              priceCurrency: "CAD",
              minPrice: "2900",
            },
            url: `${SITE_ORIGIN}/pricing`,
          },
          {
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: "Advanced website" },
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "7900",
              priceCurrency: "CAD",
              minPrice: "7900",
            },
            url: `${SITE_ORIGIN}/pricing`,
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Care",
            },
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "175",
              priceCurrency: "CAD",
              unitText: "MONTH",
            },
            url: `${SITE_ORIGIN}/pricing`,
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_ORIGIN}/#website`,
      url: SITE_ORIGIN,
      name: STUDIO_NAME,
      inLanguage: ["en-CA", "fr-CA"],
      publisher: { "@id": `${SITE_ORIGIN}/#studio` },
    },
  ],
});

export const HOME_FAQ_JSON = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do you work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Montreal and the West Island. Pointe-Claire, Dollard-Des-Ormeaux, Ile-Perrot, and the rest of the island. If the business is here, we can rebuild the site.",
      },
    },
    {
      "@type": "Question",
      name: "Do you only do shops and restaurants?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Those are in the work because we rebuilt them. We do websites for any business.",
      },
    },
    {
      "@type": "Question",
      name: "We already take bookings. Do we have to switch?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Booksy, Setmore, Square, OpenTable, or whatever you print stays. We rebuild the website.",
      },
    },
    {
      "@type": "Question",
      name: "English or French?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "English first. French when the business already uses it.",
      },
    },
  ],
});
