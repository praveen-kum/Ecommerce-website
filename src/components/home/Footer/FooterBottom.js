import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-yellow-300 group">
      <div className="max-w-container mx-auto border-t-[1px]  ">
        <p className="text-titleFont font-bold text-end flex md:items-end  text-darkText duration-200 text-sm">
        <div className="sm:text-[12px]  ">
          |  &copy; <span>2023 Praveen </span> 
          <a href="#"></a> |
        </div>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
