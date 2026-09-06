import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { STUDIO_NAME } from "@/lib/brand";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () =>
    pageHead({
      title: `Terms · ${STUDIO_NAME}`,
      description: "Plain terms for a website project with Lacoste Designs.",
      path: "/terms",
    }),
});

function TermsPage() {
  const { t } = useLang();
  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="terms" />
      <section className="ld-legal">
        <p className="ld-close__kicker">{t.footTerms}</p>
        <h1>{t.termsTitle}</h1>
        <p>{t.termsIntro}</p>
        <ul>
          <li>{t.terms1}</li>
          <li>{t.terms2}</li>
          <li>{t.terms3}</li>
          <li>{t.terms4}</li>
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
