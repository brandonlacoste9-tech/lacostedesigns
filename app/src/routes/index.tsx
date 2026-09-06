import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail, HeroMail } from "@/components/cta";
import { StructuredData } from "@/components/StructuredData";
import { STUDIO_NAME } from "@/lib/brand";
import { HOME_FAQ_JSON, pageHead } from "@/lib/seo";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { useLang } from "@/i18n";
import {
  scrollScrubScenes as baseScenes,
  scrollScrubTheme,
} from "@/scroll-scrub-scenes";
import { FEATURED, RECAST, WORK, WORK_CITIES } from "@/work";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => {
    const base = pageHead({
      title: `${STUDIO_NAME} · Website design, Montreal and West Island`,
      description:
        "A Montreal studio. Website design, local search, and monthly care. Work on the island, and farther when the job is there.",
      path: "/",
    });
    return {
      ...base,
      links: [
        ...base.links,
        {
          rel: "preload",
          as: "image",
          href: "/assets/world/scene-01-poster.png",
        },
        {
          rel: "preload",
          as: "video",
          href: "/assets/world/scene-01.mp4",
          type: "video/mp4",
        },
      ],
    };
  },
});

function Index() {
  const { t, lang } = useLang();
  const scenes = [
    {
      ...baseScenes[0]!,
      kicker: t.heroKicker,
      title: t.heroTitle,
      body: t.heroBody,
      actions: <HeroMail />,
    },
  ];

  return (
    <main className="ld-page">
      <StructuredData json={HOME_FAQ_JSON} />
      <SiteNav current="home" />

      <ScrollScrub scenes={scenes} theme={scrollScrubTheme} />

      {RECAST.image ? (
        <section className="ld-recast" id="recast">
          <div className="ld-recast__copy">
            <p className="ld-close__kicker">{t.recastKicker}</p>
            <h2>{t.recastTitle}</h2>
            <p>{t.recastBody}</p>
            <a className="ld-text-link" href={`/work/${RECAST.slug}`}>
              {t.recastLink}
            </a>
          </div>
          <a className="ld-recast__shot" href={`/work/${RECAST.slug}`}>
            <img
              src={RECAST.image}
              alt={`${RECAST.name} website, ${RECAST.city}`}
            />
          </a>
        </section>
      ) : null}

      <section className="ld-for" id="area">
        <h2>{t.forTitle}</h2>
        <p>{t.forBody}</p>
      </section>

      <section className="ld-work" id="work">
        <h2>{t.workTitle}</h2>
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
        <p className="ld-work__aside">
          <a className="ld-text-link" href="/work">
            {t.workBack}
          </a>
        </p>
      </section>

      <section className="ld-services" id="services">
        <header>
          <p className="ld-close__kicker">{t.svcKicker}</p>
          <h2>{t.svcTitle}</h2>
          <p>{t.svcBody}</p>
        </header>
        <div className="ld-svc-grid">
          <article className="ld-svc">
            <h3>{t.svcWebTitle}</h3>
            <p>{t.svcWebBody}</p>
            <a className="ld-text-link" href="/services/websites">
              {t.svcLink}
            </a>
          </article>
          <article className="ld-svc">
            <h3>{t.svcSeoTitle}</h3>
            <p>{t.svcSeoBody}</p>
            <a className="ld-text-link" href="/services/seo">
              {t.svcLink}
            </a>
          </article>
          <article className="ld-svc">
            <h3>{t.svcCareTitle}</h3>
            <p>{t.svcCareBody}</p>
            <a className="ld-text-link" href="/services/care">
              {t.svcLink}
            </a>
          </article>
        </div>
      </section>

      <section className="ld-results" id="proof-numbers">
        <header>
          <p className="ld-close__kicker">{t.resKicker}</p>
          <h2>{t.resTitle}</h2>
          <p>{t.resBody}</p>
        </header>
        <ul className="ld-results__nums">
          <li>
            <strong>{WORK.length}</strong>
            <span>{t.resSites}</span>
          </li>
          <li>
            <strong>{WORK_CITIES.length}</strong>
            <span>{t.resCities}</span>
          </li>
          <li>
            <strong>EN / FR</strong>
            <span>{t.resLang}</span>
          </li>
        </ul>
        <p>
          <a className="ld-text-link" href="/reviews">
            {t.resLink}
          </a>
        </p>
      </section>

      <section className="ld-close" id="close">
        <p className="ld-close__kicker">{t.closeKicker}</p>
        <h2>{t.closeTitle}</h2>
        <p>{t.closeBody}</p>
        <CloseMail />
      </section>

      <SiteFoot />
    </main>
  );
}
