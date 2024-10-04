import React from "react";
import { useState } from "react";
import "../../Pages/HomePage/HomePage.css";
import { blogData } from "../../data";

const Blogs = () => {
  const [blogDataId, setBlogDataId] = useState(null);

  const handleBlogDataId = (id) => {
    setBlogDataId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full py-10 lg:py-20 flex justify-center items-center">
      <div
        id="blogs"
        className="max-w-screen-xl flex-col justify-center items-center"
      >
        <h3 className="text-[40px] text-[#282828] font-semibold text-center">Our latest blogs</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-7">
          {blogData.map((item) => (
            <div className="pl-5 pr-10 py-4 bg-white rounded-md shadow-md w-[363px] h-[350px] flex flex-col border border-transparent justify-center items-center ease-in-out hover:translate-y-[-10px] hover:shadow-xl" key={item.id}>
              <h4 className="font-semibold text-[20px] text-[#5488C7] text-center">{item.title}</h4>
              <p className="text-[16px] text-[#7C7C7C] mt-3">{item.body}</p>
              <button
                onClick={() => handleBlogDataId(item.id)}
                className="w-fit bg-transparent text-[#7C7C7C] border border-[#7C7C7C] rounded-sm py-[10px] px-5 mt-4 cursor-pointer"
              >
                Read More
              </button>
            </div>
          ))}
          {blogDataId && (
          <div
            onClick={() => handleBlogDataId(null)}
            className="fixed top-0 bottom-0 left-0 right-0 backdrop-blur-sm flex items-center justify-center z-[1000] ease-in-out w-screen"
          >
            <div className="bg-white p-5 rounded-md max-w-[80%] lg:max-w-[50%] max-h-[80vh] overflow-y-auto ease-in-out  ">
              <h3 className="font-semibold text-[#282828] border-[#7C7C7C] pb-5 border-bottom">
                {
                  blogData?.find((item) => item.id === blogDataId)
                    ?.title
                }
              </h3>
              <p className="text-[20px] mt-4 text-[#282828]">
                {
                  blogData?.find((item) => item.id === blogDataId)
                    ?.fullDescription
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
