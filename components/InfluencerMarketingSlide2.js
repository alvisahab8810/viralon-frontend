import React from 'react';
import SwiperCore, {Autoplay,  Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function InfluencerMarketingActionSlide2() {
  return (
    <section className="seo action-slider email-action container">
      <div className="container">
        <h2 className="text-dark main-heading text-center font-size-30">
          Making It Happen – Our Action Plan
        </h2>
        <div className="row flex-wrap-reverse max-width800 mt-5 align-items-center">
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
                  src="/images/influencer-marketing/slider/img1.jpg"
                  alt="Research Strategy Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/influencer-marketing/slider/img2.jpg"
                  alt="Collaboration image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/influencer-marketing/slider/img3.jpg"
                  alt="Content Creation Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/influencer-marketing/slider/img4.jpg"
                  alt="Campaign Management Image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/images/influencer-marketing/slider/img5.jpg"
                  alt="Analytics & Optimization Image"
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
                {/* Slide 1 */}
                <div className="action-content">
                  <p>
                    <b>Research and Strategy </b>
                    <br />
                    We start by understanding your brand, goals, and target
                    audience. Then, we meticulously research and strategize
                    influencer selection and campaign goals.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* Slide 2 */}
                <div className="action-content">
                  <p>
                    <b>Collaboration</b>
                    <br /> We engage with influencers who align with your
                    brand ethos and objectives, fostering partnerships built
                    on trust and shared values
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* Slide 3 */}
                <div className="action-content">
                  <p>
                    <b>Content Creation</b>
                    <br /> Our creative team works closely with influencers to
                    develop captivating content that resonates with your
                    audience while staying true to your brand identity
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* Slide 4 */}
                <div className="action-content">
                  <p>
                    <b>Campaign Management</b>
                    <br />
                    From negotiation to execution and tracking, we handle all
                    aspects of influencer marketing campaigns to ensure a
                    smooth and successful experience.
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {/* Slide 5 */}
                <div className="action-content">
                  <p>
                    <b>Analytics and Optimization</b>
                    <br />
                    We provide detailed reports on campaign performance and
                    use data-driven insights to optimize future influencer
                    marketing efforts.
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
