import Title from "components/Title";

function Cta() {
  return (
    <section className=" relative  pt-8 pb-16">
      <div className="container-wrapper text-center block relative z-10 bg-about rounded-3xl py-8 px-3">
        <div>
          <h1 className=" txt-s font-inter text-white font-bold text-2xl uppercase sm:text-[45px]">
            Our Product
          </h1>
          <div className=" flex items-center gap-8 justify-center flex-col sm:flex-row mt-4">
            <div className="flex flex-col flex-wrap justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[300px] h-[300px]">
              <div>
                <p className="font-ninja text-white font-inter font-bold txt-s">
                  Explore the Nft Wif
                </p>
              </div>

              <div className="w-[250px] mb-3  border-none rounded-2xl overflow-hidden">
                <img src="images/img7.webp" alt="" className="" />
              </div>
            </div>

            <div className="flex flex-col  justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[300px] h-[300px]">
              <div>
              <p className="font-ninja text-white font-inter font-bold txt-s">Telgram Bot</p>
              </div>

              <div className="w-[250px] mb-3 border-none rounded-2xl overflow-hidden">
                <img src="images/img6.webp" alt="" className="" />
              </div>

            
            </div>

            <div className="flex flex-col  justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[300px] h-[300px]">
              <div>
              <p className="font-ninja text-white font-inter font-bold txt-s">Meow Staking</p>
              </div>

              <div className="w-[250px] mb-3 border-none rounded-2xl overflow-hidden">
                <img src="images/img3.webp" alt="" className="" />
              </div>

            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
