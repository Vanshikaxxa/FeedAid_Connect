import Link from "next/link";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-[#007B7F] text-white flex py-8 justify-between">
      <div className="mx-5 space-y-5">
        <div className="w-15 h-15 relative ">
          <Image
            src="/images/logo/Logo3.webp"
            alt="Logo"
            fill
            className="mx-5 rounded-4xl"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <IoIosMail />
            <span>23bme073@iiitdmj.ac.in</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>9999999999</span>
          </div>
        </div>
      </div>

      <div className="">
        {" "}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/volunteer" className="hover:underline">
              Volunteer
            </Link>
            <Link href="/donate" className="hover:underline">
              Donate
            </Link>
          </nav>
        </div>
      </div>
      <div className="">
        {" "}
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">Get In Touch</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="hover:underline">
              Contact Us
            </Link>
            <Link href="/about" className="hover:underline">
              Our Services
            </Link>
          </nav>
        </div>
      </div>
      <div className="px-5">
        <div className="md:col-span-7 space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border border-white/20 text-white placeholder:text-white/60 p-2 rounded-md"
            />
            <button className="bg-white text-[#007B7F] hover:bg-white/90 p-2 rounded-md">
              Subscribe
            </button>
          </div>
        </div>

        <div className="space-y-2 m-auto py-5 ">
          <p>Follow us</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white/80">
              <FaTwitter />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-white/80">
              <FaLinkedin />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:text-white/80">
              <AiFillInstagram />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
