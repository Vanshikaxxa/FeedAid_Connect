import Footer from "@/public/components/Footer";
import Navbar from "@/public/components/Navbar";
import Solutions from "@/public/components/Solutions";
import Testimonials from "@/public/components/Testimonials";
import Title from "@/public/components/Title";
import FeaturedIn from "@/public/components/FeaturedIn";

export default function Home() {
  return (
    <>
      <Navbar />
      <Title />
      <FeaturedIn />
      <Solutions />
      <Testimonials />
      <Footer />
    </>
  );
}
