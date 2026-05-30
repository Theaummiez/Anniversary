import type {
  TimelineEvent,
  GalleryPhoto,
  BucketItem,
  MusicTrack,
} from "@/types";

export const FRIENDSHIP_START = new Date("2020-01-15T00:00:00");
export const FIRST_COUPLE_START = new Date("2020-06-15T00:00:00");
export const RELATIONSHIP_START = new Date("2025-06-04T00:00:00");
export const REUNION_DATE = new Date("2026-06-21T00:00:00");
export const ANNIVERSARY_DATE = new Date("2026-06-04T00:00:00");

export const NAV_LINKS = [
  { href: "#hero", label: "Nous", emoji: "💕" },
  { href: "#counter", label: "Couple", emoji: "⏱️" },
  { href: "#friendship", label: "Amitié", emoji: "🏫" },
  { href: "#timeline", label: "Histoire", emoji: "📖" },
  { href: "#gallery", label: "Souvenirs", emoji: "📸" },
  { href: "#music", label: "Musique", emoji: "🎶" },
  { href: "#letter", label: "Lettre", emoji: "💌" },
  { href: "#bucket", label: "Rêves", emoji: "✈️" },
  { href: "#countdown", label: "Retrouvailles", emoji: "✈️" },
] as const;

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    emoji: "🌟",
    date: "Début 2020 — Troisième",
    title: "La Rencontre",
    description:
      "On se croise en troisième au collège. Une amitié naît, et sans le savoir, tout commence ici 🏫",
    photo: "/photos/plus_ancienne_phto_couple.webp",
  },
  {
    emoji: "💕",
    date: "Fin 2020 — Fin de troisième",
    title: "Mis Ensemble",
    description:
      "Fin de troisième, on ose enfin. Le début d'une histoire d'amour qui va durer des années 💑",
    photo: "/photos/photo_vert.webp",
  },
  {
    emoji: "🎮",
    date: "2020–2024 — Les belles années",
    title: "Inséparables",
    description:
      "Quatre ans de bonheur. Des game nights, des fous rires, des moments mignons, des aventures... On était inséparables 🏆",
    photo: "/photos/photo_joueur.webp",
  },
  {
    emoji: "💔",
    date: "2024–2025 — L'année sans contact",
    title: "La Séparation",
    description:
      "Aucun contact pendant toute l'année. Le silence le plus dur de nos vies. Mais même dans le vide, les sentiments n'ont jamais disparu 🥺",
  },
  {
    emoji: "🔥",
    date: "4 Juin 2025 — Le retour",
    title: "Les Retrouvailles",
    description:
      "Après un an sans se parler, on se retrouve. Comme si rien n'avait changé — mais en mieux. Plus forts, plus sûrs, plus amoureux 💕",
    photo: "/photos/tomy_bisous_alex.webp",
  },
  {
    emoji: "☀️",
    date: "Été 2025 — Vacances dans le Sud",
    title: "L'Été Parfait",
    description:
      "Enfin réunis ! Les randos, les cascades, les soirées, les câlins... On rattrape le temps perdu dans le sud de la France ✨",
    photo: "/photos/couple_rando_adorable.webp",
  },
  {
    emoji: "😢",
    date: "Août 2025 — Le départ",
    title: "Dîner avant le Vietnam",
    description:
      "Le dernier repas avant mon départ au Vietnam. Les rires se mêlaient aux larmes. On savait que cette fois, c'était différent — on allait tenir 💔",
    photo: "/photos/dernier_repas_avant_depart.webp",
  },
  {
    emoji: "💍",
    date: "2025 — Une semaine en France",
    title: "Retour Éclair",
    description:
      "Une semaine de retour pour revoir Alex et ma famille. Chaque minute comptait. La bague, les câlins, les promesses... 🥹",
    photo: "/photos/bague_couple.webp",
  },
  {
    emoji: "🇻🇳",
    date: "2025–2026 — L'année à distance",
    title: "Séparés Mais Ensemble",
    description:
      "Un océan entre nous, mais cette fois on tient bon. Appels, messages, patience. Chaque jour nous rapproche du retour 🛫",
    photo: ["/photos/alex_mignonne.webp", "/photos/appel_drole.webp"],
  },
  {
    emoji: "🏠",
    date: "21 Juin 2026 — Le Retour",
    title: "Enfin Ensemble Pour de Bon",
    description:
      "Le jour où je rentre définitivement. Plus de distance, plus d'écrans. Juste toi et moi, enfin réunis. Pour toujours ♾️",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // Romantique
  { src: "/photos/bisous.webp", alt: "Bisous tendres — été 2025", category: "romantique", aspect: "portrait", featured: true },
  { src: "/photos/photo_amour_intese.webp", alt: "Moment d'amour intense", category: "romantique", aspect: "portrait" },
  { src: "/photos/photo_couple_parfait.webp", alt: "Couple parfait — dans le sud", category: "romantique", aspect: "portrait" },
  { src: "/photos/tomy_bisous_alex.webp", alt: "Tomy embrasse Alex", category: "romantique", aspect: "portrait" },
  { src: "/photos/photo_mignonne.webp", alt: "Moment mignon", category: "romantique", aspect: "portrait" },
  { src: "/photos/bague_couple.webp", alt: "La bague — retour en France", category: "romantique", aspect: "portrait" },

  // Couple
  { src: "/photos/mariage.webp", alt: "Mariage magique", category: "couple", aspect: "landscape", featured: true },
  { src: "/photos/photo_couple_cute.webp", alt: "Couple adorable — été 2025", category: "couple", aspect: "portrait" },
  { src: "/photos/photo_aestetic.webp", alt: "Photo esthétique", category: "couple", aspect: "portrait" },
  { src: "/photos/photo_cafee.webp", alt: "Pause café ensemble", category: "couple", aspect: "portrait" },
  { src: "/photos/couple_soin.webp", alt: "Soins ensemble — été 2025", category: "couple", aspect: "portrait" },
  { src: "/photos/couple_soin_2.webp", alt: "Soins ensemble", category: "couple", aspect: "portrait" },
  { src: "/photos/plus_ancienne_phto_couple.webp", alt: "Notre plus ancienne photo — collège", category: "couple", aspect: "portrait" },
  { src: "/photos/noeal_alex.webp", alt: "Noël avec Alex", category: "couple", aspect: "portrait" },
  { src: "/photos/photo_vert.webp", alt: "Photo dans le vert", category: "couple", aspect: "portrait" },

  // Été 2025
  { src: "/photos/couple_rando_adorable.webp", alt: "Rando dans le sud — été 2025", category: "voyage", aspect: "landscape", featured: true },
  { src: "/photos/photo_couple_vacances.webp", alt: "Vacances à Amsterdam", category: "voyage", aspect: "landscape" },
  { src: "/photos/couple_rando.webp", alt: "Randonnée dans le sud", category: "voyage", aspect: "portrait" },
  { src: "/photos/photo_rando_trop_beau.webp", alt: "Rando trop beau — été 2025", category: "voyage", aspect: "landscape" },
  { src: "/photos/photo_couples_cascade.webp", alt: "Cascade en couple", category: "voyage", aspect: "portrait" },
  { src: "/photos/photo_tomy_kayak.webp", alt: "Tomy en kayak", category: "voyage", aspect: "portrait" },

  // Fun
  { src: "/photos/couple_droles.webp", alt: "Couple drôle", category: "fun", aspect: "landscape", featured: true },
  { src: "/photos/appel_drole.webp", alt: "Appel vidéo drôle", category: "fun", aspect: "portrait" },
  { src: "/photos/photo_drole.webp", alt: "Moment drôle", category: "fun", aspect: "portrait" },
  { src: "/photos/photo_fun.webp", alt: "Fun ensemble", category: "fun", aspect: "portrait" },
  { src: "/photos/photo_fun_coupl.webp", alt: "Fun en couple", category: "fun", aspect: "portrait" },
  { src: "/photos/photo_joueur.webp", alt: "Les joueurs", category: "fun", aspect: "landscape" },
  { src: "/photos/photo_call_distance.webp", alt: "Appel à distance — depuis le Vietnam", category: "fun", aspect: "portrait" },

  // Solo / Portraits
  { src: "/photos/alex_ange.webp", alt: "Alex en ange", category: "solo", aspect: "landscape" },
  { src: "/photos/alex_fashon.webp", alt: "Alex fashion", category: "solo", aspect: "portrait" },
  { src: "/photos/alex_fun.webp", alt: "Alex fun", category: "solo", aspect: "portrait" },
  { src: "/photos/alex_mignonne.webp", alt: "Alex mignonne", category: "solo", aspect: "portrait" },
  { src: "/photos/photo_tomy.webp", alt: "Tomy", category: "solo", aspect: "portrait" },
  { src: "/photos/chat.webp", alt: "Le chat", category: "solo", aspect: "portrait" },

  // Famille
  { src: "/photos/famille_maman_alex_tomy.webp", alt: "Famille : Maman, Alex et Tomy", category: "famille", aspect: "landscape" },
  { src: "/photos/photo_famille.webp", alt: "Photo de famille", category: "famille", aspect: "landscape" },
  { src: "/photos/dernier_repas_avant_depart.webp", alt: "Dernier repas avant le départ", category: "famille", aspect: "portrait" },
];

export const GALLERY_CATEGORIES = [
  { key: "all", label: "Tout", emoji: "✨" },
  { key: "romantique", label: "Romantique", emoji: "💕" },
  { key: "couple", label: "Couple", emoji: "💑" },
  { key: "voyage", label: "Été 2025", emoji: "☀️" },
  { key: "fun", label: "Fun", emoji: "😂" },
  { key: "solo", label: "Portraits", emoji: "📸" },
  { key: "famille", label: "Famille", emoji: "👨‍👩‍👧" },
] as const;

export const BUCKET_LIST: BucketItem[] = [
  { emoji: "🗾", label: "Visiter le Japon ensemble" },
  { emoji: "🗼", label: "Se perdre dans Paris la nuit" },
  { emoji: "🏖️", label: "Coucher de soleil à Bali" },
  { emoji: "🌸", label: "Pique-nique dans un jardin fleuri" },
  { emoji: "🎡", label: "Fête foraine sous les étoiles" },
  { emoji: "🍜", label: "Dîner dans un resto très spécial" },
  { emoji: "🎭", label: "Cinéma en plein air" },
  { emoji: "🎂", label: "Cuisiner un gâteau ensemble" },
  { emoji: "🌌", label: "Observer les étoiles la nuit" },
  { emoji: "🛥️", label: "Croisière romantique" },
  { emoji: "📸", label: "Séance photo officielle en couple" },
  { emoji: "🎪", label: "Aller à un festival ensemble" },
];

export const MUSIC_TRACKS: MusicTrack[] = [
  {
    title: "Chocolat",
    artist: "Ya Levis",
    url: "https://www.youtube.com/watch?v=4KM8SRuVqv0",
  },
  {
    title: "Je te promets",
    artist: "Johnny Hallyday",
    url: "https://www.youtube.com/watch?v=3C9BAtS23dA",
  },
  {
    title: "La Vie en Rose",
    artist: "Édith Piaf",
    url: "https://www.youtube.com/watch?v=kFzViYkZAz4",
  },
  {
    title: "All of Me",
    artist: "John Legend",
    url: "https://www.youtube.com/watch?v=450p7goxZqg",
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
  },
  {
    title: "Ami(e)",
    artist: "Vitaa & Slimane",
    url: "https://www.youtube.com/watch?v=ed-z8c2GrFs",
  },
];

export const LOVE_LETTER = `Je prends ce moment pour te dire tout ce que mon cœur ressent.

Tu es la personne qui rend chaque journée spéciale, même les plus ordinaires. Depuis le collège, tu m'as appris ce que c'est que d'être vraiment heureux.

Ta façon de t'émerveiller devant les petites choses mignonnes, ton rire contagieux, ta joie de vivre... tout en toi me rend meilleur. Quand on part en aventure ensemble, quand on découvre de nouveaux endroits, de nouvelles saveurs — avec toi chaque instant devient un souvenir.

Tu es ma partenaire de voyage préférée, ma complice de jeux, ma meilleure amie. Mais surtout, tu es mon amour. Et je suis le plus chanceux du monde de t'avoir à mes côtés.

On a survécu à un an sans se parler. Un an de silence. Et pourtant, le 4 juin 2025, quand on s'est retrouvés, c'était comme si rien n'avait changé — sauf qu'on s'aimait encore plus fort.

Même si en ce moment un océan nous sépare, chaque appel, chaque message me rappelle que ce qu'on a est indestructible. On a déjà survécu au pire.

Le 21 juin 2026, je rentre. Pour de bon. Et à partir de ce jour-là, plus rien ne nous séparera.

Merci d'être toi. Merci d'avoir attendu. Merci d'être avec moi malgré tout.`;

export const CONFETTI_COLORS = [
  "#ff6b9d",
  "#c44dff",
  "#ffd700",
  "#ff9ec3",
  "#ffffff",
  "#4caf50",
  "#81d4fa",
];

export const PARTICLE_EMOJIS = [
  "💕",
  "✨",
  "🌸",
  "⭐",
  "💫",
  "🌟",
  "🎀",
  "🍭",
];
