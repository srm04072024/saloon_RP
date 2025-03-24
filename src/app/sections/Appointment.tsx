import AppointmentForm from "../components/AppointMentForm";

export default function Appointment() {
  return (
    <section className="h-[1024px] md:h-screen w-screen  bg-[url('/contactbackground.jpg')] bg-cover bg-center bg-fixed relative overflow-hidden">
      {/* Overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/60"></div>
      <div className="absolute inset-0 grid grid-cols-6 px-5 md:px-15 py-25">
        <div className="col-span-6 md:col-span-3">
          <div className="h-full w-full flex flex-col gap-8">
            <div>
              <span>&#x2B50;</span>
              <span>&#x2B50;</span>
              <span>&#x2B50;</span>
              <span>&#x2B50;</span>
              <span>&#x2B50;</span>
            </div>
            <h2 className="text-3xl font-bold">
              We Are Best Barbers & Hair Cutting Salon at Jajpur.
            </h2>
            <div className="flex flex-col gap-4">
              <h4>Appointment</h4>
              <h2 className=" text-2xl font-bold">9999999999</h2>
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 ">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
