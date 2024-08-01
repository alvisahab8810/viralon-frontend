import React, { useRef, useState } from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//  import './Hero3.css';

// import required modules
import { Pagination } from 'swiper/modules'; 
// SwiperCore.use([Navigation, Autoplay]);


const SwiperSliders = () => {
  return (
    <>
      <div className='container mob-container'>
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
          }}

          navigation= {{
            nextEl: '.upk-button-next',
            prevEl: '.upk-button-prev',
          }}
          

          modules={[Autoplay,]}
          className="mySwiper"
        >
          <div className="bdt-timeline-container">
          <div className="upk-salf-slider-wrapper ">
            <div className="swiper-container mySwiper2">
              <div className="swiper-wrapper">
                {/* First slides  */}
                <SwiperSlide>
                <div className="upk-salf-item swiper-slide">
                <div className="upk-salf-image-wrap sm-none">
                  <img className="upk-xanc-img zoom" src="./images/hero-banners/banner1.png" alt="Desktop Banner" />
                </div>
                <div className="upk-salf-image-wrap desk-none">
                  <img className="upk-xanc-img zoom" src="./images/hero-banners/banner-sm-1.jpg" alt="Mobile Banner" />
                </div>
                <div className="upk-salf-content-wrap">
                  <h3 className="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                    Visionary Approch
                  </h3>
                  <div className="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">
                    We boldly envision a future where technology drives innovation. With a trendsetting mindset and a cutting-edge perspective, we are here to transform businesses.
                  </div>
                  <div className="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                    <a className="link link--arrowed" href="#">
                      
                      {/* <svg className="arrow-icon" width="28" height="28" viewBox="0 0 32 32">
                        <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                          <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                          <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                      </svg> */}
                    </a>
                  </div>
                </div>
                </div>
                </SwiperSlide>
                
                {/* Second Slide */}
                <SwiperSlide>

                <div className="upk-salf-item swiper-slide">
              <div className="upk-salf-image-wrap sm-none">
              <img className="upk-xanc-img zoom" src="./images/hero-banners/banner2.png" alt="Desktop Banner" />
                </div>
                <div className="upk-salf-image-wrap desk-none">
                  <img className="upk-xanc-img zoom" src="./images/hero-banners/banner-sm-2.jpg" alt="Mobile Banner" />
                </div>
                <div className="upk-salf-content-wrap">
                  <h3 className="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                  Versatile Team
                  </h3>
                  <div className="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">
                  By gathering diverse talents, experiences, and expertise, we have 'Go-Getters' ready to tackle and strategize the next best move. At ViralOn, we ensure that every project we undertake reaps the benefits of our unified expertise.
                  </div>
                  <div className="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                    <a className="link link--arrowed" href="#">
                    
                      {/* <svg className="arrow-icon" width="28" height="28" viewBox="0 0 32 32">
                        <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                          <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                          <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                      </svg> */}
                    </a>
                  </div>
                </div>
              </div>
                </SwiperSlide>
                              
              {/* Third Slide */}
               <SwiperSlide>
                
                <div className="upk-salf-item swiper-slide">
                <div className="upk-salf-image-wrap sm-none">
                  <img className="upk-xanc-img zoom" src="./images/hero-banners/banner3.png" alt="Desktop Banner" />
                </div>
                <div className="upk-salf-image-wrap desk-none">
                  <img className="upk-xanc-img zoom" src="./images/hero-banners/banner-sm-3.jpg" alt="Mobile Banner" />
                </div>
                <div className="upk-salf-content-wrap">
                  <h3 className="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                  Valued Services
                  </h3>
                  <div className="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">
                  We are here to give your brand a comprehensive spectrum of IT services designed to bring substantial value to your business. ViralOn is committed to equipping brands to excel in the digital era...
                  </div>
                  <div className="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                    <a className="link link--arrowed" href="#">
                      {/* read more */}
                      {/* <svg className="arrow-icon" width="28" height="28" viewBox="0 0 32 32">
                        <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                          <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                          <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                      </svg> */}
                    </a>
                  </div>
                </div>
              </div>
              </SwiperSlide>

            </div>
          </div>

          <div className="upk-salf-nav-pag-wrap ">
            <div className="upk-salf-navigation ">
              <div className="upk-button-prev upk-n-p">
                <a className="link link--arrowed" href="#">
                  <svg className="arrow-icon" width="28" height="28" viewBox="0 0 32 32">
                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                      <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                      <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                    </g>
                  </svg>
                </a>
              </div>

                <div className="upk-button-next upk-n-p">
                  <a className="link link--arrowed" href="#">
                  <svg className="arrow-icon" width="28" height="28" viewBox="0 0 32 32">
                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                      <circle className="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                      <path className="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                    </g>
                  </svg>
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        </Swiper>
      </div>
    </>
  );
}

export default SwiperSliders;