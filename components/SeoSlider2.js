import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SeoSlider2 = () => {
  return (
    <section className="significance-section">
      <div className="container">
        <div className="signi-container">
          <div className="signibx1">
            <h2>The Significance of SEO For Your Brand</h2>
            <p>
              SEO isn't a mere marketing strategy; it's a fundamental necessity
              in the digital age. Here's why it matters
            </p>
          </div>
          <div className="signibx2">
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
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
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
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
            className="mySwiper1" // Set your own className here
          >
              <SwiperSlide>
                <div className="left-itemss">
                  <div className="signi-left-itemsbxx">
                    <div className="signi-items22">
                      <div className="left-items-icon">
                        <img src="/images/icons/brand1.png" alt="Increased Visibility Icon" />
                      </div>
                    </div>
                    <div className="left-items11">
                      <h3>Increased Visibility</h3>
                      <p>
                        SEO helps your website rank higher in search results, making it more likely that potential customers will find you.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="left-itemss">
                  <div className="signi-left-itemsbxx">
                    <div className="signi-items22">
                      <div className="left-items-icon">
                        <img src="/images/icons/high-quality.png" alt="Quality Traffic Icon" />
                      </div>
                    </div>
                    <div className="left-items11">
                      <h3>Quality Traffic</h3>
                      <p>
                        SEO targets users actively searching for products or services like yours, ensuring the traffic you receive is highly relevant.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="left-itemss">
                  <div className="signi-left-itemsbxx">
                    <div className="signi-items22">
                      <div className="left-items-icon">
                        <img src="/images/icons/brand3.png" alt="Credibility and Trust Icon" />
                      </div>
                    </div>
                    <div className="left-items11">
                      <h3>Credibility and Trust</h3>
                      <p>
                        High search engine rankings convey trust and credibility to your audience, boosting their confidence in your brand.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="left-itemss">
                  <div className="signi-left-itemsbxx">
                    <div className="signi-items22">
                      <div className="left-items-icon">
                        <img src="/images/icons/brand4.png" alt="Cost-Effective Icon" />
                      </div>
                    </div>
                    <div className="left-items11">
                      <h3>Cost-Effective</h3>
                      <p>
                        Compared to paid advertising, SEO offers long-term benefits at a lower cost.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="left-itemss">
                  <div className="signi-left-itemsbxx">
                    <div className="signi-items22">
                      <div className="left-items-icon">
                        <img src="/images/icons/user-experience.png" alt="Better User Experience Icon" />
                      </div>
                    </div>
                    <div className="left-items11">
                      <h3>Better User Experience</h3>
                      <p>
                        SEO optimization often leads to improvements in your website's overall user experience.
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoSlider2;
