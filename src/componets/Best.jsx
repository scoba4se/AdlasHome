import React from "react";
import sco1 from "../assets/sco1.png";
import sco2 from "../assets/sco2.png";
import sco3 from "../assets/sco3.png";
import sco4 from "../assets/sco4.png";

const Best = () => {
  return (
    <div className="w-full   justify-center items-center bg-[#FFFFFF]  max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-4 gap-4 font-Poppins  ">
      <div className=" mt-[78px] ml-10">
        <div className="pl-2 pt-2 rounded-full  bg-[#d7d5db] ml-[60px] w-20 h-20">
          <div className=" pl-4 pt-2 rounded-full  bg-[#f59e0b] hover:bg-[#2563eb]  w-16 h-16">
            <img className="  pt-2" src={sco1} alt="king" />
          </div>
        </div>

        <ul>
          <h1 className="w-full text-2xl text-[#242527] font-bold p-5  ">
            Experienced
          </h1>
          <p className="p-1 pl-5 text-[#C4C4C4]">
            Our experience of 25 years of
          </p>
          <p className="p-1 pl-5  text-[#C4C4C4]">building and making</p>
          <p className=" pl-5 p-1 text-[#C4C4C4]">achievments in the world</p>
          <p className=" pl-5 p-1 text-[#C4C4C4]">of developement</p>
        </ul>
      </div>
      <div className="mt-[125px] ml-10 ">
        <div className="  pl-2 pt-2 rounded-full  bg-[#d7d5db] ml-[80px] w-20 h-20">
          <div className="pl-3 pt-4 rounded-full  bg-[#f59e0b] hover:bg-[#2563eb]   w-16 h-16">
            <img className=" " src={sco2} alt="king" />
          </div>
        </div>

        <ul className="pt-2">
          <h1 className="w-full text-2xl text-[#242527]  font-bold p-5 ">
            Competitive price
          </h1>
          <p className="p-1 pl-5 text-[#C4C4C4]">The prices we offer you are</p>
          <p className="p-1 pl-5  text-[#C4C4C4]">very competitive without</p>
          <p className=" pl-5 p-1 text-[#C4C4C4]">
            reducing the queality of the
          </p>
          <p className=" pl-5 p-1 text-[#C4C4C4]">company's work in the</p>
          <p className=" pl-5 p-1 text-[#C4C4C4]">slightest</p>
        </ul>
      </div>
      <div className="mt-[72px] ml-10">
        <div className=" pl-2 pt-2 rounded-full  bg-[#d7d5db] ml-[80px] w-20 h-20">
          <div className=" pl-3 pt-3 rounded-full  bg-[#f59e0b] hover:bg-[#2563eb]  w-16 h-16">
            <img className="" src={sco3} alt="king" />
          </div>
        </div>

        <ul>
          <h1 className="w-full text-2xl font-bold p-5 text-[#242527]  ">
            Competitive price
          </h1>
          <p className="p-1 pl-5 text-[#C4C4C4]">on Time</p>
          <p className="p-1 pl-5  text-[#C4C4C4]">
            We prioritize the queality of
          </p>
          <p className=" pl-5 p-1 text-[#C4C4C4]">
            our work and finish it on time
          </p>
        </ul>
      </div>
      <div className="mt-[82px]">
        <div className=" pl-2 pt-2 rounded-full ml-[100px]  bg-[#d7d5db]  w-20 h-20">
          <div className=" pl-3 pt-4 rounded-full  bg-[#f59e0b] hover:bg-[#2563eb]  w-16 h-16">
            <img className="" src={sco4} alt="king" />
          </div>
        </div>

        <ul className="ml-10">
          <h1 className="w-full text-2xl  text-[#242527] font-bold p-5 ">
            Best Materials
          </h1>
          <p className="p-1 pl-5 text-[#C4C4C4]">
            The material determines the{" "}
          </p>
          <p className="p-1 pl-5  text-[#C4C4C4]">building itself so we</p>
          <p className=" pl-5 p-1 text-[#C4C4C4]">recommend that you use</p>
          <p className=" pl-5 p-1 text-[#C4C4C4]">
            the best & quality materials
          </p>
          <p className=" pl-5 p-1 text-[#C4C4C4]">in its class.</p>
        </ul>
      </div>
    </div>
  );
};

export default Best;
