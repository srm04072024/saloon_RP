import FeatureCard from "../components/FeatureCard";

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

export default function Features() {
  return (
    <section className=" w-screen relative">
      {/* <div className="h-2/3 w-full bg-black"></div>
      <div className="h-1/3 w-full bg-customwhite"></div> */}
      <div className="h-full w-full text-center py-25 px-10">
        <div className="text-center mb-8">
          <h4 className="mb-4">First class</h4>
          <h1 className="text-white text-2xl md:text-5xl font-bold">
            Our features
          </h1>
        </div>
        <div className=" grid grid-cols-9 gap-6 4 px-10">
          {serviceDetails.map((service) => (
            <div
              key={service.key}
              className="col-span-9  md:col-span-3 h-screen md:h-[65vh]"
            >
              <FeatureCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
