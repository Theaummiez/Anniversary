export interface TimelineEvent {
  emoji: string;
  date: string;
  title: string;
  description: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface GalleryItem {
  emoji: string;
  caption: string;
  gradient: string;
  rotation: number;
}

export interface BucketItem {
  emoji: string;
  label: string;
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
