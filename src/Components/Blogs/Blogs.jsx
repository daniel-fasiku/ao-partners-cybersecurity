import React from "react";
import { useState, useEffect } from "react";
import { blogData } from "../../data";

const Blogs = () => {
  const [blogDataId, setBlogDataId] = useState(null);
  const [visibleBlogs, setVisibleBlogs] = useState(2);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 640); // Detect small screens (sm and below)
    };

    // Set the initial value
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBlogDataId = (id) => {
    setBlogDataId((prevId) => (prevId === id ? null : id));
  };
  const showMoreBlogs = () => {
    setVisibleBlogs(blogData.length); // Show all blog items
  };
  const showLessBlogs = () => {
    setVisibleBlogs(2); // Show all blog items
  };

  return (
    <div className="w-full py-10 lg:py-20 flex justify-center items-center">
      <div id="blogs" className=" flex-col justify-center items-center">
        <h3 className="text-3xl text-[#282828] font-semibold text-center mb-8 lg:mb-12 ">
          Our latest blogs
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-7">
          {blogData
            .slice(0, isSmallScreen ? visibleBlogs : blogData.length) // Limit items on small screens
            .map((item) => (
               <div class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                  <span class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#5488C7] transition-all duration-700 group-hover:scale-[12]"></span>
                  <div class="relative z-10 mx-auto max-w-md">
                    <span class="grid h-20 w-20 place-items-center rounded-full bg-[#5488C7] transition-all duration-700 group-hover:bg-[#EB6B69]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="h-10 w-10 text-white transition-all"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                        />
                      </svg>
                    </span>
                    <div class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-700 group-hover:text-white/90">
                      <h4 className="font-semibold text-[20px] text-[#5488C7] group-hover:text-white/90 text-center">
                        {item.title}
                      </h4>
                      <p>{item.body}</p>
                    </div>
                    <div class="pt-5 text-base font-semibold leading-7">
                      <p>
                        <a
                          onClick={() => handleBlogDataId(item.id)}
                          class="text-[#5488C7] transition-all duration-700 group-hover:text-white"
                        >
                          Read More &rarr;
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              
            ))}
          {isSmallScreen && visibleBlogs < blogData.length && (
            <div className="sm:col-span-2 lg:col-span-3 flex justify-center items-center h-[200px] mt-5 mb-10  mask-gradient-bottom">
              <button
                onClick={showMoreBlogs}
                class="relative flex h-[70px] rounded-full w-60 items-center justify-center overflow-hidden bg-[#EB6B69] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#5488C7] before:duration-700 before:ease-out hover:shadow-[#5488C7] hover:before:h-56 hover:before:w-72"
              >
                <span class=" z-10 font-bold text-xl">Show More</span>
              </button>
            </div>
          )}
          {isSmallScreen && visibleBlogs == blogData.length && (
            <div className="sm:col-span-2 lg:col-span-3 flex justify-center items-center h-[200px] mt-5 mb-10  mask-gradient-bottom">
              <button
                onClick={showLessBlogs}
                class="relative flex h-[70px] rounded-full w-60 items-center justify-center overflow-hidden bg-[#5488C7] text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-[#EB6B69] before:duration-700 before:ease-out hover:shadow-[#EB6B69] hover:before:h-56 hover:before:w-72"
              >
                <span class=" z-10 font-bold text-xl">Show Less</span>
              </button>
            </div>
          )}
          {blogDataId && (
            <div
              onClick={() => handleBlogDataId(null)}
              className="fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex items-center justify-center z-[1000] ease-in-out w-screen"
            >
              <div className="bg-white p-5 rounded-md max-w-[80%] lg:max-w-[50%] max-h-[80vh] overflow-y-auto ease-in-out  ">
                <h3 className="font-semibold text-[#282828] border-[#7C7C7C] pb-5 border-bottom">
                  {blogData?.find((item) => item.id === blogDataId)?.title}
                </h3>
                <p className="text-[20px] mt-4 text-[#282828]">
                  {
                    blogData?.find((item) => item.id === blogDataId)
                      ?.fullBody
                  }
                </p>
                <button
                  onClick={() => handleBlogDataId(null)}
                  className="w-fit bg-transparent border border-[#282828] roundd-md cursor-pointer mt-10 py-[10px] px-5"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
