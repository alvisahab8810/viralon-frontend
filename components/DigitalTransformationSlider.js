import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/autoplay/autoplay.scss';
import SwiperCore, { Autoplay, Pagination,  } from 'swiper/modules';



const DigitalTransformationSlider = () => {
 
  return (
    <>
      <section className=" technology-c pt-5 pb-5 bottom-p padding-t ">
        <div className="container1">
          <h3 className="font-size-40 font-weight-900 text-center text-dark">
            Unveiling the 5 Steps to{" "}
            <span className="text-gold">Digital Transformation</span>
          </h3>
          <h2 className="Quote">"Shape-Shifting Your Business for Tomorrow"</h2>
          {/* React Swiper */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
      

        pagination= {{
          el: ".swiper-pagination",
         navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          },
          
          clickable:true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          }
        }}

       
        // navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
            {/* Slide 1 */}
            
            <SwiperSlide>
              <div className="t-cbx pt-5">
                <div className="row ">
                  <div className="col-md-6">
                    <h2 className="font-size-40 font-weight-900 text-dark heading_style_1 mb-3">
                      Strategic <span className="text-gold"> Analysis</span>
                    </h2>
                    <div className="line"></div>
                    <p className="t-para">
                      We begin by delving deep into your business's current
                      state, your industry landscape, and your aspirations. Our
                      experts analyze the strengths, weaknesses, opportunities,
                      and threats, identifying digital touchpoints that can
                      redefine your operations and customer experiences.
                    </p>
                    <div className="mdtop explore-btn studies-btn book-btn">
                      <a
                        href="#"
                        className="btn btn-primary trans animated pulse abt-butn-bot"
                      >
                        Start a Project
                        <img
                          src="/images/icons/next.png"
                          className="arrow  next-arow arrow1  animate-right-to-left"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 tech-img">
                    <img
                      src="/images/digital-transformation/slider/img1.jpg"
                      alt="Strategic Analysis Image"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="t-cbx pt-5">
                <div className="row ">
                  <div className="col-md-6">
                    <h2 className="font-size-40 font-weight-900 text-dark heading_style_1 mb-3">
                      Customized <span className="text-gold"> Roadmap</span>
                    </h2>
                    <div className="line"></div>
                    <p className="t-para">
                      One size doesn't fit all, and we understand that. We
                      create a customized Digital Transformation roadmap that
                      aligns with your business's vision. Our team collaborates
                      with yours to ensure that every step resonates with your
                      unique identity.
                    </p>
                    <div className="mdtop explore-btn studies-btn book-btn">
                      <a
                        href="#"
                        className="btn btn-primary trans animated pulse abt-butn-bot"
                      >
                        Start a Project
                        <img
                          src="/images/icons/next.png"
                          className="arrow  next-arow arrow1  animate-right-to-left"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 tech-img">
                    <img
                      src="/images/digital-transformation/slider/img2.jpg"
                      alt="Customized Roadmap"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="t-cbx pt-5">
                <div className="row ">
                  <div className="col-md-6">
                    <h2 className="font-size-40 font-weight-900 text-dark heading_style_1 mb-3">
                      Technology <span className="text-gold"> Integration</span>
                    </h2>
                    <div className="line"></div>
                    <p className="t-para">
                      Digital Transformation thrives on technology. We
                      seamlessly integrate cutting-edge digital tools and
                      platforms that amplify your operational efficiency,
                      customer engagement, and growth prospects. From AI-driven
                      analytics to IoT applications, we ensure your business
                      embraces the best digital practices
                    </p>
                    <div className="mdtop explore-btn studies-btn book-btn">
                      <a
                        href="#"
                        className="btn btn-primary trans animated pulse abt-butn-bot"
                      >
                        Start a Project
                        <img
                          src="/images/icons/next.png"
                          className="arrow  next-arow arrow1  animate-right-to-left"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 tech-img">
                    <img
                      src="/images/digital-transformation/slider/img3.jpg"
                      alt="Technology Integration  Image"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 4 */}
            <SwiperSlide>
              <div className="t-cbx pt-5">
                <div className="row ">
                  <div className="col-md-6">
                    <h2 className="font-size-40 font-weight-900 text-dark heading_style_1 mb-3">
                      Process <span className="text-gold"> Enhancement</span>
                    </h2>
                    <div className="line"></div>
                    <p className="t-para">
                      Your existing processes might be effective, but can they
                      be more efficient? We optimize your processes to harness
                      the full potential of digital tools. This not only
                      streamlines operations but also unlocks new avenues for
                      innovation and customer delight.
                    </p>
                    <div className="mdtop explore-btn studies-btn book-btn">
                      <a
                        href="#"
                        className="btn btn-primary trans animated pulse abt-butn-bot"
                      >
                        Start a Project
                        <img
                          src="/images/icons/next.png"
                          className="arrow  next-arow arrow1  animate-right-to-left"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 tech-img">
                    <img
                      src="/images/digital-transformation/slider/img4.jpg"
                      alt="Process Enhancement Image"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 5 */}
            <SwiperSlide>
              <div className="t-cbx pt-5">
                <div className="row ">
                  <div className="col-md-6">
                    <h2 className="font-size-40 font-weight-900 text-dark heading_style_1 mb-3">
                      Continuous <span className="text-gold"> Evolution</span>
                    </h2>
                    <div className="line"></div>
                    <p className="t-para">
                      In the digital realm, stagnation is a risk. We build
                      agility into your DNA, helping your business adapt to
                      changing landscapes with ease. Continuous monitoring,
                      data-driven insights, and adaptive strategies ensure your
                      Digital Transformation journey is a perpetual evolution.
                    </p>
                    <div className="mdtop explore-btn studies-btn book-btn">
                      <a
                        href="#"
                        className="btn btn-primary trans animated pulse abt-butn-bot"
                      >
                        Start a Project
                        <img
                          src="/images/icons/next.png"
                          className="arrow  next-arow arrow1  animate-right-to-left"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6 tech-img">
                    <img
                      src="/images/digital-transformation/slider/img5.jpg"
                      alt="Continuous Evolution Image"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
              
          </Swiper>
          <div className="swiper-pagination mt-5 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" aria-current="true">1</span><span class="swiper-pagination-bullet" tabindex="0">2</span><span class="swiper-pagination-bullet" tabindex="0">3</span><span class="swiper-pagination-bullet" tabindex="0">4</span><span class="swiper-pagination-bullet" tabindex="0">5</span></div>
        </div>
      </section>
    </>
  );
};

export default DigitalTransformationSlider;
