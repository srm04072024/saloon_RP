import Image from "next/image";

export default function PortFolio() {
  return (
    <section
      className="bg-[#f5eee7] px-10 md:px-20 py-28 flex flex-col gap-40 text-gray-500 text-sm leading-7"
      id="about"
    >
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1  gap-10">
        <div className="flex flex-col gap-4">
          <h4>since 2025</h4>
          <h1 className="text-5xl text-black font-bold">Raaz Premium</h1>
          <p className="">
            Come experience a unique and edgy barbershop for all your hair and
            beard needs. ravida haretra nuam enim mi obortis eset uctus enec
            accumsan eu justo alisuame amet auctor orci donec vitae vehicula
            risus.
          </p>
          <p>
            Barber utate ons amet ravida haretra nuam the duru miss uctus the
            drana accumsan justo aliquam sit amet auctor orci done vitae risus
            duise nisan sapien silver on the accumsan id mauris apien.
          </p>
          <ul>
            <li>We&apos;re professional and certified barbers</li>
            <li>We care about our customers satisfaction</li>
            <li>We use quality products to make you look perfect</li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-5 md:gap-5 lg:gap-15">
          <div className="relative">
            <div className="h-3/4 w-full absolute bottom-0">
              <Image src={"/hair_cut_1.jpg"} alt="hairstyle_1" fill />
            </div>
          </div>
          <div>
            <div className="h-3/4 w-full relative">
              <Image src={"/hair_cut_2.jpg"} alt="hairstyle_1" fill />
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1 md:grid-rows-0 gap-5">
        <div>
          <div>
            <h1 className="text-black text-2xl mb-4 font-bold">Cuts</h1>
            <div>
              Cuts ut nisl quam nestibulum drana odio elementum sceisue the can
              golden varius the dis monte.
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-black text-2xl mb-4 font-bold">Fades</h1>
            <div>
              Fades ut nisl quam nestibulum drana odio elementum sceisue the can
              golden varius the dis monte.
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-black text-2xl mb-4 font-bold">Shaves</h1>
            <div>
              Shaves ut nisl quam nestibulum drana odio elementum sceisue the
              can golden varius the dis monte.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
