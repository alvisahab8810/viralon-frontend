import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation } from "swiper/modules";

const UiUxSlider = () => {
  return (
    <section className="ux-section ux-container ">
      <h2 className="text-orange main-heading text-center font-size-30 text-white">
        User Experience (UX) Design
      </h2>
      <div className="container">
        {/* Swiper */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable:true
          }}
          navigation={{
            nextEl: ".swiper-button-next2",
            prevEl: ".swiper-button-prev2",
            
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper footer-ux-con swiper-initialized swiper-horizontal swiper-backface-hidden"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>1 / 9</h4>
                <div className="under-r-content">
                  <h2>User Research</h2>
                  <p>
                    Conducting research to understand the needs, behaviors,
                    and preferences of the target audience. This often
                    involves surveys, interviews, usability testing, and data
                    analysis.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/img1.jpg" alt="User Research" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>2 / 9</h4>
                <div className="under-r-content">
                  <h2>Personal Development</h2>
                  <p>
                    Creating fictional user personas based on research
                    findings to represent different user groups. These
                    personas help guide design decisions.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/img2.jpg" alt="Personal Development" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>3 / 9</h4>
                <div className="under-r-content">
                  <h2>Information Architecture</h2>
                  <p>
                    Organizing and structuring content and features in a way
                    that makes sense to users. This includes creating sitemaps
                    and defining navigation paths.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/img3.jpg" alt="Information Architecture" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>4 / 9</h4>
                <div className="under-r-content">
                  <h2>User Flows</h2>
                  <p>
                    Mapping out the steps users take to complete specific
                    tasks or achieve goals within the digital product. User
                    flows help identify potential pain points and optimize the
                    journey.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/img4.jpg" alt="User Flows" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>5 / 9</h4>
                <div className="under-r-content">
                  <h2>Wireframing</h2>
                  <p>
                    Creating low-fidelity sketches or digital wireframes to
                    outline the layout and functionality of a page or screen
                    without focusing on visual design details.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/img5.jpg" alt="Wireframing" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>6 / 9</h4>
                <div className="under-r-content">
                  <h2>Prototyping</h2>
                  <p>
                    Building interactive prototypes that simulate the user
                    experience. Prototypes allow for user testing and
                    refinement before full development.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/proto.jpg" alt="Prototyping" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 7 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>7 / 9</h4>
                <div className="under-r-content">
                  <h2>Usability Testing</h2>
                  <p>
                    Conducting tests with real users to gather feedback and
                    identify usability issues. This iterative process helps
                    improve the product's usability.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/img7.jpg" alt="Usability Testing" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 8 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>8 / 9</h4>
                <div className="under-r-content">
                  <h2>Accessibility</h2>
                  <p>
                    Ensuring that the digital product is accessible to users
                    with disabilities, conforming to standards like WCAG (Web
                    Content Accessibility Guidelines).
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/img8.jpg" alt="Accessibility" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 9 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>9 / 9</h4>
                <div className="under-r-content">
                  <h2>Content Strategy</h2>
                  <p>
                    Planning and creating content that aligns with user needs
                    and business goals. Content should be clear, engaging, and
                    easy to understand.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/img9.jpg" alt="Content Strategy" />
              </div>
            </div>
          </SwiperSlide>

          {/* Navigation Arrows */}
      
        </Swiper>
         {/* Navigation Buttons */}
         <div
          className="swiper-button-next2"
          tabIndex="0"
          role="button"
          aria-label="Next slide"
          aria-controls="swiper-wrapper-e82ff2c1ac46839d"
          aria-disabled="false"
        >
          <img src="/images/icons/right-arrow.png" alt="Next" />
        </div>
        <div
          className="swiper-button-prev2"
          tabIndex="0"
          role="button"
          aria-label="Previous slide"
          aria-controls="swiper-wrapper-e82ff2c1ac46839d"
          aria-disabled="false"
        >
          <img src="/images/icons/left-arrow.png" alt="Previous" />
        </div>

        {/* Notification span */}
      </div>
    </section>
  );
};

export default UiUxSlider;
