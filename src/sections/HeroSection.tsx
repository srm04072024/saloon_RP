import Bouncer from "@/components/Bouncer";

export default function HeroSection() {
  return (
    <div className="h-screen w-screen bg-[url('/hero.jpg')] bg-fixed bg-no-repeat bg-cover bg-center py-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/20"></div>
      <div className="h-[100vh] absolute inset-0 flex flex-col justify-center items-center gap-4">
        <h4 className="text-sm font-semibold uppercase text-white">
          Stay sharp, Look good
        </h4>
        <h1 className="text-[min(64px,8vw)] font-bold">NYC&apos;S FAVOURITE</h1>
        <h1 className="text-[min(64px,8vw)] font-bold">BARBER SHOP</h1>
        <h4 className="text-sm font-semibold uppercase text-white">
          Broadway St, NYC. Appointment: 855 100 4444
        </h4>
        <div className="h-[4.5vw] w-[15vw] min-h-6 min-w-20">
          <button className="h-full w-full bg-white text-black uppercase text-[max(6px,1vw)] font-semibold hover:bg-brandcolor hover:text-white">
            Book Appointment
          </button>
        </div>
        <Bouncer />
      </div>
    </div>
  );
}
