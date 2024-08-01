import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const EcomSlider =  ({ sliderShow,
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
                  The E-Commerce industry is witnessing a digital revolution,
                  driven by changing consumer behaviors and technological
                  advancements. Here are some of the prominent marketing trends
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
                      src="/images/industries/e-commerce/img1.jpg"
                      alt="Personalization image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Personalization and Customer Experience
                      </a>
                      <p>
                        Consumers expect tailored shopping experiences, from
                        product recommendations to personalized offers, to
                        enhance engagement and satisfaction.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img2.jpg"
                      alt="Omnichannel Retailing image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Omnichannel Retailing
                      </a>
                      <p>
                        Seamlessly integrating online and offline sales channels
                        provides customers with consistent experiences, allowing
                        them to shop on their preferred platforms.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img3.jpg"
                      alt="Mobile Commerce image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Mobile Commerce
                      </a>
                      <p>
                        With the rise of smartphones, mobile shopping has become
                        paramount. E-Commerce businesses need to optimize their
                        websites and apps for mobile users.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img4.jpg"
                      alt="Sustainable and Ethical Shopping image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Sustainable and Ethical Shopping
                      </a>
                      <p>
                        Consumers are increasingly conscious of sustainability
                        and ethical practices. Brands that prioritize eco-friendly
                        and socially responsible initiatives gain a competitive
                        edge.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

       {/* Elevating E-Commerce Marketing */}
       {sliderShow === "offer" &&<div className="tab-pane" id="2a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h3 className="font-size-40 text-white">
                  Elevating E-Commerce Marketing
                </h3>
                <p className="text-white">
                  Viralon Digital Services is a trailblazer in reshaping
                  marketing strategies within the ECommerce industry. Our
                  expertise empowers businesses to navigate these trends
                  effectively
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
                      src="/images/industries/e-commerce/img5.jpg"
                      alt="Personalization Solutions image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Personalization Solutions
                      </a>
                      <p>
                        We develop advanced AI-driven personalization strategies
                        that enhance customer experiences and drive conversions by
                        delivering tailored recommendations and offers.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img6.jpg"
                      alt="Omnichannel Integration image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Omnichannel Integration
                      </a>
                      <p>
                        Viralon helps E-Commerce businesses seamlessly integrate
                        their online and offline channels, creating cohesive
                        shopping experiences for customers.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img7.jpg"
                      alt="Mobile Optimization image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Mobile Optimization
                      </a>
                      <p>
                        Our team optimizes websites and apps for mobile devices,
                        ensuring that users have a smooth and intuitive shopping
                        experience on their smartphones and tablets.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img8.jpg"
                      alt="Sustainable Branding image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Sustainable Branding
                      </a>
                      <p>
                        We collaborate with brands to communicate their commitment
                        to sustainability, resonating with environmentally conscious
                        consumers and building brand loyalty.
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
                <h1 className="font-size-40 text-white">Innovative Technology</h1>
                <p className="text-white">
                  The E-Commerce industry is embracing groundbreaking technologies
                  that are redefining how customers shop online. Here are some
                  notable innovations and technology solutions.
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
                      src="/images/industries/e-commerce/img9.jpg"
                      alt="Augmented Reality image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Augmented Reality (AR) Shopping
                      </a>
                      <p>
                        AR technology enables customers to visualize products in
                        their real-world environment before making a purchase
                        decision.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img10.jpg"
                      alt="Voice Commerce image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Voice Commerce
                      </a>
                      <p>
                        Voice assistants and smart speakers are revolutionizing
                        shopping by allowing customers to place orders using voice
                        commands.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img11.jpg"
                      alt="Chatbots image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Chatbots for Customer Support
                      </a>
                      <p>
                        AI-powered chatbots offer instant assistance, answering
                        customer queries and guiding them through the shopping
                        process.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img12.jpg"
                      alt="Personalized Recommendation image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Personalized Recommendation
                      </a>
                      <p>
                        Advanced algorithms analyze customer behavior to offer
                        personalized product recommendations, increasing
                        cross-selling and upselling opportunities.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

       {/* Tech Offerings */}
       {sliderShow === "techOffer" &&<div className="tab-pane" id="4a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">Tech Offerings</h1>
                <p className="text-white">
                  Viralon's innovative technology solutions are tailored to the
                  unique needs of the ECommerce industry
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
                      src="/images/industries/e-commerce/img13.jpg"
                      alt="E-Commerce Mobile App Development image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        E-Commerce Mobile App Development
                      </a>
                      <p>
                        Create customized mobile apps for e-commerce businesses,
                        providing a user-friendly platform for customers to browse
                        products, make purchases, and track orders on their
                        smartphones.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img14.jpg"
                      alt="Personalized Product Recommendations Engine image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Personalized Product Recommendations Engine
                      </a>
                      <p>
                        Develop AI-driven recommendation engines that analyze
                        customer behavior and preferences to suggest personalized
                        products, increasing cross-selling and upselling
                        opportunities.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img15.jpg"
                      alt="Omnichannel Integration image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Omnichannel Integration Platform
                      </a>
                      <p>
                        Offer a comprehensive platform that seamlessly integrates
                        online and offline sales channels, ensuring a consistent
                        shopping experience across various touchpoints.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img16.jpg"
                      alt="Augmented Reality (AR) Product Visualization image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Augmented Reality (AR) Product Visualization
                      </a>
                      <p>
                        Implement AR technology that enables customers to virtually
                        visualize products in their real-world environment before
                        making a purchase, enhancing their confidence in buying.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 5 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img17.jpg"
                      alt="Voice Commerce Integration image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Voice Commerce Integration
                      </a>
                      <p>
                        Develop voice commerce solutions that allow customers to
                        browse, select, and purchase products using voice commands
                        through smart speakers and voice assistants.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 6 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img18.jpg"
                      alt="AI-Powered Chatbots for Customer Support image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        AI-Powered Chatbots for Customer Support
                      </a>
                      <p>
                        Create chatbots that provide 24/7 customer support,
                        answering inquiries, assisting with product information, and
                        guiding customers through the buying process.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

       {/* Customer Support */}
       {sliderShow === "csupport" &&<div className="tab-pane" id="5a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">Customer Support</h1>
                <p className="text-white">
                  Create chatbots that provide 24/7 customer support, answering
                  inquiries, assisting with product information, and guiding
                  customers through the buying process.
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
                      src="/images/industries/e-commerce/img19.jpg"
                      alt="Mobile Wallet and Payment Integration image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Mobile Wallet and Payment Integration
                      </a>
                      <p>
                        Offer integration with popular mobile wallets and payment
                        gateways, providing secure and convenient payment options
                        for customers.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img20.jpg"
                      alt="Advanced Analytics and Reporting Dashboard image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Advanced Analytics and Reporting Dashboard
                      </a>
                      <p>
                        Provide an analytics platform that offers insights into
                        customer behavior, sales trends, and conversion rates,
                        aiding data-driven decision-making.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img21.jpg"
                      alt="Secure Checkout and Fraud Prevention System image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Secure Checkout and Fraud Prevention System
                      </a>
                      <p>
                        Implement robust checkout solutions with multiple security
                        layers, including anti-fraud measures, to ensure secure
                        transactions and protect customer data.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/e-commerce/img22.jpg"
                      alt="Product Lifecycle Management Software image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Product Lifecycle Management Software
                      </a>
                      <p>
                        Offer tools to manage product launches, updates, and
                        retirements efficiently, ensuring a smooth product lifecycle
                        management process.
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

export default EcomSlider;
