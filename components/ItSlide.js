import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const ItSlide = ({ sliderShow,
  setSliderShow }) => {
  return (
    <div>
      
     {sliderShow === "trends" &&<div className="tab-pane active show" id="1a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h2 className="font-size-40-important text-white">Technology Trends</h2>
                <p className="text-white">
                  The IT industry is at the forefront of innovation, with evolving trends shaping the landscape. Here are some of the key technology trends:
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
                      src="/images/industries/it/img1.jpg"
                      alt="AI Integration Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        AI Integration
                      </a>
                      <p>
                        Artificial Intelligence is increasingly integrated into IT processes, enhancing automation, decision-making, and overall efficiency.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/it/img2.jpg"
                      alt="Edge Computing Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Edge Computing
                      </a>
                      <p>
                        Edge computing is gaining prominence, enabling faster processing and real-time data analytics at the edge of the network.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/it/img3.jpg"
                      alt="Cybersecurity Innovations Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Cybersecurity Innovations
                      </a>
                      <p>
                        With the increasing threat landscape, continuous advancements in cybersecurity technologies are crucial to protect sensitive information.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/it/img4.jpg"
                      alt="Blockchain Applications Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Blockchain Applications
                      </a>
                      <p>
                        Blockchain is revolutionizing various industries, providing secure and transparent solutions for transactions and data management.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
       </div>}

        {/* Section for Contribution in IT */}
       {sliderShow === "offer" &&<div className="tab-pane" id="2a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h3 className="font-size-40 text-white">Contribution in IT</h3>
                <p className="text-white">
                  Viralon Digital Services is a leader in redefining marketing strategies within the IT industry. Our expertise empowers businesses to navigate these trends with innovation.
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              {/* Swiper for Contribution in IT */}
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
                      src="/images/industries/it/img5.jpg"
                      alt="Thought Leadership Content Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Thought Leadership Content
                      </a>
                      <p>
                        We develop thought-provoking content that positions IT businesses as authoritative voices, nurturing trust and engagement among their target audiences.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/it/img6.jpg"
                      alt="B2B Personalization Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        B2B Personalization Strategies
                      </a>
                      <p>
                        Viralon crafts personalized B2B marketing approaches that resonate with each client's unique challenges, fostering more meaningful connections.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/it/img7.jpg"
                      alt="Influencer Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Influencer Collaboration
                      </a>
                      <p>
                        We help IT businesses identify and collaborate with influential voices to amplify their message and enhance their industry presence.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/it/img8.jpg"
                      alt="Video Content Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Video Content Creation
                      </a>
                      <p>
                        Our video content production captures complex IT concepts and solutions, making them easily digestible and engaging for diverse audiences.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
       </div>}

       {/* Section for Innovative Technology */}
      {sliderShow === "tectTrend" &&<div className="tab-pane" id="3a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">Innovative Technology</h1>
                <p className="text-white">
                  The IT industry is at the forefront of technological advancements that redefine the digital landscape. Explore some of the cutting-edge innovations and tech solutions.
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              {/* Swiper for Innovative Technology */}
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
                      src="/images/industries/it/img9.jpg"
                      alt="Artificial Intelligence (AI) and Machine Learning (ML) Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Artificial Intelligence (AI) and Machine Learning (ML)
                      </a>
                      <p>
                        AI and ML are driving automation, predictive analytics, and enhanced data analysis, transforming how businesses operate.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/it/img10.jpg"
                      alt="Cloud Computing and SaaS Solutions Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Cloud Computing and SaaS Solutions
                      </a>
                      <p>
                        Cloud technologies and Software as a Service (SaaS) models revolutionize IT infrastructure, scalability, and collaboration.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/it/img11.jpg"
                      alt="Cybersecurity Innovations Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Cybersecurity Innovations
                      </a>
                      <p>
                        New approaches to cybersecurity, such as AI-driven threat detection and blockchain-based security, safeguard digital assets.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/it/img12.jpg"
                      alt="Edge Computing Image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Edge Computing
                      </a>
                      <p>
                        Edge computing empowers real-time data processing at the source, enabling faster decision-making and minimizing latency.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
       </div>}

       {/* Section for Tech Offerings */}
      {sliderShow === "techOffer" &&<div className="tab-pane" id="4a">
        <div className="container1">
          <div className="row banking-bx">
            <div className="col-md-6 tab-listbx1">
              <div className="z-index">
                <h1 className="font-size-40 text-white">Tech Offerings</h1>
                <p className="text-white">
                  Viralon's tech solutions cater to the unique needs of the IT industry, harnessing the power of innovation to drive success.
                </p>
              </div>
            </div>
            <div className="col-md-6 tab-listbx">
              {/* Swiper for Tech Offerings */}
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
                      src="/images/industries/it/img13.jpg"
                      alt="Custom Software Development image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Custom Software Development
                      </a>
                      <p>
                        Offer tailored software solutions that address specific needs of IT companies, such as project management, task tracking, and resource allocation.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/it/img14.jpg"
                      alt="IT Service Management (ITSM) Software image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        IT Service Management (ITSM) Software
                      </a>
                      <p>
                        Develop ITSM platforms to streamline and automate IT service processes, incident management, problem resolution, and change management.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 3 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/it/img16.jpg"
                      alt="Collaboration and Communication Tools image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Collaboration and Communication Tools
                      </a>
                      <p>
                        Create collaborative platforms and communication tools that facilitate efficient teamwork, remote collaboration, and real-time information sharing.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 4 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/it/img17.jpg"
                      alt="Project Management Software image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Project Management Software
                      </a>
                      <p>
                        Develop comprehensive project management tools that enable IT companies to plan, track, and manage projects, tasks, timelines, and resources.
                      </p>
                    </div>
                  </li>
                </SwiperSlide>
                {/* Slide 5 */}
                <SwiperSlide>
                  <li className="rel-industry">
                    <img
                      src="/images/industries/it/img18.jpg"
                      alt="Code Review and Version Control Systems image"
                    />
                    <div className="industry-overlay">
                      <a
                        href="#"
                        
                      >
                        Code Review and Version Control Systems
                      </a>
                      <p>
                        Design software solutions that enhance code quality through automated code review, version control, and collaborative coding environments.
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

export default ItSlide;
