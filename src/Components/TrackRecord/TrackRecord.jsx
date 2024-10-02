import React from 'react'
import CountUp from "react-countup";
import "../../Pages/HomePage/HomePage.css"

const TrackRecord = () => {
  return (
    <section className="home-page-track-record">
          <h3 className="home-page-track-record-title">
            Trusted by more than 12+ enterprises worldwide
          </h3>
          <div className="home-page-track-record-wrapper">
            <div className="home-page-track-record-content">
              <div className="home-page-track-record-content-number">
                <CountUp
                  start={0}
                  end={15}
                  duration={2.75}
                  className="home-page-track-record-content-number-text"
                />
                <p className="home-page-track-record-content-text">+</p>
              </div>
              <p className="home-page-track-record-content-text2">
                Years of experience
              </p>
            </div>
            <div className="home-page-track-record-content">
              <div className="home-page-track-record-content-number">
                <CountUp
                  start={0}
                  end={50}
                  duration={2.75}
                  className="home-page-track-record-content-number-text"
                />
                <p className="home-page-track-record-content-text">+</p>
              </div>
              <p className="home-page-track-record-content-text2">
                Production products
              </p>
            </div>
            <div className="home-page-track-record-content">
              <div className="home-page-track-record-content-number">
                <CountUp
                  start={0}
                  end={20}
                  duration={2.75}
                  className="home-page-track-record-content-number-text"
                />
                <p className="home-page-track-record-content-text">+</p>
              </div>
              <p className="home-page-track-record-content-text2">
                Technologies Used
              </p>
            </div>
            <div className="home-page-track-record-content">
              <div className="home-page-track-record-content-number">
                <CountUp
                  start={0}
                  end={12}
                  duration={2.75}
                  className="home-page-track-record-content-number-text"
                />
                <p className="home-page-track-record-content-text">+</p>
              </div>
              <p className="home-page-track-record-content-text2">
                Enterprise clients
              </p>
            </div>
          </div>
        </section>
  )
}

export default TrackRecord
