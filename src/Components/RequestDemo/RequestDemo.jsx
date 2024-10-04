import React from "react";
import Bg from "../../assets/request-demo-bg.png"

const RequestDemo = () => {
  return (
    <div className="flex w-full justify-center items-center">
        <div className=" w-full  min-h-[500px] px-2 bg-right bg-no-repeat sm:bg-bottom bg-cover" style={{ backgroundImage: `url(${Bg})` }} >
      <div className="rounded-lg   py-16 flex flex-col justify-start items-center">
        <span className="text-3xl text-[#282828]  font-semibold  pb-4 text-center">
          Ready to Get Started
        </span>
        <span className="max-w-[500px] text-[#282828]  pb-12 text-center">
          We are a multi disciplinary firm of technology professionals. We are
          registered consultants with the World Bank, African Development Bank
          and listed on DACON.
        </span>
        <button class="relative flex h-[70px] rounded-full w-60 items-center justify-center overflow-hidden bg-[#5488C7] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#EB6B69] before:duration-500 before:ease-out hover:shadow-[#EB6B69] hover:before:h-56 hover:before:w-72">
          <span class=" z-10 font-bold text-xl">Request a Demo</span>
        </button>
      </div>
    </div>

    </div>
    
  );
};

export default RequestDemo;
