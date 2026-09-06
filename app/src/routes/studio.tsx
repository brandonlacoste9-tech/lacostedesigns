import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/studio")({
  component: StudioPage,
  head: () =>
    pageHead({
      title: `Studio · ${STUDIO_NAME}`,
      description:
        "Independent website studio. Any website, any city. We rebuild yours, or we build the one you do not have yet.",
      path: "/studio",
    }),
});

function StudioPage() {
  const { t } = useLang();
  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="studio" />
      <section className="ld-contact">
        <p className="ld-close__kicker">{t.navStudio}</p>
        <h1>{t.studioTitle}</h1>
        <p>{t.studioBody}</p>
        <p>{t.studioWhere}</p>
      </section>
      <section className="ld-offer">
        <div className="ld-offer__col">
          <h2>{t.studioDoTitle}</h2>
          <p>{t.studioDoBody}</p>
        </div>
        <div className="ld-offer__col">
          <h2>{t.studioDontTitle}</h2>
          <p>{t.studioDontBody}</p>
        </div>
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
