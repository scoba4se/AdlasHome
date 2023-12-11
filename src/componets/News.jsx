import React from "react";
import Paint from "../assets/Paint.png";
import Presi01 from "../assets/presi01.jpg";
import Paint2 from "../assets/Paint2.png";

const News = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-6 bg-[#FFFFFF] font-Poppins text-[#C4C4C4] font-medium  justify-center items-center ">
      <div className="  ">
        <ul className="text-[#C4C4C4] text-[18px] ">
          <h2 className=" w-full ml-6 text-[46px]  font-bold text-[#242527]  ">
            News & Update
          </h2>
          <img className="" src={Paint} alt="king" />
          <p className="text-[#242527] text-[16px] font-bold  ml-4">
            <strong className="text-[#242527] pr-4 pl- text-[28px]">12</strong>{" "}
            Elements of Content in Epoxy
          </p>
          <p className="ml-4 text-[16px] text-[#242527] font-bold  ">
            <strong className="text-[#242527] font-bold ml-2  mr-4  text-[16px]">
              jan
            </strong>
            paint
          </p>
          <li className="ml-4">Epoxy paint and epoxy floor</li>
          <li className="ml-4">contractor. Have you heard the two</li>
          <li className="ml-4">terms? And what does that have to</li>
          <li className="ml-4">do with the construction of existing</li>
          <li className="ml-4">buildings? Epoxy itself is included in</li>
          <li className="ml-4">
            the type resin...
            <span className="text-[#f59e0b] hover:bg-[#2563eb] text-[18px]">
              Read more
            </span>
          </li>
        </ul>
      </div>

      <div className="mt-[10px]">
        <ul className="text-[#C4C4C4]">
          <img className="w-[310px] h-[250px] " src={Presi01} alt="king" />
          <p className="text-[#242527] text-[16px] font-bold ml-4">
            <strong className="text-[28px] font-bold mr-4">12</strong> 5 Right
            steps in Warehouse
          </p>
          <p className="ml-4 text-[#242527] text-[16px] font-bold">
            <strong className="text-[16px] ml-2 text-[#242527]  mr-4">
              jan
            </strong>
            Planinng and construction
          </p>
          <li className="ml-4 ">Planning the construction of a </li>
          <li className="ml-4">warehouse for both industrial, personal </li>
          <li className="ml-4">and other goods storage must be done </li>
          <li className="ml-4">carefully. When the planning is done </li>
          <li className="ml-4">
            properly, the construction is...
            <span className="text-[#f59e0b] hover:bg-[#2563eb] text-[18px]">
              Read more
            </span>
          </li>
        </ul>
      </div>
      <div className="pr-20 mt-[10px]">
        <ul className="text-[#C4C4C4]">
          <img className="w-[350px] h-[280px]" src={Paint2} alt="king" />
          <p className="text-[#242527] text-[16px] font-bold ml-4">
            <strong className="text-[28px] font-bold  mr-4">12</strong> The
            Right Solution to Build a
          </p>
          <p className="ml-4 font-bold text-[#242527] text-[16px] ">
            <strong className="text-[16px] ml-2 text-[#242527]  mr-4">
              jan
            </strong>
            Sturdy Type 45 House
          </p>
          <li className="ml-4">Having a solid home is certainly </li>
          <li className="ml-4">everyone's dream. How not, the </li>
          <li className="ml-4">house is a place wher the residents </li>
          <li className="ml-4">can rest and take shelter from the </li>
          <li className="ml-4">
            bad weather...
            <span className="text-[#f59e0b]   hover:bg-[#2563eb] text-[18px]">
              Read more
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default News;
