import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };
  const navigate = useNavigate();

  const handleCalculateClick = () => {
    navigate("/Outcome");
  };

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-16 xl:px-20 py-8">
      <div className="flex justify-center items-center py-9 font-Poppins text-lg md:text-2xl lg:text-3xl">
        <h1>Which age range applies to you?</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {[
          "Under 30",
          "Between 30-34",
          "Between 35-37",
          "Between 38-40",
          "Between 41-43",
          "Above 43",
        ].map((ageRange, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="radio"
              name="options"
              value={`x${index + 1}`}
              className="accent-red-500 appearance-none w-4 h-4 border-2 border-red-500 rounded-full checked:bg-red-500 checked:border-red-500 focus:ring focus:ring-red-300"
            />
            {ageRange}
          </label>
        ))}
      </div>

      <div className="flex justify-center items-center py-9 font-Poppins text-lg md:text-2xl lg:text-3xl">
        <h1>Number of IVF Cycles?</h1>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center py-5 gap-4">
        <input
          type="range"
          id="colorSlider"
          min="0"
          max="5"
          value={value}
          step="1"
          onChange={handleSliderChange}
          className="w-full sm:w-2/3 md:w-1/2 h-2 rounded-lg cursor-pointer accent-red-500"
        />
        <div className="text-lg">Value: {value}</div>
      </div>

      <div className="flex justify-center items-center py-5 font-Poppins text-lg md:text-2xl lg:text-3xl">
        <h1>Have you undergone these procedures before?</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
        <div className="flex items-center gap-2">
          <span>ICSI Procedure:</span>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="icsi"
              value="yes"
              className="accent-red-500"
            />
            Yes
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="icsi"
              value="no"
              className="accent-red-500"
            />
            No
          </label>
        </div>
        <div className="flex items-center gap-2">
          <span>PGT Testing:</span>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="pgt"
              value="yes"
              className="accent-red-500"
            />
            Yes
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="pgt"
              value="no"
              className="accent-red-500"
            />
            No
          </label>
        </div>
      </div>

      <div className="flex justify-center items-center py-7 font-Poppins text-lg md:text-2xl lg:text-3xl">
        <h1>Do you have any of these medical conditions?</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {[
          "PCOS",
          "Endometriosis",
          "Low Ovarian Reserve",
          "Male Factor Infertility",
        ].map((condition, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              name="condition"
              value={condition}
              className="accent-red-500"
            />
            {condition}
          </label>
        ))}
      </div>

      <div className="flex justify-center items-center py-7">
        <button
          type="submit"
          className="rounded-lg bg-[#D75555] font-semibold px-6 py-3 text-white text-lg"
          onClick={handleCalculateClick}
        >
          Calculate
        </button>
      </div>
    </div>
  );
};

export default Home;


