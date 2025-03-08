import Link from "next/link";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-[#007B7F] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Quick Links */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <div className="w-24 h-12 relative rounded-4xl">
                <Image
                  src="/images/logo/Logo3.webp"
                  alt="Logo"
                  fill
                  className="object-contain rounded-4xl"
                />
              </div>

              {/* Quick Links */}
              <nav className="flex space-x-4 items-center">
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

            {/* Contact Information */}
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

          {/* Subscribe Section */}
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

            {/* Social Media Links */}
            <div className="space-y-2">
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
        </div>
      </div>
    </footer>
  );
}
