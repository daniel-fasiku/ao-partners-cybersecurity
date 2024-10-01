import React from 'react'
import ContactForm from '../../Components/ContactUs/ContactUs'
import Pricing from '../../Components/Pricing/Pricing'
import RequestDemo from '../../Components/RequestDemo/RequestDemo'
import ExtraSection from '../../Components/ExtraSection/ExtraSection'


const HomePage = () => {
  return (
    <div className='w-full overflow-x-hidden flex flex-col justify-center items-center'>
    <Pricing />
    <ExtraSection />
    
    <ContactForm />
    <RequestDemo />
 

    </div>
  )
}

export default HomePage