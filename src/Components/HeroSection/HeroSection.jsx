import { Icon } from "@iconify/react";
import HeroImage from "../../assets/hero-image.jpg";
import HeroBg from "../../assets/HeroBg.svg"


const HeroSection = () => {
  return (
    <div className="flex flex-col w-full bg-[#2F77E6]">
    <main className=" bg-cover bg-center bg-no-repeat flex flex-col sm:flex-row justify-between min-h-screen sm:min-h-max lg:min-h-screen mask-gradient-bottom" 
    >
      <div 
        className="w-full md:translate-x-8  flex flex-col gap-5 p-6 pl-12 lg:pl-24 lg:p-12 max-w-[400px] sm:max-w-screen md:max-w-[600px] ">
        <h1 className="font-medium text-[40px] sm:text-[60px] text-[#282828]">Security Review for Products, Assets & General IT Controls</h1>
        <p className="font-medium text-[18px] text-[#112244] sm:max-w-[80%]">Cyber-attacks present a significant and growing danger that can severely impact individuals and businesses. By staying aware of current threats and implementing appropriate security measures, individuals and organizations can effectively defend themselves against cyber-attacks and lower their risk of being affected by them</p>
        <button type='submit' className="mb-3 sm:mb-8 lg:mb-3 flex h-[50px] w-[300px] sm:w-[350px] items-center justify-center overflow-hidden bg-[#2F77E6] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#F23935] before:duration-500 before:ease-out hover:shadow-[#F23935] hover:before:h-56 relative hover:before:w-full">
          <span className=" font-semibold text-lg z-10 mr-1">Request Demo</span><Icon icon="fa6-solid:arrow-right" />
        </button>
      </div>
      <div className="">
        <img src={HeroImage} alt="hero-image" className="relative sm:absolute right-0 top-0 h-full aspect-auto mask-gradient-top sm:mask-gradient-left" />
      </div>
    </main>
    
    </div>
  )
}

export default HeroSection