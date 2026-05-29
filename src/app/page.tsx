import { LoginGate } from "@/components/login-gate";
import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Counter } from "@/components/counter";
import { FriendshipCounter } from "@/components/friendship-counter";
import { Timeline } from "@/components/timeline";
import { Gallery } from "@/components/gallery";
import { LoveLetter } from "@/components/love-letter";
import { BucketList } from "@/components/bucket-list";
import { Countdown } from "@/components/countdown";
import { Footer } from "@/components/footer";
import { Particles } from "@/components/particles";
import { ScrollRose } from "@/components/scroll-rose";

export default function Home() {
  return (
    <LoginGate>
      <Particles />
      <ScrollRose />
      <Nav />
      <main aria-label="Notre belle histoire">
        <Hero />
        <Counter />
        <FriendshipCounter />
        <Timeline />
        <Gallery />
        <LoveLetter />
        <BucketList />
        <Countdown />
      </main>
      <Footer />
    </LoginGate>
  );
}
