import React from 'react';


export default function ContactForm() {

  return (
    <div  className="isolate  bg-white  pb-24 sm:pb-32 w-full ">
      
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="tracking-tight text-3xl text-[#282828]  font-semibold ">Contact Us</h2>
        
      </div>
      <form action="#" method="POST" className="mx-auto text-[#282828] mt-8 sm:mt-10 w-full max-w-screen-xl">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className='flex flex-col gap-2'>
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  ring-[#E5E9FF] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:border-none focus:ring-[#2F77E6] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <div className="">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:border-none ring-[#E5E9FF] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2F77E6] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:border-none ring-[#E5E9FF] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2F77E6] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2F77E6] sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                
              </div>
              <input
                id="phone-number"
                name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:border-none ring-[#E5E9FF] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2F77E6] sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          </div>

          <div className='flex flex-col gap-8'>
          <div className="">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={8}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset focus:outline-none focus:border-none ring-[#E5E9FF] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2F77E6] sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <button type='submit' class=" flex h-[50px] w-full items-center justify-center overflow-hidden bg-[#2F77E6] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 relative hover:before:w-full">
          <span class=" font-semibold text-lg z-10">Let's Talk</span>
        </button>
        </div>
          
        </div>
        
      </form>
    </div>
  )
}
