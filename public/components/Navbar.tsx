import React from "react";

const Navbar = () => {
  return (
    /*main nav */
    <nav className="w-screen bg-[#55562F] text-[#FFFDD0] flex justify-between items-center p-3">
      <div className="pl-3 flex justify-start">
        <img
          src="/images/logo/Logo3.webp"
          className="w-16 n-12 rounded-4xl -m-1 "
          alt="main-logo"
        />
      </div>
      <div className="flex list-none gap-10">
        <li>Home</li>
        <li>About Us</li>
        <li>Donate</li>
        <li>Volunteer</li>
        <li>Charity</li>
      </div>

      <button className="bg-green-500 text-white font-semibold py-2 px-4 border border-green-700 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:bg-green-600 hover:scale-105 active:bg-blue-700">
        Donate Money
      </button>
    </nav>
  );
};

export default Navbar;
