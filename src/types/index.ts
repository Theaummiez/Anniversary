export interface TimelineEvent {
  emoji: string;
  date: string;
  title: string;
  description: string;
  photo?: string | string[];
}

export interface GalleryPhoto {
  src: string;
  alt: string;
  category: GalleryCategory;
  aspect: "portrait" | "landscape" | "square";
  featured?: boolean;
}

export type GalleryCategory =
  | "couple"
  | "voyage"
  | "fun"
  | "romantique"
  | "famille"
  | "solo";

export interface BucketItem {
  emoji: string;
  label: string;
}

export interface MusicTrack {
  title: string;
  artist: string;
  url: string;
}

export interface CounterValues {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
