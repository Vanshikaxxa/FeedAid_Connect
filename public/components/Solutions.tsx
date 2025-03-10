import React from "react";
import { GoPeople } from "react-icons/go";
import { CiDeliveryTruck, CiSearch, CiCreditCard1 } from "react-icons/ci";

const Solutions = () => {
  return (
    <div className="bg-[#d1efe5] flex flex-col min-screen h-[500px]">
      <h4 className="text-center text-[#163d4a] text-4xl md:m-6">Solutions</h4>

      <div className="text-center text-xl text-[#163d4a] my-10">
        Scale your food program with delivery, logistics, and program
        management.
      </div>

      <div className="flex justify-center gap-18 my-6">
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="p-4 bg-[#b0dccd] rounded-full">
            <GoPeople className="text-6xl text-[#0b2a33]" />
          </div>
          <h3 className="mt-2 font-semibold text-[#163d4a] my-4">Integrate</h3>
          <p className="text-[#26634e]">
            Engage with your customers in a meaningful way
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="p-4 bg-[#b0dccd] rounded-full">
            <CiDeliveryTruck className="text-6xl text-[#0b2a33]" />
          </div>
          <h3 className="mt-2 font-semibold text-[#163d4a] my-4">Deliver</h3>
          <p className="text-[#26634e]">
            Fast and reliable delivery for your needs
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="p-4 bg-[#b0dccd] rounded-full">
            <CiSearch className="text-6xl text-[#0b2a33]" />
          </div>
          <h3 className="mt-2 font-semibold text-[#163d4a] my-4">Search</h3>
          <p className="text-[#26634e]">
            Find exactly what you are looking for
          </p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="p-4 bg-[#b0dccd] rounded-full">
            <CiCreditCard1 className="text-6xl text-[#0b2a33]" />
          </div>
          <h3 className="mt-2 font-semibold text-[#163d4a] my-4">Pay</h3>
          <p className="text-[#26634e]">Secure and seamless payment options</p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
