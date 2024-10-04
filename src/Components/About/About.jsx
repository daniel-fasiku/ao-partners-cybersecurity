import React from 'react'
import AboutImage from "../../assets/section-image1.svg";


const About = () => {
  return (
    <div className="w-full py-10 lg:py-20 flex justify-center items-center">
      <div className=' w-full flex flex-col md:flex-row justify-between items-center'>
          <img src={AboutImage} alt="About" className="w-[455px] h-[535px]" />
          <div className="flex flex-col justify-start items-center px-10 py-10 md:py-0 max-w-[600px]">
            <h3 className="text-[40px] font-medium mb-6 text-[#282828]">
              Advanced Vulnerability Assessment / Penetration Testing
            </h3>
            <p className="text-[20px] text-[#282828] mb-[60px]">
              We are a multi disciplinary firm of technology professionals. We
              are registered consultants with the World Bank, African
              Development Bank and listed on DACON.AO Partners enjoys an
              environment of continuous learning, challenging experiences, and
              enriching career opportunities. Our professionals are dedicated to
              strengthening corporate responsibility, building public trust, and
              making a positive impact in their communities.
            </p>
            <div className="flex flex-row justify-center items-center gap-[100px]">
              <div className="flex flex-col items-center justify-center">
                <h4 className="font-medium text-[40px] text-[#5488C7]">4.9/5</h4>
                <p className="text-[18px] text-[#515151] ">
                  Customer Rating
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <h4 className="font-medium text-[40px] text-[#5488C7] ">594</h4>
                <p className="text-[18px] text-[#515151] ">
                  Deployed Solutions
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
  )
}

export default About
