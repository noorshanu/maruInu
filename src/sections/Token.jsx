import Title from "components/Title";



function Token() {
  return (
    <section className="relative z-10 bg-story py-4">
      <img src="images/asset1.webp" alt="" className=" absolute left-[-25%] h-[400px] top-0" />
      <img src="images/asset1.webp" alt="" className=" absolute right-[-20%] h-[400px] top-0" />
      <img src="images/coin2.png" alt="" className=" absolute bottom-0 right-0" />
      <img src="images/coin1.png" alt="" className=" absolute bottom-0 left-0 floating" />
   

      <div className="container-wrapper mb-14">
        <Title className="text-center text-[#fff] mb-10 pt-8 text-2xl sm:text-[45px] txt-s font-inter font-bold uppercase"> TOKERNOMY</Title>

        {/* <img src="/images/roadmap.png" className="w-full" alt="" /> */}

        <div className="flex justify-between flex-col sm:flex-row gap-2 sm:px-0 px-4">
        <img src="images/token.png" alt="" className=" mx-auto p-0 sm:p-4 h-auto  sm:h-[550px] sm:mx-auto" />

        
        </div>
      </div>
    </section>
  );
}

export default Token;
