import { createFileRoute } from "@tanstack/react-router";

import { WORK } from "@/work";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin;
        const today = new Date().toISOString().split("T")[0];
        const pages = ["/", "/pricing", "/contact", ...WORK.map((item) => `/work/${item.slug}`)];
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...pages.flatMap((path, i) => [
            "  <url>",
            `    <loc>${origin}${path}</loc>`,
            `    <lastmod>${today}</lastmod>`,
            "    <changefreq>weekly</changefreq>",
            `    <priority>${i === 0 ? "1.0" : "0.8"}</priority>`,
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
