import { CONTACT, NavMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { useLang, type Lang } from "@/i18n";

type NavId =
  | "home"
  | "pricing"
  | "contact"
  | "work"
  | "approach"
  | "studio"
  | "privacy"
  | "services"
  | "notes"
  | "terms";

export function SiteNav({ current }: { current?: NavId }) {
  const { t, lang, setLang } = useLang();
  const links = [
    { href: "/work", label: t.navWork, id: "work" as const, keep: true },
    {
      href: "/services",
      label: t.navServices,
      id: "services" as const,
      keep: true,
    },
    { href: "/pricing", label: t.navPricing, id: "pricing" as const, keep: false },
    { href: "/contact", label: t.navContact, id: "contact" as const, keep: true },
  ];

  return (
    <header className="ld-nav">
      <a className="ld-wordmark" href="/">
        <img alt="" src="/assets/logo.svg" width={36} height={36} />
        <span>
          {STUDIO_NAME}
          <em>{t.tagline}</em>
        </span>
      </a>
      <nav>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={link.keep ? "ld-nav__keep" : undefined}
            aria-current={current === link.id ? "page" : undefined}
          >
            {link.label}
          </a>
        ))}
        <LangSwitch lang={lang} setLang={setLang} />
        <NavMail />
      </nav>
    </header>
  );
}

function LangSwitch({
  lang,
  setLang,
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  return (
    <span className="ld-lang">
      <button
        type="button"
        aria-pressed={lang === "en"}
        onClick={() => setLang("en")}
      >
        EN
      </button>
      <span aria-hidden="true">|</span>
      <button
        type="button"
        aria-pressed={lang === "fr"}
        onClick={() => setLang("fr")}
      >
        FR
      </button>
    </span>
  );
}

export function SiteFoot() {
  const { t } = useLang();
  return (
    <footer className="ld-foot">
      <span>
        {STUDIO_NAME}. <a href="/studio">{t.footCity}</a>. {t.footYear}.
      </span>
      <span className="ld-foot__links">
        <a href="/work">{t.navWork}</a>
        <a href="/services">{t.navServices}</a>
        <a href="/approach">{t.navApproach}</a>
        <a href="/pricing">{t.navPricing}</a>
        <a href="/notes">{t.navNotes}</a>
        <a href="/studio">{t.navStudio}</a>
        <a href="/privacy">{t.footPrivacy}</a>
        <a href="/terms">{t.footTerms}</a>
        <a href="/contact">{t.navContact}</a>
        <a href="mailto:lacostedesigns@protonmail.com">
          lacostedesigns@protonmail.com
        </a>
        <a href={CONTACT}>{t.cta}</a>
      </span>
    </footer>
  );
}
