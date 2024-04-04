import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-hero mt-4">
   
      <div className="container-wrapper lg:h-[100vh]  pt-2 pb-0 lg:pt-0 lg:pb-0 lg:drop-shadow-[0_0_10rem_white]">
      <img src="images/star.png" alt="" className=" absolute left-[5%] top-[40%] floating" />
      <img src="images/star2.png" alt="" className=" absolute right-[5%] top-[40%] floating" />

        <div className=" text-center mt-4 sm:mt-10">
          <h1 className="text-center text-[#000] text-4xl  sm:text-8xl font-potta  pb-2 txt-s uppercase">
            {" "}
           CATWIF
          </h1>
          <p className=" font-inter font-normal text-lg sm:text-4xl mt-2">
          THE MINER HOLDING ALL BTC
          </p>

          <div className=" mt-4 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a href="https://bscscan.com/token/0x604c9d43e804f5d7e19e0f58e9352ee839cb8f2d" target="_blank" className=" btn-2 hover:bg-black  text-white hover:text-white font-inter text-xl sm:text-3xl rounded-lg px-14 pt-2 pb-3 ">
              Contract 
            </a>
            <a href="#" target="_blank" className=" btn-1 hover:bg-black  text-white hover:text-white font-inter text-xl sm:text-3xl rounded-lg px-14 pt-2 pb-3 ">
              Buy Now
            </a>
          </div>
          <div className=" py-4">
            <p className=" text-center text-xs sm:text-xl font-semibold">Contract : 0x604c9d43e804f5d7e19e0f58e9352ee839cb8f2d</p>
          </div>
        </div>
        <div className="hidden sm:flex justify-center  items-center mt-0 sm:mt-5 relative z-20 ">

          <img src="images/hero-img1.png" alt="" className="h-[230px] w-auto absolute left-[20%] top-0" />
          <img src="images/hero-img.png" alt="" className="h-[400px] w-auto" />
          <img src="images/hero-img2.png" alt="" className="h-[230px] w-auto absolute right-[18%] top-0" />
        </div>
        <div className="block lg:hidden sm:hidden">
          <Swiper
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <img src="images/hero-img.png" alt="" className="h-full w-full" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="images/hero-img1.png"
                alt=""
                className="h-full w-full"
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="images/hero-img2.png"
                alt=""
                className="h-full w-full"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Hero;
