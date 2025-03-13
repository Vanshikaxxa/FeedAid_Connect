"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/public/components/Footer";
import Navbar from "@/public/components/Navbar";
import Solutions from "@/public/components/Solutions";
import Testimonials from "@/public/components/Testimonials";
import Title from "@/public/components/Title";
import FeaturedIn from "@/public/components/FeaturedIn";
import CommunitySignupForm from "@/public/components/community-signup-form";
import Mission from "@/public/components/Mission";
import Impact from "@/public/components/Impact";
import Signup from "@/public/components/Signup";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <>
      <div className={inter.className}>
        <Navbar />
        <Title />
        <FeaturedIn />
        <Solutions />
        <Mission />
        <Impact />
        <Testimonials />
        <Signup />
        <Footer />
        {showForm && <CommunitySignupForm onClose={handleClose} />}
      </div>
    </>
  );
}
