import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";


const BankingSlide = () => {
  return (
    <div className="tab-content clearfix">
      <div className="tab-pane active show" id="1a">
        <div className="container1 ">
          <div className=" row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">Marketing Trends</h1>
                <p className="text-white">
                  In today's digital age, the Banking and Finance sector is witnessing
                  transformative shifts driven by technological advancements and changing
                  customer expectations. Some of the prominent marketing trends include:
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              {/* Swiper */}
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img3.png" alt="Customer Experience Image" />
                    <div className="industry-overlay">
                      <a href="#" className="aos-init" data-aos="fade-down" data-aos-duration={2000}>
                        Customer Experience{" "}
                      </a>
                      <p>
                        Tailoring services to individual preferences is paramount.
                        Customers expect personalized recommendations, offers, and interactions
                        that cater to their financial needs.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img2.jpg" alt="Omnichannel Engagement Image" />
                    <div className="industry-overlay">
                      <a href="#" className="aos-init" data-aos="fade-down" data-aos-duration={2000}>
                        Omnichannel Engagement
                      </a>
                      <p>
                        The convergence of physical and digital channels is essential.
                        Providing a seamless experience across various touchpoints, from
                        brick-and-mortar branches to mobile apps, creates a cohesive customer
                        journey.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img3.jpg" alt="Data-Driven Insights Image" />
                    <div className="industry-overlay">
                      <a href="#" className="aos-init" data-aos="fade-down" data-aos-duration={2000}>
                        Data-Driven Insights
                      </a>
                      <p>
                        Big Data and analytics are revolutionizing decision-making. Banks and
                        financial institutions are leveraging data to gain valuable insights into
                        customer behavior, enabling targeted marketing and risk assessment.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img4.jpg" alt="Cybersecurity Image" />
                    <div className="industry-overlay">
                      <a href="#" className="aos-init" data-aos="fade-down" data-aos-duration={2000}>
                        Cybersecurity &amp; Trust
                      </a>
                      <p>
                        With digital transactions on the rise, ensuring the security of sensitive
                        financial information is non-negotiable. Building trust through robust
                        cybersecurity measures is a top priority
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankingSlide;
