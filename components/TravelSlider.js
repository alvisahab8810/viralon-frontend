import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const TravelSlide = ({ sliderShow,
  setSliderShow }) => {
  return (
    <div>
      {sliderShow === "trends" && <div className="tab-pane active show" id="1a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40-important text-white">Marketing Trends</h1>
                <p className="text-white">
                  The Travel Industry is undergoing a profound transformation,
                  driven by technology and changing traveler behaviors. Here are
                  some of the pivotal marketing trends:
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
                      src="/images/industries/travel/img1.jpg"
                      alt="Personalized Experiences Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Personalized Experiences
                      </a>
                      <p>
                        Travelers seek personalized journeys, from tailored
                        itineraries to recommendations based on their
                        preferences and past interactions.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/travel/img2.jpg"
                      alt="Sustainable Travel Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Sustainable Travel
                      </a>
                      <p>
                        Ethical and sustainable travel practices are on the
                        rise, with travelers prioritizing eco-friendly options
                        and socially responsible initiatives.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/travel/img3.jpg"
                      alt="Virtual Experiences Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Virtual Experiences
                      </a>
                      <p>
                        Virtual reality and augmented reality enable travelers
                        to preview destinations, accommodations, and activities
                        before making reservations.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/travel/img4.jpg"
                      alt="Direct Booking Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Direct Booking
                      </a>
                      <p>
                        Travelers increasingly prefer to book directly with
                        travel providers, seeking transparency and greater
                        control over their arrangements.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div> }
      {/* Marketing Offerings - Travel Industry */}
      {sliderShow === "offer" && <div className="tab-pane" id="2a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h3 className="font-size-40 text-white">
                  Travel Industry Marketing 
                </h3>
                <p className="text-white">
                  Viralon Digital Services is a trailblazer in reshaping
                  marketing strategies within the Travel Industry. Our expertise
                  empowers businesses to navigate these trends seamlessly.
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
                      src="/images/industries/travel/img3.jpg"
                      alt="Personalized Journey Planning Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Personalized Journey Planning
                      </a>
                      <p>
                        We develop AI-driven solutions that create bespoke
                        travel experiences, catering to each traveler’s
                        interests and preferences.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/travel/img6.jpg"
                      alt="Sustainable Branding Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Sustainable Branding
                      </a>
                      <p>
                        Viralon collaborates with travel businesses to
                        communicate their commitment to sustainability,
                        attracting environmentally conscious travelers.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/travel/img7.jpg"
                      alt="Virtual Reality Tours Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Virtual Reality Tours
                      </a>
                      <p>
                        Our immersive virtual reality experiences transport
                        potential travelers to destinations, fostering
                        excitement and engagement before their journey even
                        begins.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/travel/img8.jpg"
                      alt="Direct Booking Solutions Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Direct Booking Solutions
                      </a>
                      <p>
                        Viralon creates user-friendly interfaces for direct
                        bookings, enhancing customer trust and boosting
                        conversions.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

      {/* Innovative Technology - Travel Industry */}
      {sliderShow === "tectTrend" &&<div className="tab-pane" id="3a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">
                  Innovative Technology
                </h1>
                <p className="text-white">
                  The Travel Industry is embracing transformative technologies
                  that redefine how journeys are planned and experienced.
                  Explore some of the remarkable innovations and technology
                  solutions.
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
                      src="/images/industries/travel/img9.jpg"
                      alt="Augmented Reality Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Augmented Reality Travel Guides
                      </a>
                      <p>
                        AR travel guides provide real-time information about
                        landmarks, historical sites, and points of interest,
                        enhancing on-site exploration.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/travel/img10.jpg"
                      alt="Chatbots for Instant Support Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Chatbots for Instant Support
                      </a>
                      <p>
                        AI-powered chatbots offer instant assistance, addressing
                        traveller’s queries and concerns throughout their
                        journey.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/travel/img11.jpg"
                      alt="Mobile Apps for Itinerary Management Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Mobile Apps for Itinerary Management
                      </a>
                      <p>
                        Travel itinerary apps offer seamless organization,
                        ensuring travelers have all their reservations, maps,
                        and documents in one place.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>}

      {/* Tech Offerings - Travel Industry */}
     {sliderShow === "techOffer" &&<div className="tab-pane" id="4a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">Tech Offerings</h1>
                <p className="text-white">
                  Viralon's cutting-edge technology solutions are tailored to
                  the unique needs of the Travel Industry.
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
                      src="/images/industries/travel/img12.jpg"
                      alt="Travel Booking Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Travel Booking and Management Software
                      </a>
                      <p>
                        Develop a comprehensive platform that allows travelers
                        to search, compare, and book flights, accommodations,
                        and activities. The software can also provide itinerary
                        management, alerts, and reminders, ensuring a seamless
                        travel experience.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/travel/img13.jpg"
                      alt="AR Travel Guides Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        AR Travel Guides
                      </a>
                      <p>
                        We create immersive AR travel guides that enrich
                        travelers' experiences with real-time information and
                        interactive exploration.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/travel/img14.jpg"
                      alt="AI Chatbot Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        AI Chatbot Integration
                      </a>
                      <p>
                        Viralon's AI chatbots provide travelers with instant
                        assistance, answering questions, providing
                        recommendations, and addressing concerns.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/travel/img15.jpg"
                      alt="Travel Itinerary Apps Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Travel Itinerary Apps
                      </a>
                      <p>
                        Our customizable itinerary apps help travelers manage
                        their journeys with ease, from booking confirmations to
                        local recommendations.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 5 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/travel/img16.jpg"
                      alt="Tour Planning and Scheduling Software Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Tour Planning and Scheduling Software
                      </a>
                      <p>
                        Develop software that allows travel companies to
                        efficiently plan, schedule, and manage tours,
                        excursions, and activities, optimizing resource
                        allocation and customer experience.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 6 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/travel/img17.jpg"
                      alt="Travel Analytics and Insights Platforms Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Travel Analytics and Insights Platforms
                      </a>
                      <p>
                        Create analytics platforms that provide insights into
                        customer behavior, booking patterns, and market trends,
                        helping travel companies make data-driven decisions.
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

export default TravelSlide;
