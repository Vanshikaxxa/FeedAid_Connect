import React from "react";

const Title = () => {
  return (
    <div className="relative h-screen bg-[#fa7602] flex items-center p-6">
      <div className="max-w-[70%] p-8">
        <h1 className="text-white text-8xl py-5 font-bold">
          Connecting Generosity with Those in Need.
        </h1>
        <h2 className="text-gray-600 my-5 text-3xl hover:animate-pulse font-semibold py-5">
          FeedAid Connect unites communities, leveraging technology to bridge
          hunger gaps and deliver food efficiently.
        </h2>
        <div className="flex space-x-4 m-6">
          <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Join our Community
          </button>
          <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded hover:bg-green-600 transition duration-200">
            Donate Us
          </button>
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full w-[30%]">
        <img
          src="/images/charity1.jpg"
          alt="Charity"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Title;
