import { LABEL, MAIL, NavMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";

const LINKS = [
  { href: "/#for", label: "For" },
  { href: "/#work", label: "Work" },
  { href: "/#offer", label: "Offer" },
  { href: "/#method", label: "Method" },
  { href: "/pricing", label: "Pricing" },
] as const;

export function SiteNav({ current }: { current?: "home" | "pricing" }) {
  return (
    <header className="ld-nav">
      <a className="ld-wordmark" href="/">
        <img alt="" src="/assets/logo.png" width={36} height={36} />
        <span>
          {STUDIO_NAME}
          <em>Website design</em>
        </span>
      </a>
      <nav>
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={link.href === "/pricing" ? "ld-nav__price" : undefined}
            aria-current={
              current === "pricing" && link.href === "/pricing"
                ? "page"
                : undefined
            }
          >
            {link.label}
          </a>
        ))}
        <NavMail />
      </nav>
    </header>
  );
}

export function SiteFoot() {
  return (
    <footer className="ld-foot">
      <span>
        {STUDIO_NAME}. Independent website studio.
      </span>
      <span className="ld-foot__links">
        <a href="/pricing">Pricing</a>
        <a href={MAIL}>{LABEL}</a>
      </span>
    </footer>
  );
}
