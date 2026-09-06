export type WorkItem = {
  slug: string;
  name: string;
  city: string;
  cityFr: string;
  note: string;
  noteFr: string;
  booking: string;
  preview: string;
  image?: string;
  featured?: boolean;
  body?: string;
  bodyFr?: string;
};

export const WORK: WorkItem[] = [

  {
    slug: "hasler-homes",
    name: "Hasler Homes",
    city: "North Vancouver",
    cityFr: "North Vancouver",
    note: "The consultation form still takes the lot.",
    noteFr: "Le formulaire de consultation prend encore le lot.",
    booking: "Consultation form",
    preview: "https://haslerhomes.grok.me",
    image: "/assets/work/hasler-homes.jpg",
    featured: true,
    body: "North Shore, Vancouver. Lynn Valley, Edgemont, Pemberton Heights. Owners on the job. The consultation form still takes the lot.",
    bodyFr:
      "North Shore, Vancouver. Lynn Valley, Edgemont, Pemberton Heights. Les propriétaires sur le chantier. Le formulaire de consultation prend encore le lot.",
  },
  {
    slug: "une-maison",
    name: "Une Maison",
    city: "Laurentides",
    cityFr: "Laurentides",
    note: "Their contact form still takes the lot.",
    noteFr: "Leur formulaire de contact prend encore le lot.",
    booking: "Contact form",
    preview: "https://unemaison.grok.me",
    image: "/assets/work/une-maison.jpg",
    featured: true,
    body: "Les Constructions Raymond et Fils. From Montréal to the Laurentians. Models, lots, and the contact form they already use. English and French.",
    bodyFr:
      "Les Constructions Raymond et Fils. De Montréal aux Laurentides. Modèles, terrains, et le formulaire de contact qu'ils utilisent déjà. Français et anglais.",
  },
  {
    slug: "velare",
    name: "VELARE Montréal",
    city: "Kirkland",
    cityFr: "Kirkland",
    note: "A private showing still takes the floor.",
    noteFr: "Une visite privée prend encore le plancher.",
    booking: "Private showing",
    preview: "https://velaremontreal.grok.me",
    image: "/assets/work/velare.jpg",
    featured: true,
    body: "Kirkland, on the Trans-Canada. Extreme Italian automobiles, sold and serviced on the West Island. Inventory, the maison, and a private showing. English and French.",
    bodyFr:
      "Kirkland, sur la Transcanadienne. Automobiles italiennes extrêmes, vendues et servies sur l'Ouest-de-l'Île. Inventaire, la maison, et une visite privée. Français et anglais.",
  },
  {
    slug: "ivory-rook",
    name: "Ivory Rook House",
    city: "Miami",
    cityFr: "Miami",
    note: "Direct booking still takes the villa.",
    noteFr: "La réservation directe prend encore la villa.",
    booking: "Book direct",
    preview: "https://ivoryrock.grok.me",
    image: "/assets/work/ivory-rock.jpg",
    featured: true,
    body: "Upper Buena Vista, Miami Design District. A five-bedroom Spanish villa behind the gate. Direct booking still takes the house.",
    bodyFr:
      "Upper Buena Vista, Miami Design District. Une villa espagnole de cinq chambres derrière le portail. La réservation directe prend encore la maison.",
  },
  {
    slug: "b-barbier",
    name: "B Barbier et Coiffure",
    city: "Montréal",
    cityFr: "Montréal",
    note: "Setmore still takes the bookings.",
    noteFr: "Setmore prend encore les rendez-vous.",
    booking: "Setmore",
    preview: "https://b-barbier.netlify.app",
    image: "/assets/work/b-barbier.jpg",
    featured: true,
    body: "Downtown Montréal. Hours, prices, and the three chairs from Setmore. English first, French and Arabic because the shop already prints them.",
    bodyFr:
      "Centre-ville de Montréal. Heures, prix, et les trois chaises depuis Setmore. Anglais d'abord, français et arabe parce que le salon les imprime déjà.",
  },
  {
    slug: "jack-of-fades",
    name: "Jack of fades",
    city: "Montréal",
    cityFr: "Montréal",
    note: "Four shops. Square still takes the bookings.",
    noteFr: "Quatre salons. Square prend encore les rendez-vous.",
    booking: "Square",
    preview: "https://jack-of-fades.netlify.app",
    image: "/assets/work/jack-of-fades.jpg",
    featured: true,
    body: "Verdun, Lasalle, Saint-Zotique, and Dollard-Des-Ormeaux. One site. Square still takes each chair.",
    bodyFr:
      "Verdun, Lasalle, Saint-Zotique, et Dollard-Des-Ormeaux. Un site. Square prend encore chaque chaise.",
  },
  {
    slug: "scarolies",
    name: "Scarolie's Pasta Emporium",
    city: "Pointe-Claire",
    cityFr: "Pointe-Claire",
    note: "TB Dine still takes the tables.",
    noteFr: "TB Dine prend encore les tables.",
    booking: "TB Dine",
    preview: "https://scarolies.netlify.app",
    image: "/assets/work/scarolies.jpg",
    featured: true,
    body: "A pasta kitchen in Pointe-Claire. The menu and the room, then TB Dine for the table.",
    bodyFr:
      "Une cuisine de pâtes à Pointe-Claire. Le menu et la salle, puis TB Dine pour la table.",
  },
  {
    slug: "colibri",
    name: "Colibri Tattoo & Piercing",
    city: "Montréal",
    cityFr: "Montréal",
    note: "Their Downtown and Mont-Royal forms still take the bookings.",
    noteFr:
      "Leurs formulaires Downtown et Mont-Royal prennent encore les rendez-vous.",
    booking: "Their forms",
    preview: "https://colibri-tattoo-montreal.netlify.app",
    image: "/assets/work/colibri.jpg",
    featured: true,
    body: "Two rooms in Montréal. The site holds both. Their own forms still take the bookings.",
    bodyFr:
      "Deux salles à Montréal. Le site les porte toutes les deux. Leurs propres formulaires prennent encore les rendez-vous.",
  },
  {
    slug: "hairchitect",
    name: "Salon Hairchitect",
    city: "Laval",
    cityFr: "Laval",
    note: "Setmore still takes the bookings.",
    noteFr: "Setmore prend encore les rendez-vous.",
    booking: "Setmore",
    preview: "https://salon-hairchitect.netlify.app",
    image: "/assets/work/hairchitect.jpg",
  },
  {
    slug: "one-three",
    name: "One Three Barber Studio",
    city: "Dollard-Des-Ormeaux",
    cityFr: "Dollard-Des-Ormeaux",
    note: "Square still takes the bookings.",
    noteFr: "Square prend encore les rendez-vous.",
    booking: "Square",
    preview: "https://onethree-studio.netlify.app",
    image: "/assets/work/one-three.jpg",
  },
  {
    slug: "calgary-barber",
    name: "Calgary Barber Shop",
    city: "Calgary",
    cityFr: "Calgary",
    note: "Squire still takes the bookings.",
    noteFr: "Squire prend encore les rendez-vous.",
    booking: "Squire",
    preview: "https://calgary-barber-shop.netlify.app",
    image: "/assets/work/calgary-barber.jpg",
  },
  {
    slug: "malo",
    name: "Malo Salon de Barbier",
    city: "Montréal",
    cityFr: "Montréal",
    note: "Booksy still takes the bookings.",
    noteFr: "Booksy prend encore les rendez-vous.",
    booking: "Booksy",
    preview: "https://malo-salon-de-barbier.netlify.app",
    image: "/assets/work/malo.jpg",
  },
  {
    slug: "rose-rebel",
    name: "Rose & Rebel Salon",
    city: "Ottawa",
    cityFr: "Ottawa",
    note: "Their book-online page still takes the bookings.",
    noteFr: "Leur page de réservation prend encore les rendez-vous.",
    booking: "Book online",
    preview: "https://rose-and-rebel.netlify.app",
    image: "/assets/work/rose-rebel.jpg",
  },
  {
    slug: "intermezzo",
    name: "Intermezzo Restaurant and Wine Cellar",
    city: "Vernon",
    cityFr: "Vernon",
    note: "TB Dine still takes the tables.",
    noteFr: "TB Dine prend encore les tables.",
    booking: "TB Dine",
    preview: "https://intermezzo.netlify.app",
    image: "/assets/work/intermezzo.jpg",
  },
  {
    slug: "aryana",
    name: "Restaurant Aryana",
    city: "Île-Perrot",
    cityFr: "Île-Perrot",
    note: "JustBookMe still takes the table requests.",
    noteFr: "JustBookMe prend encore les demandes de table.",
    booking: "JustBookMe",
    preview: "https://aryana.netlify.app",
    image: "/assets/work/aryana.jpg",
  },
  {
    slug: "joes",
    name: "Joe's Italian Kitchen",
    city: "Ottawa",
    cityFr: "Ottawa",
    note: "OpenTable still takes the tables.",
    noteFr: "OpenTable prend encore les tables.",
    booking: "OpenTable",
    preview: "https://joes-italian-kitchen.netlify.app",
    image: "/assets/work/joes.jpg",
  },
  {
    slug: "wellington",
    name: "The Wellington Diner",
    city: "Ottawa",
    cityFr: "Ottawa",
    note: "Tables by phone, as they print it.",
    noteFr: "Tables au téléphone, comme ils l'impriment.",
    booking: "Phone",
    preview: "https://wellington-diner.netlify.app",
    image: "/assets/work/wellington.jpg",
  },
  {
    slug: "lous",
    name: "Lou's Pointe-Claire",
    city: "Pointe-Claire",
    cityFr: "Pointe-Claire",
    note: "Resy still takes the tables.",
    noteFr: "Resy prend encore les tables.",
    booking: "Resy",
    preview: "https://louspointeclaire.netlify.app",
    image: "/assets/work/lous.jpg",
  },
];

export const FEATURED = WORK.filter((item) => item.featured);
export const REST = WORK.filter((item) => !item.featured);

export function workBySlug(slug: string) {
  return WORK.find((item) => item.slug === slug);
}
