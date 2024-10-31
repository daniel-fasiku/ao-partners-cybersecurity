import React from "react";
import CountUp from "react-countup";

const TrackRecord = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-50 py-[70px] md:py-[100px] my-[70px] md:my-[100px] px-6 md:px-20 lg:px-32 bg-[#E5E9FF]">
      <h3 className="font-medium text-center text-3xl text-[#112244]">
        Trusted by more than 12+ enterprises worldwide
      </h3>
      <div className="flex flex-wrap justify-center items-center gap-[50px] py-[100px]">
        <div className="flex flex-col items-center justify-center rounded-full h-[250px] w-[250px] border border-[#5488C7]">
          <div className="flex flex-row items-center justify-center">
            <CountUp
              start={0}
              end={15}
              enableScrollSpy={true}
              duration={7.3}
              className="font-bold text-[40px] text-[#5488C7]"
            />
            <p className="font-bold text-[40px] text-[#5488C7]">+</p>
          </div>
          <p className="font-medium text-[20px] text-[#5488C7]">
            Years of experience
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-full h-[250px] w-[250px] border border-[#5488C7]">
          <div className="flex flex-row items-center justify-center">
            <CountUp
              start={0}
              end={50}
              enableScrollSpy={true}
              duration={7.3}
              className="font-bold text-[40px] text-[#5488C7]"
            />
            <p className="font-bold text-[40px] text-[#5488C7]">+</p>
          </div>
          <p className="font-medium text-[20px] text-[#5488C7]">
            Production products
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-full h-[250px] w-[250px] border border-[#5488C7]">
          <div className="flex flex-row items-center justify-center">
            <CountUp
              start={0}
              end={20}
              enableScrollSpy={true}
              duration={7.3}
              className="font-bold text-[40px] text-[#5488C7]"
            />
            <p className="font-bold text-[40px] text-[#5488C7]">+</p>
          </div>
          <p className="font-medium text-[20px] text-[#5488C7]">
            Technologies Used
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-full h-[250px] w-[250px] border border-[#5488C7]">
          <div className="flex flex-row items-center justify-center">
            <CountUp
              start={0}
              end={12}
              enableScrollSpy={true}
              duration={7.3}
              className="font-bold text-[40px] text-[#5488C7]"
            />
            <p className="font-bold text-[40px] text-[#5488C7]">+</p>
          </div>
          <p className="font-medium text-[20px] text-[#5488C7]">
            Enterprise clients
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrackRecord;
