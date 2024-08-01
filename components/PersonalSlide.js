import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const PersonalSlide = ({ sliderShow,
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
                  The Personal Care Industry is undergoing a paradigm shift,
                  driven by technology and evolving consumer preferences. Here are
                  key marketing trends shaping the industry
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
                      src="/images/industries/personal-care/img1.jpg"
                      alt="Clean and Sustainable Beauty Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Clean and Sustainable Beauty
                      </a>
                      <p>
                        Consumers are gravitating towards clean, eco-friendly, and
                        sustainable beauty products that align with their values and
                        minimize environmental impact.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/personal-care/img2.jpg"
                      alt="Personalization Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Personalization and Customization
                      </a>
                      <p>
                        Personalized skincare and beauty solutions, tailored to
                        individual needs and preferences, are gaining traction,
                        driven by data-driven insights.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/personal-care/img3.jpg"
                      alt="Digital Influencer Partnerships Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Digital Influencer Partnerships
                      </a>
                      <p>
                        Collaborations with social media influencers and beauty
                        bloggers are forming a significant part of brand marketing
                        strategies, effectively reaching and engaging audiences.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/personal-care/img4.jpg"
                      alt="E-Commerce Dominance Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        E-Commerce Dominance
                      </a>
                      <p>
                        Online shopping for personal care products is on the rise,
                        demanding user-friendly online platforms, convenient payment
                        options, and seamless shopping experiences.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

       {/* Personal Care Marketing */}
       {sliderShow === "offer" &&<div className="tab-pane" id="2a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h3 className="font-size-40 text-white"> Personal Care Marketing</h3>
                <p className="text-white">
                  Viralon Digital Services is a trailblazer in revolutionizing
                  marketing approaches within the Personal Care Industry. Our
                  expertise empowers businesses to navigate these trends effectively
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              <ul className="t-list">
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
                        src="/images/industries/personal-care/img5.jpg"
                        alt="Sustainability Image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Sustainability and Ethical Branding
                        </a>
                        <p>
                          We collaborate with personal care brands to communicate their
                          commitment to sustainability, resonating with eco-conscious
                          consumers.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 2 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/personal-care/img6.jpg"
                        alt="Personalized Beauty Solutions Image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Personalized Beauty Solutions
                        </a>
                        <p>
                          Viralon harnesses data analytics to create personalized skincare
                          recommendations and product bundles that cater to individual
                          skin types and concerns.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 3 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/personal-care/img7.jpg"
                        alt="Influencer Campaign Image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Influencer Campaign Strategies
                        </a>
                        <p>
                          We develop influencer marketing campaigns that connect brands
                          with relevant influencers, driving engagement and expanding the
                          consumer base.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 4 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/personal-care/img8.jpg"
                        alt="E-Commerce Solutions Image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          E-Commerce Solutions
                        </a>
                        <p>
                          Viralon creates user-friendly e-commerce platforms that
                          facilitate secure and convenient online shopping experiences for
                          personal care products.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                </Swiper>
              </ul>
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
                  Innovations in technology are reshaping personal care routines and
                  product experiences. Explore some noteworthy technology
                  advancements and solutions
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              <ul className="t-list">
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
                        src="/images/industries/personal-care/img9.jpg"
                        alt="Augmented Reality Beauty Try-On Apps Image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Augmented Reality Beauty Try-On Apps
                        </a>
                        <p>
                          AR apps allow consumers to virtually try on makeup products,
                          skincare treatments, and hair colors before making purchase
                          decisions.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 2 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/personal-care/img10.jpg"
                        alt="Personalized Skincare Apps Image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Personalized Skincare Apps
                        </a>
                        <p>
                          AI-powered skincare apps analyze users' skin conditions and
                          needs to offer customized skincare routines, product
                          recommendations, and progress tracking.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 3 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/personal-care/img11.jpg"
                        alt="Virtual Beauty Consultations Image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Virtual Beauty Consultations
                        </a>
                        <p>
                          Virtual consultations with beauty experts offer personalized
                          advice and product recommendations based on real-time video
                          analysis.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 4 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/personal-care/img12.jpg"
                        alt="AI-Driven Product Formulation Image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          AI-Driven Product Formulation
                        </a>
                        <p>
                          AI is being used to create innovative and effective formulations
                          for personal care products, optimizing ingredient combinations
                          for specific skin types.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                </Swiper>
              </ul>
            </div>
          </div>
        </div>
      </div>}

       {/* Personalized Beauty and Skincare Apps */}
       {sliderShow === "techOffer" &&<div className="tab-pane" id="4a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">
                  Personalized Beauty and Skincare Apps
                </h1>
                <p className="text-white">
                  Develop personalized beauty and skincare apps that offer users
                  customized routines based on their skin type, concerns, and
                  preferences. These apps can provide product recommendations,
                  step-by-step routines, and progress tracking, enhancing the
                  user's personal care journey.
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              <ul className="t-list">
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
                        src="/images/industries/personal-care/img13.jpg"
                        alt="Virtual Makeup Try-On Apps Image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Virtual Makeup Try-On Apps
                        </a>
                        <p>
                          Create virtual makeup try-on apps that use augmented reality
                          to allow users to experiment with different makeup products
                          and looks in real-time. This interactive experience can help
                          users find the perfect products before making a purchase.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 2 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/personal-care/img14.jpg"
                        alt="Appointment Scheduling Image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Appointment Scheduling and Salon Management Software
                        </a>
                        <p>
                          Offer salon and spa management software that enables users to
                          book appointments online, view available time slots, and even
                          choose specific service providers. The software can also assist
                          salons in managing staff schedules, customer data, and inventory.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 3 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/personal-care/img15.jpg"
                        alt="Skincare Ingredient Analysis Apps Image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Skincare Ingredient Analysis Apps
                        </a>
                        <p>
                          Develop apps that analyze skincare product ingredients,
                          providing users with information about the benefits and
                          potential drawbacks of each component. This empowers consumers
                          to make informed choices about the products they use.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 4 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/personal-care/img16.jpg"
                        alt="AR Hairstyle and Hair Color Try-On Apps Image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          AR Hairstyle and Hair Color Try-On Apps
                        </a>
                        <p>
                          Develop augmented reality apps that allow users to virtually try
                          on different hairstyles and hair colors. Users can use their
                          smartphone's camera to see how different looks would suit them
                          before making a salon appointment.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                </Swiper>
              </ul>
            </div>
          </div>
        </div>
      </div>}
   
   
    </div>
  );
};

export default PersonalSlide;
