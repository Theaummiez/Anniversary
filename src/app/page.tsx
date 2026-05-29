import { LoginGate } from "@/components/login-gate";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Counter } from "@/components/counter";
import { FriendshipCounter } from "@/components/friendship-counter";
import { Timeline } from "@/components/timeline";
import { Gallery } from "@/components/gallery";
import { LoveLetter } from "@/components/love-letter";
import { Playlist } from "@/components/playlist";
import { Horoscope } from "@/components/horoscope";
import { LoveCounter } from "@/components/love-counter";
import { BucketList } from "@/components/bucket-list";
import { Countdown } from "@/components/countdown";
import { Footer } from "@/components/footer";
import { Particles } from "@/components/particles";
import { ScrollRose } from "@/components/scroll-rose";
import { ScrollProgress } from "@/components/scroll-progress";
import { HeartCursor } from "@/components/heart-cursor";
import { EasterEgg } from "@/components/easter-egg";
import { NotificationSetup } from "@/components/notification-setup";

export default function Home() {
  return (
    <LoginGate>
      <Particles />
      <ScrollRose />
      <ScrollProgress />
      <HeartCursor />
      <EasterEgg />
      <NotificationSetup />
      <Nav />
      <main aria-label="Notre belle histoire">
        <Hero />
        <Counter />
        <FriendshipCounter />
        <Timeline />
        <Gallery />
        <LoveLetter />
        <Playlist />
        <Horoscope />
        <LoveCounter />
        <BucketList />
        <Countdown />
      </main>
      <Footer />
    </LoginGate>
  );
}
