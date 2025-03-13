import React from "react";

const Donor1 = () => {
  return (
    <>
      <section className="flex flex-row justify-center items-center relative h-screen">
        <img
          src="/images/donor/wallp2.png"
          alt="Food Donation Background"
          className="bg-cover w-full h-full"
        />

        <div className="absolute left-0 top-0 bg-none p-10 rounded-lg h-full w-3/4 flex flex-col justify-center translate-y-10">
          <h1 className="text-6xl font-bold mb-4 text-green-950 text-left">
            Donate Food
          </h1>
          <p className="mb-6 text-black text-left text-2xl font-medium leading-relaxed">
            The quality, wholesome prepared food donated from restaurants is a
            welcomed addition in the total effort to eliminate hunger. The food
            is deeply appreciated by the food rescue programs committed to
            serving those who experience hunger. Our Donor Partners understand
            that, when prepared food is involved, a small amount at a time can
            rapidly build up to make a big difference.
          </p>

          <div className="flex items-start mt-4 space-x-4">
            <button className="bg-gradient-to-r from-green-500 to-green-700 text-white py-5 px-12 rounded-3xl hover:from-green-600 hover:to-green-800 transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
              Request a pickup
            </button>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-5 px-12 rounded-3xl hover:from-blue-600 hover:to-blue-900 transition duration-300 ease-in-out shadow-lg transform hover:scale-105">
              Become a donor
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donor1;
