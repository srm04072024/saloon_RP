const priceList = [
  {
    id: 1,
    service: "Wash and Cut",
    price: 20,
    details: "Includes a professional wash and haircut.",
  },
  {
    id: 2,
    service: "Wash and Style",
    price: 10,
    details: "A simple wash followed by styling as per preference.",
  },
  {
    id: 3,
    service: "Head Shave with Razor",
    price: 30,
    details: "A clean head shave using a razor for a smooth finish.",
  },
  {
    id: 4,
    service: "Short Beard Tidy",
    price: 15,
    details: "Trimming and shaping of a short beard for a neat look.",
  },
  {
    id: 5,
    service: "Long Hair",
    price: 45,
    details: "Haircut and styling for long hair with a professional finish.",
  },
  {
    id: 6,
    service: "Large Beard Trim",
    price: 25,
    details: "Trimming and shaping of a long or full beard.",
  },
  {
    id: 7,
    service: "Children Wash & Cut",
    price: 25,
    details: "A gentle wash and haircut designed for children.",
  },
  {
    id: 8,
    service: "Luxury Full Service",
    price: 60,
    details:
      "A complete grooming package including wash, cut, shave, and styling.",
  },
];

export default function BarberPricing() {
  return (
    <section className=" w-full text-sm bg-customwhite md:p-20 p-10">
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-2 text-center">
          <h4> pricing plan</h4>
          <h1 className="text-2xl text-black md:text-5xl font-bold">
            Barber Pricing
          </h1>
        </div>
        {priceList.map((list) => (
          <div key={list.id} className="col-span-2 md:col-span-1">
            <div className=" flex">
              <div className="text-black text-lg font-extrabold">
                {list.service}
              </div>
              <div className="grow border-dotted border-b-1 border-neutral-700 mb-4 mx-1"></div>
              <div className="text-2xl text-brandcolor font-bold">{`$${list.price}`}</div>
            </div>
            <p className="italic text-neutral-600 mt-2">{list.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
