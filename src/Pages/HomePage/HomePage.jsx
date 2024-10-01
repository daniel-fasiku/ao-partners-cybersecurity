
import React from 'react'
import ContactForm from '../../Components/ContactUs/ContactUs'
import Pricing from '../../Components/Pricing/Pricing'
import RequestDemo from '../../Components/RequestDemo/RequestDemo'
import ExtraSection from '../../Components/ExtraSection/ExtraSection'
import HeroSection from "../../Components/HeroSection/HeroSection";
import AboutImage from "../../assets/section-image1.png";
import AboutImage2 from "../../assets/section-image2.png";
import DesignImage from "../../assets/section-image3.png"
import DesignImage2 from "../../assets/section-image3-mobile.png"
import CountUp from 'react-countup';
import { Icon } from "@iconify/react";
import { securityData1, blogData } from "../../data";
import { useState } from "react";
import "./HomePage.css";


const HomePage = () => {
  const [securityDataId, setSecurityDataId] = useState(null);
  const [blogDataId, setBlogDataId] = useState(null);

  const handleSecurityDataId = (id) => {
    setSecurityDataId((prevId) => (prevId === id ? null : id));
  };

  const handleBlogDataId = (id) => {
    setBlogDataId((prevId) => (prevId === id ? null : id));
  };

  return (

    <div className='w-full overflow-x-hidden flex flex-col justify-center items-center'>

    <div className="home-page-container" >
      <HeroSection />
      <section className="home-page-track-record">
        <h3 className="home-page-track-record-title">Trusted by more than 12+ enterprises worldwide</h3>
        <div className="home-page-track-record-wrapper">
          <div className="home-page-track-record-content">
            <div className="home-page-track-record-content-number">
              <CountUp start={0} end={15} duration={2.75} className="home-page-track-record-content-number-text" />
              <p className="home-page-track-record-content-text">+</p>
            </div>
            <p className="home-page-track-record-content-text2">Years of experience</p>
          </div>
          <div className="home-page-track-record-content">
            <div className="home-page-track-record-content-number">
              <CountUp start={0} end={50} duration={2.75} className="home-page-track-record-content-number-text" />
              <p className="home-page-track-record-content-text">+</p>
            </div>
            <p className="home-page-track-record-content-text2">Production products</p>
          </div>
          <div className="home-page-track-record-content">
            <div className="home-page-track-record-content-number">
              <CountUp start={0} end={20} duration={2.75} className="home-page-track-record-content-number-text" />
              <p className="home-page-track-record-content-text">+</p>
            </div>
            <p className="home-page-track-record-content-text2">Technologies Used</p>
          </div>
          <div className="home-page-track-record-content">
            <div className="home-page-track-record-content-number">
              <CountUp start={0} end={12} duration={2.75} className="home-page-track-record-content-number-text" />
              <p className="home-page-track-record-content-text">+</p>
            </div>
            <p className="home-page-track-record-content-text2">Enterprise clients</p>
          </div>
        </div>
      </section>
      <section className="home-page-about">
        <img src={AboutImage} alt="About" className="home-page-about-image" />
        <div className="home-page-about-content">
          <h3 className="home-page-about-title">Advanced Vulnerability Assessment / Penetration Testing</h3>
          <p className="home-page-about-text">We are a multi disciplinary firm of technology professionals. We are registered consultants with the World Bank, African Development Bank and listed on DACON.AO Partners enjoys an environment of continuous learning, challenging experiences, and enriching career opportunities. Our professionals are dedicated to strengthening corporate responsibility, building public trust, and making a positive impact in their communities.</p>
          <div className="home-page-about-rating-wrapper">
            <div className="home-page-about-rating-content1">
              <h4 className="home-page-about-rating-content1-title">4.9/5</h4>
              <p className="home-page-about-rating-content1-text">Customer Rating</p>
            </div>
            <div className="home-page-about-rating-content2">
              <h4 className="home-page-about-rating-content2-title">594</h4>
              <p className="home-page-about-rating-content2-text">Deployed Solutions</p>
            </div>
          </div>
        </div>
      </section>
      <section id="services" className="home-page-services">
        <div className="home-page-services-top">
          <h3 className="home-page-services-title">Our professional cyber security services</h3>
          <p className="home-page-services-text">We are a multi disciplinary firm of technology professionals. We are registered consultants with the World Bank, African Development Bank and listed on DACON.AO Partners enjoys an environment of continuous learning, challenging experiences, and enriching career opportunities. Our professionals are dedicated to strengthening corporate responsibility, building public trust, and making a positive impact in their communities.</p>
        </div>
        <div className="home-page-services-bottom">
          {
            securityData1.map((item) => (
              <>
                <div className="home-page-services-bottom-content" key={item.id}>
                  <Icon icon={item.icon} className="home-page-services-bottom-content-icon" style={{ color: item.color }} />
                  <h4 className="home-page-services-bottom-content-title">{item.title}</h4>
                  <p className="home-page-services-bottom-content-text">{item.description}</p>
                  <button onClick={() => handleSecurityDataId(item.id)} style={{ borderColor: item.color }} className="home-page-services-bottom-content-button">Read More</button>
                </div>

              </>
            ))
          }
          {
            securityDataId && (
              <div onClick={() => handleSecurityDataId(null)} className="home-page-services-bottom-content-full-description" >
                <div className="home-page-services-bottom-content-full-description-text-wrapper">
                  <h3 className="home-page-services-bottom-content-full-description-title">{securityData1?.find(item => item.id === securityDataId)?.title}</h3>
                  <p className="home-page-services-bottom-content-full-description-text">{securityData1?.find(item => item.id === securityDataId)?.fullDescription}</p>
                  <button onClick={() => handleSecurityDataId(null)} className="home-page-services-bottom-content-full-description-button">Close</button>
                </div>
              </div>
            )
          }
        </div>
      </section>
      <section className="home-page-about">
        <div className="home-page-about-content">
          <h3 className="home-page-about-title">PCI compliance services</h3>
          <p className="home-page-about-text">AO Partners’ leading practices for providing PCI DSS compliance services have been reinforced with successful engagements</p>
          <button className="home-page-about-button">Request Demo</button>
        </div>
        <img src={AboutImage2} alt="About" className="home-page-about-image" />
      </section>
      <section className="home-page-design-section">
        <div className="home-page-design-wrapper">
          <img src={DesignImage} alt="Design" className="home-page-design-image" />
          <img src={DesignImage2} alt="Design" className="home-page-design-image-mobile" />
          <div className="home-page-design-content">
            <h3 className="home-page-design-title">Design Framework</h3>
            <p className="home-page-design-text">AO Partners’ PCI policies framework establishes a foundation for sustained compliance and aligns cyber security initiatives, like PCI compliance, with the business strategy</p>
            <button className="home-page-design-button">Request Demo</button>
          </div>
        </div>
      </section>
      <section id="blogs" className="home-page-blogs">
        <h3 className="home-page-blogs-title">Our latest blogs</h3>
        <div className="home-page-blogs-wrapper">
          {
            blogData.map((item) => (
              <div className="home-page-blogs-content" key={item.id}>
                <h4 className="home-page-blogs-content-title">{item.title}</h4>
                <p className="home-page-blogs-content-text">{item.body}</p>
                <button onClick={() => handleBlogDataId(item.id)} className="home-page-blogs-content-button">Read More</button>
              </div>
            ))
          }
          {
            blogDataId && (
              <div onClick={() => handleBlogDataId(null)} className="home-page-services-bottom-content-full-description" >
                <div className="home-page-services-bottom-content-full-description-text-wrapper">
                  <h3 className="home-page-services-bottom-content-full-description-title">{blogData?.find(item => item.id === blogDataId)?.title}</h3>
                  <p className="home-page-services-bottom-content-full-description-text">{blogData?.find(item => item.id === blogDataId)?.fullBody}</p>
                  <button onClick={() => handleBlogDataId(null)} className="home-page-services-bottom-content-full-description-button">Close</button>
                </div>
              </div>
            )
          }
        </div>
      </section>
<Pricing />
    <ExtraSection />
    
    <ContactForm />
    <RequestDemo />
    </div>
  )
}

export default HomePage