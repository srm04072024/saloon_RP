export default function Bouncer() {
  return (
    <div className="mt-10">
      <div className="h-13 w-13 border-[1.5px] border-gray-300 rounded-full relative text-gray-300 animate-bouncing hover:border-brandcolor  hover:text-brandcolor">
        <div className=" absolute top-1/4 left-2/5">&#8595;</div>
      </div>
    </div>
  );
}
