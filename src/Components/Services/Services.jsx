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
    <section className="flex flex-col items-center justify-center gap-50 py-[70px] md:py-[100px] my-[70px] md:my-[100px] px-12 md:px-20 lg:px-32">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-medium text-center text-[30px] md:text-[40px] text-[#112244]">
          Our professional cyber security services
        </h3>
        <p className="max-w-screen-xl font-regular text-center text-[18px] md:text-[20px] text-[#7C7C7C]">
          We are a multi disciplinary firm of technology professionals. We are
          registered consultants with the World Bank, African Development Bank
          and listed on DACON.AO Partners enjoys an environment of continuous
          learning, challenging experiences, and enriching career opportunities.
          Our professionals are dedicated to strengthening corporate
          responsibility, building public trust, and making a positive impact in
          their communities.
        </p>
      </div>
      <div className="mt-[100px] gird grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-6">
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
