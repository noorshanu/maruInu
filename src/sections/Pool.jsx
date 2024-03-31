function Pool() {
  return (
    <section className=" relative  pt-8 pb-16 ">
      <div className="container-wrapper text-center block relative z-10 bg-about rounded-3xl py-8 px-12">
        <div>
          <h1 className=" txt-s font-inter text-white font-bold text-2xl sm:text-[34px] uppercase">
            MARU MINING POOL
          </h1>

          <div className=" flex flex-col sm:flex-row justify-between gap-6 items-center py-6 ">

            <div className=" p-2 border-2 rounded-2xl border-white  shadow-xl">
              <img src="images/img10.jpg" alt="" className=" h-[250px] mx-auto rounded-2xl"  />

              <h2 className=" justify-center font-inter font-bold txt-s text-sm py-2 text-white">
                Level 1 (Silver) <br /> 1-3.0 BNB
              </h2>
            </div>

        
            <div className=" p-2 border-2 rounded-2xl border-white shadow-xl ">
              <img src="images/img9.webp" alt="" className=" h-[250px] mx-auto rounded-2xl"  />

              <h2 className=" justify-center font-inter font-bold txt-s text-sm py-2 text-white">
              Level 2 (Gold) <br />  3.01 - 5.0 BNB
              </h2>
            </div>
            
            <div className=" p-2 border-2 rounded-2xl border-white shadow-xl ">
              <img src="images/img8.webp" alt="" className=" h-[250px] mx-auto rounded-2xl"  />

              <h2 className=" justify-center font-inter font-bold txt-s text-sm py-2 text-white">
              Level 3 (Diamond + 10% Bonus) <br /> 5.01 - 8 BNB
              </h2>
            </div>
            
            <div className=" p-2 border-2 rounded-2xl border-white shadow-xl ">
              <img src="images/img7.webp" alt="" className=" h-[250px] mx-auto rounded-2xl"  />

              <h2 className=" justify-center font-inter font-bold txt-s text-sm py-2 text-white">
              Level 4 (Platinum + 25% Bonus) <br /> 8.01 - 12.5 BNB
              </h2>
            </div>

            

          </div>
         
        </div>
      </div>
    </section>
  );
}

export default Pool;
