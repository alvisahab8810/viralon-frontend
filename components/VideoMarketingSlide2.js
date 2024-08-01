import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const VideoMarketingSlide2 = () => {
  return (
    <section className="seo action-slider container">
      <div className="container">
        <h2 className="text-dark main-heading text-center font-size-30">
          Making It Happen – Our Action Plan
        </h2>
        <div className="row flex-wrap-reverse max-width800 mt-5 margin-top-15  align-items-center">
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
                <img src="/images/video-marketing/slider/img1.jpg" alt="Slide 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/video-marketing/slider/img2.jpg" alt="Slide 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/video-marketing/slider/img3.jpg" alt="Slide 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/video-marketing/slider/img4.jpg" alt="Slide 4" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/images/video-marketing/slider/img5.webp" alt="Slide 5" />
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
                    <b>Consultation</b>
                    <br />
                    We begin by understanding your brand, goals, and target
                    audience to develop a tailored video marketing strategy.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Creative Development</b>
                    <br />
                    Our creative team conceptualizes video ideas that resonate
                    with your audience while aligning with your brand's
                    identity and objectives
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Production</b>
                    <br />
                    From scriptwriting to shooting and editing, we craft
                    visually stunning videos that convey your brand message
                    effectively.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Optimization</b>
                    <br />
                    We optimize video content for different platforms,
                    ensuring compatibility and maximum visibility.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Distribution and Analysis</b>
                    <br />
                    We strategically distribute videos across platforms,
                    analyze performance metrics, and make data-driven
                    improvements.
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
          <img src="/images/icons/right-arrow.png" alt="Next Arrow" />
        </div>
        <div className="swiper-button-prev1">
          <img src="/images/icons/left-arrow.png" alt="Previous Arrow" />
        </div>
      </div>
    </section>
  );
}

export default VideoMarketingSlide2;
