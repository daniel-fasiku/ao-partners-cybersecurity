import React from 'react'
import imgsrc from '../../assets/extra-section-svg-1.svg'

const ExtraSection = () => {
  return (
    <div className='w-full py-10 lg:py-20 flex justify-center items-center'>
        <div className='w-full  rounded-3xl py-16 px-2 sm:px-12 lg:px-16 gap-12 flex flex-col sm:flex-row justify-start items-center bg-[#E5E9FF]' >
            <img
            src={imgsrc}
            className='w-[250px] h-[230px]'
            
            />
            <div className='flex text-[#282828] min-h-[230px] py-2 justify-start sm:items-start items-center flex-col'>
                <span className='text-[32px] text-center sm:text-start leading-[48px]'>Want to learn more? Reach out to us!</span>
                <span className='text-[20px] leading-[32px] text-center sm:text-start'>Learn more about the cybersecurity services we provide. <br/> Reach out to us Today!  </span>
                <div className='flex flex-row flex-wrap justify-center mt-5 gap-4'>
                    
                    <a class="relative flex h-[60px] rounded-2xl w-[190px] items-center justify-center overflow-hidden border-2 border-[#5488C7] text-[#5488C7]  shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#5488C7] before:text-white hover:text-white before:duration-500 before:ease-out hover:shadow-[#5488C7] hover:before:h-56 hover:before:w-72">
                     <span class="z-10 font-bold text-xl">Contact Us</span>
                     </a>
                     <a class=" relative  flex h-[60px] rounded-2xl w-[190px] items-center justify-center overflow-hidden bg-[#5488C7] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#EB6B69] before:duration-500 before:ease-out hover:shadow-[#EB6B69] hover:before:h-56 hover:before:w-72">
                     <span class="z-10 font-bold text-xl">Request Demo</span>
                     </a>

                    

                </div>

            </div>

        </div>

      
    </div>
  )
}

export default ExtraSection
