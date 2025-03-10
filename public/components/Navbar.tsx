"use client";
import React, { useState } from "react";
import { BiDollar } from "react-icons/bi";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#007B7F] text-[#FFFFFF] flex justify-between items-center p-3">
      <div className="pl-8 flex justify-start">
        <img
          src="/images/logo/Logo3.webp"
          className="w-16 n-12 rounded-4xl -m-1"
          alt="main-logo"
        />
      </div>

      <div className="hidden md:flex list-none gap-10 font-medium text-white">
        {["Home", "About Us", "Donate", "Volunteer", "Charity"].map((item) => (
          <li key={item} className="relative cursor-pointer group">
            {item}
            <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
          </li>
        ))}
      </div>

      <button className="bg-green-500 hover:bg-green-700 text-white font-semibold px-4 py-2 border border-[#69db7c] rounded-sm shadow-lg transition-colors duration-300 ease-in-out flex items-center gap-2 cursor-pointer">
        Donate Money
        <BiDollar />
      </button>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-white">
          {isOpen ? <BiX size={24} /> : <BiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#007B7F] text-white flex flex-col items-center md:hidden">
          {["Home", "About Us", "Donate", "Volunteer", "Charity"].map(
            (item) => (
              <li key={item} className="relative cursor-pointer group p-4">
                {item}
                <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </li>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
