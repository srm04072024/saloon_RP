import Link from "next/link";

const moreServices = [
  {
    key: 1,
    name: "Moustache Trim",
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vero aperiam maiores magnam qui cupiditate",
  },
  {
    key: 2,
    name: "face Shave",
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vero aperiam maiores magnam qui cupiditate",
  },
  {
    key: 3,
    name: "beard Trim",
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vero aperiam maiores magnam qui cupiditate",
  },
  {
    key: 4,
    name: "hair cut",
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vero aperiam maiores magnam qui cupiditate",
  },
  {
    key: 5,
    name: "clipper Trim",
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vero aperiam maiores magnam qui cupiditate",
  },
  {
    key: 6,
    name: "facial and massage",
    details:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos vero aperiam maiores magnam qui cupiditate",
  },
];

export default function ExtraServices() {
  return (
    <section
      className="bg-customwhite  w-full text-center p-10 md:p-15"
      id="services"
    >
      <h4 className="mb-4">Our Services</h4>
      <h1 className="capitalize mb-4 text-2xl md:text-5xl text-black font-bold">
        We Also Offer
      </h1>
      <div className="grid grid-cols-6 gap-10">
        {moreServices &&
          moreServices.map((ele) => (
            <div
              key={ele.key}
              className="col-span-6 md:col-span-2 bg-white p-6 min-h-50 rounded-3xl shadow-md hover:shadow-xl shadow-neutral-400"
            >
              <Link href="#">
                <div className="h-full w-full text-center flex flex-col gap-4">
                  <h2 className="text-brandcolor text-2xl font-bold capitalize">
                    {ele.name}
                  </h2>
                  <p className="text-neutral-600">{ele.details}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}
