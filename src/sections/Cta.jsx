import Title from "components/Title";

function Cta() {
  return (
    <section className=" relative  pt-8 pb-16">
      <div className="container-wrapper text-center block relative z-10 bg-about rounded-3xl py-8">
        <div>
          <h1 className=" txt-s font-inter text-white font-bold text-2xl sm:text-[45px]">
            JOIN US MARU INU
          </h1>
          <p className=" font-inter text-center text-lg sm:text-[30px] font-normal max-w-5xl mx-auto lh-1_8 pt-6 text-white">
            In the world of crypto calamity, James Howell once tossed aside
            16,000 bitcoins, deeming them worthless. But Maru Inu, the smart
            dog, sniffed them out and began mining. Now, fueled by Bitcoin ETF
            buzz and halving hype, that trash has become treasure as those
            discarded bitcoins are valued in the millions.
          </p>

          <a href="#" target="_blank" className=" btn-1 hover:bg-black  text-white hover:text-white font-inter text-xl sm:text-3xl rounded-lg px-14 pt-2 pb-3 ">
              Buy Now
            </a>
        </div>
      </div>
    </section>
  );
}

export default Cta;
