import React from "react";
import taiwo1 from "../assets/taiwo1.jpg";
import taiwo2 from "../assets/taiwo2.jpg";
import taiwo3 from "../assets/taiwo3.jpg";
import taiwo4 from "../assets/taiwo4.jpg";
import Group from "../assets/Group.png";

const Our = () => {
  return (
    <div className="  bg-[#FFFFFF] font-Poppins ml-40 mt-20 ">
      <h1 className="justify-between items-center flex  text-[46px]  text-[#242527]  font-bold ">
        Our collection
      </h1>
      <h1 className=" text-[46px]  text-[#242527]  font-bold ">best project</h1>
      <div className=" ml-[10px] mt-[360px] absolute flex">
        <div className=" w-[150px] h-12 bg-[#FFFFFF] pl-3   ml-[250px]">
          <h1 className=" text-[16px]  font-bold text-[#242527]  ">
            Treasury Tawer
          </h1>
          <p className="text-[12px]  text-[#C4C4C4]">project completed</p>
        </div>
        <div className="bg-[#f59e0b] rounded-md hover:bg-[#2563eb]  h-12 w-12    pt-4 pl-2 ">
          <img src={Group} alt="king" />
        </div>
      </div>
      <div className="  justify-between items-center bg-[#FFFFFF]  max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-4 gap-6 font-Poppins">
        <img className="w-[250px]  mr-10 h-[350px]" src={taiwo1} alt="king" />
        <img className=" w-[250px] mr-10 h-[350px]" src={taiwo2} alt="king" />
        <img className=" w-[250px] mr-10 h-[350px]" src={taiwo3} alt="king" />
        <img className="w-[250px]  h-[350px]" src={taiwo4} alt="king" />
      </div>
    </div>
  );
};

export default Our;
