import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Portfolio from "@/components/sections/portfolio";
import Services from "@/components/sections/services";
import Differentials from "@/components/sections/differentials";
import Testimonials from "@/components/sections/testimonials";
import CTA from "@/components/sections/cta";
import FAQ from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Differentials />
        <Testimonials />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
