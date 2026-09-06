import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/services/websites")({
  component: WebsitesPage,
  head: () =>
    pageHead({
      title: `Website design · ${STUDIO_NAME}`,
      description:
        "Rebuild your website, or build the one you do not have yet. Hours, prices, staff, and the booking door you already use.",
      path: "/services/websites",
    }),
});

function WebsitesPage() {
  const { t } = useLang();
  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="services" />
      <section className="ld-contact">
        <p className="ld-close__kicker">{t.svcWebTitle}</p>
        <h1>{t.webPageTitle}</h1>
        <p>{t.webPageBody}</p>
      </section>
      <section className="ld-method">
        <ol>
          <li>
            <strong>{t.web1T}</strong>
            <span>{t.web1B}</span>
          </li>
          <li>
            <strong>{t.web2T}</strong>
            <span>{t.web2B}</span>
          </li>
          <li>
            <strong>{t.web3T}</strong>
            <span>{t.web3B}</span>
          </li>
          <li>
            <strong>{t.web4T}</strong>
            <span>{t.web4B}</span>
          </li>
        </ol>
        <CloseMail />
      </section>
      <SiteFoot />
    </main>
  );
}
