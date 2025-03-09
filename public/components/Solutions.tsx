import React from "react";
import { GoPeople } from "react-icons/go";
import { CiDeliveryTruck, CiSearch, CiCreditCard1 } from "react-icons/ci";

const Solutions = () => {
  return (
    <div className="bg-[#c7f9cc] flex flex-col min-h-screen">
      <h4 className="text-center text-4xl md:m-6">Solutions</h4>

      <div className="text-center text-xl md:m-10">
        Scale your food program with delivery, logistics, and program
        management.
      </div>

      <div className="flex justify-center flex-wrap gap-8 my-4">
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="p-4 bg-green-500 rounded-full">
            <GoPeople className="text-4xl text-white" />
          </div>
          <h3 className="mt-2 font-semibold">Integrate</h3>
          <p>Engage with your customers in a meaningful way</p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="p-4 bg-green-500 rounded-full">
            <CiDeliveryTruck className="text-4xl text-white" />
          </div>
          <h3 className="mt-2 font-semibold">Deliver</h3>
          <p>Fast and reliable delivery for your needs</p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="p-4 bg-green-500 rounded-full">
            <CiSearch className="text-4xl text-white" />
          </div>
          <h3 className="mt-2 font-semibold">Search</h3>
          <p>Find exactly what you are looking for</p>
        </div>

        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="p-4 bg-green-500 rounded-full">
            <CiCreditCard1 className="text-4xl text-white" />
          </div>
          <h3 className="mt-2 font-semibold">Pay</h3>
          <p>Secure and seamless payment options</p>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
