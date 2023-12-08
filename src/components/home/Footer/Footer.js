import Aos from "aos";
import React from "react";
import { useEffect } from "react";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  useEffect(() => {
    Aos.init(2000);
  }, [])
  return (
    <div id="works" className=" mx-auto m-auto h-[200px]  mt-16 sm:h-[200px]">
      <div className=" bg-gray-300 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <div
        data-aos="zoom-out"
         className="  font-bold text-[25px] text-sm">Reach us through Social Media</div>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a 
          data-aos="fade-up" data-aos-duration="1000"

            href="https://t.me/PraveenkumarParadesi"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaTelegramPlane className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Telegram</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1200"

            href="https://api.whatsapp.com/send?phone=917095392139"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoWhatsapp className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>WhatsApp</p>
          </a>
          <a 
          data-aos="fade-up" data-aos-duration="1400"

            href="https://www.instagram.com/praveen_9866/"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        
      </div>
      
    </div>
  );
};

export default Footer;
