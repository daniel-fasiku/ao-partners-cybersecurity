import React from "react";
import Bg from "../../assets/request-demo-bg.svg"

const RequestDemo = () => {
  return (
    <div className="flex w-full px-4 lg:px-8">
        <div className=" w-full min-h-[500px] px-2 bg-right bg-no-repeat sm:bg-center bg-cover" style={{ backgroundImage: `url(${Bg})` }}>
      <div className="rounded-lg   py-16 flex flex-col justify-start items-center">
        <span className="text-3xl text-[#282828]  font-semibold  pb-4 text-center">
          Ready to Get Started
        </span>
        <span className="max-w-[500px] text-[#282828]  pb-12 text-center">
          We are a multi disciplinary firm of technology professionals. We are
          registered consultants with the World Bank, African Development Bank
          and listed on DACON.
        </span>
        <button class="relative flex h-[70px] rounded-full w-60 items-center justify-center overflow-hidden bg-[#2F77E6] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-72">
          <span class="relative z-10 font-bold text-xl">Request a Demo</span>
        </button>
      </div>
    </div>

    </div>
    
  );
};

export default RequestDemo;
