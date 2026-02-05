import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { WorkExperience } from "@/components/sections/WorkExperience";
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
        <WorkExperience />
        <AboutPreview />
        <FooterCTA />
      </main>
    </SmoothScroll>
  );
}
