import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Navbar } from "@/components/navigation/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";

export default function HomePage() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <AboutPreview />
        <FooterCTA />
      </main>
    </SmoothScroll>
  );
}
