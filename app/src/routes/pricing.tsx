import { createFileRoute } from "@tanstack/react-router";

import { SiteFoot, SiteNav } from "@/components/chrome";
import { CloseMail } from "@/components/cta";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () => ({
    meta: [
      { title: "Pricing · Lacoste Designs" },
      {
        name: "description",
        content:
          "Website design for shops and kitchens. Basic from $2,900 CAD. Advanced from $7,900. Monthly care from $175. Pay in halves or in three parts.",
      },
      { property: "og:title", content: "Pricing · Lacoste Designs" },
      {
        property: "og:description",
        content:
          "Website design for shops and kitchens. Basic from $2,900 CAD. Advanced from $7,900. Monthly care from $175.",
      },
    ],
  }),
});

const BUILDS = [
  {
    name: "Basic",
    kicker: "Most shops",
    price: "$2,900",
    period: "from, CAD",
    blurb:
      "One location. A rebuild, or a first site. Hours, prices, staff, and the booking door you already use.",
    points: [
      "Home, hours, prices, team, and contact",
      "Your Booksy, Setmore, Square, OpenTable, or other booking tool stays",
      "English first. French when the shop needs it",
      "A preview on our domain. Then it goes on yours",
      "Built to hold on a phone",
    ],
  },
  {
    name: "Advanced",
    kicker: "Bigger builds",
    price: "$7,900",
    period: "from, CAD",
    blurb:
      "More than one location, another language, a film hero, or a heavier menu. Still your booking. Still your facts.",
    points: [
      "Everything in Basic",
      "Extra pages, a second location, or a fuller menu",
      "Another language when the shop already prints it",
      "A custom film or photography-led first screen",
      "Copy and photo direction, not just the layout",
    ],
  },
] as const;

function Pricing() {
  return (
    <main className="ld-page ld-pricing-page">
      <SiteNav current="pricing" />

      <section className="ld-price-hero">
        <p className="ld-close__kicker">Pricing</p>
        <h1>Clear numbers. No games.</h1>
        <p>
          In 2026 most Canadian small-business sites land between $1,500 and
          $10,000. A builder plan is $25 to $60 a month and you do the work. A
          freelancer is often $1,500 to $5,000. A mid-size studio is $5,000 to
          $15,000. We price for one shop or kitchen that already books.
        </p>
      </section>

      <section className="ld-price-grid" aria-label="Website builds">
        {BUILDS.map((plan) => (
          <article className="ld-price-card" key={plan.name}>
            <p className="ld-price-card__kicker">{plan.kicker}</p>
            <h2>{plan.name}</h2>
            <p className="ld-price-card__amount">
              {plan.price}
              <span>{plan.period}</span>
            </p>
            <p className="ld-price-card__blurb">{plan.blurb}</p>
            <ul>
              {plan.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <CloseMail />
          </article>
        ))}
      </section>

      <section className="ld-price-month" id="monthly">
        <div className="ld-price-month__copy">
          <p className="ld-close__kicker">Monthly</p>
          <h2>Care after launch</h2>
          <p>
            The site is yours. This is hosting, watch, and small edits. Most
            Canadian care plans sit between $50 and $400 a month. Ours is one
            number.
          </p>
        </div>
        <article className="ld-price-card ld-price-card--month">
          <p className="ld-price-card__kicker">Month to month</p>
          <h2>Care</h2>
          <p className="ld-price-card__amount">
            $175
            <span>/ month, CAD</span>
          </p>
          <ul>
            <li>Hosting, SSL, backups, and uptime watch</li>
            <li>Hours, prices, and small copy edits</li>
            <li>Start with the first month when the site goes live</li>
            <li>Stop any month after that</li>
          </ul>
          <CloseMail />
        </article>
      </section>

      <section className="ld-finance" id="financing">
        <p className="ld-close__kicker">Financing</p>
        <h2>Pay in parts</h2>
        <p>
          We are not a bank. We split the invoice so a shop can start without
          writing the whole cheque on day one. Care is billed on its own, each
          month.
        </p>
        <ol>
          <li>
            <strong>Half and half</strong>
            <span>
              50% to start. 50% when it goes live. On a $2,900 Basic that is
              $1,450 then $1,450. On a $7,900 Advanced that is $3,950 then
              $3,950.
            </span>
          </li>
          <li>
            <strong>Three parts</strong>
            <span>
              A third to start, a third at the preview, a third when it goes
              live. On a $2,900 Basic that is $967, $967, and $966. On a $7,900
              Advanced that is $2,634, $2,633, and $2,633.
            </span>
          </li>
          <li>
            <strong>Longer than that</strong>
            <span>
              Ask. Some shops use a lender on their side. We do not run that
              from this page. The quote stays the same either way.
            </span>
          </li>
        </ol>
      </section>

      <section className="ld-price-notes">
        <h2>What these numbers do not cover</h2>
        <ul>
          <li>
            Your Booksy, Square, OpenTable, or other booking bill. That stays
            with them.
          </li>
          <li>
            A domain you buy yourself. We can point it when you are ready.
          </li>
          <li>
            A full photo shoot. Use what you have, or we plan one on Advanced.
          </li>
        </ul>
        <p>Prices in CAD. Taxes extra.</p>
      </section>

      <section className="ld-close" id="close">
        <p className="ld-close__kicker">Website design, Montreal</p>
        <h2>Tell us about the shop or the kitchen.</h2>
        <p>We will say which number fits before any work starts.</p>
        <CloseMail />
      </section>

      <SiteFoot />
    </main>
  );
}
