export default function AppointmentForm() {
  return (
    <div className="h-full w-full md:w-4/5 bg-customwhite text-neutral-500  mx-auto p-6 mb-4">
      <form className="h-full w-full grid  grid-cols-2 gap-4">
        <div className="col-span-2 text-center self-center">
          <h2 className="text-2xl text-black text-center font-extrabold mt-full">
            Make An Appoinment
          </h2>
        </div>
        <div className="h-full w-full bg-white px-4">
          <input
            type="text"
            placeholder="Name"
            className="h-full w-full bg-transparent outline-none placeholder:text-neutral-500"
          />
        </div>
        <div className="h-full w-full bg-white px-4">
          <input
            type="tel"
            placeholder="Phone"
            className="h-full w-full bg-transparent outline-none  placeholder:text-neutral-500"
          />
        </div>
        <div className="h-full w-full bg-white px-4">
          <input
            type="date"
            placeholder="Date"
            className="h-full w-full bg-transparent outline-none"
          />
        </div>
        <div className="h-full w-full bg-white px-4">
          <select
            className="h-full w-full bg-transparent outline-none"
            defaultValue="none"
          >
            <option value="none">Time</option>
            <option value="10:00">10:00</option>
            <option value="11:00">11:00</option>
            <option value="12:00">12:00</option>
            <option value="14:00">14:00</option>
            <option value="16:00">16:00</option>
            <option value="18:00">18:00</option>
            <option value="20:00">20:00</option>
          </select>
        </div>
        <div className="h-full w-full bg-white px-4">
          <select
            className="h-full w-full bg-transparent outline-none"
            defaultValue="none"
          >
            <option value="none">Services</option>
            <option value="hair_styling">Hair Styling</option>
            <option value="face_mask">Face Mask</option>
            <option value="shaving">Shaving</option>
            <option value="beardtrimming">Beard Trimming</option>
            <option value="hairwash">Hair Wash</option>
          </select>
        </div>
        <div className="h-full w-full bg-white px-4">
          <select
            className="h-full w-full bg-transparent outline-none"
            defaultValue="none"
          >
            <option value="none">Choose Barber</option>
            <option value="person1">Person1</option>
            <option value="person2">Person2</option>
            <option value="person3">Person3</option>
            <option value="person4">Person4</option>
            <option value="person5">Person5</option>
          </select>
        </div>
        <div className="col-span-2">
          <button className="h-full w-full bg-brandcolor text-white uppercase hover:bg-black font-semibold">
            Make Appointment
          </button>
        </div>
      </form>
    </div>
  );
}
