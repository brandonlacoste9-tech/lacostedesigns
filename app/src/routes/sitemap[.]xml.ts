import { createFileRoute } from "@tanstack/react-router";

import { SITE_ORIGIN, SITE_PAGES } from "@/lib/seo";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...SITE_PAGES.flatMap((page) => [
            "  <url>",
            `    <loc>${SITE_ORIGIN}${page.path === "/" ? "" : page.path}</loc>`,
            `    <lastmod>${today}</lastmod>`,
            `    <changefreq>${page.changefreq}</changefreq>`,
            `    <priority>${page.priority}</priority>`,
            "  </url>",
          ]),
          "</urlset>",
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
