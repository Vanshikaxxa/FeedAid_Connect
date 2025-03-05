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
      <button className="pl-20 pr-3">Donate Money</button>
    </nav>
  );
};

export default Navbar;
