import { parseLandingContent } from "@higgsfield/app-landing";

export const landingContent = parseLandingContent({
  hero: {
    eyebrow: "Website design",
    title: "Winning clients or losing them",
    description:
      "Lacoste Designs rebuilds your website, or builds the one you do not have yet.",
    primaryCta: { label: "Email Brandon", href: "mailto:brandonlacoste9@gmail.com" },
    secondaryCta: { label: "See the film", href: "/#fracture" },
  },
  preview: {
    kind: "media",
    title: "The rebuild",
    media: {
      kind: "image",
      src: "/assets/landing/film.png",
      alt: "Glass website slab in a dark studio",
    },
    openHref: "/",
    openLabel: "Open site",
  },
  steps: {
    title: "How it runs",
    description: "Facts first. Then a preview. Then it is yours.",
    items: [
      {
        title: "Facts",
        description: "Only what is printed. No invented emails or walk-ins.",
        preview: {
          kind: "instruction",
          icon: "layers",
          title: "Read the shop",
          description: "Hours, menu, booking door",
        },
      },
      {
        title: "Rebuild",
        description: "A fast preview. Your booking tool stays yours.",
        preview: {
          kind: "action",
          label: "Email Brandon",
        },
      },
      {
        title: "Yours",
        description: "Want it on your domain, or want something changed, say so.",
        preview: {
          kind: "result",
          media: {
            kind: "image",
            src: "/assets/landing/studio.png",
            alt: "Finished studio still of the rebuilt site",
          },
        },
      },
    ],
  },
  features: {
    title: "What you get",
    description: "A website that holds on a phone and still books the chair.",
    items: [
      {
        icon: "frame",
        title: "The real shop",
        description: "Hours, prices, staff, and the booking door you already use.",
      },
      {
        icon: "image",
        title: "A film, not a template",
        description: "Scroll plays the rebuild. Dark, quiet, expensive.",
      },
      {
        icon: "check",
        title: "Yours when you want it",
        description: "Preview first. Domain later. Changes on request.",
      },
    ],
  },
  showcase: {
    title: "The work",
    description: "A website as a physical object, broken and recast.",
    items: [
      {
        label: "Fracture",
        media: { kind: "image", src: "/assets/landing/film.png", alt: "Cracked glass website slab" },
      },
      {
        label: "Recast",
        media: { kind: "image", src: "/assets/landing/studio.png", alt: "Sleek rebuilt site in studio light" },
      },
      {
        label: "Hold",
        media: { kind: "image", src: "/assets/landing/film.png", alt: "Still hold on the finished slab" },
      },
    ],
  },
  finalCta: {
    title: "Email Brandon",
    description: "Clean. Fast. Yours.",
    action: { label: "Email Brandon", href: "mailto:brandonlacoste9@gmail.com" },
  },
});
