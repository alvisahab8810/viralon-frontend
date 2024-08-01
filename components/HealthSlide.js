import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const HealthSlide = ({ sliderShow,
  setSliderShow }) => {
  return (
    <div>
      {/* Section for Marketing Trends in Health and Wellness */}
      {sliderShow === "trends" &&<div className="tab-pane active show" id="1a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h2 className="font-size-40-important text-white">Marketing Trends</h2>
                <p className="text-white">
                  The Healthcare and Wellness industry is undergoing a paradigm
                  shift driven by technological advancements and changing
                  patient expectations. Here are some of the prominent marketing
                  trends.
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              <ul className="t-list">
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
                        src="/images/industries/health-wellness/img1.jpg"
                        alt="Patient-Centric image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Patient-Centric Approach
                        </a>
                        <p>
                          Patients are seeking personalized, patient-centric
                          experiences that prioritize their unique needs and
                          preferences.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 2 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/health-wellness/img2.jpg"
                        alt="Telehealth image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Telehealth and Virtual Care
                        </a>
                        <p>
                          The rise of telehealth and virtual care solutions is
                          revolutionizing how patients access medical services
                          and consultations remotely.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 3 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/health-wellness/img4.jpg"
                        alt="Data-Driven Insights image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Data-Driven Insights
                        </a>
                        <p>
                          Utilizing data analytics and AI-driven insights to
                          make informed decisions, enhance patient outcomes, and
                          optimize healthcare processes.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 4 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/health-wellness/img5.jpg"
                        alt="Wellness and Prevention image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Wellness and Prevention
                        </a>
                        <p>
                          A growing emphasis on proactive health management and
                          preventive measures is reshaping how healthcare and
                          wellness services are marketed.
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
      {/* Swiper for Marketing Trends in Health and Wellness */}

      {/* Healthcare & Wellness Marketing */}
      {sliderShow === "offer" &&<div className="tab-pane" id="2a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h3 className="font-size-40 text-white">
                  Healthcare & Wellness Marketing
                </h3>
                <p className="text-white">
                  Viralon Digital Services is a frontrunner in revolutionizing
                  the marketing landscape of Healthcare and Wellness. Our
                  expertise empowers institutions to navigate these trends
                  seamlessly.
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
                        src="/images/industries/health-wellness/img6.jpg"
                        alt="Patient Experience image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Patient Experience Enhancement
                        </a>
                        <p>
                          We craft patient-centric strategies that prioritize
                          personalized interactions, nurturing patient loyalty
                          and trust.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 2 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/health-wellness/img7.jpg"
                        alt="Telehealth Solutions image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Telehealth Solutions
                        </a>
                        <p>
                          Viralon develops robust telehealth platforms that
                          offer secure and convenient virtual consultations,
                          bridging the gap between patients and healthcare
                          providers.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 3 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/health-wellness/img8.jpg"
                        alt="Advanced Analytics image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Advanced Analytics
                        </a>
                        <p>
                          for Better Outcomes: Our data-driven approach
                          optimizes patient care by providing actionable
                          insights into treatment outcomes and resource
                          allocation.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 4 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/health-wellness/img9.jpg"
                        alt="Wellness Campaigns image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Wellness Campaigns
                        </a>
                        <p>
                          Viralon creates compelling wellness campaigns that
                          promote preventive care, engaging patients in their
                          health journey.
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
                <h1 className="font-size-40 text-white">
                  Innovative Technology
                </h1>
                <p className="text-white">
                  The Healthcare and Wellness sector is embracing groundbreaking
                  technologies that are revolutionizing patient care and
                  well-being. Some noteworthy innovations and products include:
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
                        src="/images/industries/health-wellness/img10.jpg"
                        alt="Health Wearables image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Health Wearables
                        </a>
                        <p>
                          Wearable devices and fitness trackers empower
                          individuals to monitor their health and well-being in
                          real-time, promoting proactive self-care.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 2 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/health-wellness/img11.jpg"
                        alt="Telemedicine image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Telemedicine Platforms
                        </a>
                        <p>
                          Advanced telemedicine platforms enable remote
                          diagnosis, consultations, and treatment, ensuring
                          accessible healthcare services.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 3 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/health-wellness/img12.jpg"
                        alt="IoT-Enabled Healthcare image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          IoT-Enabled Healthcare
                        </a>
                        <p>
                          Internet of Things (IoT) devices and sensors enable
                          real-time monitoring of patients' health conditions,
                          allowing for early intervention.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 4 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/health-wellness/img13.jpg"
                        alt="Health Apps and AI image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Health Apps and AI
                        </a>
                        <p>
                          Mobile applications and AI-driven tools offer
                          personalized health recommendations, medication
                          reminders, and symptom tracking.
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

      {/* Tech Offering */}
      {sliderShow === "techOffer" &&<div className="tab-pane" id="4a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">Tech Offerings</h1>
                <p className="text-white">
                  Viralon's innovative tech solutions are tailored to the unique
                  needs of the Healthcare and Wellness industry.
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
                        src="/images/industries/health-wellness/img14.jpg"
                        alt="Custom Healthcare Apps image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Custom Healthcare Apps
                        </a>
                        <p>
                          Tailored mobile and web applications that cater to
                          specific healthcare needs, such as appointment
                          scheduling, patient records, and telehealth services.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 2 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/health-wellness/img15.jpg"
                        alt="Telemedicine Platforms image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Telemedicine Platforms
                        </a>
                        <p>
                          Robust telemedicine solutions that enable secure and
                          convenient virtual consultations, connecting
                          healthcare providers with patients remotely.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 3 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/health-wellness/img16.jpg"
                        alt="Electronic Health Records (EHR) Systems image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Electronic Health Records (EHR) Systems
                        </a>
                        <p>
                          Comprehensive EHR systems that streamline patient data
                          management, ensuring easy access to medical records
                          and enhancing patient care.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 4 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/health-wellness/img17.jpg"
                        alt="Health and Wellness Tracking Apps image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Health and Wellness Tracking Apps
                        </a>
                        <p>
                          Mobile applications that empower users to monitor and
                          manage their health and wellness, including fitness
                          tracking, diet planning, and symptom tracking.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 5 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/health-wellness/img18.jpg"
                        alt="Patient Engagement Platforms image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Patient Engagement Platforms
                        </a>
                        <p>
                          Solutions to enhance patient engagement through
                          personalized messaging, appointment reminders, and
                          educational content delivery.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Continue adding more slides as needed */}
                </Swiper>
              </ul>
            </div>
          </div>
        </div>
      </div>}
   
    </div>
  );
};

export default HealthSlide;
