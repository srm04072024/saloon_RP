import Image from "next/image";

export default function Experience() {
  return (
    <section className="grid grid-cols-12 gap-6 p-20 ">
      <div className="col-span-12 md:col-span-5 relative h-screen">
        <Image
          src="/experience.jpg"
          alt="trimmerImage"
          fill
          className="object-cover"
        />
      </div>
      <div className="col-span-12 md:col-span-7">
        <div className="h-full flex flex-col justify-center gap-8">
          <h4>17 year of experience</h4>
          <h1 className="text-white text-2xl md:text-5xl font-bold flex flex-wrap leading-8 md:leading-16">
            Making people look awesome since 2006
          </h1>
          <p className="leading-8">
            Come experience a unique and edgy barbershop for all your hair and
            beard needs. Vulputate ons amet ravida haretra nuam the drana miss
            uctus enec accumsan justo aliquam sit amet auctor orci done vitae
            risus duise nunc sapien.
          </p>
          <div>
            <div className="">
              <p>Barber, Founder</p>
              <p className="text-brandcolor">Harold Brown</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
