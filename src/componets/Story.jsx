import React from "react";
import Our1 from "../assets/our1.png";

const Story = () => {
  return (
    <div className=" ml-20 justify-between items-center pb-20 pt-20 bg-[#FFFFFF] font-Poppins max-w-[1240px] mx-auto py-16 px-4 grid md:grid-cols-2 gap-6 ">
      <div className="  text-[18px] ">
        <ul className="text-[#C4C4C4]">
          <h1 className=" text-[46px] text-[#242527] font-bold    w-[300px]  mx-auto  ">
            Our Story
          </h1>
          <h1 className=" text-[46px] text-[#242527] font-bold  w-[300px]  mx-auto  ">
            Who we are
          </h1>
          <li>Established in 1992, PT. Wahana cipta operate as a General</li>
          <li>Contracting company with a footprint that we have planted</li>
          <li>
            throughout indonesia, initially, we focused on construction in
          </li>
          <li>the field of residential housing development in jakarta.</li>
          <li>As th company grows, now we are present as areliable...</li>
          <button className="  h-12  text-white  hover:bg-[#2563eb]   bg-[#f59e0b] text-[16px] font-bold w-[200px] rounded-md my-6 mx-auto ml-40 py-2">
            See More
          </button>
        </ul>
      </div>
      <div className="pr-20">
        <img className=" w-[400px]  mx-auto my-4" src={Our1} alt="king" />
      </div>
    </div>
  );
};

export default Story;
