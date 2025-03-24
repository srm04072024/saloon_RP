import Experience from "./sections/Experience";
import HeroSection from "./sections/HeroSection";
import PortFolio from "./sections/PortFolio";
import Services from "./sections/Services";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PortFolio />
      <Experience />
      <Services />
    </main>
  );
}
