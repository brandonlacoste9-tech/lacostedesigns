import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail, HeroMail } from "@/components/cta";
import { HeroOrbit } from "@/components/hero-orbit";
import { Reveal } from "@/components/reveal";
import { StructuredData } from "@/components/StructuredData";
import { STUDIO_NAME } from "@/lib/brand";
import { HOME_FAQ_JSON, pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";
import { FEATURED, REST } from "@/work";

export const Route = createFileRoute("/")({
  component: Index,
  head: () =>
    pageHead({
      title: `${STUDIO_NAME} · Website design, Montreal and West Island`,
      description:
        "Website design for businesses in Montreal and the West Island. We rebuild yours, or we build the one you do not have yet. English first. French when you need it.",
      path: "/",
    }),
});

function Index() {
  const { t, lang } = useLang();
  const recast = FEATURED[0];
  const goals = [
    { title: t.goal1Title, body: t.goal1Body, img: FEATURED[0]?.image, slug: FEATURED[0]?.slug },
    { title: t.goal2Title, body: t.goal2Body, img: FEATURED[1]?.image, slug: FEATURED[1]?.slug },
    { title: t.goal3Title, body: t.goal3Body, img: FEATURED[2]?.image, slug: FEATURED[2]?.slug },
  ];
  const services = [
    { n: "01", title: t.svc1Title, body: t.svc1Body, href: "/pricing" },
    { n: "02", title: t.svc2Title, body: t.svc2Body, href: "/#work" },
    { n: "03", title: t.svc3Title, body: t.svc3Body, href: "/#area" },
    { n: "04", title: t.svc4Title, body: t.svc4Body, href: "/pricing#monthly" },
  ];

  return (
    <main className="ld-page">
      <StructuredData json={HOME_FAQ_JSON} />
      <SiteNav current="home" />

      <section className="ld-hero">
        <div className="ld-hero__copy">
          <p className="ld-hero__kicker">{t.heroKicker}</p>
          <h1>
            <span>{t.heroTitle}</span>
            <span>{t.heroTitleRest}</span>
          </h1>
          <p className="ld-hero__body">{t.heroBody}</p>
          <p className="ld-hero__note">{t.heroNote}</p>
          <HeroMail />
        </div>
        <HeroOrbit />
      </section>

      <div className="ld-marquee" aria-hidden="true">
        <div className="ld-marquee__track">
          <span>{t.marquee}</span>
          <span>{t.marquee}</span>
        </div>
      </div>

      <section className="ld-goals" id="area">
        <Reveal>
          <h2>{t.goalTitle}</h2>
        </Reveal>
        <ul>
          {goals.map((goal, i) => (
            <li key={goal.title}>
              <Reveal delay={i * 90}>
                <a href={goal.slug ? `/work/${goal.slug}` : "/contact"}>
                  {goal.img ? (
                    <img src={goal.img} alt="" />
                  ) : null}
                  <h3>{goal.title}</h3>
                  <p>{goal.body}</p>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {recast?.image ? (
        <section className="ld-recast" id="recast">
          <Reveal>
            <div className="ld-recast__copy">
              <p className="ld-close__kicker">{t.recastKicker}</p>
              <h2>{t.recastTitle}</h2>
              <p>{t.recastBody}</p>
              <a className="ld-text-link" href={`/work/${recast.slug}`}>
                {t.recastLink}
              </a>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <a className="ld-recast__shot" href={`/work/${recast.slug}`}>
              <img
                src={recast.image}
                alt={`${recast.name} website, ${recast.city}`}
              />
            </a>
          </Reveal>
        </section>
      ) : null}

      <section className="ld-svc" id="services">
        <Reveal>
          <h2>{t.svcTitle}</h2>
          <p className="ld-svc__lead">{t.svcLead}</p>
        </Reveal>
        <ol>
          {services.map((item, i) => (
            <li key={item.n}>
              <Reveal delay={i * 70}>
                <a href={item.href}>
                  <span>{item.n}</span>
                  <strong>{item.title}</strong>
                  <p>{item.body}</p>
                </a>
              </Reveal>
            </li>
          ))}
        </ol>
        <Reveal>
          <a className="ld-text-link" href="/pricing">
            {t.svcCta}
          </a>
        </Reveal>
      </section>

      <section className="ld-work" id="work">
        <Reveal>
          <h2>{t.workTitle}</h2>
        </Reveal>
        <ul className="ld-work__featured">
          {FEATURED.map((item, i) => (
            <li key={item.slug}>
              <Reveal delay={i * 80}>
                <a href={`/work/${item.slug}`}>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={`${item.name} website, ${item.city}`}
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
              </Reveal>
            </li>
          ))}
        </ul>
        <h3 className="ld-work__more-title">{t.workMore}</h3>
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
      </section>

      <section className="ld-approach" id="approach">
        <Reveal>
          <h2>{t.approachTitle}</h2>
        </Reveal>
        <div className="ld-offer">
          <Reveal>
            <div className="ld-offer__col">
              <h3>{t.offerRebuildTitle}</h3>
              <p>{t.offerRebuildBody}</p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="ld-offer__col">
              <h3>{t.offerNewTitle}</h3>
              <p>{t.offerNewBody}</p>
            </div>
          </Reveal>
        </div>
        <ol className="ld-method">
          <li>
            <strong>
              <em>01</em> {t.step1Title}
            </strong>
            <span>{t.step1Body}</span>
          </li>
          <li>
            <strong>
              <em>02</em> {t.step2Title}
            </strong>
            <span>{t.step2Body}</span>
          </li>
          <li>
            <strong>
              <em>03</em> {t.step3Title}
            </strong>
            <span>{t.step3Body}</span>
          </li>
        </ol>
      </section>

      <section className="ld-method" id="faq">
        <Reveal>
          <h2>{t.faqTitle}</h2>
        </Reveal>
        <ol>
          <li>
            <strong>{t.faq1Q}</strong>
            <span>{t.faq1A}</span>
          </li>
          <li>
            <strong>{t.faq2Q}</strong>
            <span>{t.faq2A}</span>
          </li>
          <li>
            <strong>{t.faq3Q}</strong>
            <span>{t.faq3A}</span>
          </li>
          <li>
            <strong>{t.faq4Q}</strong>
            <span>{t.faq4A}</span>
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
