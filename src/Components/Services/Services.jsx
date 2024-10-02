import React from "react";
import { useState } from 'react';
import "../../Pages/HomePage/HomePage.css"
import { Icon } from "@iconify/react";
import { securityData1} from "../../data";

const Services = () => {
  const [securityDataId, setSecurityDataId] = useState(null);

  const handleSecurityDataId = (id) => {
    setSecurityDataId((prevId) => (prevId === id ? null : id));
  };
  return (
    <section className="home-page-services">
      <div className="home-page-services-top">
        <h3 className="home-page-services-title">
          Our professional cyber security services
        </h3>
        <p className="home-page-services-text">
          We are a multi disciplinary firm of technology professionals. We are
          registered consultants with the World Bank, African Development Bank
          and listed on DACON.AO Partners enjoys an environment of continuous
          learning, challenging experiences, and enriching career opportunities.
          Our professionals are dedicated to strengthening corporate
          responsibility, building public trust, and making a positive impact in
          their communities.
        </p>
      </div>
      <div className="home-page-services-bottom">
        {securityData1.map((item) => (
          <>
            <div className="home-page-services-bottom-content" key={item.id}>
              <Icon
                icon={item.icon}
                className="home-page-services-bottom-content-icon"
                style={{ color: item.color }}
              />
              <h4 className="home-page-services-bottom-content-title">
                {item.title}
              </h4>
              <p className="home-page-services-bottom-content-text">
                {item.description}
              </p>
              <button
                onClick={() => handleSecurityDataId(item.id)}
                style={{ borderColor: item.color }}
                className="home-page-services-bottom-content-button"
              >
                Read More
              </button>
            </div>
          </>
        ))}
        {securityDataId && (
          <div
            onClick={() => handleSecurityDataId(null)}
            className="home-page-services-bottom-content-full-description"
          >
            <div className="home-page-services-bottom-content-full-description-text-wrapper">
              <h3 className="home-page-services-bottom-content-full-description-title">
                {
                  securityData1?.find((item) => item.id === securityDataId)
                    ?.title
                }
              </h3>
              <p className="home-page-services-bottom-content-full-description-text">
                {
                  securityData1?.find((item) => item.id === securityDataId)
                    ?.fullDescription
                }
              </p>
              <button
                onClick={() => handleSecurityDataId(null)}
                className="home-page-services-bottom-content-full-description-button"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
