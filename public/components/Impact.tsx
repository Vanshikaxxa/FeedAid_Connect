import React from "react";

const Impact = () => {
  return (
    <div className="bg-[#f8d9d5]">
      <div className="text-4xl">
        <h4>Our Impact in numbers</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12 mx-8 justify-items-center">
        <div data-aos="fade-right" data-aos-delay="0">
          <p>99%</p>
          <h2>success rate through all deliveries</h2>
        </div>
        <div data-aos="fade-right" data-aos-delay="200">
          <p>95%</p>
          <h2>food donations stay within 30 mins of donation</h2>
        </div>
        <div data-aos="fade-right" data-aos-delay="400">
          <p>1M+</p>
          <h2>Driver network (cars, vans and box trucks)</h2>
        </div>
      </div>
    </div>
  );
};

export default Impact;
