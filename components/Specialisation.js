import Link from "next/link";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const Specilalisation = () => {
  return (
    <>
      <div className="our-specialization-container" id="our-specialization">
        <h3 className="our-h">Our Specialization</h3>
        <div className="bx4" id="mob-none">
          <h3 className="our-h">Our Specialization</h3>
          <div className="img1">
            <div className="img-content">
              <h3>STRATEGY</h3>
              <p>Where traditional meets tech, and businesses thrive on the pulse of progress. At Viralon, we{'\''}re not just pioneers, we{'\''}re navigators of the digital universe. Join us on a transformative journey as we decode the essence.</p>
              <Link href="/services/strategy/digital-transformation" className="know-btn">Know More <i className="ri-arrow-right-s-line"></i></Link>
            </div>
          </div>

          <div className="img2">
            <div className="img-content">
              <h3>DIGITAL</h3>
              <p>In today{'\''}s digital landscape, where connections are formed at the click of a button and trends evolve in an instant, harnessing the power of Social Media Marketing has become non-negotiable for businesses aiming to thrive. </p>
              <Link href="/services/digital/social-media-marketing" className="know-btn">Know More <i className="ri-arrow-right-s-line"></i></Link>
            </div>
          </div>

          <div className="img3">
            <div className="img-content">
              <h3>DESIGN</h3>
              <p>At Viralon Digital Services, we understand the profound impact that exceptional UX/UI design can have on your digital presence. Our dedicated team of designers is passionate about crafting user-centric experiences.</p>
              <Link href="/services/design/ui-ux" className="know-btn">Know More <i className="ri-arrow-right-s-line"></i></Link>
            </div>
          </div>

        </div>

        <div className="container1" id="mob-swiper">
          <Swiper  slidesPerView={2}
            spaceBetween={20}
              loop={true}
             grabCursor={true} 
           centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            
        modules={[Pagination, Autoplay]}
        className="swiper mySwiper1">
            
            <SwiperSlide>
                <div className="img1">
                  <div className="img-content">
                    <h3>STRATEGY</h3>

                    <Link href="/services/strategy/digital-transformation" className="know-btn">Know More <i className="ri-arrow-right-s-line"></i></Link>
                  </div>
                </div>
              </SwiperSlide>


            <SwiperSlide>
              
                <div className="img2">
                  <div className="img-content">
                    <h3>DIGITAL</h3>

                    <Link href="/services/digital/social-media-marketing" className="know-btn">Know More <i className="ri-arrow-right-s-line"></i></Link>
                  </div>
                </div>
             </SwiperSlide>


             <SwiperSlide>

                <div className="img3">
                  <div className="img-content">
                    <h3>DESIGN</h3>

                    <Link href="/services/design/ui-ux" className="know-btn">Know More <i className="ri-arrow-right-s-line"></i></Link>
                  </div>
                </div>
             </SwiperSlide>



             <SwiperSlide>

                <div className="img1">
                  <div className="img-content">
                    <h3>STRATEGY</h3>

                    <Link href="/services/strategy/digital-transformation" className="know-btn">Know More <i className="ri-arrow-right-s-line"></i></Link>
                  </div>
                </div>
                </SwiperSlide>


              <SwiperSlide>

                <div className="img2">
                  <div className="img-content">
                    <h3>DIGITAL</h3>

                    <Link href="/services/digital/social-media-marketing" className="know-btn">Know More <i className="ri-arrow-right-s-line"></i></Link>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide>

                <div className="img3">
                  <div className="img-content">
                    <h3>DESIGN</h3>

                    <Link href="/services/design/ui-ux" className="know-btn">Know More <i className="ri-arrow-right-s-line"></i></Link>
                  </div>
                </div>
                </SwiperSlide>

     
          </Swiper>

        </div>
      </div>
    </>
  );
}

export default Specilalisation;