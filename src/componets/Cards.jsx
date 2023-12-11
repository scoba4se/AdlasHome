import React from "react";
import presi09 from "../assets/presi09.jpg";
import download from "../assets/download.jpeg";
import paint1 from "../assets/Paint1.png";

const Cards = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-6 bg-[#FFFFFF] font-Poppins text-[#C4C4C4]  font-medium justify-center items-center ">
      <div className=" pl-2  ">
        <img className=" h-[250px]  w-[340px] " src={paint1} alt="king" />
        <ul className=" ">
          <h1 className="w-full text-2xl font-bold p-5 text-[#242527] ">
            Industrial
          </h1>
          <p className="p-1 pl-5 text-[#C4C4C4] ">
            Industrial development is our main
          </p>
          <p className="p-1 pl-5 text-[#C4C4C4] ">
            line of business. We do faactory
          </p>
          <p className=" pl-5 p-1 text-[#C4C4C4] ">
            Construction, Warehouse and others
          </p>
          <p className=" pl-5 p-1 text-[#C4C4C4] "> House & Apartments</p>
        </ul>
      </div>

      <div className="pl-5 pr-5">
        <img className=" mt-4 h-[200px] w-[300px]" src={download} alt="king" />
        <ul>
          <h1 className="w-full text-2xl font-bold p-5 text-[#242527] ">
            Commercial
          </h1>
          <p className="p-1 pl-5 text-[#C4C4C4] ">Commercial</p>
          <p className="p-1 pl-5 text-[#C4C4C4] ">
            Our experience building in the
          </p>
          <p className=" pl-5 p-1 text-[#C4C4C4] ">
            Commercial field includeds Showrooms,
          </p>
          <p className=" pl-5 p-1 text-[#C4C4C4] ">
            Supermalls and Office Buildings
          </p>
        </ul>
      </div>

      <div className=" pl-5 pr-20">
        <img className="h-[200px] w-[300px] mt-4" src={presi09} alt="king" />
        <ul className="">
          <h1 className="w-full text-2xl font-bold p-5 text-[#242527] ">
            Resedential
          </h1>
          <p className="p-1 pl-5 text-[#C4C4C4] ">
            Residential development is the
          </p>
          <p className="p-1 pl-5  text-[#C4C4C4] ">
            begining that has shaped us to this
          </p>
          <p className=" pl-5 p-1 text-[#C4C4C4] ">
            day. Our development includes
          </p>
          <p className=" pl-5 p-1 text-[#C4C4C4]"> House & Apartments</p>
        </ul>
      </div>
    </div>
  );
};

export default Cards;
