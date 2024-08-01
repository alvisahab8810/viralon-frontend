import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function EmailMarketingSlide() {
  return (
    <>
      <div className="social-media">
        <h3 className="text-white s-heading text-center pb-4 font-size-28">
          Core Tasks that Viralon Excels in Email Marketing
        </h3>
        <div className="container">
          <div className="social-media-container">
            <Swiper
              spaceBetween={30}
              slidesPerView={4}
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
              className="mySwiper core-task-bx"
            >
              <SwiperSlide>
                <div className="core-image">
                  <div className="core-underbx">
                    <div className="corecont">
                      <h3>
                        Strategic Campaign Planning
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/strategic-plan.png" alt="Strategic Campaign Planning" />
                      </div>
                      <h3>Strategic Campaign Planning</h3>
                      <p className="core-para">
                        Our seasoned strategists work closely with you to
                        develop a comprehensive Email Marketing strategy. We
                        tailor campaigns to your specific goals, whether it's
                        nurturing leads, promoting products, or enhancing
                        customer loyalty
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
                        Segmentation and Personalization
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/icon14.png" alt="Segmentation and Personalization" />
                      </div>
                      <h3>Segmentation and Personalization</h3>
                      <p className="core-para">
                        Viralon leverages advanced segmentation techniques to
                        ensure that your emails are highly relevant to each
                        recipient. Personalization drives engagement and
                        increases open and click-through rates.
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
                        Compelling Content Creation
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/content-creation.png" alt="Compelling Content Creation" />
                      </div>
                      <h3>Compelling Content Creation</h3>
                      <p className="core-para">
                        Our content experts craft engaging email content,
                        including eye-catching subject lines, persuasive copy,
                        and visually appealing designs that resonate with your
                        audience.
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
                        Automated Workflows
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/icon7.png" alt="Automated Workflows" />
                      </div>
                      <h3>Automated Workflows</h3>
                      <p className="core-para">
                        We design and implement automated email workflows that
                        trigger messages based on user behavior, ensuring timely
                        and personalized communication throughout the customer
                        journey.
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
                        Performance Optimization
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/onpage.png" alt="Performance Optimization" />
                      </div>
                      <h3>Performance Optimization</h3>
                      <p className="core-para">
                        Viralon continuously monitors and optimizes your email
                        campaigns. We conduct A/B testing, analyze data, and
                        refine strategies to improve open rates, click-through
                        rates, and conversion rates.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
