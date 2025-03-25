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
export default function FeatureCard({ service }: propsType) {
  return (
    <div className="h-full w-full group [perspective:1000px]">
      <div className="h-full w-full relative transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(-180deg)]">
        {/* Front Face */}
        <div className="absolute inset-0 h-full w-full rounded-xl [backface-visibility:hidden] bg-gr">
          <div className="h-full w-full relative">
            <Image
              src={service.pathName}
              alt="haircut"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-3xl absolute inset-0 translate-y-[70%] font-semibold">
            {service.serviceName}
          </p>
          <div className="absolute inset-0 "></div>
        </div>
        {/* Back Face */}
        <div className="absolute inset-0 h-full w-full bg-brandcolor px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col items-center justify-center gap-6 ">
            <h2 className="text-3xl font-semibold">{service.serviceName}</h2>
            <p className="text-center">{service.details}</p>
            <button className="uppercase bg-white text-black px-7 py-5">
              Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
