import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail, HeroMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import {
  scrollScrubScenes as baseScenes,
  scrollScrubTheme,
} from "@/scroll-scrub-scenes";
import { WORK } from "@/work";

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

const scenes = [
  {
    ...baseScenes[0]!,
    actions: <HeroMail />,
  },
];

function Index() {
  return (
    <main className="ld-page">
      <SiteNav current="home" />

      <ScrollScrub scenes={scenes} theme={scrollScrubTheme} />

      <section className="ld-for" id="for">
        <h2>Websites for shops and kitchens that already book</h2>
        <p>
          Barbers, salons, tattoo shops, restaurants. Booksy, Setmore, Square,
          OpenTable, TB Dine, Resy. We rebuild the website. You keep how people
          book.
        </p>
      </section>

      <section className="ld-work" id="work">
        <h2>Recent rebuilds</h2>
        <ul>
          {WORK.map((item) => (
            <li key={item.href}>
              <a href={item.href} rel="noreferrer" target="_blank">
                <strong>{item.name}</strong>
                <span className="ld-work__city">{item.city}</span>
                <span className="ld-work__note">{item.note}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="ld-work__aside">
          Previews on our domain. Not live on their own sites unless they asked
          for that.
        </p>
      </section>

      <section className="ld-offer" id="offer">
        <div className="ld-offer__col">
          <h2>We rebuild your website</h2>
          <p>
            Hours, prices, staff, and the booking door you already use. English
            first. French when the shop needs it.
          </p>
        </div>
        <div className="ld-offer__col">
          <h2>Or we design one from zero</h2>
          <p>
            No website yet. We still start from the door, the menu, and how you
            take bookings. Then it lives on a phone.
          </p>
        </div>
      </section>

      <section className="ld-method" id="method">
        <h2>How a new site gets made</h2>
        <ol>
          <li>
            <strong>Your shop, as it is</strong>
            <span>Hours, prices, phone, and how you already take bookings. We use what you actually have.</span>
          </li>
          <li>
            <strong>A preview</strong>
            <span>You see the new website on our domain first. Your booking tool stays the same.</span>
          </li>
          <li>
            <strong>Then it is yours</strong>
            <span>Put it on your domain when you are ready. Want something changed, say so.</span>
          </li>
        </ol>
      </section>

      <section className="ld-close" id="close">
        <p className="ld-close__kicker">Website design, Montreal</p>
        <h2>A new site. Or a better one.</h2>
        <p>Tell us about the shop or the kitchen.</p>
        <CloseMail />
      </section>

      <SiteFoot />
    </main>
  );
}
