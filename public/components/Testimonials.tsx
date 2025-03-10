import React from "react";
import { GoPeople } from "react-icons/go";
import { CiDeliveryTruck, CiSearch, CiCreditCard1 } from "react-icons/ci";

const Testimonials = () => {
  return (
    <div className="bg-[#fcf8f7] flex flex-col min-screen min-h-[500px] w-full px-2 py-2">
      <h4 className="text-center text-[#0b2a33] font-semibold text-4xl md:my-12">
        Reviews from partners
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 justify-center mx-auto max-w-6xl">
        <div className="bg-[#ffffff] p-8 border rounded-2xl shadow-md">
          <h5 className="text-xl font-semibold">Lankenau Medical Center</h5>
          <p className="mt-4 text-gray-600">
            "Through the generosity of Food Connect, we are able to deliver
            fresh food and produce to address the food insecurity and chronic
            disease management needs of our patients, who would otherwise lack
            access to fresh food in their daily lives."
          </p>
        </div>
        <div className="bg-[#ffffff] p-8 border rounded-2xl shadow-md">
          <h5 className="text-xl font-semibold">SF New Deal</h5>
          <p className="mt-4 text-gray-600">
            "It's been a joy working with Food Connect! Their dispatch, drivers,
            and support team are responsive, kind & thorough, and their services
            have enabled our team to manage & minimize food waste in our daily
            operations."
          </p>
        </div>
        <div className="bg-[#ffffff] p-8 border rounded-2xl shadow-md">
          <h5 className="text-xl font-semibold">
            Children’s Hospital of Philadelphia
          </h5>
          <p className="mt-4 text-gray-600">
            “Food Connect is the reason CHOP’s Food Pharmacy was able to not
            only maintain Food Pharmacy operations during the onset of COVID,
            but helped us expand our programming allowing us to reach more
            families. Due to Food Connect's ability to bring food directly to
            our families and communicate with our recipients, we are able to
            individualize each family’s experience to meet their specific needs
            while maintaining consistent internal operations. Food Connect’s
            flexibility and personalized attention has been the key to the
            growth of CHOP’s Food Pharmacy.”
          </p>
        </div>
        <div className="bg-[#ffffff] p-8 border rounded-2xl shadow-md">
          <h5 className="text-xl font-semibold">18 Reasons</h5>
          <p className="mt-4 text-gray-600">
            "Working with Food Connect has enabled us to deliver healthy
            ingredients to diabetic patients all over the San Francisco Bay
            Area. Food Connect is communicative and collaborative and works hard
            to ensure that both our needs as an organization and the needs of
            our participants are met. Our participants appreciate the text
            message notification system that Food Connect uses. Thank you Food
            Connect for all you do in supporting the work of 18 Reasons -
            enabling our community with the confidence and creativity to buy,
            cook, and eat good food every day! "
          </p>
        </div>
      </div>

      <div className="bg-[#fcf8f7] flex flex-col min-screen min-h-[500px] w-full px-6 py-12">
        <h4 className="text-center text-[#163d4a] text-4xl md:my-12">
          Our Program Design Plan makes building food programs easier than ever
          before
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 m-6 justify-items-center">
          <div className="flex flex-col items-center text-center w-full max-w-sm">
            <div className="p-6 bg-[#ffcfbf] rounded-full">
              <GoPeople className="text-6xl text-[#f68b6a]" />
            </div>
            <h3 className="mt-4 font-semibold text-[#163d4a]">
              Map your program needs
            </h3>
          </div>

          <div className="flex flex-col items-center text-center w-full max-w-sm">
            <div className="p-6 bg-[#ffcfbf] rounded-full">
              <CiDeliveryTruck className="text-6xl text-[#f68b6a]" />
            </div>
            <h1 className="mt-4 font-semibold text-[#163d4a]">
              Set up deliveries to transport food
            </h1>
          </div>

          <div className="flex flex-col items-center text-center w-full max-w-sm">
            <div className="p-6 bg-[#ffcfbf] rounded-full">
              <CiSearch className="text-6xl text-[#f68b6a]" />
            </div>
            <h3 className="mt-4 font-semibold text-[#163d4a]">Track impact</h3>
          </div>

          <div className="flex flex-col items-center text-center w-full max-w-sm">
            <div className="p-6 bg-[#ffcfbf] rounded-full">
              <CiCreditCard1 className="text-6xl text-[#f68b6a]" />
            </div>
            <h3 className="mt-4 font-semibold text-[#163d4a]">
              Engage with customer and improve outcomes
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
