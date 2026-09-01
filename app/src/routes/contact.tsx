import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { InquiryForm } from "@/components/inquiry-form";
import { STUDIO_NAME } from "@/lib/brand";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/contact")({
  component: Contact,
  head: () => ({
    meta: [
      { title: `Contact · ${STUDIO_NAME}` },
      {
        name: "description",
        content: "Tell us about the business.",
      },
      { property: "og:title", content: `Contact · ${STUDIO_NAME}` },
    ],
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
