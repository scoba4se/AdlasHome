import React from "react";
import boo1 from "../assets/boo1.png";
import boo2 from "../assets/boo2.png";
import boo3 from "../assets/boo3.png";
import boo4 from "../assets/boo4.png";
import presi02 from "../assets/presi02.jpg";

const Customers = () => {
  return (
    <div className="">
      <div className="    bg-[#FFFFFF]   font-Poppins ">
        <div className="   mx-auto  px-4 flex lg:flex-cols-3 gap-3  w-full  bg-[#222222f9]  justify-center  h-[400px]">
          <div className=" ">
            <img
              className=" w-[100px] mt-10 mx-auto  "
              src={presi02}
              alt="scoba"
            />
            <div className="flex">
              <a
                href="https://web.facebook.com/shinaloveline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-10 py-3 rounded-full bg-[#2563eb] mt-6 ml-2 w-[40px]  hover:bg-[#f59e0b]">
                  <img
                    className="w-[16px]  ml-3 h-[15px] "
                    src={boo1}
                    alt="king"
                  />
                </div>
              </a>
              <a
                href="https://www.instagram.com/adlass_homes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-10 py-3 rounded-full bg-[#2563eb] mt-6 ml-2 w-[40px] hover:bg-[#f59e0b]">
                  <img
                    className="w-[16px]  ml-3 h-[15px] "
                    src={boo2}
                    alt="king"
                  />
                </div>
              </a>
              <a
                href="https://www.tiktok.com/@presido_123?lang=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-10 py-3 rounded-full bg-[#2563eb] mt-6 ml-2 w-[40px] hover:bg-[#f59e0b]">
                  <img
                    className="w-[16px]  ml-3 h-[15px] "
                    src={boo4}
                    alt="king"
                  />
                </div>
              </a>

              <a
                href="https://www.instagram.com/adlass_homes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-10 py-3 rounded-full bg-[#2563eb] mt-6 ml-2 w-[40px] hover:bg-[#f59e0b]">
                  <img
                    className="w-[16px]  ml-3 h-[15px] "
                    src={boo3}
                    alt="king"
                  />
                </div>
              </a>
            </div>
          </div>

          <div className=" pt-[50px]  ">
            <ul className="text-[#FFFFFF] ">
              <li className="text-[18px] font-bold  "> General Project</li>
              <li className="text-[16px] ">
                is a general contractor company based in Nigeria. More than 25
                years of
              </li>
              <li className="text-[16px]  ">experience in building.</li>
            </ul>
            <div className="flex mt-2  "></div>
          </div>
          <div className="pt-[50px] p-6 ">
            <ul className="text-[#FFFFFF] ">
              <li className="text-[18px] font-bold mb-2 "> Company</li>
              <li className="text-[16px] mb-2 ">About</li>
              <li className="text-[16px] mb-2 ">How it Works</li>
              <li className="text-[16px] mb-2 ">Term</li>
              <li className="text-[16px] mb-2 ">Privacy Policy</li>
            </ul>
          </div>

          <div className=" pt-[50px] p-6">
            <ul className="text-[#FFFFFF] ">
              <li className="text-[18px] mb-2 font-bold "> More</li>
              <li className="text-[16px] mb-2 ">Documentation</li>
              <li className="text-[16px] mb-2 ">License</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Customers;
