import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css'; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const TechnologySlider = () => {
  return (
    <section className="technology-c pt-5 pb-5 bottom-p padding-t">
      <div className="container1">
        <h2 className="font-size-40-important font-weight-900 text-center text-dark">
          Why Choose Viralon for{" "}
          <span className="font-size-40-important font-weight-900 text-center text-gold">
            {" "}
            Technology Consulting?
          </span>
        </h2>
        {/* Swiper */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
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
          modules={[Autoplay, Pagination]}
          className="mySwiper tech-swiper"
        >
          <SwiperSlide>
            <div className="t-cbx pt-5">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="text-dark font-size-40 font-weight-900">
                    Agile Approach, <br />{" "}
                    <span className="text-gold">Lasting Impact</span>
                  </h2>
                  <div className="line"></div>
                  <p className="t-para">
                    We believe in action that yields measurable results. That's why we employ an Agile
                    methodology—an iterative and flexible approach that ensures your technology
                    solutions evolve with your business's needs. With regular feedback cycles, adaptive
                    strategies, and incremental improvements, we ensure your technology investments
                    align with your goals.
                  </p>
                  <div className="mdtop explore-btn studies-btn book-btn">
                    <a
                      href="contact-us.html"
                      className="btn btn-primary trans animated pulse abt-butn-bot"
                    >
                      Start a Project{" "}
                      <img
                        src="/images/icons/next.png"
                        className="arrow next-arow arrow1 animate-right-to-left"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 tech-img">
                  <img
                    src="/images/technology-consulting/slider/img1.jpg"
                    alt="Agile Image"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Add content for Slide 2 */}
          <SwiperSlide>
            <div className="t-cbx pt-5">
              <div className="row">
                <div className="col-md-6">
                  <h2 className="text-dark font-size-40 font-weight-900">
                    Expertise Meets
                    <br /> <span className="text-gold">Innovation</span>
                  </h2>
                  <div className="line"></div>
                  <p className="t-para">
                    In a world where technology trends shift rapidly, having a knowledgeable guide by
                    your side is paramount. Viralon's team of seasoned technology consultants brings
                    years of experience and in-depth expertise across industries. From cloud computing
                    and AI to Cybersecurity and Software Development, we offer insights that help you
                    make informed decisions.
                  </p>
                  <div className="mdtop explore-btn studies-btn book-btn">
                    <a
                      href="contact-us"
                      className="btn btn-primary trans animated pulse abt-butn-bot"
                    >
                      Start a Project{" "}
                      <img
                        src="/images/icons/next.png"
                        className="arrow next-arow arrow1 animate-right-to-left"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-md-6 tech-img">
                  <img
                    src="/images/technology-consulting/slider/img2.jpg"
                    alt="Innovation Image"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>

          
        </Swiper>
        <div className="swiper-pagination mt-5 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet" tabindex="0">1</span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" aria-current="true">2</span></div>

      </div>
    </section>
  );
};

export default TechnologySlider;
