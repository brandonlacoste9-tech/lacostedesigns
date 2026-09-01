import { createFileRoute } from "@tanstack/react-router";

import { SITE_ORIGIN } from "@/lib/seo";
import { WORK } from "@/work";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().split("T")[0];
        const pages: { path: string; priority: string; changefreq: string }[] = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/pricing", priority: "0.9", changefreq: "monthly" },
          { path: "/contact", priority: "0.9", changefreq: "monthly" },
          ...WORK.map((item) => ({
            path: `/work/${item.slug}`,
            priority: "0.7",
            changefreq: "monthly",
          })),
        ];
        const xml = [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
          ...pages.flatMap((page) => [
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
