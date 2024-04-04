import { FaFacebookF, FaDiscord, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

function JoinCommunity() {
  return (
    <section className="py-10 relative z-10 overflow-hidden bg-[#150b2a] ">
      <div className="container-wrapper">
        <div className=" flex justify-center gap-5 pb-16">
          <a
            href="https://t.me/Meowwif"
            target="_blank"
            className="  hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-4xl "
          >
            {" "}
            <FaTelegramPlane />
          </a>

          <a
            href="https://x.com/meowwif"
            target="_blank"
            className=" hover:bg-black  text-black hover:text-white bg-white rounded-full p-2 text-4xl"
          >
            <FaTwitter />
          </a>
        </div>
<p className="text-center font-bold text-white">© 2024 MEOWWIF • All Rights Reserved</p>
        <div className=" py-4">
          <img src="images/line.png" alt="" className=" mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default JoinCommunity;
