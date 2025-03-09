import React from "react";

const Title = () => {
  return (
    <>
      <div className="flex bg-[#fa7602] items-center justify-between ">
        <div className="">
          <img src="/images/charity1.jpg" alt="" className="w-120 h-auto " />
        </div>
        <div className="m-5">
          <h1 className="text-white text-7xl py-5 font-bold w-[60vw]">
            Connecting Generosity with Those in Need.
          </h1>
          <h2 className="text-gray-600 w-[48vw] my-5 text-2xl h-auto hover:animate-pulse font-semibold p-1">
            FeedAid Connect unites communities, leveraging technology to bridge
            hunger gaps and deliver food efficiently.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Title;
