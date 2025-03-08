import React from "react";
import { BiDollar } from "react-icons/bi";

const Navbar = () => {
  ``;
  return (
    /*main nav */
    <nav className="w-screen bg-[#007B7F] text-[#FFFFFF] flex justify-between items-center p-3">
      <div className="pl-8 flex justify-start">
        <img
          src="/images/logo/Logo3.webp"
          className="w-16 n-12 rounded-4xl -m-1 "
          alt="main-logo"
        />
      </div>
      <div className="flex list-none gap-10 font-medium text-white">
        <li className="relative cursor-pointer group">
          Home
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative cursor-pointer group">
          About Us
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative cursor-pointer group">
          Donate
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative cursor-pointer group">
          Volunteer
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
        <li className="relative cursor-pointer group">
          Charity
          <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </li>
      </div>

      <button className="bg-[#51cf66] text-white font-semibold px-4 py-2 border border-[#69db7c] rounded-sm shadow-lg transition duration-300 ease-in-out transform hover:bg-[#37b24d] hover:scale-101 flex items-center gap-2 cursor-pointer">
        Donate Money
        <BiDollar />
      </button>
    </nav>
  );
};

export default Navbar;
