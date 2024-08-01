import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const PaidMediaSlider = () => {
  return (
    <div className="social-media">
      <h3 className="text-white s-heading text-center pb-4 font-size-28">
        Core Tasks in Viralon's Paid Media Marketing Services
      </h3>
      <div className="container">
        <div className="social-media-container">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{
              delay: 2000,
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
            className="ssm-slider mySwiper1 core-task-bx"
          >
            <SwiperSlide>
              <div className="core-image">
                <div className="core-underbx">
                  <div className="corecont">
                    <h3>
                      Strategic Campaign Planning
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                    <p className="core-para">
                      We don't believe in throwing your budget at the wall and
                      hoping something sticks. Our experts meticulously plan
                      your paid media campaigns, identifying the most effective
                      platforms, targeting options, and ad formats to achieve
                      your specific goals.
                    </p>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx  new-class">
                      <img
                        src="/images/icons/strategic-plan.png"
                        alt="Strategic Campaign Planning Icon"
                      />
                    </div>
                    <h3>Strategic Campaign Planning</h3>
                    <p className="core-para">
                      We don't believe in throwing your budget at the wall and
                      hoping something sticks. Our experts meticulously plan
                      your paid media campaigns, identifying the most effective
                      platforms, targeting options, and ad formats to achieve
                      your specific goals.
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
                      Keyword Research and Optimization
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img
                        src="/images/icons/icon14.png"
                        alt="Keyword Research and Optimization Icon"
                      />
                    </div>
                    <h3>Keyword Research and Optimization</h3>
                    <p className="core-para">
                      Keywords are the foundation of any successful paid media
                      campaign. We conduct comprehensive keyword research to
                      ensure your ads are not only seen but also seen by the
                      right audience. Continuous optimization ensures your
                      budget is spent wisely.
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
                      Ad Creation and A/B Testing
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img
                        src="/images/icons/icon15.png"
                        alt="Ad Creation and A/B Testing Icon"
                      />
                    </div>
                    <h3>Ad Creation and A/B Testing</h3>
                    <p className="core-para">
                      Crafting compelling ads is an art, and we're the artists.
                      We create eye-catching, persuasive ad creatives that
                      resonate with your audience. Through rigorous A/B testing,
                      we refine and optimize your ads for maximum impact.
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
                      Budget Management
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img
                        src="/images/icons/budget.png"
                        alt="Budget Management Icon"
                      />
                    </div>
                    <h3>Budget Management</h3>
                    <p className="core-para">
                      Effective budget allocation is crucial. We manage your ad
                      spend with precision, ensuring you get the most bang for
                      your buck. Our strategies maximize reach and conversions
                      while minimizing wastage.
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
                      Performance Analysis and Reporting
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img
                        src="/images/icons/icon7.png"
                        alt="Performance Analysis and Reporting Icon"
                      />
                    </div>
                    <h3>Performance Analysis and Reporting</h3>
                    <p className="core-para">
                      Transparency is key. We provide regular, data-driven
                      reports that highlight key performance metrics. Our
                      experts analyze the data to identify opportunities for
                      improvement and adjust strategies accordingly.
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

export default PaidMediaSlider;
