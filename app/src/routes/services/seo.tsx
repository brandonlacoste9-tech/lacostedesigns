import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/services/seo")({
  component: SeoPage,
  head: () =>
    pageHead({
      title: `Search · ${STUDIO_NAME}`,
      description:
        "Google Business, titles, schema, and a sitemap. Search from $1,200 CAD.",
      path: "/services/seo",
    }),
});

function SeoPage() {
  const { t } = useLang();
  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="services" />
      <section className="ld-contact">
        <p className="ld-close__kicker">{t.svcSeoTitle}</p>
        <h1>{t.seoPageTitle}</h1>
        <p>{t.seoPageBody}</p>
        <p className="ld-price-card__amount">
          <span className="ld-price-card__from">{t.basicFrom}</span>
          $1,200
          <span>{t.basicCad}</span>
        </p>
      </section>
      <section className="ld-method">
        <ol>
          <li>
            <strong>{t.seo1T}</strong>
            <span>{t.seo1B}</span>
          </li>
          <li>
            <strong>{t.seo2T}</strong>
            <span>{t.seo2B}</span>
          </li>
          <li>
            <strong>{t.seo3T}</strong>
            <span>{t.seo3B}</span>
          </li>
          <li>
            <strong>{t.seo4T}</strong>
            <span>{t.seo4B}</span>
          </li>
          <li>
            <strong>{t.seo5T}</strong>
            <span>{t.seo5B}</span>
          </li>
        </ol>
        <CloseMail />
      </section>
      <SiteFoot />
    </main>
  );
}
