import React, { useState, useEffect } from "react";
import Footer from ".././components/Footer";
import Header from ".././components/Header";
import SocialShare from ".././components/SocialShare";
import axios from "axios";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import Link from "next/link";

const BlogComponent = ({ blogId }) => {
  const [blogData, setBlogData] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `${nextConfig.apiUrl}/blog/${blogId}`
        );

        const data = response.data;
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    const fetchRelatedBlogs = async () => {
      try {
        const response = await axios.get(
          `${nextConfig.apiUrl}/blog`
        );

        const relatedData = response.data;
        setRelatedBlogs(relatedData);
      } catch (error) {
        console.error("Error fetching related blogs:", error);
      }
    };

    fetchBlogData();
    fetchRelatedBlogs();
  }, [blogId]);

  if (!blogData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header />
      <SocialShare />
      <section className="section hero-BlogID">
        <img
          className="BlogIDboxImg"
          src={`${nextConfig.apiUrl}/uploads/${blogData.file_name}`}
          alt={`Blog Detail`}
        />
        <div className />
        <div className="container">
          <h1 className="page-heading">
            <span className="material-icons-round icon">groups</span>Blogs
          </h1>
        </div>
      </section>
      <div className="container blogIDbox">
        <ul className="social-bx">
          <li><Link href="#"><i className="ri-instagram-fill"></i></Link></li>
          <li><Link href="#"><img src="/images/icons/twitter.png" alt="Twitter Icon" /></Link></li>
          <li><Link href="#"><i className="ri-linkedin-fill"></i></Link></li>
          <li><Link href="#"><i className="ri-facebook-fill"></i></Link></li>
          <li><Link href="#">  <i className="ri-youtube-fill"></i></Link></li>

        </ul>
        <h2 className="pt-4">{blogData.blog_title}</h2>
        {
          console.log(blogData, "sdhf")
        }
        <div className="text-bold " dangerouslySetInnerHTML={{ __html: blogData.blog_content }} />

      </div>

      {/* Related Blogs Section */}
      <section className="related-blogs">
        <div className="container">
          <h2>Related Blogs</h2>

          {/* Swiper component for related blogs */}
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              240: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
          >
            {relatedBlogs.map((relatedBlog, index) => (
              <SwiperSlide key={index}>
                {/* Wrap the related blog image with Link */}
                <Link href={`/blogs/${relatedBlog._id}`}>

                  <div className="related-blog">
                    <img
                      className="relatedBlogImg"
                      src={`${nextConfig.apiUrl}/uploads/${relatedBlog.file_name}`}
                      alt={`Related Blog ${index + 1}`}
                    />
                    <p>{relatedBlog.blog_title}</p>
                  </div>

                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default BlogComponent;
