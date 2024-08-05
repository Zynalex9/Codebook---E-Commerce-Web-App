import React from "react";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq"
function HomePage() {
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
