import InfoCardService from "../components/InfoCardService";

const serviceDetails = [
  {
    key: 1,
    serviceName: "Hair Cut",
    pathName: "/service_haircut.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta enimisteut",
  },
  {
    key: 2,
    serviceName: "Hair Wash",
    pathName: "/service_hairwash.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta enimisteut",
  },
  {
    key: 3,
    serviceName: "Trimming",
    pathName: "/service_trimming.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta enimisteut",
  },
];

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
        {serviceDetails.map((service) => (
          <div
            key={service.key}
            className="col-span-9  md:col-span-3 h-screen md:h-[65vh]"
          >
            <InfoCardService service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}
