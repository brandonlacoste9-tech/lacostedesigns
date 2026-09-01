import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { InquiryForm } from "@/components/inquiry-form";
import { STUDIO_NAME } from "@/lib/brand";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () =>
    pageHead({
      title: `Contact a Montreal web designer · ${STUDIO_NAME}`,
      description:
        "Start a website project in Montreal or the West Island. Tell us about the business. We write back with which number fits.",
      path: "/contact",
    }),
});

function Contact() {
  const { t } = useLang();
  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="contact" />
      <section className="ld-contact">
        <p className="ld-close__kicker">{t.contactKicker}</p>
        <h1>{t.contactTitle}</h1>
        <p>{t.contactBody}</p>
        <p>
          <a className="ld-text-link" href="mailto:lacostedesigns@protonmail.com">
            lacostedesigns@protonmail.com
          </a>
        </p>
        <InquiryForm />
      </section>
      <SiteFoot />
    </main>
  );
}
