import type {
  TimelineEvent,
  GalleryPhoto,
  BucketItem,
} from "@/types";

export const RELATIONSHIP_START = new Date("2025-06-04T00:00:00");
export const FRIENDSHIP_START = new Date("2020-01-15T00:00:00");
export const ANNIVERSARY_MONTH = 6;
export const ANNIVERSARY_DAY = 4;

export const NAV_LINKS = [
  { href: "#hero", label: "Nous", emoji: "💕" },
  { href: "#counter", label: "Couple", emoji: "⏱️" },
  { href: "#friendship", label: "Amitié", emoji: "🏫" },
  { href: "#timeline", label: "Histoire", emoji: "📖" },
  { href: "#gallery", label: "Souvenirs", emoji: "📸" },
  { href: "#letter", label: "Lettre", emoji: "💌" },
  { href: "#bucket", label: "Rêves", emoji: "✈️" },
  { href: "#countdown", label: "Anniversaire", emoji: "🎂" },
] as const;

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    emoji: "🌟",
    date: "4 Juin 2025 — Le début",
    title: "Le Commencement",
    description:
      "Le jour où deux âmes joyeuses se sont trouvées. La plus belle rencontre de nos vies 💕",
    photo: "/photos/plus_ancienne_phto_couple.webp",
  },
  {
    emoji: "✈️",
    date: "Première Aventure",
    title: "Explorateurs du Monde",
    description:
      "Explorer le monde c'est tellement mieux ensemble. Le premier de nos nombreux voyages 🗺️",
    photo: "/photos/couple_rando_adorable.webp",
  },
  {
    emoji: "😢",
    date: "Dernier Repas Ensemble",
    title: "Dîner avant le départ au Vietnam",
    description:
      "Ce dernier repas ensemble avant ton départ... Les rires se mêlaient aux larmes. On savait que la distance ne changerait rien, mais dire au revoir, même temporairement, c'était si dur 💔",
    photo: "/photos/dernier_repas_avant_depart.webp",
  },
  {
    emoji: "🎮",
    date: "Game Night",
    title: "Les Joueurs Légendaires",
    description:
      "On s'amuse comme des enfants, et c'est exactement pour ça qu'on est si bien ensemble 🏆",
    photo: "/photos/photo_joueur.webp",
  },
  {
    emoji: "🌸",
    date: "Chaque jour",
    title: "Les Petits Moments Mignons",
    description:
      "Ces instants du quotidien qui font que chaque journée avec toi est un cadeau ☀️",
    photo: "/photos/photo_couple_cute.webp",
  },
  {
    emoji: "💫",
    date: "Aujourd'hui & Pour Toujours",
    title: "La Suite Continue...",
    description:
      "Notre histoire ne fait que commencer. Les meilleures pages sont encore devant nous 💕",
    photo: "/photos/bague_couple.webp",
  },
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  // Romantique
  { src: "/photos/bisous.webp", alt: "Bisous tendres", category: "romantique", aspect: "portrait", featured: true },
  { src: "/photos/photo_amour_intese.webp", alt: "Moment d'amour intense", category: "romantique", aspect: "portrait" },
  { src: "/photos/photo_couple_parfait.webp", alt: "Couple parfait", category: "romantique", aspect: "portrait" },
  { src: "/photos/tomy_bisous_alex.webp", alt: "Tomy embrasse Alex", category: "romantique", aspect: "portrait" },
  { src: "/photos/photo_mignonne.webp", alt: "Moment mignon", category: "romantique", aspect: "portrait" },
  { src: "/photos/bague_couple.webp", alt: "Bague de couple", category: "romantique", aspect: "portrait" },

  // Couple
  { src: "/photos/mariage.webp", alt: "Mariage magique", category: "couple", aspect: "landscape", featured: true },
  { src: "/photos/photo_couple_cute.webp", alt: "Couple adorable", category: "couple", aspect: "portrait" },
  { src: "/photos/photo_aestetic.webp", alt: "Photo esthétique", category: "couple", aspect: "portrait" },
  { src: "/photos/photo_cafee.webp", alt: "Pause café ensemble", category: "couple", aspect: "portrait" },
  { src: "/photos/couple_soin.webp", alt: "Couple soin", category: "couple", aspect: "portrait" },
  { src: "/photos/couple_soin_2.webp", alt: "Soins ensemble", category: "couple", aspect: "portrait" },
  { src: "/photos/plus_ancienne_phto_couple.webp", alt: "Notre plus ancienne photo", category: "couple", aspect: "portrait" },
  { src: "/photos/noeal_alex.webp", alt: "Noël avec Alex", category: "couple", aspect: "portrait" },
  { src: "/photos/photo_vert.webp", alt: "Photo dans le vert", category: "couple", aspect: "portrait" },

  // Voyage
  { src: "/photos/couple_rando_adorable.webp", alt: "Rando adorable", category: "voyage", aspect: "landscape", featured: true },
  { src: "/photos/photo_couple_vacances.webp", alt: "Vacances à Amsterdam", category: "voyage", aspect: "landscape" },
  { src: "/photos/couple_rando.webp", alt: "Randonnée ensemble", category: "voyage", aspect: "portrait" },
  { src: "/photos/photo_rando_trop_beau.webp", alt: "Rando trop beau", category: "voyage", aspect: "landscape" },
  { src: "/photos/photo_couples_cascade.webp", alt: "Cascade en couple", category: "voyage", aspect: "portrait" },
  { src: "/photos/photo_tomy_kayak.webp", alt: "Tomy en kayak", category: "voyage", aspect: "portrait" },

  // Fun
  { src: "/photos/couple_droles.webp", alt: "Couple drôle", category: "fun", aspect: "landscape", featured: true },
  { src: "/photos/appel_drole.webp", alt: "Appel vidéo drôle", category: "fun", aspect: "portrait" },
  { src: "/photos/photo_drole.webp", alt: "Moment drôle", category: "fun", aspect: "portrait" },
  { src: "/photos/photo_fun.webp", alt: "Fun ensemble", category: "fun", aspect: "portrait" },
  { src: "/photos/photo_fun_coupl.webp", alt: "Fun en couple", category: "fun", aspect: "portrait" },
  { src: "/photos/photo_joueur.webp", alt: "Les joueurs", category: "fun", aspect: "landscape" },
  { src: "/photos/photo_call_distance.webp", alt: "Appel à distance", category: "fun", aspect: "portrait" },

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
  { key: "voyage", label: "Voyages", emoji: "✈️" },
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

export const LOVE_LETTER = `Je prends ce moment pour te dire tout ce que mon cœur ressent.

Tu es la personne qui rend chaque journée spéciale, même les plus ordinaires. Depuis le début de notre histoire, tu m'as appris ce que c'est que d'être vraiment heureux.

Ta façon de t'émerveiller devant les petites choses mignonnes, ton rire contagieux, ta joie de vivre... tout en toi me rend meilleur. Quand on part en aventure ensemble, quand on découvre de nouveaux endroits, de nouvelles saveurs — avec toi chaque instant devient un souvenir.

Tu es ma partenaire de voyage préférée, ma complice de jeux, ma meilleure amie. Mais surtout, tu es mon amour. Et je suis le plus chanceux du monde de t'avoir à mes côtés.

Notre histoire ne fait que commencer, et je suis tellement impatient de voir tous les merveilleux moments qui nous attendent encore — les voyages, les rires, les petits moments mignons et les grandes aventures.

Merci d'être toi. Merci d'être avec moi.`;

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
