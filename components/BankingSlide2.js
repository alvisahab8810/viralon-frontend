import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const BankingSlide2 = ({ sliderShow,
  setSliderShow }) => {


  return (
    <div>
      {/* Marketing Trends */}
     {sliderShow === "trends" && <div className="tab-pane active show" id="1a">
        <div className="container1 ">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h2 className="font-size-40-important text-white">Marketing Trends</h2>
                <p className="text-white">
                  In today's digital age, the Banking and Finance sector is witnessing transformative shifts driven by technological advancements and changing customer expectations. Some of the prominent marketing trends include:
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              {/* Swiper */}
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2000,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img3.png" alt="Customer Experience Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Customer Experience{" "}
                      </a>
                      <p>
                        Tailoring services to individual preferences is paramount. Customers expect personalized recommendations, offers, and interactions that cater to their financial needs.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img2.jpg" alt="Omnichannel Engagement Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Omnichannel Engagement
                      </a>
                      <p>
                        The convergence of physical and digital channels is essential. Providing a seamless experience across various touchpoints, from brick-and-mortar branches to mobile apps, creates a cohesive customer journey.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img3.jpg" alt="Data-Driven Insights Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Data-Driven Insights
                      </a>
                      <p>
                        Big Data and analytics are revolutionizing decision-making. Banks and financial institutions are leveraging data to gain valuable insights into customer behavior, enabling targeted marketing and risk assessment.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img4.jpg" alt="Cybersecurity Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Cybersecurity &amp; Trust
                      </a>
                      <p>
                        With digital transactions on the rise, ensuring the security of sensitive financial information is non-negotiable. Building trust through robust cybersecurity measures is a top priority.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

      {/* Marketing Offerings */}
    {sliderShow === "offer" &&   <div className="tab-pane" id="2a">
        <div className="container1 ">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h3 className="font-size-40 text-white">Marketing Offerings</h3>
                <p className="text-white">
                  Viralon Digital Services is at the forefront of transforming the Banking and Finance sector's marketing landscape. Our expertise empowers institutions to navigate these trends seamlessly
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              {/* Swiper */}
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2000,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img5.jpg" alt="Personalization Solutions Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Personalization Solutions
                      </a>
                      <p>
                        We develop AI-driven personalization strategies that cater to each customer's unique financial journey, driving engagement and loyalty
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img6.jpg" alt="Omnichannel Integration Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Omnichannel Integration
                      </a>
                      <p>
                        Viralon creates synchronized omnichannel experiences that provide consistent interactions across platforms, ensuring a coherent brand presence.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img7.jpg" alt="Advanced Analytic Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Advanced Analytic
                      </a>
                      <p>
                        Our data experts help institutions harness the power of data, enabling them to make informed decisions, predict trends, and optimize marketing efforts.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img8.jpg" alt="Security Solutions Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Security Solutions
                      </a>
                      <p>
                        Viralon prioritizes cybersecurity, implementing state-of-the-art measures to safeguard sensitive data and uphold customer trust.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

      {/* Technology Trends */}
     {sliderShow === "tectTrend" &&  <div className="tab-pane" id="3a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">Technology Trends</h1>
                <p className="text-white">
                  The Banking and Finance sector is embracing groundbreaking technologies that are reshaping the industry landscape. Some noteworthy innovations and products include:
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              {/* Swiper */}
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2000,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img9.jpg" alt="Blockchain Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Blockchain
                      </a>
                      <p>
                        Blockchain technology ensures transparent and secure transactions, reducing fraud risks and increasing efficiency.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img10.jpg" alt="Artificial Intelligence Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Artificial Intelligence and Chatbots
                      </a>
                      <p>
                        AI-powered chatbots streamline customer interactions, providing instant support, and personalized recommendations.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img11.jpg" alt="Biometric Authentication Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Biometric Authentication
                      </a>
                      <p>
                        Facial recognition and fingerprint scanning enhance security and convenience in identity verification.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img12.jpg" alt="Mobile Wallets Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Mobile Wallets and Contactless Payments
                      </a>
                      <p>
                        Convenient and secure payment methods, such as mobile wallets and contactless payments, are becoming increasingly popular.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

      {/* Tech Offerings */}
      {sliderShow === "techOffer" && <div className="tab-pane" id="4a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">Tech Offerings</h1>
                <p className="text-white">
                  Viralon's innovative tech solutions are tailored to the Banking and Finance sector's unique needs
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              {/* Swiper */}
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2000,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img13.jpg" alt="Blockchain Integration Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Blockchain Integration
                      </a>
                      <p>
                        We help institutions harness the power of blockchain for secure, transparent, and efficient transactions.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img13.jpg" alt="AI-Driven Customer Support Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        AI-Driven Customer Support
                      </a>
                      <p>
                        Our AI chatbots provide real-time assistance, enhancing customer engagement and reducing response times.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img14.jpg" alt="Biometric Identity Solutions Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Biometric Identity Solutions
                      </a>
                      <p>
                        Viralon offers biometric authentication systems to strengthen security and streamline user experience.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <div className="rel-industry">
                    <img src="/images/industries/banking/img15.jpg" alt="Mobile Payment Solutions Image" />
                    <div className="industry-overlay">
                      <a href="#" >
                        Mobile Payment Solutions
                      </a>
                      <p>
                        We develop intuitive mobile wallet apps that facilitate seamless and secure transactions.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

    </div>
  );
};

export default BankingSlide2;
