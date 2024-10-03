import React from 'react'
import imgsrc from '../../assets/extra-section-svg-1.svg'

const ExtraSection = () => {
  return (
    <div className='w-full py-10 lg:py-20 flex justify-center items-center'>
        <div className='w-full max-w-screen-xl rounded-3xl py-16 px-2 sm:px-12 lg:px-16 gap-12 flex flex-col sm:flex-row justify-start items-center bg-[#E5E9FF]' >
            <img
            src={imgsrc}
            className='w-[250px] h-[230px]'
            
            />
            <div className='flex text-[#282828] min-h-[230px] py-2 justify-start sm:items-start items-center flex-col'>
                <span className='text-[32px] text-center sm:text-start leading-[48px]'>Want to learn more? Reach out to us!</span>
                <span className='text-[20px] leading-[32px] text-center sm:text-start'>Learn more about the cybersecurity services we provide. <br/> Reach out to us Today!  </span>
                <div className='flex flex-row flex-wrap justify-center mt-5 gap-4'>
                    
                    <a class="relative flex h-[60px] rounded-2xl w-[190px] items-center justify-center overflow-hidden border-2 border-[#2F77E6] text-[#2F77E6]  shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#2F77E6] before:text-white hover:text-white before:duration-500 before:ease-out hover:shadow-[#2F77E6] hover:before:h-56 hover:before:w-72">
                     <span class="z-10 font-bold text-xl">Contact Us</span>
                     </a>
                     <a class=" relative  flex h-[60px] rounded-2xl w-[190px] items-center justify-center overflow-hidden bg-[#2F77E6] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#F23935] before:duration-500 before:ease-out hover:shadow-[#F23935] hover:before:h-56 hover:before:w-72">
                     <span class="z-10 font-bold text-xl">Request Demo</span>
                     </a>

                    

                </div>

            </div>

        </div>

      
    </div>
  )
}

export default ExtraSection
