import React from 'react'
import AboutImage2 from "../../assets/section-image2.png";
import "../../Pages/HomePage/HomePage.css"

const AboutExtra = () => {
  return (
    <section className="home-page-about">
          <div className="home-page-about-content">
            <h3 className="home-page-about-title">PCI compliance services</h3>
            <p className="home-page-about-text">
              AO Partners’ leading practices for providing PCI DSS compliance
              services have been reinforced with successful engagements
            </p>
            <button className="home-page-about-button">Request Demo</button>
          </div>
          <img
            src={AboutImage2}
            alt="About"
            className="home-page-about-image"
          />
        </section>
  )
}

export default AboutExtra
