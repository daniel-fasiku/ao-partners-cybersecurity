import React from 'react'
import AboutImage from "../../assets/section-image1.png";
import "../../Pages/HomePage/HomePage.css"

const About = () => {
  return (
    <section className="home-page-about">
          <img src={AboutImage} alt="About" className="home-page-about-image" />
          <div className="home-page-about-content">
            <h3 className="home-page-about-title">
              Advanced Vulnerability Assessment / Penetration Testing
            </h3>
            <p className="home-page-about-text">
              We are a multi disciplinary firm of technology professionals. We
              are registered consultants with the World Bank, African
              Development Bank and listed on DACON.AO Partners enjoys an
              environment of continuous learning, challenging experiences, and
              enriching career opportunities. Our professionals are dedicated to
              strengthening corporate responsibility, building public trust, and
              making a positive impact in their communities.
            </p>
            <div className="home-page-about-rating-wrapper">
              <div className="home-page-about-rating-content1">
                <h4 className="home-page-about-rating-content1-title">4.9/5</h4>
                <p className="home-page-about-rating-content1-text">
                  Customer Rating
                </p>
              </div>
              <div className="home-page-about-rating-content2">
                <h4 className="home-page-about-rating-content2-title">594</h4>
                <p className="home-page-about-rating-content2-text">
                  Deployed Solutions
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default About
