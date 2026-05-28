import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Counter } from "@/components/counter";
import { Timeline } from "@/components/timeline";
import { Gallery } from "@/components/gallery";
import { Quiz } from "@/components/quiz";
import { LoveLetter } from "@/components/love-letter";
import { BucketList } from "@/components/bucket-list";
import { Countdown } from "@/components/countdown";
import { Footer } from "@/components/footer";
import { Particles } from "@/components/particles";

export default function Home() {
  return (
    <>
      <Particles />
      <Nav />
      <main aria-label="Notre belle histoire">
        <Hero />
        <Counter />
        <Timeline />
        <Gallery />
        <Quiz />
        <LoveLetter />
        <BucketList />
        <Countdown />
      </main>
      <Footer />
    </>
  );
}
