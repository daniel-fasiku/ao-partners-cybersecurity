import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Pricing = () => {
  const [orgSize, setOrgSize] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const handleChange = (event) => {
    setOrgSize(event.target.value); // Update orgSize state with the selected value
  };

  return (
    <div class="bg-white relative isolate">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div class="py-8 lg:py-16  mx-auto max-w-screen-xl ">
        <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h1 class="mb-4 tracking-tight text-3xl text-[#282828] font-semibold">
            Pricing
          </h1>
          <p class="mb-5 font-light text-gray-500 sm:text-xl "></p>
        </div>
        <div class="space-y-8  sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-3 xl:gap-5 lg:space-y-0">
          <div class="flex flex-col h-[650px] justify-start gap-8 px-3 py-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-6  ">
            <h3 class="mb-4 text-2xl h-[70px] font-semibold">1-50 Employees</h3>

            <div className="flex flex-col gap-5 h-[400px]">
              <p class="font-light text-gray-500 sm:text-lg ">
                Extended support for small teams with PenTest.
              </p>

              <ul role="" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>5 vendors</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>2 uploads + PenTest </span>
                </li>

                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Server: <span class="font-semibold"> 10 </span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Infrastructure: <span class="font-semibold">10</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    IP(s): <span class="font-semibold"> 3 </span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Uploads: <span class="font-semibold"> 10 </span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="w-full flex justify-center items-center">
              <button
                onClick={() => {
                  setOrgSize("1-50 Employees");
                  setModalOpen(true);
                }}
                class="relative flex h-[60px] rounded-2xl w-[190px] items-center justify-center overflow-hidden bg-[#2F77E6] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-72"
              >
                <span class="relative z-10 font-bold text-xl">Get Started</span>
              </button>
            </div>
          </div>

          <div class="flex flex-col h-[650px] justify-start gap-8 px-3 py-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-6  ">
            <h3 class="mb-4 text-2xl h-[70px] font-semibold">
              50-100 Employees
            </h3>
            <div className="flex flex-col gap-5 h-[400px]">
              <p class="font-light text-gray-500 sm:text-lg ">
                Robust support for mid-sized teams with PenTest.
              </p>
              <ul role="" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>10 vendors</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>100 uploads + PenTest </span>
                </li>

                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Server: <span class="font-semibold"> 20 </span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    User: <span class="font-semibold"> 20 </span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Infrastructure: <span class="font-semibold">30</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    IP(s): <span class="font-semibold"> 20 </span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Uploads: <span class="font-semibold"> 100 </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={() => {
                  setOrgSize("50-100 Employees");
                  setModalOpen(true);
                }}
                class="relative flex h-[60px] rounded-2xl w-[190px] items-center justify-center overflow-hidden bg-[#2F77E6] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-72"
              >
                <span class="relative z-10 font-bold text-xl">Get Started</span>
              </button>
            </div>
          </div>

          <div class="flex flex-col h-[650px] justify-start gap-8 px-3 py-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-6  ">
            <h3 class="mb-4 text-2xl h-[70px] font-semibold">
              100 above Employees
            </h3>
            <div className="flex flex-col gap-5 h-[400px]">
              <p class="font-light text-gray-500 sm:text-lg ">
                Comprehensive support for large enterprises with PenTest.
              </p>

              <ul role="" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>200 vendors</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>200 uploads + PenTest </span>
                </li>

                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Server: <span class="font-semibold"> 50 </span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    User: <span class="font-semibold"> 2600 </span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Infrastructure: <span class="font-semibold">200</span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    IP(s): <span class="font-semibold"> 200 </span>
                  </span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 "
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>
                    Uploads: <span class="font-semibold"> 200 </span>
                  </span>
                </li>
              </ul>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={() => {
                  setOrgSize("100 above Employees");
                  setModalOpen(true);
                }}
                class="relative flex h-[60px] rounded-2xl w-[190px] items-center justify-center overflow-hidden bg-[#2F77E6] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-72"
              >
                <span class="relative z-10 font-bold text-xl">Get Started</span>
              </button>
            </div>
          </div>

          <div class="flex flex-col h-[650px] justify-start gap-8 px-3 py-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow  xl:p-6  ">
            <h3 class="mb-4 text-2xl h-[70px] font-semibold">Custom Plan</h3>
            <div className="flex flex-col gap-5 h-[400px]">
              <p class="font-light text-gray-500 sm:text-lg ">
                This custom plan allows you to tailor features specifically to
                your organization's needs, selecting from a wide range of
                options including vendors, servers, IPs, uploads, and premium
                security features.
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button
                onClick={() => {
                  setOrgSize("");
                  setModalOpen(true);
                }}
                class="relative flex h-[60px] rounded-2xl w-[190px] items-center justify-center overflow-hidden bg-[#2F77E6] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-72"
              >
                <span class="relative z-10 font-bold text-xl">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* # Pricing modal  */}
      {modalOpen &&
        ReactDOM.createPortal(
          <div
            tabIndex="-1"
            aria-hidden="true"
            className="flex z-[9999] overflow-y-auto overflow-x-hidden backdrop-blur-sm fixed top-0 right-0 left-0 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-max sm:max-h-full"
          >
            <div className="p-4 w-full max-w-2xl max-h-full">
              <div className="bg-white rounded-lg shadow">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Pricing Details
                  </h3>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 "
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4">
                  <form
                    action="#"
                    method="POST"
                    className="mx-auto text-[#282828] mt-5 sm:mt-7 w-full"
                  >
                    <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                      <div className="flex flex-col gap-6">
                        <div>
                          <label
                            htmlFor="employee-size"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Employee Size
                          </label>
                          <div className="mt-2.5">
                            <select
                              id="employee-size"
                              value={orgSize}
                              onChange={handleChange}
                              className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset  ring-[#E5E9FF] placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:outline-none focus:border-none focus:ring-[#2F77E6] sm:text-sm sm:leading-6"
                            >
                              <option value="">Choose organization size</option>
                              <option value="1-50 Employees">
                                1-50 Employees
                              </option>
                              <option value="50-100 Employees">
                                50-100 Employees
                              </option>
                              <option value="100 above Employees">
                                100 above Employees
                              </option>
                            </select>
                          </div>
                        </div>

                        <div className="">
                          <label className="block text-sm font-semibold leading-6 text-gray-900">
                            Choose your auditing Compliance standard
                          </label>
                          <div className="mt-2.5">
                            <div class="flex flex-wrap gap-3">
                              <div class="flex items-center me-4">
                                <input
                                  id="inline-checkbox"
                                  type="checkbox"
                                  value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                                />
                                <label
                                  for="inline-checkbox"
                                  class="ms-2 text-sm font-medium text-gray-900 "
                                >
                                  GDPR
                                </label>
                              </div>
                              <div class="flex items-center me-4">
                                <input
                                  id="inline-2-checkbox"
                                  type="checkbox"
                                  value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                                />
                                <label
                                  for="inline-2-checkbox"
                                  class="ms-2 text-sm font-medium text-gray-900 "
                                >
                                  PCI LEVEL 1
                                </label>
                              </div>
                              <div class="flex items-center me-4">
                                <input
                                  id="inline-checkbox"
                                  type="checkbox"
                                  value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                                />
                                <label
                                  for="inline-checkbox"
                                  class="ms-2 text-sm font-medium text-gray-900 "
                                >
                                  ISO27001
                                </label>
                              </div>
                              <div class="flex items-center me-4">
                                <input
                                  id="inline-2-checkbox"
                                  type="checkbox"
                                  value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                                />
                                <label
                                  for="inline-2-checkbox"
                                  class="ms-2 text-sm font-medium text-gray-900 "
                                >
                                  ISO22301
                                </label>
                              </div>
                              <div class="flex items-center me-4">
                                <input
                                  id="inline-2-checkbox"
                                  type="checkbox"
                                  value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                                />
                                <label
                                  for="inline-2-checkbox"
                                  class="ms-2 text-sm font-medium text-gray-900 "
                                >
                                  SOC2
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <label className="block text-sm font-semibold leading-6 text-gray-900">
                            Choose Payment Option
                          </label>
                          <div className="mt-2.5">
                            <div class="flex items-center mb-4">
                              <input
                                id="default-radio-1"
                                type="radio"
                                value=""
                                name="default-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                              />
                              <label
                                for="default-radio-1"
                                class="ms-2 text-sm font-medium text-gray-900 "
                              >
                                Standard Payment
                              </label>
                            </div>
                            <div class="flex items-center mb-4">
                              <input
                                id="default-radio-1"
                                type="radio"
                                value=""
                                name="default-radio"
                                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
                              />
                              <label
                                for="default-radio-1"
                                class="ms-2 text-sm font-medium text-gray-900"
                              >
                                Flexi + Monthly
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <div className="">
                          <span className="block text-2xl font-semibold leading-8 text-gray-900">
                            TOTAL COST: $10,000
                          </span>
                        </div>

                        <div className="">
                          <label
                            htmlFor="phone-number"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
                            Standard Payment:
                          </label>
                          <span className="relative mt-2.5">
                            70% payment before commencement and 30% after
                            completion.
                          </span>
                        </div>

                        <div className="">
                          <label
                            htmlFor="email"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                          >
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
                          <div className="mt-2.5">
                            <div class="flex flex-wrap gap-3">
                              <div class="flex items-center me-4">
                                <input
                                  id="inline-checkbox"
                                  type="checkbox"
                                  value=""
                                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  focus:ring-2 "
                                />
                                <label
                                  for="inline-checkbox"
                                  class="ms-2 text-sm font-medium text-gray-900 "
                                >
                                  i agree to receive marketing communications
                                  from smartcomply
                                </label>
                              </div>
                              <span className="text-xs ">
                                {" "}
                                By clicking Submit, you agree to Smartcomply's
                                privacy and terms
                              </span>
                            </div>
                          </div>
                        </div>

                        <button
                          type="submit"
                          onClick={() => setModalOpen(false)}
                          class=" flex h-[50px] w-full items-center justify-center overflow-hidden bg-[#2F77E6] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 relative hover:before:w-full"
                        >
                          <span class=" font-semibold text-lg z-10">
                            Submit
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b ">
                  {/* <button
                    onClick={() => setModalOpen(false)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    I accept
                  </button>
                  <button
                    onClick={() => setModalOpen(false)}
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Decline
                  </button> */}
                </div>
              </div>
            </div>
          </div>,
          document.body // Render the modal in the body
        )}
    </div>
  );
};

export default Pricing;
