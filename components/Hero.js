import React, { useEffect } from 'react';
import SwiperCore, { Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';

SwiperCore.use([Navigation, Autoplay]);

const Hero = () => {
  useEffect(() => {
    const swiper = new SwiperCore('.mySwiper2', {
      direction: 'vertical',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      // slidesPerView: 5,
      // spaceBetween: 10,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    // return () => {
    //   swiper.destroy();
    // };

  }, []);


  return (
    <>
      <div class="bdt-timeline-container">
        <div class="upk-salf-slider-wrapper">

          <div className="swiper-container mySwiper2">
            <div className="swiper-wrapper">
              {[1, 2, 3].map((index) => (
                <SwiperSlide key={index} className="upk-salf-item swiper-slide">
                  <div class="upk-salf-image-wrap sm-none">
                    <img class="upk-xanc-img zoom " src={`/themes/viralon/images/hero-banners/banner${index}.png`} alt="Desktop Banner" />
                  </div>

                  <div class="upk-salf-image-wrap desk-none">
                    <img class="upk-xanc-img zoom " src={`/themes/viralon/images/hero-banners/banner-sm-${index}.jpg`} alt="Mobile Banner" />
                  </div>
                  <div class="upk-salf-content-wrap">
                    <h3 class="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                      Visionary Approchffdsfsffsdfs
                    </h3>
                    <div class="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400" >We boldly envision a future where technology drives innovation. With a trendsetting mindset and a cutting-edge perspective, we are here to transform businesses.</div>
                    <div class="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                      <a class="link link--arrowed" href="#">read more
                        <svg class="arrow-icon" width="28" height="28" viewBox="0 0 32 32">
                          <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                            <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                            <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                          </g>
                        </svg>
                      </a>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>


          <div class="swiper-container mySwiper2">
            <div class="swiper-wrapper">
              <div class="upk-salf-item swiper-slide">

                <div class="upk-salf-image-wrap sm-none">
                  <img class="upk-xanc-img zoom " src="./themes/viralon/images/hero-banners/banner1.png" alt="Desktop Banner" />
                </div>

                <div class="upk-salf-image-wrap desk-none">
                  <img class="upk-xanc-img zoom " src="./themes/viralon/images/hero-banners/banner-sm-1.jpg" alt="Mobile Banner" />
                </div>

                <div class="upk-salf-content-wrap">
                  <h3 class="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                    Visionary Approchhjgfhjf
                  </h3>
                  <div class="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400" >We boldly envision a future where technology drives innovation. With a trendsetting mindset and a cutting-edge perspective, we are here to transform businesses.</div>
                  <div class="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                    <a class="link link--arrowed" href="#">read more
                      <svg class="arrow-icon" width="28" height="28" viewBox="0 0 32 32">
                        <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                          <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                          <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div class="upk-salf-item swiper-slide">
                <div class="upk-salf-image-wrap">
                  <img class="upk-xanc-img zoom sm-none" src="./themes/viralon/images/hero-banners/banner-2.jpg" alt="Desktop Banner" />
                  <img class="upk-xanc-img zoom desk-none" src="./themes/viralon/images/hero-banners/banner-sm-2.jpg" alt="Mobile Banner" />
                </div>
                <div class="upk-salf-content-wrap">
                  <h3 class="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                    Versatile Team
                  </h3>
                  <div class="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">By gathering diverse talents, experiences, and expertise, we have {'\''}Go-Getters{'\''} ready to tackle and strategize the next best move. At ViralOn, we ensure that every project we undertake reaps the benefits of our unified expertise.</div>

                  <div class="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                    <a class="link link--arrowed" href="#">read more
                      <svg class="arrow-icon" width="28" height="28" viewBox="0 0 32 32">
                        <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                          <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                          <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div class="upk-salf-item swiper-slide">
                <div class="upk-salf-image-wrap">
                  <img class="upk-xanc-img zoom sm-none" src="./themes/viralon/images/hero-banners/banner3.png" alt="Desktop Banner" />
                  <img class="upk-xanc-img zoom desk-none" src="./themes/viralon/images/hero-banners/banner-sm-3.jpg" alt="Mobile Banner" />
                </div>
                <div class="upk-salf-content-wrap">
                  <h3 class="upk-salf-title" data-swiper-parallax-y="-150" data-swiper-parallax-duration="1200">
                    Valued Services 
                  </h3>
                  <div class="upk-salf-desc" data-swiper-parallax-y="-200" data-swiper-parallax-duration="1400">We are here to give your brand a comprehensive spectrum of IT services designed to bring substantial value to your business. ViralOn is committed to equipping brands to excel in the digital era..</div>

                  <div class="upk-salf-button" data-swiper-parallax-y="-300" data-swiper-parallax-duration="1500">
                    <a class="link link--arrowed" href="#">read more
                      <svg class="arrow-icon" width="28" height="28" viewBox="0 0 32 32">
                        <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                          <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                          <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div class="upk-salf-nav-pag-wrap ">

            <div class="upk-salf-navigation ">
              <div class="upk-button-prev upk-n-p">
                <a class="link link--arrowed" href="#">
                  <svg class="arrow-icon" width="28" height="28" viewBox="0 0 32 32">
                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                      <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                      <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                    </g>
                  </svg>
                </a>
              </div>
              <div class="upk-button-next upk-n-p">
                <a class="link link--arrowed" href="#">
                  <svg class="arrow-icon" width="28" height="28" viewBox="0 0 32 32">
                    <g fill="none" stroke="#ff215a" stroke-width="1.5" stroke-linejoin="round" stroke-miterlimit="10">
                      <circle class="arrow-icon--circle" cx="16" cy="16" r="15.12"></circle>
                      <path class="arrow-icon--arrow" d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"></path>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;