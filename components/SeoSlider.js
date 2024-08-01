import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SeoSlider = () => {
  return (
    <div className="social-media">
      <h3 className="text-white s-heading text-center pb-4 font-size-28">
        Core Tasks in Viralon's SEO Services
      </h3>
      <div className="container">
        <div className="social-media-container">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{
              delay: 1000,
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
   
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper1  core-task-bx" // Set your own className here
          >
            <SwiperSlide>
              <div className="core-image">
                <div className="core-underbx">
                  <div className="corecont">
                    <h3>
                      Keyword Research and Optimization
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img src="/images/icons/icon14.png" alt="Keyword Research Icon" />
                    </div>
                    <h3>Keyword Research and Optimization</h3>
                    <p className="core-para">
                      We delve deep into keyword research, identifying the phrases your potential customers use to find products or services like yours. We then strategically optimize your website's content to target these keywords, ensuring your site ranks for relevant searches.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="core-image">
                <div className="core-underbx">
                  <div className="corecont">
                    <h3>
                      Technical SEO Audits
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img src="/images/icons/strategic-plan.png" alt="Technical SEO Audits Icon" />
                    </div>
                    <h3>Technical SEO Audits</h3>
                    <p className="core-para">
                      We perform comprehensive technical audits to identify 
                      and rectify issues that may be hindering your website's 
                      performance in search results. This includes optimizing site speed, mobile-friendliness, and fixing broken links.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="core-image">
                <div className="core-underbx">
                  <div className="corecont">
                    <h3>
                      Content Creation and Optimization
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img src="/images/icons/content-creation.png" alt="Content Creation and Optimization Icon" />
                    </div>
                    <h3>Content Creation and Optimization</h3>
                    <p className="core-para">
                      High-quality content is the backbone of SEO. Our team creates and optimizes content that not only engages your audience but also aligns with search engine algorithms. This includes blog posts, product descriptions, and more.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="core-image">
                <div className="core-underbx">
                  <div className="corecont">
                    <h3>
                      Link Building
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img src="/images/icons/icon7.png" alt="Link Building Icon" />
                    </div>
                    <h3>Link Building</h3>
                    <p className="core-para">
                      Building high-quality, authoritative backlinks to your website is crucial for SEO success. We employ ethical link-building strategies to boost your site's authority and credibility.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="core-image">
                <div className="core-underbx">
                  <div className="corecont">
                    <h3>
                      On-Page and Off-Page SEO
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img src="/images/icons/onpage.png" alt="On-Page and Off-Page SEO Icon" />
                    </div>
                    <h3>On-Page and Off-Page SEO</h3>
                    <p className="core-para">
                      We optimize both on-page elements (titles, meta descriptions, headers) and off-page factors (backlinks, social signals) to ensure a holistic SEO approach.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SeoSlider;
