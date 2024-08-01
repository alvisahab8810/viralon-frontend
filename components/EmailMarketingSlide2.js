import React from 'react';
import SwiperCore, {  Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

export default function EmailMarketingSlide2() {
  return (
    <section className="seo email-action action-slider container">
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
                <img src="/images/email-marketing/slider/img1.jpg" alt="Strategy Image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/email-marketing/slider/img2.jpg" alt="List Building Image" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/email-marketing/slider/img3.jpg" alt="Content Creation" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/email-marketing/slider/img4.jpg" alt="Automation And Execution" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/email-marketing/slider/img5.jpg" alt="Analytics And Optimization" />
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
                <div className="action-content">
                  <p>
                    <b>Consultation and Strategy </b>
                    <br />
                    We start with a comprehensive consultation to understand
                    your brand, goals, and target audience. Our experts then
                    create a customized Email Marketing strategy
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>List Building and Segmentation</b>
                    <br /> We help you build and segment your email list to
                    ensure the right messages reach the right people
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Content Creation</b>
                    <br /> Our team of writers and designers create compelling
                    content that aligns with your strategy, ensuring it
                    resonates with your target audience.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Automation and Execution</b>
                    <br />
                    Viralon sets up automated email workflows and executes
                    your campaigns with precision and timeliness.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Analytics and Optimization</b> <br />
                    Our content team crafts captivating email content that
                    aligns with your strategy, enhancing engagement and
                    conversions.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet" tabindex="0">1</span><span class="swiper-pagination-bullet" tabindex="0">2</span><span class="swiper-pagination-bullet" tabindex="0">3</span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" aria-current="true">4</span><span class="swiper-pagination-bullet" tabindex="0">5</span></div>

      
      <div className="prev-next">
        <div className="swiper-button-next1">
          <img src="/images/icons/right-arrow.png" alt="Next" />
        </div>
        <div className="swiper-button-prev1">
          <img src="/images/icons/left-arrow.png" alt="Previous" />
        </div>
      </div>
    </section>
  );
}
