import React, { useState } from "react";
import presi02 from "../assets/presi02.jpg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Bar = () => {
  const [bar, setBar] = useState(false);

  const handleBar = () => {
    setBar(!bar);
  };
  return (
    <div className="flex justify-between pb-20 bg-[#222222] items-center font-Poppins pt-20 text-[#FFFFFF]     max-w-[1240] mx-auto  ">
      <div className=" ">
        <img className=" w-[150px]  mx-auto  " src={presi02} alt="scoba" />
      </div>
      <ul className="hidden md:flex">
        <li className=" font-bold p-4  ">Home</li>
        <li className="font-bold p-4  text-[#C4C4C4]">Services</li>
        <li className="font-bold p-4 text-[#C4C4C4] ">Find a Team</li>
        <li className=" font-bold p-4 mr-10 text-[#C4C4C4] ">About Us</li>
        <li className=" font-bold p-4 mr-10 text-[#C4C4C4] ">Articles</li>
        <li className=" font-bold p-4 mr-10 text-[#C4C4C4] ">Portofolio</li>
        <li className=" font-bold p-4 mr-20 text-[#C4C4C4]  ">Contact us</li>
      </ul>
      <div
        onClick={handleBar}
        className="block hover:bg-[#2563eb] md:hidden z-10"
      >
        {!bar ? <AiOutlineClose size={40} /> : <AiOutlineMenu size={40} />}
      </div>
      <div
        className={
          !bar
            ? "fixed overflow-y-hidden md:hidden  left-0 top-0 w-[30%] h-full border-r-gray-900  bg-[#f59e0b] text-black  hover:bg-[#2563eb]   ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="py-6  ">
          <img className=" w-[100px]  mx-auto  " src={presi02} alt="scoba" />
        </div>
        <ul className=" uppercase p-6">
          <li className=" border-b border-gray-600 font-bold p-4 ">Home</li>
          <li className=" border-b border-gray-600 font-bold p-4 ">Services</li>
          <li className="border-b border-gray-600 font-bold p-4  ">
            Find a Team
          </li>
          <li className=" border-b border-gray-600 font-bold p-4 ">About Us</li>
          <li className="border- border-gray-600 font-bold p-4 ">Articles</li>
          <li className="border-b border-gray-600 font-bold p-4  ">
            Portofolio
          </li>
          <li className=" font-bold border-gray-600 p-4  ">Contact us</li>
        </ul>
      </div>
    </div>
  );
};

export default Bar;
