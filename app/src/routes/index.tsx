import { createFileRoute } from "@tanstack/react-router";

import { CloseMail, HeroMail, NavMail } from "@/components/cta";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import {
  scrollScrubScenes as baseScenes,
  scrollScrubTheme,
} from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({
  component: Index,
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
      <header className="ld-nav">
        <a className="ld-wordmark" href="/">
          <img alt="" src="/assets/logo.png" width={36} height={36} />
          <span>
            Lacoste Designs
            <em>Website design</em>
          </span>
        </a>
        <nav>
          <a href="#offer">Offer</a>
          <a href="#method">Method</a>
          <a href="#close">Close</a>
          <NavMail />
        </nav>
      </header>

      <ScrollScrub scenes={scenes} theme={scrollScrubTheme} />

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
        <p>brandonlacoste9@gmail.com</p>
        <CloseMail />
      </section>

      <footer className="ld-foot">
        <span>Lacoste Designs. Website design.</span>
        <a href="mailto:brandonlacoste9@gmail.com">brandonlacoste9@gmail.com</a>
      </footer>
    </main>
  );
}
