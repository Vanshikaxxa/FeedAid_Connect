"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/public/components/Footer";
import Navbar from "@/public/components/Navbar";
import Solutions from "@/public/components/Solutions";
import Testimonials from "@/public/components/Testimonials";
import Title from "@/public/components/Title";
import FeaturedIn from "@/public/components/FeaturedIn";
import CommunitySignupForm from "@/public/components/community-signup-form";

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
      <Navbar />
      <Title />
      <FeaturedIn />
      <Solutions />
      <Testimonials />
      <Footer />
      {showForm && <CommunitySignupForm onClose={handleClose} />}
    </>
  );
}
