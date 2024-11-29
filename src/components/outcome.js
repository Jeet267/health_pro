

import React from "react";
import men from "../men.png";
import cir from "../circle.png";
import { Link, useNavigate } from "react-router-dom";

const Outcome = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center p-4 relative">
      {/* Home Link */}
      <Link
        to="/"
        className="absolute text-white font-bold top-5 left-5 text-lg md:text-xl"
      >
        Home
      </Link>

      {/* Text Section */}
      <div className="absolute text-white font-semibold text-center top-16 md:top-24 left-1/2 transform -translate-x-1/2 w-4/5 text-sm md:text-lg lg:text-xl">
        <p>Your estimated IVF Success Rate is</p>
      </div>

      {/* Circle and Men Image Section (Horizontal Alignment) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-20 md:mt-28 lg:mt-36">
        {/* Circle with Percentage */}
        <div className="relative">
          <img
            src={cir}
            alt="Circle Logo"
            className="w-32 h-32 md:w-40 md:h-40 lg:w-56 lg:h-56 object-contain"
          />
          <p className="absolute text-white font-Poppins text-xl md:text-2xl lg:text-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            64%
          </p>
        </div>

        {/* Men Image */}
        <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px] lg:w-[350px] lg:h-[350px] overflow-hidden">
          <img
            src={men}
            alt="Men"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Outcome;
