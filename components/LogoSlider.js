import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const LogoSlider = () => {
    return (
        <section className="ux-section ux-container mt-5 margin-top-15">
            <h3 className="text-orange main-heading text-center font-size-28">
                Our Approach to Logo Design
            </h3>
            <p className="textfff text-center max-width100 mt-3">
                At Viralon, we believe that a successful logo is the result of a
                collaborative process that aligns with your brand's vision. Here's how we
                approach logo design.
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
                                    <h2>Discovery</h2>
                                    <p>
                                        We start by getting to know your brand, its values, target
                                        audience, and competitors. This insight helps us create a
                                        logo that resonates with your audience.
                                    </p>
                                </div>
                            </div>
                            <div className="slider-row-img">
                                <img src="/images/design/ui-ux/slider/logo-img1.jpg" alt="Discovery Image" />
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 2 */}
                    <SwiperSlide>
                        <div className="slider-row">
                            <div className="slider-row-content">
                                <h4>2 / 5</h4>
                                <div className="under-r-content">
                                    <h2>Creative Concept</h2>
                                    <p>
                                        Our designers brainstorm and develop several logo concepts,
                                        exploring different styles, colors, and typography options.
                                    </p>
                                </div>
                            </div>
                            <div className="slider-row-img">
                                <img src="/images/design/ui-ux/slider/logo-img2.jpg" alt="Creative Concept Image" />
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 3 */}
                    <SwiperSlide>
                        <div className="slider-row">
                            <div className="slider-row-content">
                                <h4>3 / 5</h4>
                                <div className="under-r-content">
                                    <h2>Sketching and Prototyping</h2>
                                    <p>
                                        We turn our concepts into sketches and digital prototypes,
                                        refining the most promising ideas into potential logo designs.
                                    </p>
                                </div>
                            </div>
                            <div className="slider-row-img">
                                <img src="/images/design/ui-ux/slider/logo-img3.jpg" alt="Sketching and Prototyping Image" />
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 4 */}
                    <SwiperSlide>
                        <div className="slider-row">
                            <div className="slider-row-content">
                                <h4>4 / 5</h4>
                                <div className="under-r-content">
                                    <h2>Feedback and Iteration</h2>
                                    <p>
                                        We value your input. We work closely with you to gather
                                        feedback and make iterative improvements to the chosen design.
                                    </p>
                                </div>
                            </div>
                            <div className="slider-row-img">
                                <img src="/images/design/ui-ux/slider/logo-img4.jpg" alt="Feedback and Iteration Image" />
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* Slide 5 */}
                    <SwiperSlide>
                        <div className="slider-row">
                            <div className="slider-row-content">
                                <h4>5 / 5</h4>
                                <div className="under-r-content">
                                    <h2>Finalization</h2>
                                    <p>
                                        Once you're satisfied with the design, we finalize it,
                                        ensuring it meets all technical requirements and is ready
                                        for use in various media.
                                    </p>
                                </div>
                            </div>
                            <div className="slider-row-img">
                                <img src="/images/design/ui-ux/slider/logo-img5.jpg" alt="Finalization Image" />
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
        <span
          className="swiper-notification"
          aria-live="assertive"
          aria-atomic="true"
        ></span>
            </div>
        </section>
    );
};

export default LogoSlider;
