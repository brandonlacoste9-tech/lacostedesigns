import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";
import { FEATURED, WORK, WORK_KINDS, kindKey, type WorkKind } from "@/work";

export const Route = createFileRoute("/work/")({
  component: WorkIndex,
  head: () =>
    pageHead({
      title: `Work · ${STUDIO_NAME}`,
      description:
        "Website rebuilds for shops, restaurants, home builders, and auto maisons. The facts a client needs, and the door they already use.",
      path: "/work",
    }),
});

function WorkIndex() {
  const { t, lang } = useLang();
  const [kind, setKind] = useState<WorkKind | "all">("all");
  const shown = useMemo(
    () => (kind === "all" ? WORK : WORK.filter((item) => item.kind === kind)),
    [kind],
  );
  const featuredSlugs = new Set(FEATURED.map((item) => item.slug));
  const featured = shown.filter((item) => featuredSlugs.has(item.slug));
  const rest = shown.filter((item) => !featuredSlugs.has(item.slug));

  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="work" />
      <section className="ld-work" id="work">
        <p className="ld-close__kicker">{t.tagline}</p>
        <h1>{t.workPageTitle}</h1>
        <p className="ld-work__intro">{t.workPageBody}</p>

        <section className="ld-industries ld-industries--work" id="industries">
          <header>
            <p className="ld-close__kicker">{t.indKicker}</p>
            <h2>{t.indTitle}</h2>
            <p>{t.indBody}</p>
          </header>
        </section>

        <div className="ld-work-filter" role="tablist" aria-label={t.indTitle}>
          <button
            type="button"
            role="tab"
            aria-selected={kind === "all"}
            onClick={() => setKind("all")}
          >
            {t.workFilterAll}
          </button>
          {WORK_KINDS.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={kind === item}
              onClick={() => setKind(item)}
            >
              {t[kindKey(item)]}
            </button>
          ))}
        </div>

        {featured.length ? (
          <ul className="ld-work__featured">
            {featured.map((item) => (
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
                    {lang === "fr" ? item.cityFr : item.city} ·{" "}
                    {t[kindKey(item.kind)]}
                  </span>
                  <span className="ld-work__note">
                    {lang === "fr" ? item.noteFr : item.note}
                  </span>
                  <span className="ld-work__tag">{t.workPreview}</span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        {kind === "all" ? (
          <h2 className="ld-work__more-title">{t.workMore}</h2>
        ) : null}
        <ul className="ld-work__rest">
          {rest.map((item) => (
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
                    {lang === "fr" ? item.cityFr : item.city} ·{" "}
                    {t[kindKey(item.kind)]}
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
