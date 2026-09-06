import { STUDIO_NAME } from "./brand";
import { NOTES } from "./notes";
import { WORK } from "@/work";

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
    ],
    links: [{ rel: "canonical", href: url }],
  };
}

export const SITE_PAGES: { path: string; priority: string; changefreq: string }[] =
  [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/services", priority: "0.9", changefreq: "monthly" },
    { path: "/services/websites", priority: "0.8", changefreq: "monthly" },
    { path: "/services/seo", priority: "0.9", changefreq: "monthly" },
    { path: "/services/care", priority: "0.8", changefreq: "monthly" },
    { path: "/work", priority: "0.8", changefreq: "weekly" },
    { path: "/approach", priority: "0.7", changefreq: "monthly" },
    { path: "/pricing", priority: "0.9", changefreq: "monthly" },
    { path: "/studio", priority: "0.6", changefreq: "monthly" },
    { path: "/notes", priority: "0.7", changefreq: "weekly" },
    { path: "/reviews", priority: "0.8", changefreq: "weekly" },
    { path: "/contact", priority: "0.9", changefreq: "monthly" },
    { path: "/privacy", priority: "0.3", changefreq: "yearly" },
    { path: "/terms", priority: "0.3", changefreq: "yearly" },
    ...WORK.map((item) => ({
      path: `/work/${item.slug}`,
      priority: "0.7",
      changefreq: "monthly",
    })),
    ...NOTES.map((item) => ({
      path: `/notes/${item.slug}`,
      priority: "0.6",
      changefreq: "monthly",
    })),
  ];

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
        "Any website. Any city. Website design, local search, and monthly care.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Montreal",
        addressRegion: "QC",
        addressCountry: "CA",
      },
      areaServed: "Worldwide",
      knowsLanguage: ["en", "fr"],
      priceRange: "$$",
      currenciesAccepted: "CAD",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Website design, search, and care",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Basic website",
              url: `${SITE_ORIGIN}/services/websites`,
            },
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
            itemOffered: {
              "@type": "Service",
              name: "Advanced website",
              url: `${SITE_ORIGIN}/services/websites`,
            },
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
              name: "Local search",
              url: `${SITE_ORIGIN}/services/seo`,
            },
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "1200",
              priceCurrency: "CAD",
              minPrice: "1200",
            },
            url: `${SITE_ORIGIN}/pricing`,
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Care",
              url: `${SITE_ORIGIN}/services/care`,
            },
            priceSpecification: {
              "@type": "UnitPriceSpecification",
              price: "175",
              priceCurrency: "CAD",
              unitText: "MONTH",
            },
            url: `${SITE_ORIGIN}/services/care`,
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
    {
      "@type": "Question",
      name: "Do you do SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Google Business, titles, schema, and a sitemap. Search is a line of work, not a buzzword on the homepage.",
      },
    },
    {
      "@type": "Question",
      name: "What is care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Hosting, SSL, backups, uptime watch, and small copy edits. $175 a month. Stop any month.",
      },
    },
  ],
});
