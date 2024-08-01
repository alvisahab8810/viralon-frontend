import React from 'react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';



const OurIndustryExpert = () => {
  // SwiperCore.use([Autoplay, Pagination]);

  return (
    <section className="pb-5 bottom-p padding-t">
      <div className="shapbx mt-0">
        <h3 className="work-heading">WORKS</h3>
      </div>
      <h3 className="heading1 ">
        Our Industry Expertise <span className="text-gold">and Solutions</span>
      </h3>
      <div className="container">
      
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        breakpoints={{
          240: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}

        
        // navigation={true}
        modules={[Autoplay, ]}
        className="mySwiper wwr1-slider"
      >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className=" mb-lg-0 mb-md-4 mb-4 animate__ animate__fadeInUp wow animated">
              {/* Post 1 */}
              <Link href="/industries/e-commerce-industries" className="grid-post ripple-animation clip-path-2">
                <i className="ripple-helper" />
                <img src="/images/E-Commerce.png" className="grid-post-image" alt="E-Commerce Image" />
                <h3 className="font-size-20 font-weight-600 mt-2 text-white">
                  E-Commerce
                </h3>
              </Link>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className=" mb-lg-0 mb-md-4 mb-4 animate__ animate__fadeInUp wow animated">
              {/* Post 2 */}
              <Link href="food-industry.html" className="grid-post ripple-animation clip-path-2">
                <i className="ripple-helper" />
                <img src="/images/Food.png" className="grid-post-image" alt="Food Image" />
                <h3 className="font-size-20 font-weight-600 mt-2 text-white">
                  Food
                </h3>
              </Link>
            </div>
          </SwiperSlide>

               {/* Slide 3 */}
               <SwiperSlide>
            <div className="mb-lg-0 mb-md-4 mb-4 animate__ animate__fadeInUp wow animated">
              <Link href="travel-industry.html" className="grid-post ripple-animation clip-path-2">
                <i className="ripple-helper" />
                <img src="/images/Travel.png" className="grid-post-image" alt="Travel Image" />
                <h3 className="font-size-20 font-weight-600 mt-2 text-white">
                  Travel
                </h3>
              </Link>
            </div>
          </SwiperSlide>

          <SwiperSlide>
  <div className="mb-lg-0 mb-md-4 mb-4 animate__ animate__fadeInUp wow animated">
    <Link href="healthcare-wellness.html" className="grid-post ripple-animation clip-path-2">
      <i className="ripple-helper" />
      <img src="/images/Healthcare.png" className="grid-post-image" alt="Healthcare & Wellness Image" />
      <h3 className="font-size-20 font-weight-600 mt-2 text-white">
        Health-Care & Wellness
      </h3>
    </Link>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="mb-lg-0 mb-md-4 mb-4 animate__ animate__fadeInUp wow animated">
    <Link href="it-industry.html" className="grid-post ripple-animation clip-path-2">
      <i className="ripple-helper" />
      <img src="/images/IT.png" className="grid-post-image" alt="IT Image" />
      <h3 className="font-size-20 font-weight-600 mt-2 text-white">
        IT
      </h3>
    </Link>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="mb-lg-0 mb-md-4 mb-4 animate__ animate__fadeInUp wow animated">
    <Link href="personal-care.html" className="grid-post ripple-animation clip-path-2">
      <i className="ripple-helper" />
      <img src="/images/Personal-Care.png" className="grid-post-image" alt="Personal Care Image" />
      <h3 className="font-size-20 font-weight-600 mt-2 text-white">
        Personal Care
      </h3>
    </Link>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="mb-lg-0 mb-md-4 mb-4 animate__ animate__fadeInUp wow animated">
    <Link href="banking-and-finance.html" className="grid-post ripple-animation clip-path-2">
      <i className="ripple-helper" />
      <img src="/images/banking-finance.png" className="grid-post-image" alt="Banking & Finance Image" />
      <h3 className="font-size-20 font-weight-600 mt-2 text-white">
        Banking & Finance
      </h3>
    </Link>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="mb-lg-0 mb-md-4 mb-4 animate__ animate__fadeInUp wow animated">
    <Link href="real-estate-industry.html" className="grid-post ripple-animation clip-path-2">
      <i className="ripple-helper" />
      <img src="/images/Real-estate.png" className="grid-post-image" alt="Real Estate Image" />
      <h3 className="font-size-20 font-weight-600 mt-2 text-white">
        Real Estate
      </h3>
    </Link>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="mb-lg-0 mb-md-4 mb-4 animate__ animate__fadeInUp wow animated">
    <Link href="/industries/education-industries" className="grid-post ripple-animation clip-path-2">
      <i className="ripple-helper" />
      <img src="/images/education.png" className="grid-post-image" alt="Education Image" />
      <h3 className="font-size-20 font-weight-600 mt-2 text-white">
        Education
      </h3>
    </Link>
  </div>
</SwiperSlide>

          {/* Add more SwiperSlides for additional slides as needed */}
        </Swiper>
      </div>
    </section>
  );
};

export default OurIndustryExpert;
