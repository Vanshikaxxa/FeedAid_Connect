import Donor1 from "@/public/components/Donor1";
import Donor2 from "@/public/components/Donor2";
import Donor3 from "@/public/components/Donor3";
import Footer from "@/public/components/Footer";

import Navbar from "@/public/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />

      <Donor1 />
      <Donor2 />
      <Donor3 />
      <Footer />
    </>
  );
};

export default page;
