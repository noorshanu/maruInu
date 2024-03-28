import Title from "components/Title";

function About() {
  return (
    <section className=" relative  pt-8 pb-16">
      <div className="container-wrapper text-center block relative z-10 bg-about rounded-3xl py-8">
        <div>
          <h1 className=" txt-s font-inter text-white font-bold text-2xl sm:text-[45px]">ABOUT MARU INU</h1>
          <p className=" font-inter text-center text-lg sm:text-[30px] font-normal max-w-5xl mx-auto lh-1_8 pt-6 text-white">
          Once upon a crypto-calamity, a man (james Howells) nonchalantly tossed
16,000 Bitcoins into the garbage, deeming them worthless. Little did he
know, his trash became a treasure as those discarded Bitcoins now
sparkle with a value in the millions. Moral of the story: Never
underestimate the magic of crypto dust!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
