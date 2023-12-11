import React from "react";
import mask2 from "../assets/mask2.png";
import mask3 from "../assets/mask3.png";

const icons = () => {
  return (
    <div className="   bg-[#FFFFFF]   font-Poppins ">
      <div className=" flex  justify-center ">
        <img className=" w-[100px] my-6  py-8  " src={mask3} alt="king" />
        <img className="w-[400px] my-6    " src={mask2} alt="king" />
      </div>
    </div>
  );
};

export default icons;
