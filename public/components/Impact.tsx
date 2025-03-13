import React from "react";

const Impact = () => {
  return (
    <div className="bg-[#f8d9d5] py-16 px-8 h-[450px]">
      <div className="text-4xl font-semibold text-center pl-5 mb-12">
        <h4>Our impact in numbers</h4>
        <div className="w-16 h-2 bg-[#f58b82] rounded-full mx-auto mt-2" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15 mt-20 m-6 text-center">
        <div data-aos="fade-right" data-aos-delay="0">
          <p className="text-8xl font-bold">99%</p>
          <h2 className="text-lg mt-6 font-semibold">
            success rate through all deliveries
          </h2>
        </div>
        <div data-aos="fade-right" data-aos-delay="200">
          <p className="text-8xl font-bold">95%</p>
          <h2 className="text-lg mt-6 font-semibold">
            food donations stay within 30 mins of donation
          </h2>
        </div>
        <div data-aos="fade-right" data-aos-delay="400">
          <p className="text-8xl font-bold">1M+</p>
          <h2 className="text-lg mt-6 font-semibold">Driver network</h2>
          <p className="mt-1">(cars, vans and box trucks)</p>
        </div>
      </div>
    </div>
  );
};

export default Impact;
