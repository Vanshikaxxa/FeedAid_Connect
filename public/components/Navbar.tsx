import React from "react";
import { BiDollar } from "react-icons/bi";

const Navbar = () => {
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
      <div className="flex list-none gap-10 font-medium">
        <li className="hover:underline">Home</li>
        <li className="hover:underline">About Us</li>
        <li className="hover:underline">Donate</li>
        <li className="hover:underline">Volunteer</li>
        <li className="hover:underline">Charity</li>
      </div>

      <button className="bg-[#51cf66] text-white font-semibold px-4 py-2 border border-[#69db7c] rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:bg-[#37b24d] hover:scale-101 flex items-center gap-2 cursor-pointer">
        Donate Money
        <BiDollar />
      </button>
    </nav>
  );
};

export default Navbar;
