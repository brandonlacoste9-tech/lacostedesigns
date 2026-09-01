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
        <h2>How it runs</h2>
        <ol>
          <li>
            <strong>Facts</strong>
            <span>Only what is printed. No invented emails or walk-ins.</span>
          </li>
          <li>
            <strong>Design</strong>
            <span>A fast website preview on our domain. Your booking tool stays yours.</span>
          </li>
          <li>
            <strong>Yours</strong>
            <span>Want it on your domain, or want something changed, say so.</span>
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
