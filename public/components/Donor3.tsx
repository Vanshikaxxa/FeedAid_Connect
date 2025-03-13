"use client";

import React, { useEffect } from "react";
import { FaRegMap } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { GiImpactPoint } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Donor3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div>
      <div
        className="bg-[#fcf8f7] flex flex-col min-h-[500px] w-full px-10 py-12"
        data-aos="fade-up"
      >
        <h4 className="text-center font-semibold px-8 text-[#163d4a] text-4xl md:my-10 leading-snug md:w-3/4 mx-auto">
          Our Program Design Plan makes building <br /> food programs easier
          than ever before
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 m-6 justify-items-center">
          <div className="flex flex-col items-center text-center w-full max-w-sm">
            <div className="p-6 bg-[#ffcfbf] rounded-full">
              <FaRegMap className="text-8xl text-[#f68b6a]" />
            </div>
            <h3 className="mt-4 font-semibold text-[#163d4a]">
              Map your program needs
            </h3>
          </div>

          <div className="flex flex-col items-center text-center w-full max-w-sm">
            <div className="p-6 bg-[#ffcfbf] rounded-full">
              <MdDeliveryDining className="text-8xl text-[#f68b6a]" />
            </div>
            <h3 className="mt-4 font-semibold text-[#163d4a]">
              Set up deliveries to transport food
            </h3>
          </div>

          <div className="flex flex-col items-center text-center w-full max-w-sm">
            <div className="p-6 bg-[#ffcfbf] rounded-full">
              <GiImpactPoint className="text-8xl text-[#f68b6a]" />
            </div>
            <h3 className="mt-4 font-semibold text-[#163d4a]">Track impact</h3>
          </div>

          <div className="flex flex-col items-center text-center w-full max-w-sm">
            <div className="p-6 bg-[#ffcfbf] rounded-full">
              <IoPeople className="text-8xl text-[#f68b6a]" />
            </div>
            <h3 className="mt-4 font-semibold text-[#163d4a]">
              Engage with customers and improve outcomes
            </h3>
          </div>
        </div>
        <div className="flex justify-center py-6 pd-8">
          <button className="bg-[#26634e] text-2xl hover:bg-[#283c43] text-white font-semibold px-6 py-4 rounded-sm shadow-lg transition-colors duration-300 cursor-pointer">
            Learn more about programs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donor3;
