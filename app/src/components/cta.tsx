export const MAIL = "mailto:brandonlacoste9@gmail.com";
export const LABEL = "Start a project";

export function NavMail() {
  return (
    <a className="nav-mail" href={MAIL}>
      {LABEL}
    </a>
  );
}

export function HeroMail() {
  return (
    <a className="hero-mail" href={MAIL}>
      {LABEL}
    </a>
  );
}

export function CloseMail() {
  return (
    <a className="close-mail" href={MAIL}>
      {LABEL}
    </a>
  );
}
