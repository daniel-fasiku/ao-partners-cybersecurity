import React from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TrackRecord from "../../Components/TrackRecord/TrackRecord";
import About from "../../Components/About/About";
import Services from "../../Components/Services/Services";
import AboutExtra from "../../Components/About/AboutExtra";
import Design from "../../Components/Design/Design";
import Blogs from "../../Components/Blogs/Blogs";
import ContactForm from "../../Components/ContactUs/ContactUs";
import Pricing from "../../Components/Pricing/Pricing";
import RequestDemo from "../../Components/RequestDemo/RequestDemo";
import ExtraSection from "../../Components/ExtraSection/ExtraSection";

const HomePage = () => {
  return (
    <div className="w-full overflow-x-hidden flex flex-col justify-center items-center">
      <section className="w-full">
        <HeroSection />
      </section>
      <section className="w-full">
        <TrackRecord />
      </section>
      <section id="about" className="w-full">
        <About />
      </section>
      {/* <section id="services" className="w-full">
        {" "}
        <Services />
      </section>
      <section className="w-full">
        <AboutExtra />
      </section>
      <section className="w-full">
        <Design />
      </section>
      <section id="blogs" className="w-full">
        <Blogs />
      </section> */}

      <section id="pricing" className="w-full px-4 lg:px-6 ">
        <Pricing />
      </section>
      <section id="" className="w-full px-4 lg:px-6">
        <ExtraSection />
      </section>
      <section id="contact" className="w-full px-4 lg:px-6">
        <ContactForm />
      </section>
      <section id="" className="w-full px-4 lg:px-6">
        <RequestDemo />
      </section>
    </div>
  );
};

export default HomePage;
