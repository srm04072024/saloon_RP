import Image from "next/image";

type serviceType = {
  key: number;
  pathName: string;
  name: string;
  details: string;
};
interface propsType {
  service: serviceType;
}

export default function BarberDetails({ service }: propsType) {
  return (
    <div className="h-full w-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-lg hover:shadow-black/50">
      <div className="h-full w-full relative">
        <Image
          src={service.pathName}
          alt="haircutImage"
          fill
          className="object-cover group-hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/90 group-hover:via-black/90 group-hover:to-black/90"></div>
      <div className="absolute inset-0 translate-y-[83%] flex flex-col items-center gap-8 transition-all duration-500 group-hover:translate-y-[30%] px-6">
        <div className="pb-6 text-center border-b-[1.5px] border-brandcolor w-fit group-hover:w-[90%] transition-all duration-700 ease-in-out">
          <h1 className=" text-3xl font-bold text-white">{service.name}</h1>
        </div>

        <p className="mb-1 text-sm italic text-white transition-opacity duration-300 text-center">
          {service.details}
        </p>
        <button className="uppercase bg-white text-black px-5 py-3">
          Team Details
        </button>
      </div>
    </div>
  );
}
