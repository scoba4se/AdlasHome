import React from "react";
import pro2 from "../assets/pro2.jpg";
import white1 from "../assets/white1.png";
import arrowl from "../assets/arrowl.png";
const Customers = () => {
  return (
    <div className=" max-w-[1500px] mx-auto grid md:grid-cols-2 my-2   rounded-md  bg-[#222222d5]  justify-center     py-6 font-Poppins ">
      <img className="  w-[220px] mx-auto" src={pro2} alt="king" />
      <div className="">
        <ul className=" pl-20">
          <h1 className="w-full text-[36px] font-bold text-[#FFFFFF]  p-1 ">
            What we have done &
          </h1>
          <h1 className="w-full text-[36px] text-[#FFFFFF] font-bold p-1 ">
            What our Customers say
          </h1>
          <p className="p-1   text-[18px] text-[#C4C4C4]">
            We are to help you build a excellent build, with
          </p>
          <p className="  p-1 text-[18px] text-[#C4C4C4]">
            us nothing is impossible. See what we have done
          </p>
          <p className="  p-1 text-[18px] text-[#C4C4C4]">
            and what they have to say about our work perffoam.
          </p>
        </ul>
        <div className="flex  ">
          <div className=" mr-14 pt-4 h-[57px] mt-5 w-[57px  rounded-md my-6 mx-auto  py-3 ">
            <img src={arrowl} alt="king" />
          </div>
          <div className="bg-[#f59e0b] hover:bg-[#2563eb]  rounded-md my-6 mx-auto md:mx-6 py-3 pl-4 pt-5 mt-5 h-[57px] w-[57px]">
            <img src={white1} alt="king" />
          </div>
        </div>
      </div>
      <div className=" bg-[#fff]  rounded-md my-6 mx-auto ml-[350px] mt-[125px] absolute  w-[230px] h-[150px]">
        <ul className="text-black">
          <h1 className=" text-[#242527] font-bold text-[22px] pl-6 mt-2 ">
            Adeshina Lasisi
          </h1>
          <p className="p-1 pl-5 text-[13px] text-[#C4C4C4]">
            We like the final result this project, in extraordinary and also
            provides the best service to the client the best service to the
            client
          </p>
        </ul>
      </div>
    </div>
  );
};

export default Customers;
