const MAIL = "mailto:brandonlacoste9@gmail.com";
const LABEL = "Email Brandon";

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
