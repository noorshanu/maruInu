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
    <section className="relative z-10 overflow-hidden bg-hero  ">
      <div className=" overlay pt-1 ">
      <div className="container-wrapper lg:h-[100vh]  pt-2 pb-0 lg:pt-0 lg:pb-0 ">
      <img src="images/star.png" alt="" className=" absolute left-[5%] top-[40%] floating" />
      <img src="images/star2.png" alt="" className=" absolute right-[5%] top-[40%] floating" />

        <div className=" text-center mt-4 sm:mt-10">
          <h1 className="text-center text-[#fff] text-4xl  sm:text-8xl font-potta  pb-2 txt-s uppercase">
          Meow wif
          </h1>
          <p className=" font-inter font-normal text-lg sm:text-4xl mt-2 text-white">
          THE MINER HOLDING ALL BTC
          </p>

          <div className=" mt-4 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a href="#" target="_blank" className=" btn-2 hover:bg-black  text-white hover:text-white font-inter text-xl sm:text-3xl rounded-lg px-14 pt-2 pb-3 ">
              Contract 
            </a>
            <a href="#" target="_blank" className=" btn-1 hover:bg-black  text-white hover:text-white font-inter text-xl sm:text-3xl rounded-lg px-14 pt-2 pb-3 ">
              Buy Now
            </a>
          </div>
          <div className=" py-4">
            <p className=" text-center text-xs sm:text-xl font-semibold text-white text-s">Contract : 0x604c9d43e804f5d7e19e0f58e9352ee839cb8f2d</p>
          </div>
        </div>
        <div className="hidden sm:flex justify-center  items-center mt-0 sm:mt-5 relative z-20 ">

          <img src="images/hero-img1.png" alt="" className="h-[280px] w-auto absolute left-[10%] top-[9%]" />
          <img src="images/hero-img.png" alt="" className="h-[370px] w-auto" />
          <img src="images/hero-img2.png" alt="" className="h-[280px] w-auto absolute right-[12%] top-[9%]" />
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
      </div>
    </section>
  );
}

export default Hero;
