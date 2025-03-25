import Appointment from "./sections/Appointment";
import BarbersSection from "./sections/BarbersSection";
import CustomerReview from "./sections/CustomerReview";
import Experience from "./sections/Experience";
import ExtraServices from "./sections/ExtraService";
import Features from "./sections/Features";
import HeroSection from "./sections/HeroSection";
import PortFolio from "./sections/PortFolio";
import PromoVideo from "./sections/PromoVideo";
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
      <PromoVideo />
      <BarbersSection />
      <ExtraServices />
      <Appointment />
    </main>
  );
}
