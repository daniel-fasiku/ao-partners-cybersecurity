import React from "react";
import { useState } from 'react';
import { Icon } from "@iconify/react";
import { securityData1} from "../../data";

const Services = () => {
  const [securityDataId, setSecurityDataId] = useState(null);

  const handleSecurityDataId = (id) => {
    setSecurityDataId((prevId) => (prevId === id ? null : id));
  };
  return (
    <div className="flex justify-center items-center py-10 lg:py-20 ">

      <div className="flex flex-col items-center justify-center gap-50 ">
      <div className="flex flex-col items-center justify-center">
        <h3 className="font-medium text-center text-[30px] md:text-[40px] text-[#112244]">
          Our professional cyber security services
        </h3>
        <p className=" font-regular text-center text-[18px] md:text-[20px] text-[#7C7C7C]">
          We are a multi disciplinary firm of technology professionals. We are
          registered consultants with the World Bank, African Development Bank
          and listed on DACON.AO Partners enjoys an environment of continuous
          learning, challenging experiences, and enriching career opportunities.
          Our professionals are dedicated to strengthening corporate
          responsibility, building public trust, and making a positive impact in
          their communities.
        </p>
      </div>
      <div className="mt-[100px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-6">
        {securityData1.map((item) => (
          <>
            <div className="pl-[18px] pr-10 py-4 bg-white rounded-sm shadow-md w-[360px] h-[350px] flex flex-col cursor-pointer justify-center transition-all ease-in-out hover:translate-y-[-10px]" key={item.id}>
              <Icon
                icon={item.icon}
                className="w-16 h-16 mb-3"
                style={{ color: item.color }}
              />
              <h4 className="font-semibold text-[20px] text-[#282828]" >
                {item.title}
              </h4>
              <p className="text-[16px] mt-3 text-[#7C7C7C]">
                {item.description}
              </p>
              <button
                onClick={() => handleSecurityDataId(item.id)}
                style={{ borderColor: item.color }}
                className=" w-fit bg-transparent text-[#7C7C7C] border border-[#7C7C7C] rounded-sm py-[10px] px-5 mt-4 cursor-pointer"
              >
                Read More
              </button>
            </div>
          </>
        ))}
        {securityDataId && (
          <div
            onClick={() => handleSecurityDataId(null)}
            className="fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex items-center justify-center z-[1000] ease-in-out w-screen"
          >
            <div className="bg-white p-5 rounded-md max-w-[80%] lg:max-w-[50%] max-h-[80vh] overflow-y-auto ease-in-out  ">
              <h3 className="font-semibold text-[#282828] border-[#7C7C7C] pb-5 border-bottom">
                {
                  securityData1?.find((item) => item.id === securityDataId)
                    ?.title
                }
              </h3>
              <p className="text-[20px] mt-4 text-[#282828]">
                {
                  securityData1?.find((item) => item.id === securityDataId)
                    ?.fullDescription
                }
              </p>
              <button
                onClick={() => handleSecurityDataId(null)}
                className="w-fit bg-transparent border border-[#282828] roundd-md cursor-pointer mt-10 py-[10px] px-5"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
      
    </div>
  );
};

export default Services;
