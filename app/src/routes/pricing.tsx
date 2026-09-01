import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () =>
    pageHead({
      title: `Website pricing in Montreal · ${STUDIO_NAME}`,
      description:
        "Website design in Montreal and the West Island. Basic from $2,900 CAD. Advanced from $7,900. Monthly care from $175.",
      path: "/pricing",
    }),
});

function Pricing() {
  const { t } = useLang();
  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="pricing" />

      <section className="ld-price-hero">
        <p className="ld-close__kicker">{t.priceKicker}</p>
        <h1>{t.priceTitle}</h1>
        <p>{t.priceIntro}</p>
      </section>

      <section className="ld-price-grid" aria-label={t.priceKicker}>
        <article className="ld-price-card">
          <p className="ld-price-card__kicker">{t.basicKicker}</p>
          <h2>{t.basicName}</h2>
          <p className="ld-price-card__amount">
            <span className="ld-price-card__from">{t.basicFrom}</span>
            $2,900
            <span>{t.basicCad}</span>
          </p>
          <p className="ld-price-card__blurb">{t.basicBlurb}</p>
          <ul>
            <li>{t.basic1}</li>
            <li>{t.basic2}</li>
            <li>{t.basic3}</li>
            <li>{t.basic4}</li>
            <li>{t.basic5}</li>
          </ul>
          <CloseMail />
        </article>
        <article className="ld-price-card">
          <p className="ld-price-card__kicker">{t.advancedKicker}</p>
          <h2>{t.advancedName}</h2>
          <p className="ld-price-card__amount">
            <span className="ld-price-card__from">{t.basicFrom}</span>
            $7,900
            <span>{t.basicCad}</span>
          </p>
          <p className="ld-price-card__blurb">{t.advancedBlurb}</p>
          <ul>
            <li>{t.advanced1}</li>
            <li>{t.advanced2}</li>
            <li>{t.advanced3}</li>
            <li>{t.advanced4}</li>
            <li>{t.advanced5}</li>
          </ul>
          <CloseMail />
        </article>
      </section>

      <section className="ld-price-month" id="monthly">
        <div className="ld-price-month__copy">
          <p className="ld-close__kicker">{t.monthKicker}</p>
          <h2>{t.monthTitle}</h2>
          <p>{t.monthBody}</p>
        </div>
        <article className="ld-price-card ld-price-card--month">
          <p className="ld-price-card__kicker">{t.careKicker}</p>
          <h2>{t.careName}</h2>
          <p className="ld-price-card__amount">
            $175
            <span>{t.carePeriod}</span>
          </p>
          <ul>
            <li>{t.care1}</li>
            <li>{t.care2}</li>
            <li>{t.care3}</li>
            <li>{t.care4}</li>
          </ul>
          <CloseMail />
        </article>
      </section>

      <section className="ld-finance" id="financing">
        <p className="ld-close__kicker">{t.financeKicker}</p>
        <h2>{t.financeTitle}</h2>
        <p>{t.financeBody}</p>
        <ol>
          <li>
            <strong>{t.finance1Title}</strong>
            <span>{t.finance1Body}</span>
          </li>
          <li>
            <strong>{t.finance2Title}</strong>
            <span>{t.finance2Body}</span>
          </li>
          <li>
            <strong>{t.finance3Title}</strong>
            <span>{t.finance3Body}</span>
          </li>
        </ol>
      </section>

      <section className="ld-price-notes">
        <h2>{t.notesTitle}</h2>
        <ul>
          <li>{t.notes1}</li>
          <li>{t.notes2}</li>
          <li>{t.notes3}</li>
        </ul>
        <p>{t.notesTax}</p>
      </section>

      <section className="ld-close" id="close">
        <p className="ld-close__kicker">{t.closeKicker}</p>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactBody}</p>
        <CloseMail />
      </section>

      <SiteFoot />
    </main>
  );
}
