import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Products from "../components/Products";
import ExportMarkets from "../components/ExportMarkets";
import Statistics from "../components/Statistics";
import Certifications from "../components/Certifications";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <>
      <Hero />
      <WhyChoose />
      <Products />
      <ExportMarkets />
      <Statistics />
      <Certifications />
      <Testimonials />
      <CallToAction />
    </>
  );
}

export default Home;