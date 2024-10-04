import React from "react";
import DesignImage from "../../assets/section-image3.png";
import DesignImage2 from "../../assets/section-image3-mobile.png";
import { Icon } from "@iconify/react";

const Design = () => {
  return (
    <div className="w-full py-10 lg:py-20 flex justify-center items-center">
      <div className=" w-full flex justify-center items-center">
        <div className="relative w-full h-[600px]">
          <div
            style={{ backgroundImage: `url(${DesignImage})` }}
            alt="Design"
            className="w-full h-full bg-fixed bg-cover bg-center bg-no-repeat"
          />
          {/* <img
            src={DesignImage2}
            alt="Design"
            className="home-page-design-image-mobile"
          /> */}
          <div className="absolute bottom-0 right-0 translate-y-1 max-w-[400px] lg:max-w-[500px]  py-9 px-5 h-max flex flex-col bg-white">
            <h3 className="text-[35px] font-semibild text-[#282828]">Design Framework</h3>
            <p className="text-[20px] text-[#282828] mt-4">
              AO Partners’ PCI policies framework establishes a foundation for
              sustained compliance and aligns cyber security initiatives, like
              PCI compliance, with the business strategy
            </p>

            <button
            type="submit"
            class="my-3  sm:mb-8 lg:mb-3 flex h-[50px] w-[300px] sm:w-[350px] items-center justify-center overflow-hidden bg-[#5488C7] text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#EB6B69] before:duration-500 before:ease-out hover:shadow-[#EB6B69] hover:before:h-56 relative hover:before:w-full"
          >
            <span class=" font-semibold text-lg z-10 mr-1">Request Demo</span>
            <Icon icon="fa6-solid:arrow-right" />
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;
