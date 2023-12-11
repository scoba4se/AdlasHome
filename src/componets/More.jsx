import React from "react";
import Icon3 from "../assets/Icon5.png";
import Icon3 from "../assets/Icon4.png";
import Icon3 from "../assets/Icon3.png";

const More = () => {
  return (
    <div className=" font-Poppins flex justify-between items-center bg-[#000300] text-white font-medium">
      <div>
        <p>General project</p>
        <p>
          is a general contractor company based in jakarta. More than 25 years
          of
        </p>
        <p>experience in building and carving out indonesia's development.</p>
        <div className="flex">
          <img src={Icon5} alt="king" />
          <img src={Icon4} alt="king" />
          <img src={Icon3} alt="king" />
        </div>
      </div>
      <div>
        <p>Company </p>
        <p>About</p>
        <p>How it Works</p>
        <p>Term</p>
        <p>Privacy Policy</p>
      </div>
      <div>
        <p>More </p>
        <p>Documentation</p>
        <p>License</p>
      </div>
    </div>
  );
};

export default More;
