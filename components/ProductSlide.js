import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const ProductSlider = () => {
  return (
    <section className="ux-section ux-container mt-5 margin-top-15">
      <h3 className="text-orange main-heading text-center font-size-28">
        Our Approach to Product Label Design
      </h3>
      <p className="textfff text-center max-width100 mt-3">
        At Viralon, we believe that product labels should tell a story and evoke
        emotions. Here's how we approach product label design.
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
                <h4>1 / 6</h4>
                <div className="under-r-content">
                  <h2>Detailed Briefing</h2>
                  <p>
                    We start by understanding your product, target audience,
                    and industry requirements. Your input is invaluable in
                    guiding our design process.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/pl-img1.jpg" alt="Slide 1" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>2 / 6</h4>
                <div className="under-r-content">
                  <h2>Creative Concept</h2>
                  <p>
                    Our experienced designers brainstorm creative concepts
                    that align with your brand and product's essence. We
                    consider color psychology, typography, and imagery.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/pl-img2.jpg" alt="Slide 2" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>3 / 6</h4>
                <div className="under-r-content">
                  <h2>Compliance and Clarity</h2>
                  <p>
                    We ensure that all mandatory information, including
                    ingredients, usage instructions, and compliance details,
                    is clearly and legibly presented.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/pl-img3.jpg" alt="Slide 3" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>4 / 6</h4>
                <div className="under-r-content">
                  <h2>Visual Appeal</h2>
                  <p>
                    We use high-quality graphics, imagery, and illustrations
                    that resonate with your audience and make your product
                    shine.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/pl-img4.jpg" alt="Slide 4" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>5 / 6</h4>
                <div className="under-r-content">
                  <h2>Feedback and Iteration</h2>
                  <p>
                    We welcome your feedback and work collaboratively to
                    refine the design until it perfectly reflects your vision.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/pl-img5.jpg" alt="Slide 5" />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 6 */}
          <SwiperSlide>
            <div className="slider-row">
              <div className="slider-row-content">
                <h4>6 / 6</h4>
                <div className="under-r-content">
                  <h2>Print-Ready Files</h2>
                  <p>
                    We deliver print-ready label designs in the required
                    formats, ensuring that they meet industry standards for
                    quality and precision.
                  </p>
                </div>
              </div>
              <div className="slider-row-img">
                <img src="/images/design/ui-ux/slider/pl-img6.jpg" alt="Slide 6" />
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

export default ProductSlider;
