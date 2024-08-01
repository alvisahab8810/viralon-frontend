import Link from "next/link";
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Works = () => {
  return (
    <>
      <div className="our-industry" id="industry">
        <div className="shapbx">
          <h3 className="work-heading">WORKS</h3>
        </div>
        <h1 className="heading1">Our Industry Expertise <span className="text-gold">and  Solutions</span></h1>
        <div className="container1" id="mob-none">
          <div className="items3">
            <div className="main-overlay-bx">
              <img className="wg-box-content-image" src="./themes/viralon/images/industries/img1.webp" alt="Travel Image" />
              <div className="main-overlay">
                <div className="main-text"><p>In the dynamic landscape of the Banking and Finance sector, staying ahead of the curve is crucial. <span><Link href="/industries/banking-and-finance" className="read-more">Read More</Link></span> </p></div>
              </div>
            </div>

            <div className="main-overlay-bx">
              <img className="wg-box-content-image" src="./themes/viralon/images/industries/img2.webp" alt="Travel Image" />
              <div className="main-overlay">
                <div className="main-text"><p>In the dynamic realm of the Travel Industry, innovation is the compass guiding success. <span><Link href="/industries/travel-industries" className="read-more">Read More</Link></span></p></div>
              </div>
            </div>

            <div className="main-overlay-bx">
              <img className="wg-box-content-image" src="./themes/viralon/images/industries/img3.webp" alt="Travel Image" />
              <div className="main-overlay">
                <div className="main-text"><p>In the ever-evolving landscape of the IT industry, innovation is the driving force that shapes businesses and technologies. <span><Link href="/industries/it-industries" className="read-more">Read More</Link> </span></p></div>
              </div>
            </div>
          </div>

          <div className="items3">
            <div className="main-overlay-bx">
              <img className="wg-box-content-image" src="./themes/viralon/images/industries/img4.webp" alt="Travel Image" />
              <div className="main-overlay">
                <div className="main-text"><p>In the ever-evolving landscape of Healthcare and Wellness, Viralon Digital Services takes center stage as a catalyst for change. <span><Link href="/industries/healthcare-and-wellness" className="read-more">Read More</Link></span></p></div>
              </div>
            </div>

            <div className="main-overlay-bx">
              <img className="wg-box-content-image" src="./themes/viralon/images/industries/img5.webp" alt="Travel Image" />
              <div className="main-overlay">
                <div className="main-text"><p>In the dynamic realm of the Food Industry, innovation is the recipe for success.<br /> <span><Link href="/industries/food-industries" className="read-more">Read More</Link></span></p></div>
              </div>
            </div>

            <div className="main-overlay-bx">
              <img className="wg-box-content-image" src="./themes/viralon/images/industries/img6.webp" alt="Travel Image" />
              <div className="main-overlay">
                <div className="main-text"><p>In the ever-evolving landscape of Real Estate, Viralon Digital Services takes center stage as a catalyst for change. <span><Link href="/industries/real-estate-industries" className="read-more">Read More</Link></span></p></div>
              </div>
            </div>
          </div>

          <div className="items3">

            <div className="main-overlay-bx">
              <img className="wg-box-content-image" src="./themes/viralon/images/industries/img7.webp" alt="Travel Image" />
              <div className="main-overlay">
                <div className="main-text"><p>In the dynamic world of E-Commerce, staying ahead of the curve is the key to success. <br /><span><Link href="/industries/e-commerce-industries" className="read-more">Read More</Link></span> </p></div>
              </div>
            </div>

            <div className="main-overlay-bx">
              <img className="wg-box-content-image" src="./themes/viralon/images/industries/img8.webp" alt="Travel Image" />
              <div className="main-overlay">
                <div className="main-text"><p>In the ever-evolving landscape of the Personal Care Industry, innovation is the cornerstone of success. <span><Link href="/industries/personal-care-industries" className="read-more">Read More</Link></span></p></div>
              </div>
            </div>

            <div className="main-overlay-bx">
              <img className="wg-box-content-image" src="./themes/viralon/images/industries/eduction1.jpg" alt="Travel Image" />
              <div className="main-overlay">
                <div className="main-text"><p>In the ever-evolving landscape of Education, Viralon Digital Services takes center stage as a catalyst for change. <span><Link href="industries/education-industries" className="read-more">Read More</Link></span></p></div>
              </div>
            </div>
          </div>
        </div>

        <div className="container1" id="mob-swiper">

          <Swiper  id="e-services"

            slidesPerView={2}
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
            className="swiper mySwiper1" >
              <SwiperSlide className="swiper-slide">
                <div className="main-overlay-bx">
                  <img className="wg-box-content-image" src="./themes/viralon/images/industries/img1.webp" alt="Travel Image" />
                  <div className="main-overlay">
                    <div className="main-text"><p><span><Link href="/industries/banking-and-finance" className="read-more">Read More</Link></span> </p></div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="main-overlay-bx">
                  <img className="wg-box-content-image" src="./themes/viralon/images/industries/img2.webp" alt="Travel Image" />
                  <div className="main-overlay">
                    <div className="main-text"><p><span><Link href="/industries/travel-industries" className="read-more">Read More</Link></span></p></div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="main-overlay-bx">
                  <img className="wg-box-content-image" src="./themes/viralon/images/industries/img3.webp" alt="Travel Image" />
                  <div className="main-overlay">
                    <div className="main-text"><p><span><Link href="/industries/it-industries" className="read-more">Read More</Link> </span></p></div>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide className="swiper-slide">
                <div className="main-overlay-bx">
                  <img className="wg-box-content-image" src="./themes/viralon/images/industries/img4.webp" alt="Travel Image" />
                  <div className="main-overlay">
                    <div className="main-text"><p> <span><Link href="/industries/healthcare-and-wellness" className="read-more">Read More</Link></span></p></div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="main-overlay-bx">
                  <img className="wg-box-content-image" src="./themes/viralon/images/industries/img5.webp" alt="Travel Image" />
                  <div className="main-overlay">
                    <div className="main-text"><p><span><Link href="/indusries/food-industries" className="read-more">Read More</Link></span></p></div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="main-overlay-bx">
                  <img className="wg-box-content-image" src="./themes/viralon/images/industries/img6.webp" alt="Travel Image" />
                  <div className="main-overlay">
                    <div className="main-text"><p><span><Link href="/industries/real-estate-industries" className="read-more">Read More</Link></span></p></div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="main-overlay-bx">
                  <img className="wg-box-content-image" src="./themes/viralon/images/industries/img7.webp" alt="Travel Image" />
                  <div className="main-overlay">
                    <div className="main-text"><p><span><Link href="/industries/e-commerce-industries" className="read-more">Read More</Link></span> </p></div>
                  </div>
                </div>
              </SwiperSlide>


              <SwiperSlide className="swiper-slide">
                <div className="main-overlay-bx">
                  <img className="wg-box-content-image" src="./themes/viralon/images/industries/img8.webp" alt="Travel Image" />
                  <div className="main-overlay">
                    <div className="main-text"><p><span><Link href="/industries/personal-care-industries" className="read-more">Read More</Link></span></p></div>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide">
                <div className="main-overlay-bx">
                  <img className="wg-box-content-image" src="./themes/viralon/images/industries/eduction1.jpg" alt="Travel Image" />
                  <div className="main-overlay">
                    <div className="main-text"><p><span><Link href="/industries/education-industries" className="read-more">Read More</Link></span></p></div>
                  </div>
                </div>
              </SwiperSlide>

         

          </Swiper >
        </div>
      </div>
    </>
  );
}

export default Works;