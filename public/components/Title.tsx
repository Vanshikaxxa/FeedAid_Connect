import React from "react";
import Link from "next/link";

const NavbarItem: React.FC<{ title: string; href: string }> = ({
  title,
  href,
}) => {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:underline underline-offset-4 transition-all ease-out duration-300"
    >
      {title}
    </Link>
  );
};

const Title = () => {
  return (
    <div className="relative min-h-screen bg-[#c3fffe] flex items-center sm:p-6 pt-32">
      <div className="w-full max-w-[90%] sm:max-w-[65%] p-4 sm:p-8">
        <h1 className="text-[#2c6e49] text-5xl sm:text-8xl mt-15 sm:py-5 font-bold">
          Connecting Generosity with Those in Need.
        </h1>
        <h2 className="text-gray-600 sm:my-5 text-xl sm:text-3xl hover:animate-pulse font-semibold sm:py-5">
          FeedAid Connect unites communities, leveraging technology to bridge
          hunger gaps and deliver food efficiently.
        </h2>
        <div className="flex space-x-4">
          <Link
            href="/donate"
            className="bg-[#0077b6] hover:bg-[#023e8a] text-white font-semibold px-6 py-2 rounded-lg shadow-lg"
          >
            Join Our Community
          </Link>
          <Link
            href="/donate"
            className="bg-[#2c6e49] hover:bg-[#1b4332] text-white font-semibold px-6 py-2 rounded-lg shadow-lg"
          >
            Donate Us
          </Link>
        </div>
      </div>

      <div className="hidden lg:block absolute right-0 top-0 h-full w-[30%]">
        <img
          src="/images/charity1.jpg"
          alt="Charity"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Title;
