export type Note = {
  slug: string;
  title: string;
  titleFr: string;
  dek: string;
  dekFr: string;
  body: string[];
  bodyFr: string[];
};

export const NOTES: Note[] = [
  {
    slug: "google-business",
    title: "Google Business is the front door",
    titleFr: "Google Business est la porte d'entrée",
    dek: "Maps, hours, and the website field. If those are wrong, the new site does half the work.",
    dekFr:
      "Cartes, heures, et le champ du site. S'ils sont faux, le nouveau site ne fait que la moitié du travail.",
    body: [
      "A person in Pointe-Claire does not start on Google.com and type your brand. They type barber near me, or pasta Pointe-Claire, and they look at the map.",
      "The profile has to match the site. Same name. Same street. Same phone. Same hours. If the site says one thing and Maps says another, Google trusts neither.",
      "We set the categories, the website field, and the hours from the facts you already print. Photos you already have. No fake reviews. No posting calendar you will not keep.",
      "Then the new site points back. That loop is most of local search for a shop on this island.",
    ],
    bodyFr: [
      "Une personne à Pointe-Claire ne commence pas sur Google.com en tapant votre marque. Elle tape barbier près de moi, ou pâtes Pointe-Claire, et elle regarde la carte.",
      "Le profil doit correspondre au site. Même nom. Même rue. Même téléphone. Mêmes heures. Si le site dit une chose et Maps une autre, Google ne croit ni l'un ni l'autre.",
      "Nous réglons les catégories, le champ du site, et les heures à partir des faits que vous imprimez déjà. Les photos que vous avez. Pas d'avis faux. Pas de calendrier de publications que vous ne tiendrez pas.",
      "Ensuite le nouveau site pointe en retour. Cette boucle, c'est l'essentiel de la recherche locale pour un commerce sur cette île.",
    ],
  },
  {
    slug: "hours-prices-phone",
    title: "Hours, prices, and the phone",
    titleFr: "Heures, prix, et le téléphone",
    dek: "The three facts a shop site has to get right on the first screen.",
    dekFr: "Les trois faits qu'un site de commerce doit avoir juste sur le premier écran.",
    body: [
      "People open a shop site to see if you are open, what it costs, and how to reach you. If those three are buried, they leave and book the place that printed them.",
      "We put hours, prices, and the phone where a thumb can hit them. Then the booking door you already use. Setmore, Square, OpenTable, or the phone, as you print it.",
      "Search likes this too. Google can quote hours and the city when the page actually says them. A cinematic hero with no facts is a poster, not a website.",
    ],
    bodyFr: [
      "Les gens ouvrent le site d'un commerce pour voir si vous êtes ouvert, ce que ça coûte, et comment vous joindre. Si ces trois faits sont enterrés, ils partent réserver ailleurs.",
      "Nous mettons les heures, les prix, et le téléphone là où un pouce peut les frapper. Puis la porte de réservation que vous utilisez déjà. Setmore, Square, OpenTable, ou le téléphone, comme vous l'imprimez.",
      "La recherche aime ça aussi. Google peut citer les heures et la ville quand la page les dit vraiment. Un film sans faits, c'est une affiche, pas un site.",
    ],
  },
  {
    slug: "care-after-launch",
    title: "What care actually is",
    titleFr: "Ce qu'est vraiment l'entretien",
    dek: "Hosting, the lock in the bar, a backup, and the hours when they change.",
    dekFr: "L'hébergement, le cadenas dans la barre, une copie, et les heures quand elles changent.",
    body: [
      "A site that is not watched drifts. Hours go stale. A certificate expires. A plugin dies. The owner finds out when a client says the page is down.",
      "Care is $175 a month. Hosting, SSL, backups, uptime watch, and small copy edits. First month when the site goes live. Stop any month after that.",
      "It is not a marketing retainer. We do not post for you. We keep the facts true and the site up. That is the unglamorous work every real website needs.",
    ],
    bodyFr: [
      "Un site sans surveillance dérive. Les heures vieillissent. Un certificat expire. Un module meurt. Le propriétaire l'apprend quand un client dit que la page est down.",
      "L'entretien est à 175 $ par mois. Hébergement, SSL, copies, surveillance, et petits textes. Le premier mois quand le site est en ligne. Arrêt possible n'importe quel mois après.",
      "Ce n'est pas un contrat de marketing. Nous ne publions pas à votre place. Nous gardons les faits vrais et le site en ligne. C'est le travail sans glamour que chaque vrai site demande.",
    ],
  },
  {
    slug: "search-on-a-shop-site",
    title: "Search on a shop site, not a corporation",
    titleFr: "La recherche pour un commerce, pas une corporation",
    dek: "Titles, a sitemap, schema, and the city in the copy. That is the work.",
    dekFr: "Des titres, un plan du site, un schéma, et la ville dans le texte. C'est le travail.",
    body: [
      "Enterprise SEO is keyword decks and link graphs. A barber in Dollard-Des-Ormeaux needs the pages to say what the shop does, in the city it works, with a title Google can read.",
      "We write those titles. We add a sitemap and robots.txt. We mark the shop, the hours, and the offer in schema. We make sure the phone page is the phone page.",
      "We do not sell guaranteed rank. We do not buy links. Search from $1,200 is that setup, on its own or with a rebuild. Care keeps it true when hours move.",
    ],
    bodyFr: [
      "Le SEO d'entreprise, ce sont des tableaux de mots-clés. Un barbier à Dollard-Des-Ormeaux a besoin que les pages disent ce que le salon fait, dans la ville où il travaille, avec un titre que Google peut lire.",
      "Nous écrivons ces titres. Nous ajoutons un plan du site et un robots.txt. Nous marquons le commerce, les heures, et l'offre dans le schéma. Nous faisons en sorte que la page téléphone soit la page téléphone.",
      "Nous ne vendons pas une place garantie. Nous n'achetons pas de liens. La recherche à partir de 1 200 $, c'est cette mise en place, seule ou avec une refonte. L'entretien la garde vraie quand les heures bougent.",
    ],
  },
];

export function noteBySlug(slug: string) {
  return NOTES.find((item) => item.slug === slug);
}
