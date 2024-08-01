import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const RealStateSlide = ({ sliderShow,
  setSliderShow }) => {
  return (
    <div>
     
    {/* Current Trends */}
      {sliderShow === "trends" &&<div className="tab-pane active show" id="1a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h2 className="font-size-40-important text-white">
                  Current Trends in Real Estate
                </h2>
                <p className="text-white">
                  The Real Estate industry is undergoing a significant
                  transformation driven by technological advancements and
                  evolving customer expectations. Here are some of the prominent
                  trends.
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              {/* Swiper */}
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img1.jpg"
                      alt="Digital Property Transactions Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Digital Property Transactions
                      </a>
                      <p>
                        Buyers and sellers are increasingly seeking streamlined,
                        digital processes for property transactions, from listing
                        to closing.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img2.jpg"
                      alt="Virtual Property Tours Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Virtual Property Tours
                      </a>
                      <p>
                        The rise of virtual reality (VR) and augmented reality
                        (AR) is revolutionizing how customers explore properties
                        remotely.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img3.jpg"
                      alt="Data-Driven Decision-Making Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Data-Driven Decision-Making
                      </a>
                      <p>
                        Utilizing data analytics and AI-driven insights to make
                        informed investment decisions, optimize property
                        management, and enhance customer satisfaction.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img4.jpg"
                      alt="Sustainable Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Sustainable Real Estate
                      </a>
                      <p>
                        A growing emphasis on sustainable and eco-friendly
                        properties is reshaping how real estate services are
                        marketed and developed.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

    {/* Viralon's Role in Elevating Real Estate  */}
      {sliderShow === "offer" &&<div className="tab-pane" id="2a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h3 className="font-size-40 text-white">
                  Viralon's Role in Elevating Real Estate
                </h3>
                <p className="text-white">
                  Viralon Digital Services is a frontrunner in revolutionizing
                  the real estate landscape. Our expertise empowers real estate
                  professionals and developers to navigate these trends
                  seamlessly.
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              {/* Swiper */}
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img5.jpg"
                      alt="Digital Property Listings Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Digital Property Listings
                      </a>
                      <p>
                        We create user-friendly digital platforms for property
                        listings that prioritize ease of use, enhancing the
                        visibility and accessibility of real estate offerings.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img6.jpg"
                      alt="Virtual Property Tours Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Virtual Property Tours
                      </a>
                      <p>
                        Viralon develops immersive VR and AR solutions that offer
                        prospective buyers the ability to explore properties as
                        if they were physically present.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img7.jpg"
                      alt="Data-Driven Property Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Data-Driven Property Insights
                      </a>
                      <p>
                        Our data-driven approach optimizes property investment
                        decisions by providing actionable insights into market
                        trends, property values, and rental yields.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img8.jpg"
                      alt="Sustainable Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Sustainable Real Estate Marketing
                      </a>
                      <p>
                        Viralon creates compelling marketing campaigns that
                        highlight eco-friendly features, engaging environmentally
                        conscious buyers in the real estate market.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

    {/* Innovative Technology */}
      {sliderShow === "tectTrend" &&<div className="tab-pane" id="3a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">
                  Innovative Technology
                </h1>
                <p className="text-white">
                  The Real Estate sector is embracing groundbreaking
                  technologies that are revolutionizing property management and
                  transactions. Some noteworthy innovations and products include:
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              {/* Swiper */}
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img9.jpg"
                      alt="Real Estate Portals Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Real Estate Portals
                      </a>
                      <p>
                        Comprehensive real estate portals empower buyers, sellers,
                        and agents to list, search, and manage properties efficiently.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img10.jpg"
                      alt="Virtual Property Viewing Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Virtual Property Viewing
                      </a>
                      <p>
                        Advanced VR and AR applications offer realistic property
                        tours, making remote property exploration engaging and convenient.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img11.jpg"
                      alt="AI-Driven Property Valuation Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        AI-Driven Property Valuation
                      </a>
                      <p>
                        AI-powered tools provide accurate property valuations,
                        helping buyers and sellers make informed decisions.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img12.jpg"
                      alt="Property Management Software Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Property Management Software
                      </a>
                      <p>
                        Cloud-based property management platforms streamline
                        lease management, maintenance, and tenant communication.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

        {/* Tech Offering */}
        {sliderShow === "techOffer" &&<div className="tab-pane" id="4a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">
                  Viralon’s Tech Offerings for Real -Estate Industry
                </h1>
                <p className="text-white">
                  A user-friendly platform that allows real estate agencies to
                  list and manage properties efficiently. Features include
                  property details, high-quality images, and location maps.
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              {/* Swiper */}
              <Swiper
                spaceBetween={30}
                effect={"fade"}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Autoplay]}
                className="mySwiper"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img13.jpg"
                      alt="Virtual Property Tours Application Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Virtual Property Tours Application
                      </a>
                      <p>
                        An immersive VR and AR application that enables
                        prospective buyers to take realistic virtual tours of
                        properties. This enhances property exploration and engagement.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img14.jpg"
                      alt="Property Management Software (PMS) Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Property Management Software (PMS)
                      </a>
                      <p>
                        Cloud-based PMS platforms that streamline property
                        management tasks such as lease management, maintenance
                        requests, and tenant communication. Improves operational
                        efficiency for property managers.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img15.jpg"
                      alt="Sustainable Real Estate Marketing Campaigns Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Sustainable Real Estate Marketing Campaigns
                      </a>
                      <p>
                        Tailored marketing campaigns that highlight eco-friendly
                        features of properties, attracting environmentally conscious
                        buyers and renters.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img16.jpg"
                      alt="Property Investment Analysis Tools Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Property Investment Analysis Tools
                      </a>
                      <p>
                        Tools for real estate investors to assess property value,
                        rental yield, and potential returns. Facilitates
                        data-driven investment decisions.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 5 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/real-estate/img17.jpg"
                      alt="Real Estate CRM System Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Real Estate CRM System
                      </a>
                      <p>
                        A customer relationship management system customized for
                        real estate professionals. Facilitates lead management,
                        client communication, and property tracking.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        </div>}
    
    </div>
  );
};

export default RealStateSlide;
