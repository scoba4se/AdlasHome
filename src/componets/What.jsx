import React from "react";

const What = () => {
  return (
    <div className=" grid gap-6 md:grid-cols-2 p-12  bg-[#FFFFFF]  font-Poppins">
      <div className="flex">
        <div className="w-[90px]  h-[9px] bg-[#f59e0b] hover:bg-[#2563eb]"></div>
        <ul className="mt-6 ml-20 ">
          <h2 className=" w-full text-3xl font-bold ">What Make Us </h2>
          <h2 className=" w-full text-3xl font-bold ">Different?</h2>
        </ul>
      </div>
      <div className=" pl-10">
        <ul className=" mt-6  text-[#C4C4C4]">
          <li className="p-1">
            Check out our best service you can possibly orders in building
          </li>
          <li className="p-1">
            your company and don't forget to ask via our email or our
          </li>
          <li className="p-1">
            customer service if you are interested in using our services
          </li>
        </ul>
      </div>
    </div>
  );
};

export default What;
