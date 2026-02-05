// @/app/page.tsx
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { FooterCTA } from "@/components/sections/FooterCTA";
import { Navbar } from "@/components/navigation/Navbar";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Preloader } from "@/components/ui/Preloader";

export default function HomePage() {
  return (
    <>
      <Preloader />
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
    </>
  );
}