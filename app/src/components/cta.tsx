import { useLang } from "@/i18n";

export const CONTACT = "/contact";

function Arrow() {
  return (
    <i className="ld-pill__go" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="18" height="18">
        <path
          d="M5 12h12M13 6l6 6-6 6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </i>
  );
}

export function NavMail() {
  const { t } = useLang();
  return (
    <a className="nav-mail ld-pill" href={CONTACT}>
      <span>{t.cta}</span>
      <Arrow />
    </a>
  );
}

export function HeroMail() {
  const { t } = useLang();
  return (
    <a className="hero-mail ld-pill" href={CONTACT}>
      <span>{t.cta}</span>
      <Arrow />
    </a>
  );
}

export function CloseMail() {
  const { t } = useLang();
  return (
    <a className="close-mail ld-pill" href={CONTACT}>
      <span>{t.cta}</span>
      <Arrow />
    </a>
  );
}
