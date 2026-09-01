import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";
import { STUDIO_NAME } from "@/lib/brand";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#2BB3A8",
  background: "#111214",
  ink: "#EDEAE6",
  muted: "#9A9894",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    align: "left",
    body: `${STUDIO_NAME} rebuilds your website, or builds the one you do not have yet.`,
    clip: "/assets/world/scene-01.mp4",
    id: "fracture",
    kicker: "Website design",
    label: "Film",
    linger: 0.16,
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    poster: "/assets/world/scene-01-poster.png",
    scroll: 5.2,
    title: "Winning clients or losing them",
  },
];

