import Title from "components/Title";



function Token() {
  return (
    <section className="relative z-10 bg-story py-4">
      {/* <img src="images/asset1.webp" alt="" className=" absolute left-[-25%] h-[120px] sm:h-[400px] top-0" /> */}
      <img src="images/asset1.webp" alt="" className=" absolute right-[-25%] h-[120px] sm:h-[350px] bottom-0 rotate-180" />
      <img src="images/paw.png" alt="" className=" absolute right-0 left-[18%]  top-0" />
      {/* <img src="images/coin2.png" alt="" className=" absolute bottom-[1%] right-[6%] floating h-[120px] sm:h-auto" /> */}
      <img src="images/coin1.png" alt="" className=" absolute bottom-0 left-[5%] floating h-[120px] sm:h-auto" />
   

      <div className="container-wrapper mb-14">
        <Title className="text-center text-[#fff] mb-10 pt-8 text-2xl sm:text-[45px] txt-s font-inter font-bold uppercase relative z-30"> TOKERNOMY</Title>

        {/* <img src="/images/roadmap.png" className="w-full" alt="" /> */}

        <div className="flex justify-between items-center flex-col sm:flex-row gap-2 sm:px-0 px-4 relative z-30">
          <div className=" w-full">
            <h1 className="text-2xl font-bold text-white py-4 text-center">How To Buy</h1>

            <div>
              <a href="https://phantom.app/" target="_blank" className="howbuy justify-center">
                <p className=" text-center font-bold text-xl text-white">DOWNLOAD AND INSTALL PHANTOM</p>
              </a>
              <a href="#" className="howbuy justify-center">
                <p className=" text-center font-bold text-xl text-white">PURCHASE SOME SOLANA</p>
              </a>

              <a href="#" className="howbuy justify-center">
                <p className=" text-center font-bold text-xl text-white">BUY $MEOWWIF ON PINKSALE</p>
              </a>
            </div>
          </div>
        <img src="images/token2.png" alt="" className=" mx-auto p-0 sm:p-4 h-auto  sm:h-[500px] sm:mx-auto" />

        
        </div>
      </div>
    </section>
  );
}

export default Token;
