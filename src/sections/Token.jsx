import Title from "components/Title";



function Token() {
  return (
    <section className="relative z-10 bg-story py-4">
   

      <div className="container-wrapper mb-14">
        <Title className="text-center text-[#000] mb-10 pt-8 text-2xl sm:text-[45px] txt-s font-inter font-bold uppercase">Meow wif TOKERNOMY</Title>

        {/* <img src="/images/roadmap.png" className="w-full" alt="" /> */}

        <div className="flex justify-between flex-col sm:flex-row gap-2 sm:px-0 px-4">
        <img src="images/token.png" alt="" className=" mx-auto p-0 sm:p-4 h-auto  sm:h-[550px] sm:mx-auto" />

        
        </div>
      </div>
    </section>
  );
}

export default Token;
