import React from "react";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq"
import useTitle from "../../hooks/useTitle";
function HomePage() {
  useTitle("Access World Best Courses - Codebook")
  return (
    <main>
      <Hero />
      <FeaturedProducts/>
      <Testimonials/>
      <Faq/>
    </main>
  );
}

export default HomePage;
