import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function InfluencerMarketingSlide() {
  return (
    <div className="social-media">
      <h2 className="text-white s-heading text-center pb-4 font-size-30">
        Core Tasks That Viralon Excels in Influencer Marketing
      </h2>
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
            className="mySwiper1 core-task-bx"
          >
            <SwiperSlide>
              {/* Slide 1 */}
              <div className="core-image">
                <div className="core-underbx">
                  <div className="corecont">
                    <h3>
                      Strategic Collaboration
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img src="/images/icons/strategic-plan.png" alt="Strategic Collaboration Icon" />
                    </div>
                    <h3>Strategic Collaboration</h3>
                    <p className="core-para">
                      We believe in the power of meaningful partnerships. Viralon strategically identifies influencers whose values and content align with your brand's message, ensuring authenticity and resonance.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Slide 2 */}
              <div className="core-image">
                <div className="core-underbx">
                  <div className="corecont">
                    <h3>
                      Content Creation
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img src="/images/icons/icon14.png" alt="Content Creation Icon" />
                    </div>
                    <h3>Content Creation</h3>
                    <p className="core-para">
                      Our talented team collaborates with influencers to craft compelling content that not only showcases your product or service but also tells a captivating story that resonates with your audience.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Slide 3 */}
              <div className="core-image">
                <div className="core-underbx">
                  <div className="corecont">
                    <h3>
                      Campaign Management
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img src="/images/icons/content-creation.png" alt="Campaign Management Icon" />
                    </div>
                    <h3>Campaign Management</h3>
                    <p className="core-para">
                      We take the reins of influencer campaigns, managing all aspects from negotiations and contracts to content schedules and performance tracking. This allows you to focus on what you do best while we handle the intricacies of influencer marketing.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Slide 4 */}
              <div className="core-image">
                <div className="core-underbx">
                  <div className="corecont">
                    <h3>
                      Audience Engagement
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img src="/images/icons/icon7.png" alt="Audience Engagement Icon" />
                    </div>
                    <h3>Audience Engagement</h3>
                    <p className="core-para">
                      Building a genuine connection with your target audience is at the heart of what we do. We engage with followers, answer queries, and ensure a seamless brand experience throughout the campaign.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/* Slide 5 */}
              <div className="core-image">
                <div className="core-underbx">
                  <div className="corecont">
                    <h3>
                      Performance Analytics
                      <i className="ri-arrow-right-line right-icon" />
                    </h3>
                  </div>
                </div>
                <div className="core-overlay">
                  <div className="core-text">
                    <div className="core-iconbx">
                      <img src="/images/icons/onpage.png" alt="Performance Analytics Icon" />
                    </div>
                    <h3>Performance Analytics</h3>
                    <p className="core-para">
                      At Viralon, we're all about data-driven decisions. We provide comprehensive insights into the performance of influencer marketing campaigns, helping you understand ROI and make informed future strategies.
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
}
