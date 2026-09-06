import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { STUDIO_NAME } from "@/lib/brand";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () =>
    pageHead({
      title: `Privacy · ${STUDIO_NAME}`,
      description: "How Lacoste Designs handles project inquiries and site data.",
      path: "/privacy",
    }),
});

function PrivacyPage() {
  const { t } = useLang();
  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="privacy" />
      <section className="ld-price-notes">
        <p className="ld-close__kicker">{t.footPrivacy}</p>
        <h1>{t.privacyTitle}</h1>
        <p>{t.privacyIntro}</p>
        <ul>
          <li>{t.privacy1}</li>
          <li>{t.privacy2}</li>
          <li>{t.privacy3}</li>
          <li>{t.privacy4}</li>
        </ul>
        <p>
          <a className="ld-text-link" href="mailto:lacostedesigns@protonmail.com">
            lacostedesigns@protonmail.com
          </a>
        </p>
      </section>
      <SiteFoot />
    </main>
  );
}
