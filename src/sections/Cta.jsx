import Title from "components/Title";

function Cta() {
  return (
    <section className=" relative  pt-8 pb-16">
      <div className="container-wrapper text-center block relative z-10 bg-about rounded-3xl py-8 px-3">
        <div>
          <h1 className=" txt-s font-inter text-white font-bold text-2xl uppercase sm:text-[45px] py-4">
            Our Product
          </h1>
          <div className=" flex items-center gap-8 justify-center flex-col sm:flex-row mt-4">
            <div className="flex flex-col  justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[300px] h-[430px]">
              <div>
                <p className="font-ninja text-white font-inter font-bold txt-s">
                  Explore the NFT Wonderland
                </p>
              </div>

              <div className="w-[250px] mb-3  border-none rounded-2xl overflow-hidden">
                <img src="images/img7.webp" alt="" className="" />
              </div>
              <p className=" text-white">
              Dive Into The Depths Of Meme Mastery With MEOW Wif Epic NFT Collection! Explore A Wonderland Of Rare And Hilarious NFTs
              </p>
            </div>

            <div className="flex flex-col  justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[300px] h-[430px]">
              <div>
              <p className="font-ninja text-white font-inter font-bold txt-s">The Culture Coin of Solana</p>
              </div>

              <div className="w-[250px] mb-3 border-none rounded-2xl overflow-hidden">
                <img src="images/img6.webp" alt="" className="" />
              </div>

            <p className=" text-white">
            Vibes Are Legendary, Just Like His Memes! Become Part Of The Solana Culture With Meow Wif By Your Side. From Memes To Community Events.
            </p>
            </div>

            <div className="flex flex-col  justify-center items-center overflow-hidden rounded-xl border border-[#fff] w-[300px] h-[430px]">
              <div>
              <p className="font-ninja text-white font-inter font-bold txt-s">Meow Staking</p>
              </div>

              <div className="w-[250px] mb-3 border-none rounded-2xl overflow-hidden">
                <img src="images/img3.webp" alt="" className="" />
              </div>
                <p className=" text-white">
                staking  In da wild crypto world, James Howell once tossed aside 16,000 bitcoins, said they were trash. But MEOW WIF, da smart cat.
                </p>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
