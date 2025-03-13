"use client";

import React, { useRef } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";

const FeaturedIn: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const logos = [
    {
      src: "/images/logo/featured1.png",
      alt: "Burger King",
      class: "w-12 h-12",
    },
    { src: "/images/logo/featured2.png", alt: "kfc" },
    { src: "/images/logo/featured3.png", alt: "la pinos'z" },
    { src: "/images/logo/featured4.png", alt: "zomato" },
    { src: "/images/logo/featured5.png", alt: "swiggy" },
    { src: "/images/logo/featured6.png", alt: "Big basket" },
    { src: "/images/logo/featured12.png", alt: "food city" },
    { src: "/images/logo/featured8.png", alt: "fresh to home" },
    { src: "/images/logo/featured9.png", alt: "food for less" },
    { src: "/images/logo/featured10.png", alt: "amazon" },
    { src: "/images/logo/featured11.png", alt: "red bull" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const scrollAmount = 300;

      if (direction === "left") {
        if (scrollLeft <= 0) {
          scrollRef.current.scrollTo({
            left: scrollWidth - clientWidth,
            behavior: "instant",
          });
        }
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        if (scrollLeft + clientWidth >= scrollWidth) {
          scrollRef.current.scrollTo({ left: 0, behavior: "instant" });
        }
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f2e9e4] w-full px-12 p-10">
      <div className="text-white flex flex-col w-full max-w-6xl">
        <h4 className="text-center font-bold text-[#163d4a] text-5xl md:m-8">
          Featured In
        </h4>

        <div className="relative mt-8  flex items-center">
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 z-10 p-2 bg-[#f2e9e4] text-[#163d4a]"
          >
            <GoChevronLeft size={32} />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto whitespace-nowrap flex space-x-20 px-5 mx-12 no-scrollbar cursor-pointer"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img src={logo.src} alt={logo.alt} className="h-12 w-auto" />
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className="absolute right-0 z-10 p-2 bg-[#f2e9e4] text-[#163d4a] cursor-pointer"
          >
            <GoChevronRight size={32} />
          </button>
        </div>

        <div
          className="bg-[#ffffff] p-10 md:p-12 justify-center rounded-2xl shadow-md mx-auto mt-20 max-w-4xl"
          data-aos="fade-up"
        >
          <img
            src="\images\logo\featuredin.png"
            alt="Maureen Krouse"
            className="w-20 h-20 justify-center mx-auto rounded-full m-4"
          />
          <p className="text-center font-semibold text-3xl m-5 text-[#163d4a]">
            “Partnering with FoodAid Connect has been a game changer for our
            meal delivery program!”
          </p>
          <div className="">
            {" "}
            <hr className="border-t border-gray-200 mt-12 my-3" />{" "}
            <p className="font-semibold text-center mt-6 text-[#163d4a]">
              Jennifer LeBarre
            </p>
            <p className="text-[#163d4a] text-center">Executive Director</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default FeaturedIn;
