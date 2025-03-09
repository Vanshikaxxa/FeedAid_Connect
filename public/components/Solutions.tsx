import React from "react";
import { GoPeople } from "react-icons/go";
import { CiDeliveryTruck, CiSearch, CiCreditCard1 } from "react-icons/ci";

const Solutions = () => {
  return (
    <div className="bg-[#c7f9cc] h-60 flex-col min-h-full">
      <h4 className="text-center text-xl font-bold">Solutions</h4>

      <div className="text-center my-2">
        Scale your food program with delivery, logistics, and program
        management.
      </div>

      <div className="flex justify-center space-x-6 my-4">
        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-green-500 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
            <GoPeople className="text-4xl text-white" />
          </div>
          <h3 className="mt-2 font-semibold">Integrate</h3>
          <p>Engage with your customers in a meaningful way</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-green-500 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
            <CiDeliveryTruck className="text-4xl text-white" />
          </div>
          <h3 className="mt-2 font-semibold">Deliver</h3>
          <p>Fast and reliable delivery for your needs</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-green-500 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
            <CiSearch className="text-4xl text-white" />
          </div>
          <h3 className="mt-2 font-semibold">Search</h3>
          <p>Find exactly what you are looking for</p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="p-4 bg-green-500 rounded-full hover:bg-green-700 transition duration-300 flex items-center justify-center">
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
