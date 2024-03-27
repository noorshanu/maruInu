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
    <section className="relative z-10 overflow-hidden bg-[#FFE600]">
      <div className="container-wrapper lg:h-[100vh]  pt-2 pb-0 lg:pt-0 lg:pb-0 lg:drop-shadow-[0_0_10rem_white]">
        <div className=" text-center mt-4 sm:mt-10">
          <h1 className="text-center text-[#000] text-4xl  sm:text-8xl font-potta  pb-2 txt-s">
            {" "}
            maru inu
          </h1>
          <p className=" font-potta text-lg sm:text-4xl mt-2">
            Never underestimate the value of useless shit garbage!
          </p>

          <div className=" mt-4 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a href="https://solscan.io/token/e8gngLfUoWBYFd3hygUZh2j7wia6VwrMffTcHPvJwdK" target="_blank" className=" bg-[#f79a2b] hover:bg-black  text-black hover:text-white font-potta text-xl sm:text-3xl rounded-lg px-14 pt-2 pb-3 ">
              Contract 
            </a>
            <a href="https://www.dextools.io/app/en/solana/pair-explorer/6fHv7mnqXs6Vwyd9tdbsctj21xXsZdMpx6xVguzBaFHd?t=1709292217441" target="_blank" className=" bg-[#f79a2b] hover:bg-black  text-black hover:text-white font-potta text-xl sm:text-3xl rounded-lg px-14 pt-2 pb-3 ">
              Buy Now
            </a>
          </div>
          <div className=" py-4">
            <p className=" text-center text-xl font-semibold">Contract : e8gngLfUoWBYFd3hygUZh2j7wia6VwrMffTcHPvJwdK</p>
          </div>
        </div>
        <div className="hidden sm:flex justify-center gap-8 items-center mt-0 sm:mt-5 ">
          <img src="images/hero-img.png" alt="" className="h-[350px] w-auto" />
          <img src="images/hero-img1.png" alt="" className="h-[350px] w-auto" />
          <img src="images/hero-img2.png" alt="" className="h-[350px] w-auto" />
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
