import React from "react";

const Donor1 = () => {
  return (
    <>
      <div className="bg-amber-600 w-auto h-150 flex flex-row">
        <img src="/images/donor/don1.webp" alt="" className="w-auto h-150" />
        <div className="flex flex-col items-center">
          <h1 className=" text-2xl m-5 font-semibold">
            The quality, wholesome prepared food donated from restaurants is a
            welcomed addition in the total effort to eliminate hunger in the
            United States – The food is deeply appreciated by the food rescue
            programs committed to serving those who experience hunger. Our Donor
            Partners understand that, when prepared food is involved, a small
            amount at a time can rapidly build up to make a big difference.
          </h1>
          <button className="border bg-amber-50 p-2 rounded-xl ">
            Become a Donor
          </button>
        </div>
      </div>
    </>
  );
};

export default Donor1;
