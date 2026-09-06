import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";
import { FEATURED, REST } from "@/work";

export const Route = createFileRoute("/work/")({
  component: WorkIndex,
  head: () =>
    pageHead({
      title: `Work · ${STUDIO_NAME}`,
      description:
        "Website rebuilds for shops, restaurants, and home builders. The facts a client needs, and the door they already use.",
      path: "/work",
    }),
});

function WorkIndex() {
  const { t, lang } = useLang();

  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="work" />
      <section className="ld-work" id="work">
        <p className="ld-close__kicker">{t.tagline}</p>
        <h1>{t.workPageTitle}</h1>
        <p className="ld-work__intro">{t.workPageBody}</p>
        <ul className="ld-work__featured">
          {FEATURED.map((item) => (
            <li key={item.slug}>
              <a href={`/work/${item.slug}`}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt={`${item.name} website, ${item.city}`}
                  />
                ) : null}
                <strong>{item.name}</strong>
                <span className="ld-work__city">
                  {lang === "fr" ? item.cityFr : item.city}
                </span>
                <span className="ld-work__note">
                  {lang === "fr" ? item.noteFr : item.note}
                </span>
                <span className="ld-work__tag">{t.workPreview}</span>
              </a>
            </li>
          ))}
        </ul>
        <h2 className="ld-work__more-title">{t.workMore}</h2>
        <ul className="ld-work__rest">
          {REST.map((item) => (
            <li key={item.slug}>
              <a href={`/work/${item.slug}`}>
                {item.image ? (
                  <img
                    className="ld-work__thumb"
                    src={item.image}
                    alt={`${item.name} website, ${item.city}`}
                    loading="lazy"
                  />
                ) : null}
                <span>
                  <strong>{item.name}</strong>
                  <span className="ld-work__city">
                    {lang === "fr" ? item.cityFr : item.city}
                  </span>
                  <span className="ld-work__note">
                    {lang === "fr" ? item.noteFr : item.note}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <p className="ld-work__aside">{t.workAside}</p>
        <CloseMail />
      </section>
      <SiteFoot />
    </main>
  );
}
