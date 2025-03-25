export default function PromoVideo() {
  return (
    <section className="w-screen h-screen bg-[url('/video_section.jpg')] bg-fixed bg-cover bg-no-repeat flex justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>
      <div className="absolute inset-0 w-full md:w-2/3 text-center p-20 mx-auto flex flex-col justify-evenly">
        <h1 className=" text-3xl md:text-5xl capitalize font-extrabold">
          Watch our barber shop promo video
        </h1>
        <div className="h-20 w-20 border-2 border-white rounded-full mx-auto relative">
          <div className="triangle absolute top-[30%] left-[35%]"></div>
        </div>
      </div>
    </section>
  );
}
