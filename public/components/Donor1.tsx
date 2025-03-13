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

        <div className="absolute left-0 top-0 bg-none p-10 rounded-lg h-full w-full max-w-md flex flex-col justify-center translate-y-10">
          <h1 className="text-5xl font-bold mb-4 text-green-950 text-center">
            Donate Food
          </h1>
          <p className="mb-6 text-black text-center text-xl font-medium leading-relaxed">
            The quality, wholesome prepared food donated from restaurants is a
            welcomed addition in the total effort to eliminate hunger. The food
            is deeply appreciated by the food rescue programs committed to
            serving those who experience hunger. Our Donor Partners understand
            that, when prepared food is involved, a small amount at a time can
            rapidly build up to make a big difference.
          </p>
          {/* Flex container for buttons */}
          <div className="flex justify-between mt-4">
            <button className="bg-green-700 text-white py-3 px-4 rounded-lg hover:bg-green-800 transition duration-300 ease-in-out shadow-md">
              Request a pickup
            </button>
            <button className="bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out shadow-md">
              Become a donor
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donor1;
