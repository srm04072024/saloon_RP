import Bouncer from "@/components/Bouncer";

export default function HeroSection() {
  return (
    <div className="h-screen w-screen bg-[url('/hero.jpg')] bg-fixed bg-no-repeat bg-cover bg-center py-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/20"></div>
      <div className="w-3/4 mx-auto h-[100vh] absolute inset-0 flex flex-col justify-center items-center gap-4 text-center pt-10">
        <h4 className="text-sm font-semibold uppercase text-white">
          Stay sharp, Look good
        </h4>
        <h1 className="text-lg  md:text-5xl font-bold">
          We Are Best Barbers & Hair Cutting Salon at Jajpur.
        </h1>

        <h4 className="text-sm font-semibold uppercase text-white leading-10">
          Gopabandhu Chakka, Jajpur road, Jajpur, 755019 <br />
          India
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
