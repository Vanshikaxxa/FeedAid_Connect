import Donor1 from "@/public/components/Donor1";
import Donor2 from "@/public/components/Donor2";
import Donor3 from "@/public/components/Donor3";
import Footer from "@/public/components/Footer";
import Navbar from "@/public/components/Navbar";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const page = () => {
  return (
    <>
      <div className={inter.className}>
        <Navbar />
        <Donor1 />
        <Donor2 />
        <Donor3 />
        <Footer />
      </div>
    </>
  );
};

export default page;
