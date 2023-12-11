import React from "react";
import presi001 from "../assets/presi001.jpg";
const Next = () => {
  return (
    <div className="w-full text-[#FFFFFF]  bg-[#222222]  py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 my-4 ">
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold md:text-4xl  sm:text-3xl text-2xl  py-2">
            ADLASS HOMES
          </p>
          <h1 className="md:text-4xl sm:text-3xl  text-2xl font-bold py-2">
            AND PROPERTIES LIMITED
          </h1>
          <p className="text-[#C4C4C4] mt-4 font-bold">
            More than building and housing projects that we have built. The
            building owner chose us over other contractorss in Nigeria, because
            our work is different
          </p>

          <button className="bg-[#f59e0b] hover:bg-[#2563eb] text-[16px] font-bold w-[200px] rounded-md my-6 mx-auto  py-3">
            Discover More
          </button>
        </div>
        <img
          className=" w-[500px]  mx-auto my-4  "
          src={presi001}
          alt="scoba"
        />
      </div>
    </div>
  );
};

export default Next;
