import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const VideoMarketingSlide = () => {
  return (
    <div className="social-media">
      <h2 className="text-white s-heading text-center  pb-4 font-size-30">
        Core Tasks that Viralon Excels in Content Marketing
      </h2>
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
            modules={[Autoplay]}
            className="mySwiper1 core-task-bx" // Set your own className here
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div
                className="swiper-slide "
               
                
              >
                <div className="core-image">
                  <div className="core-underbx">
                    <div className="corecont">
                      <h3>
                        Strategic Content Planning
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img
                          src="/images/icons/strategic-plan.png"
                          alt="Strategic Plan Icon"
                        />
                      </div>
                      <h3>Strategic Content Planning</h3>
                      <p className="core-para">
                        Our team of experienced strategists devises a customized
                        content strategy tailored to your brand's unique needs
                        and objectives. We conduct comprehensive research to
                        understand your audience, industry trends, and
                        competition to create a roadmap for success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div
                className="swiper-slide"
              
                
              >
                <div className="core-image">
                  <div className="core-underbx">
                    <div className="corecont">
                      <h3>
                        Quality Content Creation
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img
                          src="/images/icons/content-creation.png"
                          alt="Content Creation Icon"
                        />
                      </div>
                      <h3>Quality Content Creation</h3>
                      <p className="core-para">
                        We believe that content is king. Our skilled writers and
                        creatives develop high-quality, engaging, and
                        informative content that not only captivates your
                        audience but also drives organic traffic and
                        conversions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div
                className="swiper-slide"
              
                
              >
                <div className="core-image">
                  <div className="core-underbx">
                    <div className="corecont">
                      <h3>
                        Multi-Platform Distribution
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/icon14.png" alt="Icon 14" />
                      </div>
                      <h3>Multi-Platform Distribution</h3>
                      <p className="core-para">
                        Viralon ensures your content reaches the right audience
                        on various platforms, including social media, blogs,
                        email marketing, and more. We optimize content for each
                        platform to maximize its impact and reach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div
                className="swiper-slide"
              
                
              >
                <div className="core-image">
                  <div className="core-underbx">
                    <div className="corecont">
                      <h3>
                        Data-Driven Analysis
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/icon7.png" alt="Icon 7" />
                      </div>
                      <h3>Data-Driven Analysis</h3>
                      <p className="core-para">
                        We don't just create content; we track its performance
                        rigorously. Viralon's data analysts use advanced
                        analytics tools to measure the effectiveness of your
                        content marketing campaigns and make data-driven
                        adjustments for continuous improvement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <div
                className="swiper-slide"
                
                
              >
                <div className="core-image">
                  <div className="core-underbx">
                    <div className="corecont">
                      <h3>
                        Content Promotion and Amplification
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/onpage.png" alt="Onpage Icon" />
                      </div>
                      <h3>Content Promotion and Amplification</h3>
                      <p className="core-para">
                        Our team leverages paid and organic strategies to
                        promote your content to a wider audience. We collaborate
                        with influencers, utilize paid advertising, and
                        implement SEO techniques to boost visibility and
                        engagement.
                      </p>
                    </div>
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

export default VideoMarketingSlide;
