import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/modules";

// Install Swiper modules
// SwiperCore.use([Pagination, Navigation, Autoplay]);

const SeoSlider3 = () => {
  return (
    <section className="make-happen make action-slider container">
      <div className="container">
        <h2 className="text-dark main-heading text-center font-size-30">
          Our Methodology to SEO Success
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
                <img
                  src="/images/seo/slider/img1.jpg"
                  alt="Audit And Analysis Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/seo/slider/img2.jpg"
                  alt="Keyword Strategy Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/seo/slider/img3.jpg"
                  alt="On-Page Optimization Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/seo/slider/img4.jpg"
                  alt="Content Creation Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/seo/slider/img5.jpg"
                  alt="Link Building Image"
                />
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
                <div className="action-content aos-init">
                  <p className="aos-init">
                    <b>Audit and Analysis</b>
                    <br />
                    We begin with a thorough audit of your current online
                    presence, identifying strengths and weaknesses.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content aos-init">
                  <p className="aos-init">
                    <b>Keyword Strategy</b>
                    <br />
                    We develop a targeted keyword strategy to align with your
                    business goals.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content aos-init">
                  <p className="aos-init">
                    <b>On-Page Optimization</b>
                    <br />
                    We optimize your website's on-page elements, ensuring they
                    meet SEO best practices.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content aos-init">
                  <p className="aos-init">
                    <b>Content Creation</b>
                    <br />
                    Our team creates high-quality, relevant content that
                    resonates with your audience and search engines.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content aos-init">
                  <p className="aos-init">
                    <b>Link Building</b>
                    <br />
                    Ethical link-building strategies enhance your website's
                    authority and credibility.
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
        <span className="swiper-pagination-bullet" tabIndex={0}>
          1
        </span>
        <span className="swiper-pagination-bullet" tabIndex={0}>
          2
        </span>
        <span className="swiper-pagination-bullet" tabIndex={0}>
          3
        </span>
        <span
          className="swiper-pagination-bullet swiper-pagination-bullet-active"
          tabIndex={0}
          aria-current="true"
        >
          4
        </span>
        <span className="swiper-pagination-bullet" tabIndex={0}>
          5
        </span>
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

export default SeoSlider3;
