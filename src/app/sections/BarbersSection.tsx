import BarberDetails from "../components/BarberDetails";

const serviceDetails = [
  {
    key: 1,
    name: "Jhon Doe",
    pathName: "/service_haircut.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta enimisteut",
  },
  {
    key: 2,
    name: "Jhon Doe",
    pathName: "/service_hairwash.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta enimisteut",
  },
  {
    key: 3,
    name: "Jhon Doe",
    pathName: "/service_trimming.jpg",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta enimisteut",
  },
];
export default function BarbersSection() {
  return (
    <section className="h-full w-full px-10 bg-customwhite py-20">
      <div className="text-center my-8">
        <h4 className="mb-4 uppercase">Our Barbers</h4>
        <h1 className="text-2xl font-semibold md:text-5xl text-black">
          Hair Stylists
        </h1>
      </div>
      <div className=" grid grid-cols-6 gap-6  px-10 grid-rows-1">
        {serviceDetails.map((service) => (
          <div
            key={service.key}
            className={`col-span-6  md:col-span-2 h-screen md:h-[65vh] `}
          >
            <BarberDetails service={service} />
          </div>
        ))}
      </div>
    </section>
  );
}
