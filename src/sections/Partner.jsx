import React from "react";
import Title from "components/Title";

function Partner() {
  return (
    <section className=" my-8">
      <div className=" container-wrapper text-center block relative z-10 bg-about rounded-3xl py-8 px-12">
        <div className=" ">
          <Title className="text-center text-[#fff] mb-10 py-8 text-2xl sm:text-[45px] txt-s font-inter font-bold">
            Our Partners
          </Title>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-4 items-center gap-3  rounded-2xl py-2 px-6">
          <img src="part/bsc.svg" alt="" className=" w-[180px] h-auto " />
          <a href="https://coinsult.net/projects/meowwif/" target="_blank">
            <img src="part/img2.png" alt="" className=" w-[180px] h-auto " />
          </a>

          <a href="https://www.pinksale.finance/" target="_blank">
            {" "}
            <img
              src="images/pink.png"
              alt=""
              className=" w-[180px] h-auto   "
            />
          </a>

          <a
            href="https://www.dextools.io/app/en/solana/socials-recently-updated"
            target="_blank"
          >
            {" "}
            <img src="part/img12.png" alt="" className=" w-[180px] h-auto " />
          </a>
          <a href="https://www.dexview.com/" target="_blank">
            <img
              src="part/img14.png"
              alt=""
              className=" w-[180px] h-auto invert  "
            />
          </a>

          <img src="part/img11.png" alt="" className=" w-[180px] h-auto " />

          <img src="part/img4.png" alt="" className=" w-[180px] h-auto " />
          <img src="part/img5.png" alt="" className=" w-[180px] h-auto " />
          <img src="part/img6.png" alt="" className=" w-[180px] h-auto " />
          <img src="part/img7.png" alt="" className=" w-[180px] h-auto " />
          <img src="part/img8.png" alt="" className=" w-[180px] h-auto " />
          <img src="part/img9.png" alt="" className=" w-[180px] h-auto " />
          <img src="part/img10.png" alt="" className=" w-[180px] h-auto " />

          <img src="part/raid.svg" alt="" className=" w-[180px] h-auto " />

          <img src="part/img3.png" alt="" className=" w-[180px] h-auto " />
          <img
            src="part/img16.png"
            alt=""
            className=" w-[180px] h-auto  invert "
          />
        </div>
      </div>
    </section>
  );
}

export default Partner;
