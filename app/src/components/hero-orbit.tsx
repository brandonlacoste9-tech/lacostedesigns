import { useEffect, useRef } from "react";

import { useLang } from "@/i18n";

const CARDS = [
  { id: "hours", x: "8%", y: "6%", rot: -12, z: 3, delay: "0s" },
  { id: "book", x: "58%", y: "2%", rot: 8, z: 5, delay: "0.4s" },
  { id: "search", x: "42%", y: "28%", rot: -4, z: 6, delay: "0.15s" },
  { id: "lang", x: "72%", y: "38%", rot: 14, z: 4, delay: "0.7s" },
  { id: "menu", x: "4%", y: "48%", rot: 7, z: 2, delay: "0.25s" },
  { id: "city", x: "54%", y: "58%", rot: -9, z: 5, delay: "0.55s" },
  { id: "phone", x: "28%", y: "72%", rot: 5, z: 3, delay: "0.9s" },
] as const;

export function HeroOrbit() {
  const { t } = useLang();
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (event: PointerEvent) => {
      const box = el.getBoundingClientRect();
      const px = (event.clientX - box.left) / box.width - 0.5;
      const py = (event.clientY - box.top) / box.height - 0.5;
      el.style.setProperty("--tilt-x", `${py * -8}deg`);
      el.style.setProperty("--tilt-y", `${px * 10}deg`);
    };
    const onLeave = () => {
      el.style.setProperty("--tilt-x", "0deg");
      el.style.setProperty("--tilt-y", "0deg");
    };
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const copy: Record<(typeof CARDS)[number]["id"], { k: string; v: string }> = {
    hours: { k: t.orbitHoursK, v: t.orbitHoursV },
    book: { k: t.orbitBookK, v: t.orbitBookV },
    search: { k: t.orbitSearchK, v: t.orbitSearchV },
    lang: { k: t.orbitLangK, v: t.orbitLangV },
    menu: { k: t.orbitMenuK, v: t.orbitMenuV },
    city: { k: t.orbitCityK, v: t.orbitCityV },
    phone: { k: t.orbitPhoneK, v: t.orbitPhoneV },
  };

  return (
    <div className="ld-orbit" ref={stage} aria-hidden="true">
      <span className="ld-orbit__glow" />
      {CARDS.map((card) => (
        <article
          key={card.id}
          className={`ld-float ld-float--${card.id}`}
          style={{
            left: card.x,
            top: card.y,
            zIndex: card.z,
            animationDelay: card.delay,
            transform: `rotate(${card.rot}deg)`,
          }}
        >
          <strong>{copy[card.id].k}</strong>
          <span>{copy[card.id].v}</span>
        </article>
      ))}
    </div>
  );
}
