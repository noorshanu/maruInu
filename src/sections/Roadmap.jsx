import Title from "components/Title";



function Roadmap() {
  return (
    <section className="relative z-10 bg-story py-8">
   

      <div className="container-wrapper mb-14">
        <Title className="text-center text-[#000] mb-10 py-8 text-2xl sm:text-[45px] txt-s font-inter font-bold">Maru  STORY</Title>

        {/* <img src="/images/roadmap.png" className="w-full" alt="" /> */}

        <div className="flex justify-between flex-col sm:flex-row gap-2 sm:px-0 px-4">
        <img src="images/img1.jpg" alt="" className="w-auto h-[300px] rounded-xl mt-0 sm:-mt-[5%] " />
        <img src="images/img2.webp" alt="" className="w-auto h-[300px] rounded-xl" />
        <img src="images/img3.webp" alt="" className="w-auto h-[300px] rounded-xl mt-0 sm:-mt-[5%] " />

        
        </div>

        <div className="flex justify-between flex-col sm:flex-row gap-5 mt-4 sm:mt-14 sm:px-0 px-4">
        <img src="images/img4.webp" alt="" className="w-auto h-[300px] rounded-xl mt-0 sm:mt-[5%]" />
        <img src="images/img5.webp" alt="" className="w-auto h-[300px] rounded-xl" />
        <img src="images/img6.webp" alt="" className="w-auto h-[300px] rounded-xl mt-0  sm:mt-[5%]" />

        
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
