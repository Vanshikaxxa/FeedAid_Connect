import React, { useEffect } from "react";
import { GoPeople } from "react-icons/go";
import { CiDeliveryTruck, CiSearch, CiCreditCard1 } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";

const Solutions = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-[#f0fdf4] text-white flex flex-col min-h-[550px] w-full px-12">
      <h4 className="text-center text-[#163d4a] font-bold text-4xl md:m-8">
        Solutions
      </h4>

      <div className="text-center text-xl text-[#163d4a] my-4">
        Scale your food program with delivery, logistics, and program
        management.
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 my-12 mx-8 justify-items-center"
        data-aos="fade-up"
        data-aos-delay="0"
      >
        {[
          {
            icon: <GoPeople className="text-7xl text-[#0b2a33]" />,
            title: "Integrate",
            text: "Engage with your customers in a meaningful way",
            delay: "100",
          },
          {
            icon: <CiDeliveryTruck className="text-7xl text-[#0b2a33]" />,
            title: "Deliver",
            text: "Have immediate access to scale your reach anywhere in the US",
            delay: "200",
          },
          {
            icon: <CiSearch className="text-7xl text-[#0b2a33]" />,
            title: "Search",
            text: "Find ways to improve customer experience and program outcomes",
            delay: "300",
          },
          {
            icon: <CiCreditCard1 className="text-7xl text-[#0b2a33]" />,
            title: "Pay",
            text: "Build custom solutions that fit your needs in real time",
            delay: "400",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center w-[250px] max-w-sm"
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            <div
              className="p-4 bg-[#b0dccd] rounded-full"
              data-aos="zoom-in"
              data-aos-delay={item.delay}
            >
              {item.icon}
            </div>
            <h3 className="mt-2 font-semibold text-[#163d4a] my-4">
              {item.title}
            </h3>
            <p className="text-[#26634e]">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center py-3">
        <button className="bg-[#26634e] text-2xl hover:bg-[#283c43] text-white font-semibold px-4 py-2 rounded-sm shadow-lg transition-colors duration-300 cursor-pointer">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Solutions;
