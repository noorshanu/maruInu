import Title from "components/Title";

function About() {
  return (
    <section className=" relative  pt-8 pb-16">
      <div className="container-wrapper relative">
        <img src="images/btc.png" alt="" className=" block sm:absolute h-auto sm:h-[320px] top-[15%] right-[1%]"/>
        <div className="text-center block relative z-30 bg-[#150b2a] rounded-3xl py-8 max-w-5xl mr-auto px-4" >
          <h1 className=" txt-s font-inter text-white font-bold text-2xl sm:text-[45px] uppercase">
            ABOUT 
          </h1>
          <p className=" font-inter text-center text-lg sm:text-[30px] font-normal max-w-5xl mx-auto lh-1_8 pt-6 text-white">
          In da wild crypto world, James Howell once tossed aside 16,000 bitcoins, said they were trash. But MEOW WIF, da smart cat, sniffed them out and started mining. Now, with Bitcoin ETF hype and halving buzz, dat trash turned to treasure, valued in da millions. Top 20 riches await MEOW WIF. Lesson learned: Never underestimate crypto magic.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
