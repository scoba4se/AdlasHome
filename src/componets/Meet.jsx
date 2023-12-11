import React from "react";
import kolapo from "../assets/kolapo.jpg";
import MaskG from "../assets/MaskG.png";
import Vector1 from "../assets/Vector 1.png";

const Meet = () => {
  return (
    <div className=" ml-20  grid gap-6 md:grid-cols-2 p-6   bg-[#FFFFFF] font-Poppins  justify-center  ">
      <div className=" w-[230px]  absolute font-medium text-black    bg-[#f59e0b] ml-[300px]   hover:bg-[#2563eb] p-6 mt-20 ">
        <img
          className="mt-2 w-[80px] rounded-full ml-12"
          src={kolapo}
          alt="king"
        />
        <ul>
          <h1 className="w-full text-2xl font-bold  pl-8 ">Mr Kolapo</h1>
          <p className=" pl-4 ">
            More than 20 years of experience in the field of buildings and
            worked on project up to 50+
          </p>
        </ul>
      </div>
      <div className="">
        <img className="w-[500px]  " src={MaskG} alt="king" />
      </div>

      <div className="pl-6">
        <ul className=" mt-[120px] text-[18px]">
          <h1 className="text-[46px] font-bold  ">Meet and talk with</h1>
          <h1 className="text-[46px] font-bold ">our best architecture</h1>
          <p className="p-1 pl-5  text-[#C4C4C4]">
            All our teams are professional and competent in
          </p>
          <p className=" pl-5 p-1 text-[#C4C4C4]">
            their fields and will help you realize your dream
          </p>
          <p className=" pl-5 p-1 text-[#C4C4C4]">
            building with the excellent result.
          </p>

          <div className=" mt-20">
            <div className=" absolute">
              <img
                className=" h-[14px]  ml-[360px] mt-10 "
                src={Vector1}
                alt="king"
              />
            </div>
            <button className="bg-[#f59e0b] text-[16px] font-bold w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 hover:bg-[#2563eb]  text-[#FFFFFF]">
              see all team
            </button>
            <button className="pl-2 text-[16px]  w-[200px]   mx-auto md:mx-0 py-3 text-[#242527] rounded-md hover:bg-[#2563eb] font-bold">
              How it works
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Meet;
