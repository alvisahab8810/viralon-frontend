import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialShare from "../components/SocialShare";
import Subscriber from "../components/Subscriber";
import BlogComponent from "../components/BlogComponent";
import Link from "next/link";

const Blogs = () => {
  const [blogData, setBlogData] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isBlogComponentVisible, setIsBlogComponentVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch("https://api.viralon.in/blog/")
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
      const response = await fetch(`https://api.viralon.in/blog/${blogId}`);
      // const response = await fetch('https://api.viralon.in/blog/659d38ceeb26c0409f155622');
      // const response = await fetch(`http://localhost:3020/blog/${id}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const blogData = await response.json();

      console.log("API Response:", response);
      console.log("Parsed JSON data:", blogData);

      setSelectedBlog(blogData);
      setIsBlogComponentVisible(true);
    } catch (error) {
      console.error("Error fetching blog data:", error);
    }
  };

  return (
    <>
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
            {/* <nav className="d-flex justify-content-end">
            <ol className="breadcrumb breadcrumb-style-1">
              <li className="breadcrumb-item"><Link href="index.html">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">About</li>
            </ol>
              </nav> */}
          </div>
        </section>
        {/*-------------- Hero Section Codes End From Here -------------*/}
        <section className="container1">
          <div id="exTab1" className="container mob-container">
            <div className="tab-head"></div>
            {/* <hr /> */}
            <div className="tab-content clearfix">
              <div className="tab-pane active" id="1a">
                <div className="container1 mob-container">
                  <div id="search-container">
                    {/* <div>
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
                    </div> */}
                    {/* <div className="blog-fe">
                      <Link href="#" className="get-feature">
                    Get Your Blogs Featured
                  </Link>
                    </div> */}
                  </div>

                  {/* <div className="blogbx">
                    {blogData.map((blog, index) => (
                      <div key={index}>
                        <div className="blogimg">
                          <img src={blog.imageSrc} alt={`Blog ${index + 1}`} />
                        </div>
                        <div className="blog-title">
                          <h4>
                            <Link href={blog.link} className="title">
                              {blog.category}
                            </Link>{" "}
                          </h4>
                          <Link href={blog.link} className="sub-title">
                            {blog.title}
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div> */}

                  <div className="row">
                    <div className="col-lg-8 offset-lg-2 viral-blog">
                      <div className="site-heading text-center">
                        <h4 className="title">Latest Blogs</h4>
                        <h2 className="sub-heading">News &amp; Update</h2>
                      </div>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-xl-4 col-md-6 mb-30 ">
                      <div className="blog-style-one">
                        <div className="thumb">
                          <Link href="/blog-details">
                            <img src="../images/blog/blog1.jpg" alt="Thumb" />
                          </Link>
                        </div>
                        <div className="info">
                          <div className="blog-meta">
                            <ul>
                              <li>
                                <Link href="#">30 Aug 2024</Link>
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link href="/blog-details">
                              Discovery incommode earnestly commanded if.
                            </Link>
                          </h4>
                          <Link href="/blog-details" className="btn-simple">
                            <i className="ri-arrow-right-s-line"></i> Read more
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-4 col-md-6 mb-30 ">
                      <div className="blog-style-one">
                        <div className="thumb">
                          <Link href="/blog-details">
                            <img src="../images/blog/blog2.jpg" alt="Thumb" />
                          </Link>
                        </div>
                        <div className="info">
                          <div className="blog-meta">
                            <ul>
                              <li>
                                <Link href="#">30 Aug 2024</Link>
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link href="/blog-details">
                              Expression acceptance imprudence particular
                            </Link>
                          </h4>
                          <Link href="/blog-details" className="btn-simple">
                            <i className="ri-arrow-right-s-line"></i> Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-md-6 mb-30">
                      <div className="blog-style-one">
                        <div className="thumb">
                          <Link href="/blog-details">
                            <img src="../images/blog/blog3.jpg" alt="Thumb" />
                          </Link>
                        </div>
                        <div className="info">
                          <div className="blog-meta">
                            <ul>
                              <li>
                                <Link href="#">30 Aug 2024</Link>
                              </li>
                            </ul>
                          </div>
                          <h4>
                            <Link href="/blog-details">
                              Considered imprudence of technical friendship.
                            </Link>
                          </h4>
                          <Link href="/blog-details" className="btn-simple">
                            <i className="ri-arrow-right-s-line"></i> Read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="blogbx">
                    {blogData?.length > 0 ? (
                      <>
                        {blogData.map((blog, index) => (
                          <div key={index}>
                            <Link
                              href={`/blog/${blog._id}`}
                            >
                              <div className="blogimg">
                                <img
                                  src={`https://api.viralon.in/uploads/${blog.file_name}`}
                                  src={`http://localhost:3020/upload/${blog.file_name}`}
                                  alt={`Blog ${index + 1}`}
                                />
                              </div>
                              <div className="blog-title">
                                <h4>
                                  <span className="title">{blog.blog_title}</span>
                                </h4>
                                <span className="sub-title">
                                  {blog.content}
                                </span>
                              </div>
                            </Link>
                          </div>
                        ))}
                      </>
                    ) : (
                      <p>No Blogs</p>
                    )}
                  </div> */}
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
