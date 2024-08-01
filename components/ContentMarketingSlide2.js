import React from 'react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// SwiperCore.use([Autoplay, Pagination, Navigation]);

const ContentMarketingSlide2 = () => {
  return (
    <section className="seo action-slider content-happen making-happen container">
      <div className="container">
        <h2 className="text-dark main-heading text-center font-size-30">
          Making It Happen – Our Action Plan
        </h2>
        <div className="row flex-wrap-reverse max-width800 mt-5 margin-top-15 align-items-center">
          <div className="col-md-6 left-slider para-size">
          <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}

              pagination= {{
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + "</span>";
                
              }}
              }
              navigation={{
                nextEl: ".swiper-button-next1",
                prevEl: ".swiper-button-prev1",
            }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="/images/content-marketing/slider/img1.jpg" alt="Strategy Image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/content-marketing/slider/img2.jpg" alt="Content Creation Image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/content-marketing/slider/img3.jpg" alt="Distribution And Promotion Image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/content-marketing/slider/img4.jpg" alt="Performance Tracking Image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/content-marketing/slider/img5.jpg" alt="Reporting Insights Image" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-md-6 action-content1">
          <Swiper
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}

              pagination= {{
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + (index + 1) + "</span>";
                
              }}
              }
              navigation={{
                nextEl: ".swiper-button-next1",
                prevEl: ".swiper-button-prev1",
            }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="action-content ">
                  <p>
                    <b>Consultation and Strategy Development</b>
                    <br />
                    We begin with a thorough consultation to understand your goals and challenges. Our experts then craft a personalized content strategy.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Content Creation</b>
                    <br /> Our team of writers and designers create compelling content that aligns with your strategy, ensuring it resonates with your target audience.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Distribution and Promotion</b>
                    <br /> We publish and promote your content across various platforms to maximize its reach and impact.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Performance Tracking</b>
                    <br /> We monitor your content's performance, analyze data, and make necessary adjustments to optimize results continually.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Reporting and Insights</b>
                    <br /> Viralon provides regular reports on your content marketing campaigns' performance and offers insights for future strategies.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet" tabindex="0">1</span><span class="swiper-pagination-bullet" tabindex="0">2</span><span class="swiper-pagination-bullet" tabindex="0">3</span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" aria-current="true">4</span><span class="swiper-pagination-bullet" tabindex="0">5</span></div>
      
      <div className="swiper-pagination" />
      <div className="prev-next">
        <div className="swiper-button-next1">
          <img src="/images/icons/right-arrow.png" alt="Next Arrow" />
        </div>
        <div className="swiper-button-prev1">
          <img src="/images/icons/left-arrow.png" alt="Previous Arrow" />
        </div>
      </div>
    </section>
  );
};

export default ContentMarketingSlide2;
