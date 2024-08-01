import React from 'react';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const AnalyticsReportSlide2 = () => {
  return (
    <section className="seo action-slider container">
      <div className="container">
        <h2 className="text-dark main-heading text-center font-size-30">
          Making It Happen – Our Action Plan
        </h2>
        <div className="row flex-wrap-reverse max-width800 mt-5 align-items-center">
          <div className="col-md-6  left-slider para-size">
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
                  src="/images/reporting-analytics/slider/img1.jpg"
                  alt="Needs Assessment Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/reporting-analytics/slider/img2.jpg"
                  alt="Data Collection Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/reporting-analytics/slider/img3.jpg"
                  alt="Data Analysis Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/reporting-analytics/slider/img4.jpg"
                  alt="Insights Generation Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/reporting-analytics/slider/img5.jpg"
                  alt="Regular Reporting Image"
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
                <div className="action-content ">
                  <p>
                    <b>Needs Assessment</b>
                    <br />
                    We begin with a thorough assessment of your reporting and
                    analytics needs, understanding your goals, KPIs, and target audience.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Data Collection</b>
                    <br />
                    We gather data from all relevant sources, ensuring that no valuable insights are left untapped.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Data Analysis</b>
                    <br />
                    Our team of experts conducts in-depth analysis, identifying trends, anomalies, and opportunities within your data.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Insights Generation</b>
                    <br />
                    We transform data into actionable insights, offering recommendations for strategy improvement and growth.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="action-content">
                  <p>
                    <b>Regular Reporting</b>
                    <br />
                    We provide regular reports and updates, keeping you informed about your online performance and the impact of our strategies.
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
};

export default AnalyticsReportSlide2;
