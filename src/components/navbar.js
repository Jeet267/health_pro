

import React, { useState } from "react";
import logo from "../pulse_logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#E6E3D2]">
      <div className="flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <img src={logo} alt="Pulse Logo" className="w-28" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <p className="text-[#1E231E] font-semibold ">
            Donor Programme
          </p>
          <p className="text-[#1E231E] font-semibold ">
            Fertility Preservation
          </p>
          <p className="text-[#1E231E] font-semibold ">
            Advanced Treatments
          </p>
          <p className="text-[#1E231E] font-semibold ">
            Infertility Treatments
          </p>
          <p className="text-[#1E231E] font-semibold hover:underline">
            IVF Testing
          </p>
          <p className="text-[#1E231E] font-semibold hover:underline">
            About Us
          </p>
          <button className="bg-[#D75555] font-semibold px-4 py-2 rounded text-white">
            Talk to Us
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden text-[#1E231E] font-semibold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-start space-y-4 px-6 py-4 md:hidden">
          <p className="text-[#1E231E] font-semibold">Donor Programme</p>
          <p className="text-[#1E231E] font-semibold">Fertility Preservation</p>
          <p className="text-[#1E231E] font-semibold">Advanced Treatments</p>
          <p className="text-[#1E231E] font-semibold">Infertility Treatments</p>
          <p className="text-[#1E231E] font-semibold">IVF Testing</p>
          <p className="text-[#1E231E] font-semibold">About Us</p>
          <button className="bg-[#D75555] font-semibold px-4 py-2 rounded text-white">
            Talk to Us
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




