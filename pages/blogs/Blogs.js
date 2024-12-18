import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SocialShare from "../../components/SocialShare";
import Subscriber from "../../components/Subscriber";
import BlogComponent from "../../components/BlogComponent";
import nextConfig from "../../next.config";

import Link from "next/link";
import CustomHead from "../../components/CustomHead";
const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isBlogComponentVisible, setIsBlogComponentVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch(`${nextConfig.apiUrl}/blog/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setBlogData(data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  // const handleBlogClick = (blogId) => {
  //   router.push(`/blog/${blogId}`);
  // };

  const handleBlogClick = async (blogId) => {
    try {
      const response = await fetch(`${nextConfig.apiUrl}/blog/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blogData = await response.json();

      console.log("API Response:", response);
      console.log("Parsed JSON data:", blogData);

      setSelectedBlog(blogData);
      setIsBlogComponentVisible(true);
      router.push(`/blog/${blogId}`);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  return (
    <>

      <CustomHead title="Viralon | Blogs | Stay Informed | Unlock Insights"
        keywords="Viralon, Blogs"
        description=" Explore the dynamic world of digital marketing through Viralon's insightful blogs. Stay informed, inspired, and ahead of the curve" />
      <Header />
      <SocialShare />
      <section id="blogs">
        {/*-------------- Hero Section Codes Start From Here -------------*/}
        <section
          className="section hero-section-2"
          style={{ backgroundImage: "url(/images/hero-banners/blogs.jpg)" }}
        >
          <div className="overlayer" />
          <div className="container">
            <h1 className="page-heading">
              <span className="material-icons-round icon">groups</span>Blogs
            </h1>
          </div>
        </section>
        {/*-------------- Hero Section Codes End From Here -------------*/}
        <section className="container1">
          <div id="exTab1" className="container mob-container">
            <div className="tab-head"></div>
            <hr />
            <div className="tab-content clearfix">
              <div className="tab-pane active" id="1a">
                <div className="container1 mob-container">
                  <div id="search-container">
                    <div>
                      <div className="b-search">
                        <button className="search-btn">
                          <i className="ri-search-line" />
                        </button>
                        <input
                          type="search"
                          name="Search"
                          placeholder="Search"
                          className="form-control"
                        />
                      </div>
                    </div>
                    {/* <div className="blog-fe">
                      <a href="#" className="get-feature">  
                    Get Your Blogs Featured
                  </a>
                    </div> */}
                  </div>
                  <div className="blogbx">
                    {blogData?.length > 0 ? (
                      <>
                        {blogData.map((blog, index) => (
                          <div key={index}>
                            <Link
                              // href={`/blogs/${blog._id}`}
                            href={`https://api.viralon.in/blog/${blog._id}`}
                            >
                              <div className="blogimg">
                                <img
                                  src={`https://api.viralon.in/uploads/${blog.file_name}`}
                                  // src={`http://localhost:3020/upload${blog.file_name}`}

                                  // src={`${nextConfig.apiUrl}/upload${blog.file_name}`}
                                  alt={`Blog ${index + 1}`}
                                />
                              </div>
                              <div className="blog-title">
                                <h4>
                                  <span className="title">{blog.blog_title}</span>
                                </h4>
                                <span className="sub-title">
                                  {blog.blog_content}
                                </span>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </>
                    ) : (
                      <p>No Blogs</p>
                    )}
                  </div>
                  {isBlogComponentVisible && (
                    <BlogComponent
                      selectedBlog={selectedBlog}
                      onClose={() => setIsBlogComponentVisible(false)}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*-------------- Subscribe Section Codes Start From Here -------------*/}
        <Subscriber />
        {/*-------------- Subscribe Section Codes End From Here -------------*/}
        {/*-------------- Footer Section Codes Start From Here -------------*/}
        <Footer />
        {/*-------------- Footer Section Codes End From Here -------------*/}
        {/* Swiper JS */}
        {/* Aos Animation */}
        {/* Initialize Swiper */}
        {/*  */}
        {/* Sub-Mega Menus Script */}
        {/* For Remove Before Icon */}
      </section>
    </>
  );
};

export default Blogs;

