import { Icon } from "@iconify/react";
import HeroImage from "../../assets/hero-image.jpg";
import HeroBg from "../../assets/HeroBg.svg"


const HeroSection = () => {
  return (
    <div className="flex flex-col w-full bg-white" >
    <main className="lg:max-h-[calc(100vh-80px)] pb-[300px] bg-contain bg-bottom md:bg-contain bg-fixed md:bg-right bg-no-repeat flex flex-col lg:flex-row justify-start items-start" 
    style={{ backgroundImage: `url(${HeroImage})` }}
    
    >
      <div 
        className="w-full h-full bg-white flex flex-col gap-5 p-6 pl-12 lg:pl-24 lg:p-12  lg:w-1/2 ">
        <h1 className="font-medium text-[30px] sm:text-[35px] lg:text-[40px] text-[#282828]">Security Review for Products, Assets & General IT Controls</h1>
        <p className="font-medium text-[18px] text-[#112244] sm:max-w-[80%]">Cyber-attacks present a significant and growing danger that can severely impact individuals and businesses. By staying aware of current threats and implementing appropriate security measures, individuals and organizations can effectively defend themselves against cyber-attacks and lower their risk of being affected by them</p>
        <button type='submit' class="mb-3 sm:mb-8 lg:mb-3 flex h-[50px] w-[300px] sm:w-[350px] items-center justify-center overflow-hidden bg-[#5488C7] text-white transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#F23935] before:duration-500 before:ease-out hover:shadow-[#F23935] hover:before:h-56 relative hover:before:w-full">
          <span class=" font-semibold text-lg z-10 mr-1">Request Demo</span><Icon icon="fa6-solid:arrow-right" />
        </button>
      </div>
      
    </main>
    <div className="bg-cover bg-bottom bg-no-repeat h-[75px] sm:h-[150px] w-full translate-y-[-2px]"style={{ backgroundImage: `url(${HeroBg})` }}>

    </div>
    </div>
  )
}

export default HeroSection