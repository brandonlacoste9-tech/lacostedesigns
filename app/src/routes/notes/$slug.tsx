import { createFileRoute, notFound } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { noteBySlug } from "@/lib/notes";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/notes/$slug")({
  loader: ({ params }) => {
    const item = noteBySlug(params.slug);
    if (!item) {
      throw notFound();
    }
    return item;
  },
  head: ({ loaderData }) =>
    pageHead({
      title: loaderData
        ? `${loaderData.title} · ${STUDIO_NAME}`
        : `Notes · ${STUDIO_NAME}`,
      description: loaderData?.dek ?? "A note from Lacoste Designs.",
      path: loaderData ? `/notes/${loaderData.slug}` : "/notes",
    }),
  component: NotePage,
});

function NotePage() {
  const item = Route.useLoaderData();
  const { t, lang } = useLang();
  const title = lang === "fr" ? item.titleFr : item.title;
  const dek = lang === "fr" ? item.dekFr : item.dek;
  const body = lang === "fr" ? item.bodyFr : item.body;

  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="notes" />
      <article className="ld-article">
        <p>
          <a className="ld-text-link" href="/notes">
            {t.articleBack}
          </a>
        </p>
        <p className="ld-close__kicker">{t.notesKicker}</p>
        <h1>{title}</h1>
        <p>{dek}</p>
        {body.map((para) => (
          <p key={para}>{para}</p>
        ))}
        <CloseMail />
      </article>
      <SiteFoot />
    </main>
  );
}
