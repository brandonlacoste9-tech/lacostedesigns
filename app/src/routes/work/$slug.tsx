import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { useLang } from "@/i18n";
import { workBySlug } from "@/work";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const item = workBySlug(params.slug);
    if (!item) {
      throw notFound();
    }
    return item;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.name ?? "Work"} · ${STUDIO_NAME}` },
      {
        name: "description",
        content: loaderData?.body ?? loaderData?.note ?? "",
      },
      {
        property: "og:title",
        content: `${loaderData?.name ?? "Work"} · ${STUDIO_NAME}`,
      },
    ],
  }),
  component: WorkCase,
});

function WorkCase() {
  const item = Route.useLoaderData();
  const { t, lang } = useLang();
  const city = lang === "fr" ? item.cityFr : item.city;
  const note = lang === "fr" ? item.noteFr : item.note;
  const body = lang === "fr" ? item.bodyFr ?? item.noteFr : item.body ?? item.note;

  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="work" />
      <article className="ld-case">
        <p>
          <a className="ld-text-link" href="/#work">
            {t.workBack}
          </a>
        </p>
        <p className="ld-work__city">{city}</p>
        <h1>{item.name}</h1>
        <p className="ld-case__body">{body}</p>
        <p className="ld-case__book">
          {t.caseBooking}: {item.booking}
        </p>
        {item.image ? (
          <img className="ld-case__shot" src={item.image} alt="" />
        ) : null}
        <p className="ld-work__aside">{note}. {t.workAside}</p>
        <div className="ld-case__actions">
          <CloseMail />
          <a className="ld-text-link" href={item.preview} rel="noreferrer" target="_blank">
            {t.workOpen}
          </a>
        </div>
      </article>
      <SiteFoot />
    </main>
  );
}
