import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const BrochureSlider = () => {
  return (
    <section className="ux-section ux-container mt-5 margin-top-15">
      <h3 className="text-orange main-heading text-center font-size-28">
        Our Approach to Brochure Design
      </h3>
      <p className="textfff text-center max-width100 mt-3">
        At Viralon, we understand that each brochure is a unique opportunity to
        tell your brand's story. Here's how we approach brochure design
      </p>
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
                <h4>1 / 5</h4>
                <div className="under-r-content">
                  <h2>Client Collaboration</h2>
                  <p>
                    We start by listening to your ideas, goals, and target
                    audience. We work closely with you to ensure our designs
                    align with your vision.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/bro-img1.jpg" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>2 / 5</h4>
                <div className="under-r-content">
                  <h2>Concept Development</h2>
                  <p>
                    Our designers brainstorm creative concepts that convey
                    your message effectively. We explore various layouts,
                    color schemes, and typography options.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/bro-img2.jpg" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>3 / 5</h4>
                <div className="under-r-content">
                  <h2>Content Integration</h2>
                  <p>
                    We integrate your content seamlessly into the design,
                    ensuring it flows logically and captures the reader's
                    attention
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/bro-img3.jpg" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>4 / 5</h4>
                <div className="under-r-content">
                  <h2>Visual Appeal</h2>
                  <p>
                    We use captivating visuals, including high-quality images,
                    illustrations, and graphics, to make your brochure
                    visually appealing.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/bro-img4.jpg" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>5 / 5</h4>
                <div className="under-r-content">
                  <h2>Proofing and Revisions</h2>
                  <p>
                    We provide you with drafts of the design for your feedback
                    and make revisions based on your input until you are
                    satisfied.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/bro-img5.jpg" />
              </div>
            </div>
          </SwiperSlide>

          {/* Add more slides as needed */}

      
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

export default BrochureSlider;
