import { CONTACT, NavMail } from "@/components/cta";
import { STUDIO_NAME } from "@/lib/brand";
import { useLang, type Lang } from "@/i18n";

export function SiteNav({
  current,
}: {
  current?: "home" | "pricing" | "contact" | "work";
}) {
  const { t, lang, setLang } = useLang();
  const links = [
    { href: "/#work", label: t.navWork, id: "work" as const },
    { href: "/#services", label: t.navServices, id: "home" as const },
    { href: "/pricing", label: t.navPricing, id: "pricing" as const },
    { href: "/contact", label: t.navContact, id: "contact" as const },
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
            className={
              link.id === "pricing" || link.id === "contact"
                ? "ld-nav__keep"
                : undefined
            }
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
        {STUDIO_NAME}. <a href="/#area">{t.footCity}</a>. {t.footYear}.
      </span>
      <span className="ld-foot__links">
        <a href="/pricing">{t.navPricing}</a>
        <a href="/contact">{t.navContact}</a>
        <a href="mailto:lacostedesigns@protonmail.com">
          lacostedesigns@protonmail.com
        </a>
        <a href={CONTACT}>{t.cta}</a>
      </span>
    </footer>
  );
}
