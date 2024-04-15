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
      <img src="images/star.png" alt="" className=" absolute left-[5%] top-[50%] sm:top-[40%] floating" />
      <img src="images/star2.png" alt="" className=" absolute right-[5%] top-[50%] sm:top-[40%] floating" />

        <div className=" text-center mt-4 sm:mt-10">
          <h1 className="text-center text-[#fff] text-4xl  sm:text-8xl font-potta  pb-2 txt-s uppercase stroke-2">
          Meow wif
          </h1>
          <p className=" font-inter font-normal text-lg sm:text-4xl mt-2 text-white">
          THE MINER HOLDING ALL BTC
          </p>

          <div className=" mt-4 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <a href="https://meow-wif.gitbook.io/meow-wif/" target="_blank" className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 btn-2 hover:bg-black  text-white hover:text-white font-inter text-xl sm:text-2xl rounded-lg px-12 pt-2 pb-3 ">
            Whitepaper
            </a>
            <a href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=DFTbp7ErNEKUuQFv8dQu8aRSXjzmijYxbZ19rvwJwPgw&fixed=in" target="_blank" className=" btn-1 hover:bg-black  text-white hover:text-white font-inter text-xl sm:text-2xl rounded-lg px-12 pt-2 pb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
              Buy Now
            </a>
            <a href="https://www.dextools.io/app/en/solana/pair-explorer/7iViKiLuciK9bAWoW8Tpcj34JKN1tRyKRauQoSP1zsKb?t=1713157926583" target="_blank" className=" btn-1 hover:bg-black  text-white hover:text-white font-inter text-xl sm:text-2xl rounded-lg px-12 pt-2 pb-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
              DexTools
            </a>
          
          </div>
          <div className=" py-4">
            <p className=" text-center text-xs sm:text-xl font-semibold text-white text-s">Contract : DFTbp7ErNEKUuQFv8dQu8aRSXjzmijYxbZ19rvwJwPgw</p>
          </div>
          <div className=" flex  justify-center flex-col sm:flex-row  gap-6 pb-4">
            <a href="https://coinsult.net/projects/meowwif/" target="_blank" className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 flex justify-center items-center gap-2 text-white hover:text-white font-inter text-xl sm:text-2xl">
            Audited by <img src="images/coinsult.png" alt=""  className=" h-[30px]"/>
          </a>
          <a href="https://pinksale.notion.site/MeowWif-KYC-Verification-4b298c64923741cdbf2b3499edc3dd79"  className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 flex justify-center items-center gap-2 text-white hover:text-white font-inter text-xl sm:text-2xl">KYC by <img src="images/pink.png" alt="" className=" h-[50px]" /></a>
          </div>
        </div>
        <div className="hidden sm:flex justify-center  items-center mt-0 sm:mt-5 relative z-20 ">

          {/* <img src="images/hero-img1.png" alt="" className="h-[230px] w-auto absolute left-[10%] top-[34%]" />
          <img src="images/hero-img.png" alt="" className="h-[370px] w-auto" />
          <img src="images/hero-img2.png" alt="" className="h-[230px] w-auto absolute right-[10%] top-[34%]" /> */}
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
