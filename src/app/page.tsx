import Appointment from "./sections/Appointment";
import CustomerReview from "./sections/CustomerReview";
import Experience from "./sections/Experience";
import Features from "./sections/Features";
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
      <CustomerReview />
      <Features />
      <Appointment />
    </main>
  );
}
