import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail, HeroMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { useLang } from "@/i18n";
import {
  scrollScrubScenes as baseScenes,
  scrollScrubTheme,
} from "@/scroll-scrub-scenes";
import { FEATURED, REST } from "@/work";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: STUDIO_NAME },
      { property: "og:title", content: STUDIO_NAME },
      {
        name: "description",
        content:
          "Website design. We rebuild yours, or we build the one you do not have yet.",
      },
    ],
  }),
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
  const recast = FEATURED[0];

  return (
    <main className="ld-page">
      <SiteNav current="home" />

      <ScrollScrub scenes={scenes} theme={scrollScrubTheme} />

      {recast?.image ? (
        <section className="ld-recast" id="recast">
          <div className="ld-recast__copy">
            <p className="ld-close__kicker">{t.recastKicker}</p>
            <h2>{t.recastTitle}</h2>
            <p>{t.recastBody}</p>
            <a className="ld-text-link" href={`/work/${recast.slug}`}>
              {t.recastLink}
            </a>
          </div>
          <a className="ld-recast__shot" href={`/work/${recast.slug}`}>
            <img src={recast.image} alt={recast.name} />
          </a>
        </section>
      ) : null}

      <section className="ld-work" id="work">
        <h2>{t.workTitle}</h2>
        <ul className="ld-work__featured">
          {FEATURED.map((item) => (
            <li key={item.slug}>
              <a href={`/work/${item.slug}`}>
                {item.image ? (
                  <img
                    src={item.image}
                    alt=""
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
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
        <h3 className="ld-work__more-title">{t.workMore}</h3>
        <ul className="ld-work__rest">
          {REST.map((item) => (
            <li key={item.slug}>
              <a href={`/work/${item.slug}`}>
                {item.image ? (
                  <img className="ld-work__thumb" src={item.image} alt="" />
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
      </section>

      <section className="ld-approach" id="approach">
        <h2>{t.approachTitle}</h2>
        <div className="ld-offer">
          <div className="ld-offer__col">
            <h3>{t.offerRebuildTitle}</h3>
            <p>{t.offerRebuildBody}</p>
          </div>
          <div className="ld-offer__col">
            <h3>{t.offerNewTitle}</h3>
            <p>{t.offerNewBody}</p>
          </div>
        </div>
        <ol className="ld-method">
          <li>
            <strong>{t.step1Title}</strong>
            <span>{t.step1Body}</span>
          </li>
          <li>
            <strong>{t.step2Title}</strong>
            <span>{t.step2Body}</span>
          </li>
          <li>
            <strong>{t.step3Title}</strong>
            <span>{t.step3Body}</span>
          </li>
        </ol>
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
