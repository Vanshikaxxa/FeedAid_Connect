"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Donor2 = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-screen my-5 px-4 md:px-10"
      data-aos="fade-up"
    >
      <h1
        className="text-4xl md:text-5xl text-blue-950 font-bold mb-10 text-center"
        data-aos="fade-up"
      >
        Why Donors Choose Us to Manage Their Food Donation Programs...
      </h1>
      <ul className="flex flex-col list font-semibold text-xl md:text-2xl space-y-4">
        <li className="flex items-start" data-aos="fade-right">
          <span className="text-3xl text-blue-600 mr-2">We</span>
          <span>ensure the quality of items donated</span>
        </li>
        <li className="flex items-start" data-aos="fade-right">
          <span className="text-3xl text-blue-600 mr-2">We</span>
          <span>develop training materials for our donors</span>
        </li>
        <li className="flex items-start" data-aos="fade-right">
          <span className="text-3xl text-blue-600 mr-2">We</span>
          <span>
            supply pouches, ID badges, and training webinars for our charities
          </span>
        </li>
        <li className="flex items-start" data-aos="fade-right">
          <span className="text-3xl text-blue-600 mr-2">We</span>
          <span>provide donors with reporting analysis</span>
        </li>
        <li className="flex items-start" data-aos="fade-right">
          <span className="text-3xl text-blue-600 mr-2">We</span>
          <span>ensure the integrity of the data feeds of our donors</span>
        </li>
        <li className="flex items-start" data-aos="fade-right">
          <span className="text-3xl text-blue-600 mr-2">We</span>
          <span>are quick to resolve manager’s requests</span>
        </li>
      </ul>
    </div>
  );
};

export default Donor2;
