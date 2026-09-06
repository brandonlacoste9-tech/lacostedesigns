import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/approach")({
  component: ApproachPage,
  head: () =>
    pageHead({
      title: `Approach · ${STUDIO_NAME}`,
      description:
        "How a website gets made. We start from the business you already run. Then a preview. Then it is yours.",
      path: "/approach",
    }),
});

function ApproachPage() {
  const { t } = useLang();
  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="approach" />
      <section className="ld-approach">
        <p className="ld-close__kicker">{t.navApproach}</p>
        <h1>{t.approachPageTitle}</h1>
        <p className="ld-work__intro">{t.approachPageBody}</p>
        <div className="ld-offer">
          <div className="ld-offer__col">
            <h2>{t.offerRebuildTitle}</h2>
            <p>{t.offerRebuildBody}</p>
          </div>
          <div className="ld-offer__col">
            <h2>{t.offerNewTitle}</h2>
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
          <li>
            <strong>{t.step4Title}</strong>
            <span>{t.step4Body}</span>
          </li>
        </ol>
        <CloseMail />
      </section>
      <SiteFoot />
    </main>
  );
}
