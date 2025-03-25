import Image from "next/image";

type serviceType = {
  key: number;
  serviceName: string;
  pathName: string;
  details: string;
};
interface propsType {
  service: serviceType;
}

export default function InfoCardService({ service }: propsType) {
  return (
    <div className="h-full w-full group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-md hover:shadow-black/30">
      <div className="h-full w-full relative">
        <Image
          src={service.pathName}
          alt="haircutImage"
          fill
          className="object-cover group-hover:scale-110 transition-all duration-500"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/60"></div>
      <div className="absolute inset-0 translate-y-[92%] sm:translate-y-[85%] md:translate-y-[80%] flex flex-col items-center gap-6 transition-all duration-500 group-hover:translate-y-[45%] px-6">
        <div className="pb-6 text-center border-b-[1.5px] border-brandcolor w-fit group-hover:w-[90%] transition-all duration-700 ease-in-out mb-4">
          <h1 className=" text-3xl font-bold text-white">
            {service.serviceName}
          </h1>
        </div>

        <p className="mb-1 text-sm italic text-white transition-opacity duration-300 text-center">
          {service.details}
        </p>
        <h2 className=" text-3xl text-brandcolor font-semibold">30$</h2>
      </div>
    </div>
  );
}
