
import { ScrollHandler } from "@/components/sections/ScrollHandler";
import { HomeSection } from "@/components/sections/HomeSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function SinglePage() {
  return (
    <>
      <ScrollHandler />
      <HomeSection />
      <ServicesSection />
      <AboutSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
