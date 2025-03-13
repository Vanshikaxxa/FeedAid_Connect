import React from "react";

const Mission = () => {
  return (
    <div className="bg-[#FAF8F6] text-[#163d4a] flex flex-col items-center justify-center min-h-[500px] w-full px-6 sm:px-12">
      <div className="flex flex-col items-center max-w-[600px] text-center">
        <h4 className="font-semibold text-3xl sm:text-4xl p-6 sm:p-8 leading-snug">
          Our mission is simple: to bridge the gaps in our food system
        </h4>
      </div>

      <div className="flex justify-center items-center max-w-[900px]">
        <p className="text-2xl text-center my-3">
          Whether it’s multi-stop deliveries to distribute fresh produce or
          being the go-to logistics partner to help minimize food waste, we are
          here to help.
        </p>
      </div>

      <div className="py-3">
        <button
          aria-label="Learn more about our mission"
          className="bg-[#26634e] text-2xl hover:bg-[#283c43] text-white font-semibold px-4 py-2 mt-2 sm:mt-10 rounded-sm shadow-lg transition-colors duration-300 cursor-pointer"
        >
          More on our mission
        </button>
      </div>
    </div>
  );
};

export default Mission;
