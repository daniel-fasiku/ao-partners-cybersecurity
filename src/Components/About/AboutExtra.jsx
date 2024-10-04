import React from "react";
import AboutImage2 from "../../assets/section-image2.svg";
import { Icon } from "@iconify/react";

const AboutExtra = () => {
  return (
    <div className="w-full py-10 lg:py-20 flex justify-center items-center">
      <div className="max-w-screen-xl w-full flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col justify-start items-start px-10 py-10 md:py-0 max-w-[600px]">
          <h3 className="text-[40px] font-medium mb-6 text-[#282828]">
            PCI compliance services
          </h3>
          <p className="text-[20px] text-[#282828] mb-[60px]">
            AO Partners’ leading practices for providing PCI DSS compliance
            services have been reinforced with successful engagements
          </p>
          <button
            type="submit"
            class="mb-3  sm:mb-8 lg:mb-3 flex h-[50px] w-[300px] sm:w-[350px] items-center justify-center overflow-hidden bg-[#5488C7] text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#EB6B69] before:duration-500 before:ease-out hover:shadow-[#EB6B69] hover:before:h-56 relative hover:before:w-full"
          >
            <span class=" font-semibold text-lg z-10 mr-1">Request Demo</span>
            <Icon icon="fa6-solid:arrow-right" />
          </button>
        </div>
        <img src={AboutImage2} alt="About" className="w-[455px] h-[535px]" />
      </div>
    </div>
  );
};

export default AboutExtra;
