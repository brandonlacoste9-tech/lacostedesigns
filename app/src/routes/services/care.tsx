import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/services/care")({
  component: CarePage,
  head: () =>
    pageHead({
      title: `Website care · ${STUDIO_NAME}`,
      description:
        "Hosting, SSL, backups, uptime watch, and small copy edits. $175 a month. Stop any month.",
      path: "/services/care",
    }),
});

function CarePage() {
  const { t } = useLang();
  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="services" />
      <section className="ld-contact">
        <p className="ld-close__kicker">{t.svcCareTitle}</p>
        <h1>{t.carePageTitle}</h1>
        <p>{t.carePageBody}</p>
        <p className="ld-price-card__amount">
          $175
          <span>{t.carePeriod}</span>
        </p>
      </section>
      <section className="ld-method">
        <ol>
          <li>
            <strong>{t.care1T}</strong>
            <span>{t.care1B}</span>
          </li>
          <li>
            <strong>{t.care2T}</strong>
            <span>{t.care2B}</span>
          </li>
          <li>
            <strong>{t.care3T}</strong>
            <span>{t.care3B}</span>
          </li>
          <li>
            <strong>{t.care4T}</strong>
            <span>{t.care4B}</span>
          </li>
          <li>
            <strong>{t.care5T}</strong>
            <span>{t.care5B}</span>
          </li>
        </ol>
        <CloseMail />
      </section>
      <SiteFoot />
    </main>
  );
}
