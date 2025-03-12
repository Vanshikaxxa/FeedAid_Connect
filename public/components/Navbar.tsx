"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

interface NavbarItemProps {
  title: string;
  href: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, href }) => {
  return (
    <Link
      href={href}
      className="text-gray-600 hover:underline underline-offset-4 transition-all ease-out duration-300"
    >
      {title}
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 980);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex flex-col items-center">
      {/* Top Bar */}
      <div className="bg-[#fdffe8] w-full flex justify-end max-w-7xl text-sm px-8 py-2">
        {!isMobile && (
          <div className="flex gap-8 text-gray-600">
            {[
              { title: "Our partners", href: "/our-partners" },
              { title: "News & blog", href: "/blog-news" },
              { title: "Join our Newsletter", href: "/join-our-newsletter" },
              { title: "Careers", href: "/careers" },
              { title: "FAQ's", href: "/Faqs" },
            ].map((item, index) => (
              <NavbarItem key={index} {...item} />
            ))}
          </div>
        )}
      </div>

      {/* Main Navbar */}
      <div className="bg-[#FAF8F6] shadow-lg rounded-b-2xl w-full max-w-7xl px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/images/logo/Logo3.webp"
            alt="Food Connect Logo"
            className="w-12 h-12 rounded-4xl"
          />
          <h1 className="text-black font-semibold text-lg">FeedAid Connect</h1>
        </div>

        {/* Menu (for larger screens) */}
        {!isMobile && (
          <div className="flex gap-10 text-black font-medium">
            {[
              { title: "Our locations", href: "/locations" },
              { title: "About us", href: "/about-us" },
              { title: "Donate", href: "/donate" },
              { title: "Contact us", href: "/contact-us" },
              { title: "Charity", href: "/charity" },
            ].map((item, index) => (
              <NavbarItem key={index} {...item} />
            ))}
          </div>
        )}

        {/* Donate Button (Always visible) */}
        <Link
          href="/donate"
          className="bg-[#2F7D61] hover:bg-[#256b52] text-white font-semibold px-6 py-2 rounded-lg shadow-lg"
        >
          Donate Money
        </Link>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button onClick={toggleMenu}>
            <Menu size={30} />
          </button>
        )}
      </div>

      {/* Mobile Menu */}
      {isOpen && isMobile && (
        <div className="bg-[#FAF8F6] w-full flex flex-col items-center gap-4 py-4">
          {[
            { title: "Our locations", href: "/locations" },
            { title: "About us", href: "/about-us" },
            { title: "Donate", href: "/donate" },
            { title: "Contact us", href: "/contact-us" },
            { title: "Charity", href: "/charity" },
          ].map((item, index) => (
            <NavbarItem key={index} {...item} />
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
