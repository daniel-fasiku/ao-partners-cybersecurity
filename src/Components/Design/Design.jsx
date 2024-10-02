import React from 'react'
import DesignImage from "../../assets/section-image3.png";
import DesignImage2 from "../../assets/section-image3-mobile.png";
import "../../Pages/HomePage/HomePage.css"

const Design = () => {
  return (
    <section className="home-page-design-section">
          <div className="home-page-design-wrapper">
            <img
              src={DesignImage}
              alt="Design"
              className="home-page-design-image"
            />
            <img
              src={DesignImage2}
              alt="Design"
              className="home-page-design-image-mobile"
            />
            <div className="home-page-design-content">
              <h3 className="home-page-design-title">Design Framework</h3>
              <p className="home-page-design-text">
                AO Partners’ PCI policies framework establishes a foundation for
                sustained compliance and aligns cyber security initiatives, like
                PCI compliance, with the business strategy
              </p>
              <button className="home-page-design-button">Request Demo</button>
            </div>
          </div>
        </section>
  )
}

export default Design
