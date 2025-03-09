import React from "react";

const Title = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row bg-[#fa7602] items-center justify-between w-screen">
        <div className="m-8 text-center md:text-left">
          <h1 className="text-white text-4xl md:text-7xl py-5 font-bold w-full md:w-[60vw]">
            Connecting Generosity with Those in Need.
          </h1>
          <h2 className="text-gray-600 w-full md:w-[50vw] my-5 text-lg md:text-2xl h-auto hover:animate-pulse font-semibold p-1">
            FeedAid Connect unites communities, leveraging technology to bridge
            hunger gaps and deliver food efficiently.
          </h2>
        </div>
        <div className="flex justify-center md:justify-end">
          <img
            src="/images/charity1.jpg"
            alt="Charity"
            className="w-80 md:w-120 h-auto"
          />
        </div>
      </section>
    </>
  );
};

export default Title;
