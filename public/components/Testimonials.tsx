"use client";

import React, { useEffect } from "react";
import { FaRegMap } from "react-icons/fa6";
import { MdDeliveryDining } from "react-icons/md";
import { GiImpactPoint } from "react-icons/gi";
import { IoPeople } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  const Testimonials = () => {
    return (
      <div className="bg-[#fcf8f7] flex flex-col min-screen min-h-[500px] w-full px-2 py-8">
        <h4
          className="text-center text-[#0b2a33] font-semibold text-4xl md:my-12"
          data-aos="fade-up"
        >
          Reviews from partners
        </h4>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center mx-auto max-w-6xl py-4"
          data-aos="fade-up"
        >
          <div className="bg-[#ffffff] p-10 rounded-2xl shadow-md">
            <h5 className="text-2xl font-semibold">Lankenau Medical Center</h5>
            <p className="mt-4 text-xl text-[#163d4a]">
              "Through the generosity of Food Connect, we are able to deliver
              fresh food and produce to address the food insecurity and chronic
              disease management needs of our patients, who would otherwise lack
              access to fresh food in their daily lives."
            </p>
            <div className="flex items-center pt-12 space-x-4">
              <img
                src="\images\testimonials\testimonials 1.jpg"
                alt="Maureen Krouse"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-semibold text-[#163d4a]">Maureen Krouse</p>
                <p className="text-[#163d4a]">
                  Manager at Community Health and Equity
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#ffffff] p-10 rounded-2xl shadow-md">
            <h5 className="text-2xl font-semibold">SF New Deal</h5>
            <p className="mt-4 text-xl text-[#163d4a]">
              "It's been a joy working with Food Connect! Their dispatch,
              drivers, and support team are responsive, kind & thorough, and
              their services have enabled our team to manage & minimize food
              waste in our daily operations."
            </p>
            <div className="flex items-center pt-12 space-x-4">
              <img
                src="\images\testimonials\testimonials 3.jpg"
                alt="Sarah Morris"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-semibold text-[#163d4a]">Sarah Morris</p>
                <p className="text-[#163d4a]">
                  Director of Client Services & Call Center
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff] p-10 rounded-2xl shadow-md">
            <h5 className="text-2xl font-semibold">
              Children’s Hospital of Philadelphia
            </h5>
            <p className="mt-4 text-xl text-[#163d4a]">
              “Food Connect is the reason CHOP’s Food Pharmacy was able to not
              only maintain Food Pharmacy operations during the onset of COVID,
              but helped us expand our programming allowing us to reach more
              families. Due to Food Connect's ability to bring food directly to
              our families and communicate with our recipients, we are able to
              individualize each family’s experience to meet their specific
              needs while maintaining consistent internal operations. Food
              Connect’s flexibility and personalized attention has been the key
              to the growth of CHOP’s Food Pharmacy.”
            </p>
            <div className="flex items-center pt-12 space-x-4">
              <img
                src="\images\testimonials\testimonials 2.jpg"
                alt="Abbe Stern"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-semibold text-[#163d4a]">Abbe Stern</p>
                <p className="text-[#163d4a]">
                  Food Pharmacy Manager, Healthier Together
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff] p-12 rounded-2xl shadow-md">
            <h5 className="text-2xl font-semibold">18 Reasons</h5>
            <p className="mt-4 text-xl text-[#163d4a]">
              "Working with Food Connect has enabled us to deliver healthy
              ingredients to diabetic patients all over the San Francisco Bay
              Area. Food Connect is communicative and collaborative and works
              hard to ensure that both our needs as an organization and the
              needs of our participants are met. Our participants appreciate the
              text message notification system that Food Connect uses. Thank you
              Food Connect for all you do in supporting the work of 18 Reasons -
              enabling our community with the confidence and creativity to buy,
              cook, and eat good food every day! "
            </p>
            <div className="flex items-center pt-12 space-x-4">
              <img
                src="\images\testimonials\testimonials 4.jpg"
                alt="Francesca Boulton"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <p className="font-semibold text-[#163d4a]">
                  Francesca Boulton
                </p>
                <p className="text-[#163d4a]">Community Programs Director</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="bg-[#fcf8f7] flex flex-col min-screen min-h-[500px] w-full px-10 py-12"
          data-aos="fade-up"
        >
          <h4 className="text-center font-semibold px-8 text-[#163d4a] text-4xl md:my-10 leading-snug md:w-3/4 mx-auto">
            Our Program Design Plan makes building <br /> food programs easier
            than ever before
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 m-6 justify-items-center">
            <div className="flex flex-col items-center text-center w-full max-w-sm">
              <div className="p-6 bg-[#ffcfbf] rounded-full">
                <FaRegMap className="text-8xl text-[#f68b6a]" />
              </div>
              <h3 className="mt-4 font-semibold text-[#163d4a]">
                Map your program needs
              </h3>
            </div>

            <div className="flex flex-col items-center text-center w-full max-w-sm">
              <div className="p-6 bg-[#ffcfbf] rounded-full">
                <MdDeliveryDining className="text-8xl text-[#f68b6a]" />
              </div>
              <h1 className="mt-4 font-semibold text-[#163d4a]">
                Set up deliveries to transport food
              </h1>
            </div>

            <div className="flex flex-col items-center text-center w-full max-w-sm">
              <div className="p-6 bg-[#ffcfbf] rounded-full">
                <GiImpactPoint className="text-8xl text-[#f68b6a]" />
              </div>
              <h3 className="mt-4 font-semibold text-[#163d4a]">
                Track impact
              </h3>
            </div>

            <div className="flex flex-col items-center text-center w-full max-w-sm">
              <div className="p-6 bg-[#ffcfbf] rounded-full">
                <IoPeople className="text-8xl text-[#f68b6a]" />
              </div>
              <h3 className="mt-4 font-semibold text-[#163d4a]">
                Engage with customer and improve outcomes
              </h3>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-6 pd-8">
          <button className="bg-[#26634e] text-2xl hover:bg-[#283c43] text-white font-semibold px-6 py-4 rounded-sm shadow-lg transition-colors duration-300 cursor-pointer">
            Learn more about programs
          </button>
        </div>
      </div>
    );
  };

  return <Testimonials />;
}
