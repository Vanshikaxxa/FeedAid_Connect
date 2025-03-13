import React from "react";

const Donor1 = () => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-teal-200 flex flex-col md:flex-row items-center justify-center p-5 md:p-10 rounded-lg shadow-lg h-auto md:h-96 my-15">
      <img
        src="/images/donor/don1.webp"
        alt="Donor Image"
        className="w-full h-auto md:h-full rounded-lg  mb-5 md:mb-0 shadow-md"
      />
      <div className="flex flex-col items-start md:items-center md:ml-5">
        <h1 className="text-base md:text-lg lg:text-xl m-5 font-semibold text-gray-800 text-center md:text-left">
          The quality, wholesome prepared food donated from restaurants is a
          welcomed addition in the total effort to eliminate hunger . The food
          is deeply appreciated by the food rescue programs committed to serving
          those who experience hunger. Our Donor Partners understand that, when
          prepared food is involved, a small amount at a time can rapidly build
          up to make a big difference.
        </h1>
        <div className="flex justify-center w-full">
          <button className="border border-blue-600 bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition duration-300 ease-in-out shadow-md">
            Become a Donor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Donor1;
