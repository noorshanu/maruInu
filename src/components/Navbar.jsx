import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <nav className="z-[100] nav-bgf bg-[#150b2a]  ">
        <div className="container-wrapper border-none sm:border-2 border-[#fff]  h-14 lg:h-20 rounded-2xl flex justify-between lg:justify-normal lg:grid lg:grid-cols-[1fr_20rem_1fr] gap-8 items-center">
          <div className="items-center justify-between text-base font-medium text-white flex px-4 w-full sm:w-auto  sm:px-0 lg:flex">
            <div className=" flex gap-2 items-center">
              <img
                src="/images/fav.png"
                className="h-[40px] sm:h-[70px] w-auto "
                alt=""
              />
              <h1 className="text-center text-[#fff] text-base  sm:text-lg font-potta  pb-2 txt-s uppercase stroke-1">
                {" "}
                Meow wif
              </h1>
            </div>

            <button
              className="text-2xl text-white flex lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <IoMenu />
            </button>
          </div>

          <div className="items-center justify-between  text-base font-medium text-white hidden lg:flex gap-4 w-full ml-[-7rem]">
       
            <a href="#about" className="cursor-pointer text-sm xl:text-base">
              About
            </a>
         

            <Link
              to="story"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Story
            </Link>

            <Link
              to="token"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Tokernomy
            </Link>
            <Link
              to="roadmap"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Roadmap
            </Link>
            <a
              href="https://meow-wif.gitbook.io/meow-wif/"
              target="_blank"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
            Whitepaper
            </a>
            <a
              href="https://coinsult.net/projects/meowwif/"
              target="_blank"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
             Audit 
            </a>
          </div>

          <div>
          <div className=" flex justify-center gap-5  w-full">
          <a
            href="https://t.me/Meowwif"
            target="_blank"
            className="  hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-2xl "
          >
            {" "}
            <FaTelegramPlane />
          </a>

          <a
            href="https://x.com/meowwif"
            target="_blank"
            className=" hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-2xl"
          >
            <FaTwitter />
          </a>
        </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 right-0 w-[16rem] h-screen z-[999] bg-white border-l-4 border-primary pt-6 px-8 transition-all duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-[16rem]"
        }`}
      >
        <div className="flex items-center justify-between mb-8 z-50">
          <img src="/images/logo.png" className="w-full max-w-[9rem]" alt="" />

          <button className="text-black text-2xl" onClick={toggleSidebar}>
            <IoClose />
          </button>
        </div>

        <div className="space-y-5 flex flex-col text-left items-start text-black font-medium">
        <Link
              to="/"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Home
            </Link>
            <Link  onClick={() => setSidebarOpen(false)} to="about" className="cursor-pointer text-sm xl:text-base">
              About
            </Link>
         

            <Link
              to="story"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Story
            </Link>

            <Link
              to="token"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              TOKERNOMY
            </Link>
            <Link
              to="roadmap"
              onClick={() => setSidebarOpen(false)}
              className="cursor-pointer text-sm xl:text-base"
            >
              Roadmap
            </Link>
        </div>
      </div>

      <div
        className={`black-screen z-[900] ${sidebarOpen ? "show" : ""}`}
        onClick={toggleSidebar}
      ></div>
    </>
  );
}

export default Navbar;
