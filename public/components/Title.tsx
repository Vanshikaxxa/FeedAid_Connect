import React from "react";

const Title = () => {
  return (
    <>
      <div className="flex bg-[#fa7602] items-center justify-between  ">
        <div className="">
          <img src="/images/charity1.jpg" alt="" className="w-auto h-auto" />
        </div>
        <div className="m-5">
          <h1 className="text-white text-7xl py-5 font-bold w-[60vw]">
            Connecting Generosity with Those in Need.
          </h1>
          <h2 className="text-gray-600 w-[48vw] my-5 text-2xl h-auto hover:animate-pulse font-semibold p-3">
            FeedAid Connect unites communities, leveraging technology to bridge
            hunger gaps and deliver food efficiently.
          </h2>
          <div className="flex space-x-4 mt-2">
            {" "}
            {/* Adjusted margin to mt-2 */}
            <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
              Join our Community
            </button>
            <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-200">
              Donate Us
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Title;
