import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const FoodSlider =({ sliderShow,
  setSliderShow }) => {
  return (
    <div>
      {/* Marketing Trends */}
      {sliderShow === "trends" &&<div className="tab-pane active show" id="1a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h2 className="font-size-40-important text-white">Marketing Trends</h2>
                <p className="text-white">
                  The Food Industry is experiencing a culinary revolution,
                  driven by technology and changing consumer preferences. Some
                  of the prominent marketing trends include
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
                      src="/images/industries/food/img1.jpg"
                      alt="Health & Wellness Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Health &amp; Wellness
                      </a>
                      <p>
                        Consumers are demanding healthier and more sustainable
                        food options. Brands that prioritize nutrition,
                        transparency, and ethical sourcing are gaining a
                        competitive edge.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img2.jpg"
                      alt="E-Commerce &amp; (DTC) Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        E-Commerce &amp; (DTC)
                      </a>
                      <p>
                        The convergence of physical and digital channels is
                        essential. Providing a seamless experience across
                        various touchpoints, from brick-and-mortar branches to
                        mobile apps, creates a cohesive customer journey.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img3.jpg"
                      alt="Personalized Dining Experiences Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Personalized Dining Experiences
                      </a>
                      <p>
                        Tailoring menus and offerings to individual tastes and
                        dietary preferences is becoming a standard practice,
                        enhancing customer loyalty.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img4.jpg"
                      alt="Social Media Influence Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Social Media Influence
                      </a>
                      <p>
                        The visual nature of food makes it perfectly suited for
                        social media platforms. Instagram-worthy dishes and
                        viral food challenges are shaping culinary trends.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

      {/* Marketing Offering */}
      {sliderShow === "offer" &&<div className="tab-pane" id="2a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h3 className="font-size-40 text-white">
                  {" "}
                  Food Industry Marketing{" "}
                </h3>
                <p className="text-white">
                  Viralon Digital Services is a pioneer in redefining marketing
                  strategies within the Food Industry. Our expertise empowers
                  businesses to navigate these trends with finesse
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
                      src="/images/industries/food/img5.jpg"
                      alt="Nutrition-Focused Branding Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Nutrition-Focused Branding
                      </a>
                      <p>
                        We collaborate with food brands to communicate their
                        commitment to health and wellness, building trust and
                        attracting health-conscious consumers.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img6.jpg"
                      alt="E-Commerce Solutions Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        E-Commerce Solutions
                      </a>
                      <p>
                        Viralon creates seamless online shopping experiences
                        that facilitate direct engagement with consumers,
                        boosting sales and brand loyalty.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img7.jpg"
                      alt="Personalized Menu Recommendations Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Personalized Menu Recommendations
                      </a>
                      <p>
                        We leverage data insights to craft personalized menu
                        suggestions that resonate with individual tastes,
                        enhancing dining experiences.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img8.jpg"
                      alt="Social Media Marketing Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Social Media Marketing
                      </a>
                      <p>
                        Our creative social media campaigns help food businesses
                        engage with audiences through captivating visuals and
                        trending content.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

      {/* Tech Trend */}
      {sliderShow === "tectTrend" &&<div className="tab-pane" id="3a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">
                  {" "}
                  Innovative Technology{" "}
                </h1>
                <p className="text-white">
                  The Food Industry is embracing groundbreaking technologies
                  that are revolutionizing culinary experiences. Here are some
                  notable innovations and tech solutions
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
                      src="/images/industries/food/img9.jpg"
                      alt="Internet of Things Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Internet of Things (IoT) in Kitchen Operations
                      </a>
                      <p>
                        IoT-enabled devices optimize kitchen operations, from
                        inventory management to cooking precision, streamlining
                        processes.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img10.jpg"
                      alt="Augmented Reality (AR) Menus Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Augmented Reality (AR) Menus
                      </a>
                      <p>
                        AR menus enhance dining experiences by providing
                        interactive, visual representations of dishes, allowing
                        customers to explore offerings before ordering.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img11.jpg"
                      alt="Mobile Apps for Ordering and Loyalty Programs Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Mobile Apps for Ordering and Loyalty Programs
                      </a>
                      <p>
                        Customized mobile apps streamline the ordering process
                        and offer loyalty rewards, enhancing customer
                        convenience and retention.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img12.jpg"
                      alt="Smart Menu Management Software Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Smart Menu Management Software
                      </a>
                      <p>
                        Advanced software solutions enable real-time menu
                        updates, special promotions, and dynamic pricing to
                        adapt to market trends.
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
                <h1 className="font-size-40 text-white">Tech Offerings</h1>
                <p className="text-white">
                  Viralon's cutting-edge technology solutions are tailored to
                  cater to the unique needs of the Food Industry
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
                      src="/images/industries/food/img13.jpg"
                      alt="Customized Mobile Ordering Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Customized Mobile Ordering App
                      </a>
                      <p>
                        Viralon develops personalized mobile apps that enable
                        customers to place orders directly from their
                        smartphones.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img14.jpg"
                      alt="Loyalty Program Management Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Loyalty Program Management Software
                      </a>
                      <p>
                        Our loyalty program software assists food businesses in
                        creating and managing customer loyalty initiatives. It
                        allows businesses to design reward systems, track
                        customer interactions, and offer exclusive promotions to
                        loyal patrons. By nurturing customer loyalty, businesses
                        can increase customer retention and encourage higher
                        spending.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img15.jpg"
                      alt="Table Reservation and Waitlist App Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Table Reservation and Waitlist App
                      </a>
                      <p>
                        Viralon's table reservation and waitlist app allows
                        customers to book tables in advance and join digital
                        waitlists remotely. For restaurants, this minimizes
                        customer wait times and optimizes table utilization.
                        Additionally, the app can send notifications to
                        customers when their table is ready, enhancing the
                        overall dining experience.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img16.jpg"
                      alt="Augmented Reality (AR) Menu Integration Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Augmented Reality (AR) Menu Integration
                      </a>
                      <p>
                        In the era of digital innovation, the way customers
                        interact with menus and dining establishments is
                        undergoing a remarkable transformation. Viralon Digital
                        Services introduces Augmented Reality (AR) Menu
                        Integration—an innovative solution that revolutionizes
                        how diners explore and engage with menus, elevating
                        their dining experiences to new heights.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 5 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img17.jpg"
                      alt="Digital Menu Management System Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Digital Menu Management System
                      </a>
                      <p>
                        Our digital menu management system enables real-time
                        updates of menus across various channels, including
                        in-store displays and online platforms. Restaurants can
                        easily modify menu items, prices, and descriptions,
                        ensuring consistency and accuracy. This software is
                        particularly useful for adapting to seasonal changes,
                        introducing new dishes, or reflecting price adjustments.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 6 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img18.jpg"
                      alt="Online Catering and Event Management Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Online Catering and Event Management Software
                      </a>
                      <p>
                        For catering businesses, Viralon offers online catering
                        and event management software. This solution facilitates
                        seamless event planning, allowing customers to choose
                        catering packages, customize menus, and provide event
                        details. The software streamlines communication between
                        clients and caterers, ensuring a smooth and organized
                        catering experience.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 7 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/food/img19.jpg"
                      alt="Inventory and Supply Chain Management Software Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Inventory and Supply Chain Management Software
                      </a>
                      <p>
                        This software aids food businesses in tracking inventory
                        levels, monitoring ingredient usage, and optimizing
                        supply chain operations. It helps prevent stockouts and
                        reduces waste by providing insights into ingredient
                        consumption patterns. This efficiency translates to cost
                        savings and improved resource management.
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

export default FoodSlider;
