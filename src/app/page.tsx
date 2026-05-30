"use client";

import dynamic from "next/dynamic";
import { LoginGate } from "@/components/login-gate";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Counter } from "@/components/counter";
import { FriendshipCounter } from "@/components/friendship-counter";
import { Timeline } from "@/components/timeline";
import { Gallery } from "@/components/gallery";
import { Music } from "@/components/music";
import { LoveLetter } from "@/components/love-letter";
import { BucketList } from "@/components/bucket-list";
import { Countdown } from "@/components/countdown";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { EasterEgg } from "@/components/easter-egg";

const Particles = dynamic(() => import("@/components/particles").then(mod => ({ default: mod.Particles })), { ssr: false });
const Fireworks = dynamic(() => import("@/components/fireworks").then(mod => ({ default: mod.Fireworks })), { ssr: false });
const ClickHearts = dynamic(() => import("@/components/click-hearts").then(mod => ({ default: mod.ClickHearts })), { ssr: false });
const ScrollRose = dynamic(() => import("@/components/scroll-rose").then(mod => ({ default: mod.ScrollRose })), { ssr: false });
const HeartCursor = dynamic(() => import("@/components/heart-cursor").then(mod => ({ default: mod.HeartCursor })), { ssr: false });

export default function Home() {
  return (
    <LoginGate>
      <Particles />
      <ClickHearts />
      <ScrollRose />
      <ScrollProgress />
      <HeartCursor />
      <EasterEgg />
      <Nav />
      <main aria-label="Notre belle histoire">
        <Hero />
        <Counter />
        <FriendshipCounter />
        <Timeline />
        <Gallery />
        <Music />
        <LoveLetter />
        <BucketList />
        <Countdown />
      </main>
      <Footer />
      <Fireworks />
    </LoginGate>
  );
}
