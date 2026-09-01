import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "en" | "fr";

export const COPY = {
  en: {
    navWork: "Work",
    navApproach: "Approach",
    navPricing: "Pricing",
    navContact: "Contact",
    cta: "Start a project",
    tagline: "Website design",
    heroKicker: "Website design",
    heroTitle: "Winning clients or losing them",
    heroBody:
      "We rebuild your website, or we build the one you do not have yet.",
    recastKicker: "After the film",
    recastTitle: "This is what the rebuild looks like",
    recastBody:
      "B Barbier, downtown Montréal. Real hours, real prices, Setmore still takes the bookings.",
    recastLink: "See the case",
    forTitle: "Websites for shops and kitchens that already book",
    forBody:
      "Barbers, salons, tattoo shops, restaurants. Booksy, Setmore, Square, OpenTable, TB Dine, Resy. We rebuild the website. You keep how people book.",
    workTitle: "Selected work",
    workAside: "Previews. Not live on their own domains unless they asked.",
    workPreview: "Preview",
    workMore: "More rebuilds",
    workOpen: "Open the preview",
    workBack: "All work",
    approachTitle: "How a new site gets made",
    offerRebuildTitle: "We rebuild your website",
    offerRebuildBody:
      "Hours, prices, staff, and the booking door you already use. English first. French when the shop needs it.",
    offerNewTitle: "Or we design one from zero",
    offerNewBody:
      "No website yet. We still start from the door, the menu, and how you take bookings. Then it lives on a phone.",
    step1Title: "Your shop, as it is",
    step1Body:
      "Hours, prices, phone, and how you already take bookings. We use what you actually have.",
    step2Title: "A preview",
    step2Body:
      "You see the new website on our domain first. Your booking tool stays the same.",
    step3Title: "Then it is yours",
    step3Body:
      "Put it on your domain when you are ready. Want something changed, say so.",
    closeKicker: "Website design, Montreal",
    closeTitle: "A new site. Or a better one.",
    closeBody: "Tell us about the shop or the kitchen.",
    footCity: "Montreal",
    footYear: "2026",
    priceKicker: "Pricing",
    priceTitle: "Clear numbers. No games.",
    priceIntro:
      "In 2026 most Canadian small-business sites land between $1,500 and $10,000. A builder plan is $25 to $60 a month and you do the work. A freelancer is often $1,500 to $5,000. A mid-size studio is $5,000 to $15,000. We price for one shop or kitchen that already books.",
    basicKicker: "Most shops",
    basicName: "Basic",
    basicFrom: "from",
    basicCad: "CAD",
    basicBlurb:
      "One location. A rebuild, or a first site. Hours, prices, staff, and the booking door you already use.",
    basic1: "Home, hours, prices, team, and contact",
    basic2:
      "Your Booksy, Setmore, Square, OpenTable, or other booking tool stays",
    basic3: "English first. French when the shop needs it",
    basic4: "A preview on our domain. Then it goes on yours",
    basic5: "Built to hold on a phone",
    advancedKicker: "Bigger builds",
    advancedName: "Advanced",
    advancedBlurb:
      "More than one location, another language, a film hero, or a heavier menu. Still your booking. Still your facts.",
    advanced1: "Everything in Basic",
    advanced2: "Extra pages, a second location, or a fuller menu",
    advanced3: "Another language when the shop already prints it",
    advanced4: "A custom film or photography-led first screen",
    advanced5: "Copy and photo direction, not just the layout",
    monthKicker: "Monthly",
    monthTitle: "Care after launch",
    monthBody:
      "The site is yours. This is hosting, watch, and small edits. Most Canadian care plans sit between $50 and $400 a month. Ours is one number.",
    careKicker: "Month to month",
    careName: "Care",
    carePeriod: "per month, CAD",
    care1: "Hosting, SSL, backups, and uptime watch",
    care2: "Hours, prices, and small copy edits",
    care3: "Start with the first month when the site goes live",
    care4: "Stop any month after that",
    financeKicker: "Financing",
    financeTitle: "Pay in parts",
    financeBody:
      "We are not a bank. We split the invoice so a shop can start without writing the whole cheque on day one. Care is billed on its own, each month.",
    finance1Title: "Half and half",
    finance1Body:
      "50% to start. 50% when it goes live. On a $2,900 Basic that is $1,450 then $1,450. On a $7,900 Advanced that is $3,950 then $3,950.",
    finance2Title: "Three parts",
    finance2Body:
      "A third to start, a third at the preview, a third when it goes live. On a $2,900 Basic that is $967, $967, and $966. On a $7,900 Advanced that is $2,634, $2,633, and $2,633.",
    finance3Title: "Longer than that",
    finance3Body:
      "Ask. Some shops use a lender on their side. We do not run that from this page. The quote stays the same either way.",
    notesTitle: "What these numbers do not cover",
    notes1:
      "Your Booksy, Square, OpenTable, or other booking bill. That stays with them.",
    notes2: "A domain you buy yourself. We can point it when you are ready.",
    notes3:
      "A full photo shoot. Use what you have, or we plan one on Advanced.",
    notesTax: "Prices in CAD. Taxes extra.",
    contactKicker: "Contact",
    contactTitle: "Tell us about the shop or the kitchen",
    contactBody: "We will say which number fits before any work starts.",
    fieldShop: "Shop or kitchen name",
    fieldCity: "City",
    fieldHasSite: "Do you already have a website?",
    fieldHasYes: "Yes",
    fieldHasNo: "No",
    fieldBooking: "How do people book today?",
    fieldPlan: "Which fits",
    fieldPlanBasic: "Basic",
    fieldPlanAdvanced: "Advanced",
    fieldPlanUnsure: "Not sure yet",
    fieldReach: "Email or phone",
    fieldMessage: "Anything else",
    fieldSubmit: "Start a project",
    fieldSending: "Sending",
    fieldOk: "Received. We will write back.",
    fieldErr: "That did not send. Try again, or use the same form in a moment.",
    caseBooking: "Booking stays",
    notFound: "Page not found",
    home: "Home",
  },
  fr: {
    navWork: "Travail",
    navApproach: "Approche",
    navPricing: "Tarifs",
    navContact: "Contact",
    cta: "Démarrer un projet",
    tagline: "Conception de sites",
    heroKicker: "Conception de sites",
    heroTitle: "Gagner des clients, ou les perdre",
    heroBody:
      "Nous refaisons votre site, ou nous construisons celui que vous n'avez pas encore.",
    recastKicker: "Après le film",
    recastTitle: "Voici à quoi ressemble la refonte",
    recastBody:
      "B Barbier, centre-ville de Montréal. Vraies heures, vrais prix, Setmore prend encore les rendez-vous.",
    recastLink: "Voir le cas",
    forTitle: "Des sites pour les salons et les cuisines qui prennent déjà des rendez-vous",
    forBody:
      "Barbiers, salons, studios de tatouage, restaurants. Booksy, Setmore, Square, OpenTable, TB Dine, Resy. Nous refaisons le site. Vous gardez la façon de réserver.",
    workTitle: "Travail choisi",
    workAside:
      "Aperçus. Pas en ligne sur leurs propres domaines, sauf s'ils l'ont demandé.",
    workPreview: "Aperçu",
    workMore: "Autres refontes",
    workOpen: "Ouvrir l'aperçu",
    workBack: "Tout le travail",
    approachTitle: "Comment un nouveau site se fait",
    offerRebuildTitle: "Nous refaisons votre site",
    offerRebuildBody:
      "Heures, prix, équipe, et la porte de réservation que vous utilisez déjà. Anglais d'abord. Français quand le salon en a besoin.",
    offerNewTitle: "Ou nous en concevons un de zéro",
    offerNewBody:
      "Pas encore de site. On part quand même de la porte, du menu, et de la façon dont vous prenez les réservations. Puis ça tient sur un téléphone.",
    step1Title: "Votre commerce, tel quel",
    step1Body:
      "Heures, prix, téléphone, et comment vous prenez déjà les rendez-vous. On utilise ce que vous avez vraiment.",
    step2Title: "Un aperçu",
    step2Body:
      "Vous voyez le nouveau site sur notre domaine d'abord. Votre outil de réservation reste le même.",
    step3Title: "Ensuite c'est à vous",
    step3Body:
      "Mettez-le sur votre domaine quand vous êtes prêt. Un changement? Dites-le.",
    closeKicker: "Conception de sites, Montréal",
    closeTitle: "Un nouveau site. Ou un meilleur.",
    closeBody: "Parlez-nous du salon ou de la cuisine.",
    footCity: "Montréal",
    footYear: "2026",
    priceKicker: "Tarifs",
    priceTitle: "Des chiffres clairs. Pas de jeu.",
    priceIntro:
      "En 2026, la plupart des sites de PME canadiennes se situent entre 1 500 $ et 10 000 $. Un outil comme Wix coûte 25 $ à 60 $ par mois, et vous faites le travail. Un pigiste demande souvent 1 500 $ à 5 000 $. Un studio moyen, 5 000 $ à 15 000 $. Nous tarifons pour un salon ou une cuisine qui prend déjà des rendez-vous.",
    basicKicker: "La plupart des commerces",
    basicName: "De base",
    basicFrom: "à partir de",
    basicCad: "CAD",
    basicBlurb:
      "Un emplacement. Une refonte, ou un premier site. Heures, prix, équipe, et la porte de réservation que vous utilisez déjà.",
    basic1: "Accueil, heures, prix, équipe, et contact",
    basic2:
      "Votre Booksy, Setmore, Square, OpenTable, ou autre outil de réservation reste",
    basic3: "Anglais d'abord. Français quand le salon en a besoin",
    basic4: "Un aperçu sur notre domaine. Ensuite sur le vôtre",
    basic5: "Conçu pour tenir sur un téléphone",
    advancedKicker: "Projets plus larges",
    advancedName: "Avancé",
    advancedBlurb:
      "Plus d'un emplacement, une autre langue, un film en tête, ou un menu plus lourd. Toujours vos réservations. Toujours vos faits.",
    advanced1: "Tout ce qui est dans De base",
    advanced2: "Pages en plus, un second emplacement, ou un menu plus complet",
    advanced3: "Une autre langue quand le salon l'imprime déjà",
    advanced4: "Un film sur mesure, ou une première page menée par la photo",
    advanced5: "Direction des textes et des photos, pas seulement la mise en page",
    monthKicker: "Mensuel",
    monthTitle: "Entretien après le lancement",
    monthBody:
      "Le site est à vous. Ici: hébergement, surveillance, et petits changements. La plupart des forfaits canadiens se situent entre 50 $ et 400 $ par mois. Le nôtre est un seul chiffre.",
    careKicker: "Mois par mois",
    careName: "Entretien",
    carePeriod: "par mois, CAD",
    care1: "Hébergement, SSL, copies, et surveillance",
    care2: "Heures, prix, et petits textes",
    care3: "Le premier mois commence quand le site est en ligne",
    care4: "Arrêt possible n'importe quel mois après",
    financeKicker: "Paiement",
    financeTitle: "Payer en parties",
    financeBody:
      "Nous ne sommes pas une banque. Nous divisons la facture pour qu'un commerce puisse commencer sans tout payer le premier jour. L'entretien se facture à part, chaque mois.",
    finance1Title: "Moitié-moitié",
    finance1Body:
      "50 % pour commencer. 50 % quand c'est en ligne. Sur un De base à 2 900 $, c'est 1 450 $ puis 1 450 $. Sur un Avancé à 7 900 $, c'est 3 950 $ puis 3 950 $.",
    finance2Title: "Trois parties",
    finance2Body:
      "Un tiers pour commencer, un tiers à l'aperçu, un tiers en ligne. Sur un De base à 2 900 $: 967 $, 967 $, et 966 $. Sur un Avancé à 7 900 $: 2 634 $, 2 633 $, et 2 633 $.",
    finance3Title: "Plus long que ça",
    finance3Body:
      "Demandez. Certains commerces utilisent un prêteur de leur côté. Nous ne le faisons pas depuis cette page. Le prix reste le même.",
    notesTitle: "Ce que ces chiffres ne couvrent pas",
    notes1:
      "Votre facture Booksy, Square, OpenTable, ou autre. Elle reste chez eux.",
    notes2:
      "Un nom de domaine que vous achetez. Nous pouvons le pointer quand vous êtes prêt.",
    notes3:
      "Une séance photo complète. Utilisez ce que vous avez, ou on la planifie en Avancé.",
    notesTax: "Prix en dollars canadiens. Taxes en sus.",
    contactKicker: "Contact",
    contactTitle: "Parlez-nous du salon ou de la cuisine",
    contactBody: "Nous dirons quel chiffre convient avant tout travail.",
    fieldShop: "Nom du salon ou de la cuisine",
    fieldCity: "Ville",
    fieldHasSite: "Avez-vous déjà un site?",
    fieldHasYes: "Oui",
    fieldHasNo: "Non",
    fieldBooking: "Comment réserve-t-on aujourd'hui?",
    fieldPlan: "Ce qui convient",
    fieldPlanBasic: "De base",
    fieldPlanAdvanced: "Avancé",
    fieldPlanUnsure: "Pas encore sûr",
    fieldReach: "Courriel ou téléphone",
    fieldMessage: "Autre chose",
    fieldSubmit: "Démarrer un projet",
    fieldSending: "Envoi",
    fieldOk: "Reçu. Nous allons répondre.",
    fieldErr: "Ça n'a pas été envoyé. Réessayez dans un moment.",
    caseBooking: "La réservation reste",
    notFound: "Page introuvable",
    home: "Accueil",
  },
} as const;

export type Copy = (typeof COPY)["en"];

const LangContext = createContext<{
  lang: Lang;
  t: Copy;
  setLang: (lang: Lang) => void;
} | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("ld-lang");
    if (saved === "fr" || saved === "en") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("ld-lang", lang);
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      t: COPY[lang] as Copy,
      setLang: (next: Lang) => setLangState(next),
    }),
    [lang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLang");
  }
  return ctx;
}
