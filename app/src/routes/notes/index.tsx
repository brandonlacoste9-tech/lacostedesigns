import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { STUDIO_NAME } from "@/lib/brand";
import { NOTES } from "@/lib/notes";
import { pageHead } from "@/lib/seo";
import { useLang } from "@/i18n";

export const Route = createFileRoute("/notes/")({
  component: NotesIndex,
  head: () =>
    pageHead({
      title: `Notes · ${STUDIO_NAME}`,
      description:
        "Short notes on search, care, and the facts a site needs on the page.",
      path: "/notes",
    }),
});

function NotesIndex() {
  const { t, lang } = useLang();
  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="notes" />
      <section className="ld-notes">
        <header>
          <p className="ld-close__kicker">{t.notesKicker}</p>
          <h1>{t.notesPageTitle}</h1>
          <p>{t.notesPageBody}</p>
        </header>
        <ul className="ld-notes-list">
          {NOTES.map((item) => (
            <li key={item.slug}>
              <a href={`/notes/${item.slug}`}>
                <strong>{lang === "fr" ? item.titleFr : item.title}</strong>
                <span className="ld-work__note">
                  {lang === "fr" ? item.dekFr : item.dek}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <SiteFoot />
    </main>
  );
}
