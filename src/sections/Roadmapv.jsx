import React from "react";
import Title from "components/Title";
function Roadmapv() {
  return (
    <section className="relative z-10 bg-story py-4">
       <img src="images/asset1.webp" alt="" className=" absolute right-[-20%] h-[400px] top-0" />
      <div className="container-wrapper mb-14">
        <Title className="text-center text-[#000] mb-10 pt-8 text-2xl sm:text-[45px] txt-s font-inter font-bold">
        MEOW WIF
 ROADMAP
        </Title>

        {/* <img src="/images/roadmap.png" className="w-full" alt="" /> */}

        <div className="flex justify-center gap-2 flex-col sm:flex-row  sm:px-0 px-4 relative z-10">
            <img src="images/img6.webp" alt="" className=" block sm:absolute left-0 right-0 h-auto sm:h-[400px] rounded-3xl mx-auto top-[10%]" />
          <div className=" relative z-40 w-[300px] mx-auto">
            <div className=" bg-white rounded-3xl py-4 px-6 shadow-2xl">
                <h2 className=" uppercase text-2xl font-bold py-4 text-center">
                    PHASE 1
                </h2>
              <p className=" text-lg uppercase py-1">Ideation stage</p>
              <p className=" text-lg uppercase py-1">CoNcept finalisation</p>

                 <p className=" text-lg uppercase py-1">Whitepaper</p>

                 <p className=" text-lg uppercase py-1">Contract Creation</p>

                 <p className=" text-lg uppercase py-1">KYC SAFU AUDIT</p>

                 <p className=" text-lg uppercase py-1">LISTING ON PINKSALE</p>

                 <p className=" text-lg uppercase py-1">FAIRLAUNCH</p>

                 <p className=" text-lg uppercase py-1">Raydium LISTING</p>

                 <p className=" text-lg uppercase py-1">CMC LISTING</p>

                 <p className=" text-lg uppercase py-1">COINGECKO LISTING</p>

                 <p className=" text-lg uppercase py-1">1000+ Holders</p>
            </div>
          </div>

          <div className=" relative z-40 w-[300px] flex flex-col gap-4 mx-auto mt-4">
            <div className=" bg-white rounded-3xl py-4 px-6 shadow-2xl">
            <h2 className=" uppercase text-2xl font-bold py-4 text-center">
                    PHASE 2
                </h2>
                 <p className=" text-lg uppercase py-1">5k+ Holders</p>
                 <p className=" text-lg uppercase py-1">StrAtegic Partnership</p>
                 <p className=" text-lg uppercase py-1">CEX Listing</p>

                 <p className=" text-lg uppercase py-1">Meow Wif mining launch</p>
            </div>

            <div className=" bg-white rounded-3xl py-4 px-6 w-[300px] mx-auto shadow-2xl">
            <h2 className=" uppercase text-2xl font-bold py-4 text-center">
                    PHASE 3
                </h2>
                 <p className=" text-lg uppercase py-1">20K+ Holders</p>
                 <p className=" text-lg uppercase py-1">T1 CEX LISTING</p>
                 <p className=" text-lg uppercase py-1">TO THE MOON</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmapv;
