export type WorkItem = {
  name: string;
  city: string;
  note: string;
  href: string;
};

/** Previews we rebuilt. Not live on the shops' own domains. */
export const WORK: WorkItem[] = [
  {
    name: "B Barbier et Coiffure",
    city: "Montréal",
    note: "Rebuild. Setmore still takes the bookings.",
    href: "https://b-barbier.netlify.app",
  },
  {
    name: "Jack of fades",
    city: "Montréal",
    note: "Four shops. Square still takes the bookings.",
    href: "https://jack-of-fades.netlify.app",
  },
  {
    name: "Salon Hairchitect",
    city: "Laval",
    note: "Rebuild. Setmore still takes the bookings.",
    href: "https://salon-hairchitect.netlify.app",
  },
  {
    name: "One Three Barber Studio",
    city: "Dollard-Des-Ormeaux",
    note: "Rebuild. Square still takes the bookings.",
    href: "https://onethree-studio.netlify.app",
  },
  {
    name: "Colibri Tattoo & Piercing",
    city: "Montréal",
    note: "Rebuild. Their Downtown and Mont-Royal forms still take the bookings.",
    href: "https://colibri-tattoo-montreal.netlify.app",
  },
  {
    name: "Calgary Barber Shop",
    city: "Calgary",
    note: "Rebuild. Squire still takes the bookings.",
    href: "https://calgary-barber-shop.netlify.app",
  },
  {
    name: "Malo Salon de Barbier",
    city: "Montréal",
    note: "Rebuild. Booksy still takes the bookings.",
    href: "https://malo-salon-de-barbier.netlify.app",
  },
  {
    name: "Rose & Rebel Salon",
    city: "Ottawa",
    note: "Rebuild. Their book-online page still takes the bookings.",
    href: "https://rose-and-rebel.netlify.app",
  },
];
