import React from "react";

const Mission = () => {
  return (
    <div className="bg-[#FAF8F6] text-white flex flex-col min-screen min-h-[550px] w-full px-12">
      <h4 className="text-center text-[#163d4a] font-bold text-4xl md:m-8">
        Our mission is simple: to bridge the gaps in our food system
      </h4>
      <div className="text-center text-xl text-[#163d4a] my-4">
        Whether it’s multi-stop deliveries to distribute fresh produce or being
        the go-to logistics partner to help minimize food waste, we are here to
        help.
      </div>
      <div className="flex justify-center py-3">
        <button className="bg-[#26634e] text-2xl hover:bg-[#283c43] text-white font-semibold px-4 py-2 rounded-sm shadow-lg transition-colors duration-300 cursor-pointer">
          More on our mission
        </button>
      </div>
    </div>
  );
};

export default Mission;
