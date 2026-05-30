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
import { Particles } from "@/components/particles";
import { Fireworks } from "@/components/fireworks";
import { ClickHearts } from "@/components/click-hearts";
import { ScrollRose } from "@/components/scroll-rose";
import { ScrollProgress } from "@/components/scroll-progress";
import { HeartCursor } from "@/components/heart-cursor";
import { EasterEgg } from "@/components/easter-egg";

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
