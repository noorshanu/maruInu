import Title from "components/Title";

function Roadmap() {
  return (
    <section className="relative z-10 bg-[#150b2a] py-8">
      <img
        src="images/asset1.webp"
        alt=""
        className=" absolute right-[-20%] h-[400px] top-0"
      />
      <img
        src="images/asset1.webp"
        alt=""
        className=" absolute left-[-20%] h-[300px] bottom-0 rotate-180"
      />
      <div className="container-wrapper mb-14">
        <Title className="text-center text-[#fff] mb-10 py-8 text-2xl sm:text-[45px] txt-s font-inter font-bold uppercase">
          Meow wif STORY
        </Title>

        {/* <img src="/images/roadmap.png" className="w-full" alt="" /> */}

        <div className="flex justify-between flex-col sm:flex-row gap-2 sm:px-0 px-4 relative z-30">
          <div className=" mt-0 sm:-mt-[5%]">
            <img
              src="images/img1.jpg"
              alt=""
              className="w-auto h-[300px] rounded-xl "
            />
            <p className=" pt-1  font-bold max-w-sm text-white">
              2013 James Howell trashed Bitcoin, <br /> saw no worth
            </p>
          </div>
          <div>
            <img
              src="images/img1.webp"
              alt=""
              className="w-auto h-[300px] rounded-xl"
            />

            <p className=" pt-1  font-bold max-w-sm text-white">
              MEOW WIF sniffs out gold in garbage.
            </p>
          </div>
          <div className="mt-0 sm:-mt-[5%]">
            <img
              src="images/img3.webp"
              alt=""
              className="w-auto h-[300px] rounded-xl  "
            />

            <p className=" pt-1  font-bold max-w-sm text-white">
              MEOW WIF starts mining, turns trash <br /> into treasure.
            </p>
          </div>
        </div>

        <div className="flex justify-between flex-col sm:flex-row gap-5 mt-4 sm:mt-14 sm:px-0 px-4 z-30 relative">
          <div className="mt-0 sm:mt-[5%]">
            <img
              src="images/img5.webp"
              alt=""
              className="w-auto h-[300px] rounded-xl "
            />

            <p className=" pt-1  font-bold max-w-sm text-white">
              Makes millions from discarded <br /> Bitcoin, thanks to Bitcoin
              boom.
            </p>
          </div>
          <div>
            <img
              src="images/bag.png"
              alt=""
              className="w-auto h-[300px] rounded-xl bg-[#02a6cc] p-2"
            />
            <p className=" pt-1  font-bold max-w-sm text-white">
              Bitcoin ETF hype and Halving buzz <br /> fuels MEOW WIF's fire.
            </p>
          </div>
          <div>
            <img
              src="images/img6.webp"
              alt=""
              className="w-auto h-[300px] rounded-xl mt-0  sm:mt-[5%]"
            />

            <p className=" pt-1  font-bold max-w-sm text-white">
              Top 20 riches await MEOW WIF
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
