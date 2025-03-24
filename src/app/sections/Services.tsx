import InfoCardService from "../components/InfoCardService";

export default function Services() {
  return (
    <section className="px-10 bg-customwhite py-20">
      <div className="text-center my-8">
        <h4 className="mb-4">What we&apos;re offering</h4>
        <h1 className="text-2xl font-semibold md:text-5xl text-black">
          Barber Services
        </h1>
      </div>
      <div className=" grid grid-cols-9 gap-6 4 px-10">
        <div className="col-span-9  md:col-span-3 h-screen md:h-[65vh]">
          <InfoCardService
            pathName={"/service_haircut.jpg"}
            serviceName={"Hair Cut"}
          />
        </div>
        <div className="col-span-9 relative md:col-span-3 h-screen md:h-[65vh]">
          <InfoCardService
            pathName={"/service_hairwash.jpg"}
            serviceName={"Hair Wash"}
          />
        </div>
        <div className="col-span-9 relative md:col-span-3 h-screen md:h-[65vh]">
          <InfoCardService
            pathName={"/service_trimming.jpg"}
            serviceName={"Trimming"}
          />
        </div>
      </div>
    </section>
  );
}
