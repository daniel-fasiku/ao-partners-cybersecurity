import React from 'react'
import { useState } from 'react';
import "../../Pages/HomePage/HomePage.css"
import { blogData} from "../../data";

const Blogs = () => {
    const [blogDataId, setBlogDataId] = useState(null);

const handleBlogDataId = (id) => {
  setBlogDataId((prevId) => (prevId === id ? null : id));
};

  return (
    <section id="blogs" className="home-page-blogs">
          <h3 className="home-page-blogs-title">Our latest blogs</h3>
          <div className="home-page-blogs-wrapper">
            {blogData.map((item) => (
              <div className="home-page-blogs-content" key={item.id}>
                <h4 className="home-page-blogs-content-title">{item.title}</h4>
                <p className="home-page-blogs-content-text">{item.body}</p>
                <button
                  onClick={() => handleBlogDataId(item.id)}
                  className="home-page-blogs-content-button"
                >
                  Read More
                </button>
              </div>
            ))}
            {blogDataId && (
              <div
                onClick={() => handleBlogDataId(null)}
                className="home-page-services-bottom-content-full-description"
              >
                <div className="home-page-services-bottom-content-full-description-text-wrapper">
                  <h3 className="home-page-services-bottom-content-full-description-title">
                    {blogData?.find((item) => item.id === blogDataId)?.title}
                  </h3>
                  <p className="home-page-services-bottom-content-full-description-text">
                    {blogData?.find((item) => item.id === blogDataId)?.fullBody}
                  </p>
                  <button
                    onClick={() => handleBlogDataId(null)}
                    className="home-page-services-bottom-content-full-description-button"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </section>
  )
}

export default Blogs
