import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const EducationSlider =  ({ sliderShow,
  setSliderShow }) => {
  return (
    <div>
     
      {/* Marketing Trends in Education */}
      {sliderShow === "trends" &&<div className="tab-pane active show" id="1a">
        <div className="container1 ">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h2 className="font-size-40-important text-white">
                  Marketing Trends in Education
                </h2>
                <p className="text-white">
                  The Education industry is undergoing a significant
                  transformation driven by technological advancements and
                  evolving student expectations. Here are some of the prominent
                  trends.
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              {/* Swiper */}
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
                        src="/images/industries/education/img1.jpg"
                        alt="Personalized Learning image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Personalized Learning
                        </a>
                        <p>
                          Students are seeking personalized learning experiences
                          that cater to their individual needs and learning
                          styles.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 2 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/education/img2.jpg"
                        alt="Online Learning and EdTech image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Online Learning and EdTech
                        </a>
                        <p>
                          The rise of online education and educational technology
                          solutions is revolutionizing how students access
                          educational content and interact with instructors.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 3 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/education/img3.jpg"
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
                          improve teaching methodologies, enhance student
                          outcomes, and optimize educational processes.
                        </p>
                      </div>
                    </li>
                  </SwiperSlide>
                  {/* Slide 4 */}
                  <SwiperSlide>
                    <li className="rel-industry">
                      <img
                        src="/images/industries/education/img4.jpg"
                        alt="Innovative Pedagogies image"
                      />
                      <div className="industry-overlay">
                        <a
                          href="#"
                          
                        >
                          Innovative Pedagogies
                        </a>
                        <p>
                          A growing emphasis on innovative teaching methods and
                          tools is reshaping how education and learning services
                          are delivered.
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

      {/* Marketing Offerings */}
      {sliderShow === "offer" &&<div className="tab-pane" id="2a">
      <div className="container1 ">
        <div className="row banking-bx">
          <div className="col-md-6 tab-listbx1">
            <div className="z-index">
              <h3 className="font-size-40 text-white">
                Viralon's Role in Elevating Education
              </h3>
              <p className="text-white">
                Viralon Digital Services is a frontrunner in revolutionizing the
                educational landscape. Our expertise empowers educational
                institutions to navigate these trends seamlessly.
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
                      src="/images/industries/education/img5.jpg"
                      alt="Personalized Learning Path image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        Personalized Learning Path
                      </a>
                      <p>
                        We create customized learning strategies that prioritize
                        personalized interactions, nurturing student engagement
                        and achievement.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/education/img6.jpg"
                      alt="EdTech Solutions image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        EdTech Solutions
                      </a>
                      <p>
                        Viralon develops cutting-edge educational technology
                        platforms that offer interactive and engaging learning
                        experiences, bridging the gap between educators and
                        students.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/education/img7.jpg"
                      alt="Data-Driven Education image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        Data-Driven Education
                      </a>
                      <p>
                        Our data-driven approach optimizes teaching and learning
                        by providing actionable insights into student performance
                        and resource allocation.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/education/img8.jpg"
                      alt="Innovative Teaching Materials image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        Innovative Teaching Materials
                      </a>
                      <p>
                        Viralon designs and develops innovative teaching
                        materials that promote active learning and critical
                        thinking, engaging students in their educational journey.
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
      <div className="container1 ">
        <div className="row banking-bx">
          <div className="col-md-6 tab-listbx1">
            <div className="z-index">
              <h1 className="font-size-40 text-white">Innovative Technology</h1>
              <p className="text-white">
                The Education sector is embracing groundbreaking technologies
                that are revolutionizing the learning and teaching processes.
                Some noteworthy innovations and products include
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
                      src="/images/industries/education/img9.jpg"
                      alt="E-Learning Platforms image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        E-Learning Platforms
                      </a>
                      <p>
                        Comprehensive e-learning platforms empower educators to
                        create and deliver online courses, fostering
                        accessibility and flexibility in education.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/education/img10.jpg"
                      alt="Virtual Classrooms image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        Virtual Classrooms
                      </a>
                      <p>
                        Advanced virtual classroom solutions enable real-time
                        interactions between instructors and students, ensuring
                        engaging and interactive learning experiences.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/education/img11.jpg"
                      alt="AI-Driven Educational Tools image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        AI-Driven Educational Tools
                      </a>
                      <p>
                        AI-powered educational tools offer personalized learning
                        recommendations, progress tracking, and adaptive
                        assessments.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/education/img12.jpg"
                      alt="Interactive Learning Apps image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        Interactive Learning Apps
                      </a>
                      <p>
                        Mobile applications and gamified tools make learning
                        enjoyable, motivating students to actively participate
                        in their education.
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
      <div className="container1 ">
        <div className="row banking-bx">
          <div className="col-md-6 tab-listbx1">
            <div className="z-index">
              <h1 className="font-size-40 text-white">
                Viralon's Tech Offerings for Education
              </h1>
              <p className="text-white">
                Viralon's innovative tech solutions are tailored to the unique
                needs of the Education industry
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
                      src="/images/industries/education/img13.jpg"
                      alt="Custom Learning Management Systems (LMS) image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        Custom Learning Management Systems (LMS)
                      </a>
                      <p>
                        Tailored LMS platforms that cater to specific educational
                        needs, such as content delivery, student management, and
                        assessment.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/education/img14.jpg"
                      alt="Virtual Classroom Solutions image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        Virtual Classroom Solutions
                      </a>
                      <p>
                        Robust virtual classroom systems that enable educators to
                        conduct interactive online classes, collaborate with
                        students, and monitor progress.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/education/img15.jpg"
                      alt="Educational Content Creation Tools image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        Educational Content Creation Tools
                      </a>
                      <p>
                        Tools for educators to create engaging and interactive
                        educational content, including videos, quizzes, and
                        simulations.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/education/img16.jpg"
                      alt="Student Engagement Platforms image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        Student Engagement Platforms
                      </a>
                      <p>
                        Solutions to enhance student engagement through
                        personalized feedback, discussion forums, and peer
                        collaboration.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 5 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/education/img17.jpg"
                      alt="AI-Enhanced Tutoring Apps image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        AI-Enhanced Tutoring Apps
                      </a>
                      <p>
                        AI-driven tutoring applications that provide personalized
                        support to students, offering explanations and guidance on
                        difficult concepts.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 6 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/education/img18.jpg"
                      alt="Education Analytics and Reporting image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        Education Analytics and Reporting
                      </a>
                      <p>
                        Analytics platforms that help educators and institutions
                        track student performance and identify areas for
                        improvement.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 7 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/education/img19.jpg"
                      alt="Parent-Teacher Communication Apps image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                      
                      >
                        Parent-Teacher Communication Apps
                      </a>
                      <p>
                        Apps for seamless communication between parents, teachers,
                        and students, fostering a collaborative learning
                        environment.
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

export default EducationSlider;

