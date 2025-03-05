import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Footer = () => {
  return (
    <footer className="w-screen bg-[#007B7F] text-white h-40 flex justify-between">
      <div className="h-auto w-auto items-center flex m-5">
        <img
          src="/images/logo/Logo1.webp"
          alt=""
          className="h-20 w-20 rounded-[100%]"
        />
      </div>
      <div className="h-auto w-auto  ">
        <h1>Follow Us</h1>
        <div className="flex gap-2">
          <IoLogoInstagram />
          <FaFacebookF />
          <FaLinkedinIn />
          <CgMail />
        </div>
      </div>
      <div className="">
        <h1>Quick Links</h1>
        <li>FAQs</li>
        <li>Contact Us</li>
        <li>Our Team</li>
        <li>Privacy and Policies</li>
      </div>
    </footer>
  );
};

export default Footer;
