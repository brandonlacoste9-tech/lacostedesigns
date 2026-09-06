import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";
import { WORK, kindKey } from "@/work";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () =>
    pageHead({
      title: `Reviews · ${STUDIO_NAME}`,
      description:
        "The work is the review. Named businesses in Montreal, the West Island, and farther. The booking door they already use.",
      path: "/reviews",
    }),
});

function ReviewsPage() {
  const { t, lang } = useLang();
  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="reviews" />
      <section className="ld-reviews">
        <header>
          <p className="ld-close__kicker">{t.reviewsKicker}</p>
          <h1>{t.reviewsTitle}</h1>
          <p>{t.reviewsBody}</p>
        </header>
        <ul className="ld-reviews-list">
          {WORK.map((item) => (
            <li key={item.slug}>
              <a href={`/work/${item.slug}`}>
                <span className="ld-work__tag">{t[kindKey(item.kind)]}</span>
                <strong>{item.name}</strong>
                <span className="ld-work__city">
                  {lang === "fr" ? item.cityFr : item.city}
                </span>
                <span className="ld-work__note">
                  {lang === "fr" ? item.noteFr : item.note}
                </span>
                <span className="ld-text-link">{t.reviewsOpen}</span>
              </a>
            </li>
          ))}
        </ul>
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
