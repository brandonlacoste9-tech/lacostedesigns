import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
  head: () =>
    pageHead({
      title: `Website, search, and care · ${STUDIO_NAME}`,
      description:
        "Website design, local SEO, and monthly care for businesses in Montreal and the West Island.",
      path: "/services",
    }),
});

function ServicesPage() {
  const { t } = useLang();
  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="services" />
      <section className="ld-services">
        <header>
          <p className="ld-close__kicker">{t.svcKicker}</p>
          <h1>{t.svcTitle}</h1>
          <p>{t.svcBody}</p>
        </header>
        <div className="ld-svc-grid">
          <article className="ld-svc">
            <h2>{t.svcWebTitle}</h2>
            <p>{t.svcWebBody}</p>
            <a className="ld-text-link" href="/services/websites">
              {t.svcLink}
            </a>
          </article>
          <article className="ld-svc">
            <h2>{t.svcSeoTitle}</h2>
            <p>{t.svcSeoBody}</p>
            <a className="ld-text-link" href="/services/seo">
              {t.svcLink}
            </a>
          </article>
          <article className="ld-svc">
            <h2>{t.svcCareTitle}</h2>
            <p>{t.svcCareBody}</p>
            <a className="ld-text-link" href="/services/care">
              {t.svcLink}
            </a>
          </article>
        </div>
      </section>
      <section className="ld-proof">
        <header>
          <p className="ld-close__kicker">{t.proofKicker}</p>
          <h2>{t.proofTitle}</h2>
          <p>{t.proofBody}</p>
        </header>
        <ol>
          <li>
            <strong>{t.proof1T}</strong>
            <span>{t.proof1B}</span>
          </li>
          <li>
            <strong>{t.proof2T}</strong>
            <span>{t.proof2B}</span>
          </li>
          <li>
            <strong>{t.proof3T}</strong>
            <span>{t.proof3B}</span>
          </li>
          <li>
            <strong>{t.proof4T}</strong>
            <span>{t.proof4B}</span>
          </li>
          <li>
            <strong>{t.proof5T}</strong>
            <span>{t.proof5B}</span>
          </li>
          <li>
            <strong>{t.proof6T}</strong>
            <span>{t.proof6B}</span>
          </li>
          <li>
            <strong>{t.proof7T}</strong>
            <span>{t.proof7B}</span>
          </li>
          <li>
            <strong>{t.proof8T}</strong>
            <span>{t.proof8B}</span>
          </li>
        </ol>
      </section>
      <section className="ld-close">
        <p className="ld-close__kicker">{t.closeKicker}</p>
        <h2>{t.closeTitle}</h2>
        <p>{t.closeBody}</p>
        <CloseMail />
      </section>
      <SiteFoot />
    </main>
  );
}
