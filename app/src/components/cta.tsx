import { useLang } from "@/i18n";

export const CONTACT = "/contact";

export function NavMail() {
  const { t } = useLang();
  return (
    <a className="nav-mail" href={CONTACT}>
      {t.cta}
    </a>
  );
}

export function HeroMail() {
  const { t } = useLang();
  return (
    <a className="hero-mail" href={CONTACT}>
      {t.cta}
    </a>
  );
}

export function CloseMail() {
  const { t } = useLang();
  return (
    <a className="close-mail" href={CONTACT}>
      {t.cta}
    </a>
  );
}
