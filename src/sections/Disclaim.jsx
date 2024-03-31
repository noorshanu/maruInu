import Title from "components/Title";

function Disclaim() {
  return (
    <section className=" relative  pt-8 pb-16">
      <div className="container-wrapper text-center block relative z-10 bg-about rounded-3xl py-8">
        <div>
          <h1 className=" txt-s font-inter text-white font-bold text-2xl sm:text-[45px]">DISCLAIMER</h1>
          <p className=" font-inter text-center text-lg sm:text-[30px] font-normal max-w-5xl mx-auto lh-1_8 pt-6 text-white">
          $MARU is a meme coin with no intrinsic value or expectation of financial return. It is created for entertainment purposes only. When you purchase $MARU, you agree that you've read and understood this
          </p>
        </div>
      </div>
    </section>
  );
}

export default Disclaim;
