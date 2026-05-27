import type {
  TimelineEvent,
  QuizQuestion,
  GalleryItem,
  BucketItem,
} from "@/types";

export const RELATIONSHIP_START = new Date("2025-06-04T00:00:00");
export const ANNIVERSARY_MONTH = 6;
export const ANNIVERSARY_DAY = 4;

export const NAV_LINKS = [
  { href: "#hero", label: "Nous", emoji: "💕" },
  { href: "#counter", label: "Compteur", emoji: "⏱️" },
  { href: "#timeline", label: "Histoire", emoji: "📖" },
  { href: "#gallery", label: "Souvenirs", emoji: "📸" },
  { href: "#quiz", label: "Quiz", emoji: "🎮" },
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
  },
  {
    emoji: "✈️",
    date: "Première Aventure",
    title: "Explorateurs du Monde",
    description:
      "Explorer le monde c'est tellement mieux ensemble. Le premier de nos nombreux voyages 🗺️",
  },
  {
    emoji: "🍜",
    date: "Un Soir Parfait",
    title: "Dîner aux éclats de rire",
    description:
      "Ce restaurant où on a ri tellement fort qu'on ne pouvait plus manger 😂 Les rires, c'est notre super pouvoir !",
  },
  {
    emoji: "🎮",
    date: "Game Night",
    title: "Les Joueurs Légendaires",
    description:
      "On s'amuse comme des enfants, et c'est exactement pour ça qu'on est si bien ensemble 🏆",
  },
  {
    emoji: "🌸",
    date: "Chaque jour",
    title: "Les Petits Moments Mignons",
    description:
      "Ces instants du quotidien qui font que chaque journée avec toi est un cadeau ☀️",
  },
  {
    emoji: "💫",
    date: "Aujourd'hui & Pour Toujours",
    title: "La Suite Continue...",
    description:
      "Notre histoire ne fait que commencer. Les meilleures pages sont encore devant nous 💕",
  },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: "🌍 Quelle destination de rêve vous voulez visiter ensemble ?",
    options: [
      "🗾 Le Japon",
      "🗼 Paris la nuit",
      "🏝️ Bali au coucher du soleil",
      "🗽 New York City",
    ],
    answerIndex: 0,
    explanation:
      "Le Japon avec ses cerisiers, ses temples et ses choses trop mignonnes ! 🌸",
  },
  {
    question: "🌸 Qu'est-ce qu'Alex adore le plus dans la vie ?",
    options: [
      "🎵 La musique",
      "🌸 Les choses mignonnes",
      "🎬 Les films",
      "🍕 La nourriture",
    ],
    answerIndex: 1,
    explanation:
      "Alex adore TOUT ce qui est mignon — c'est ce qui la rend si irrésistible ! 🥰",
  },
  {
    question: "💕 Comment Tomy décrit Alex en un mot ?",
    options: [
      "Incroyable 🌟",
      "Magique ✨",
      "Mignonne 🌸",
      "Parfaite 💎",
    ],
    answerIndex: 3,
    explanation: "Parfaite ! Dans tous les sens du terme 💕",
  },
  {
    question: "🎮 Notre activité préférée quand on s'ennuie ?",
    options: [
      "Netflix sans fin 📺",
      "Jouer ensemble 🎮",
      "Cuisiner ensemble 🍳",
      "Partir impromptu ✈️",
    ],
    answerIndex: 1,
    explanation: "Des vrais gamers ! On est imbattables ensemble 🏆",
  },
  {
    question: "✈️ Notre journée parfaite ensemble c'est...",
    options: [
      "Grasse matinée + Netflix 🛋️",
      "Road trip surprise 🚗",
      "Balade + resto + folie 🌆",
      "Spa et détente 🧖",
    ],
    answerIndex: 2,
    explanation:
      "Sortir, explorer, manger et profiter de chaque instant ensemble 💑",
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    emoji: "💕",
    caption: "Notre premier moment 🌟",
    gradient: "from-pink-200 to-pink-300",
    rotation: -5,
  },
  {
    emoji: "✈️",
    caption: "En voyage 🗺️",
    gradient: "from-green-200 to-green-300",
    rotation: 4,
  },
  {
    emoji: "🎮",
    caption: "Game night ! 🏆",
    gradient: "from-purple-200 to-purple-300",
    rotation: -2,
  },
  {
    emoji: "🌸",
    caption: "Les beaux jours 🌈",
    gradient: "from-yellow-100 to-amber-200",
    rotation: 6,
  },
  {
    emoji: "🌊",
    caption: "L'aventure ! 🌍",
    gradient: "from-sky-200 to-sky-300",
    rotation: -4,
  },
  {
    emoji: "😂",
    caption: "Nos fous rires 😂",
    gradient: "from-orange-200 to-orange-300",
    rotation: 3,
  },
];

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
