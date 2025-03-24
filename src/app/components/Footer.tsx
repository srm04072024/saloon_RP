import Link from "next/link";

const timing = [
  { day: "Monday", time: "10:00-20:00" },
  { day: "Tuesday", time: "10:00-20:00" },
  { day: "Wednesday", time: "10:00-20:00" },
  { day: "Thursday", time: "10:00-20:00" },
  { day: "Friday", time: "10:00-20:00" },
  { day: "Saturday", time: "10:00-20:00" },
  { day: "Weekend", time: "Closed" },
];

export default function Footer() {
  return (
    <footer className="  bg-customblack   text-neutral-400">
      <div className="grid grid-cols-9  gap-15 py-25 px-12">
        {/* Contact */}
        <div className="col-span-9 md:col-span-3">
          <h2 className="text-2xl font-bold mb-4 text-white">Contact</h2>
          <div className="h-full w-full flex flex-col gap-4">
            <p className=" capitalize leading-8">
              Gopabandhu Chakka, Jajpur road,
              <br /> Jajpur, 755019 <br />
              India
            </p>

            <h2 className="text-brandcolor text-2xl font-bold">9999999999</h2>
            <Link href="/" className=" border-b-1 border-brandcolor w-fit">
              info@website.com
            </Link>
            <div>social links</div>
          </div>
        </div>
        {/* Time */}
        <div className="col-span-9 md:col-span-3">
          <h2 className="text-2xl font-bold text-white">Work Time</h2>
          <ul className="">
            {timing.map((ele) => (
              <li key={ele.day} className="flex my-4 tracking-widest text-xs">
                <div className="">{ele.day}</div>
                <div className="grow border-dotted border-b-1 border-neutral-700"></div>
                <div className="">{ele.time}</div>
              </li>
            ))}
          </ul>
        </div>
        {/* subscribe */}
        <div className="col-span-9 md:col-span-3  p-2">
          <h2 className="text-2xl font-bold mb-4 text-white">Subscribe</h2>
          <div className="w-full border-1 border-brandcolor h-14 relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-3/5 outline-none h-full px-2"
            />
            <div className="absolute right-0 top-0 h-full w-2/5 min-w-28">
              <button className="text-white bg-brandcolor uppercase h-full w-full text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-[1px] capitalize text-sm italic py-8 px-15">
        2025 &copy; All rights reserved.
      </div>
    </footer>
  );
}
