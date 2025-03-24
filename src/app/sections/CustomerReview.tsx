export default function CustomerReview() {
  return (
    <section className="w-screen h-screen bg-[url('/customer_reviews2.jpg')] bg-fixed bg-center bg-cover bg-no-repeat flex justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/70 to-black/60"></div>
      <div className="absolute inset-0 h-full min-w-[500px] w-1/2 flex flex-col justify-center items-center gap-6 mx-auto">
        <div>
          <span>&#x2B50;</span>
          <span>&#x2B50;</span>
          <span>&#x2B50;</span>
          <span>&#x2B50;</span>
          <span>&#x2B50;</span>
        </div>
        <p className="text-center leading-6 flex-wrap">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          necessitatibus dolores dignissimos cumque laboriosam illum ducimus
          minus harum rem. Alias laudantium et aspernatur, quas voluptates nemo
          aliquid quos saepe recusandae.
        </p>
        <div className="flex flex-col justify-center items-center gap-4">
          <div className="h-18 w-18 bg-red-400 rounded-full border-4 border-brandcolor"></div>
          <h3>JHONE DOE</h3>
          <p>Customer Review</p>
        </div>
      </div>
    </section>
  );
}
