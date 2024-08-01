import React from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




const PaidMediaMakeItHappen = () => {
  return (
    <section className="make action-slider container">
      <div className="container">
        <h2 className="text-dark margin-bottom-22 main-heading text-center font-size-30">
          Making It Happen – Our Action Plan
        </h2>
        <div className="row flex-wrap-reverse max-width800 mt-5 margin-top-15 align-items-center">
          {/* Left Slider */}
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
                <img src="/images/paid-media-marketing/slider/img1.jpg" alt="Slide 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/paid-media-marketing/slider/img2.jpg" alt="Slide 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/paid-media-marketing/slider/img3.jpg" alt="Slide 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/paid-media-marketing/slider/img4.jpg" alt="Slide 4" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/paid-media-marketing/slider/img5.jpg" alt="Slide 5" />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Right Slider */}
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
                <div className="action-content aos-init" >
                  <p  className="aos-init">
                    <b>Understand Your Business</b>
                    <br />
                    We delve deep into your business to understand your unique goals and challenges.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content aos-init" >
                  <p  className="aos-init">
                    <b>Craft a Tailored Strategy</b>
                    <br />
                    We design a custom paid media strategy that aligns with your objectives.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content aos-init" >
                  <p  className="aos-init">
                    <b>Execute with Precision</b>
                    <br />
                    We implement the strategy with precision, keeping a keen eye on performance.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content aos-init" >
                  <p  className="aos-init">
                    <b>Analyze and Optimize</b>
                    <br />
                    We continuously analyze data, identifying opportunities for improvement.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content aos-init" >
                  <p  className="aos-init">
                    <b>Deliver Results</b>
                    <br />
                    Our focus is on delivering results that exceed your expectations.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>

          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet" tabindex="0">1</span><span class="swiper-pagination-bullet" tabindex="0">2</span><span class="swiper-pagination-bullet" tabindex="0">3</span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" aria-current="true">4</span><span class="swiper-pagination-bullet" tabindex="0">5</span></div>

      </div>

      
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
};

export default PaidMediaMakeItHappen;
