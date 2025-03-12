import React from "react";

const FeaturedIn = () => {
  return (
    <div className="bg-[#f4f3ee] text-white flex flex-col min-screen min-h-[550px] w-full px-12">
      <h4 className="text-center text-[#163d4a] font-bold text-4xl md:m-8">
        Featured In
      </h4>
      <div className="bg-[#ffffff] p-15 rounded-2xl max-w-200 shadow-md">
        <p className="mt-4 text-center text-3xl text-[#163d4a]">
          “Partnering with FoodAid Connect has been a game changer for our meal
          delivery program!”
        </p>
        <div className="mt-8">
          <p className="font-semibold  text-center text-[#163d4a]">
            Jennifer LeBarre
          </p>
          <p className="text-[#163d4a] text-center">Executive Director</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedIn;
