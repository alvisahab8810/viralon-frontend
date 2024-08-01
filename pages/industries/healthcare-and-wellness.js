import React, { useState } from 'react'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SocialShare from "../../components/SocialShare";
import HealthSlide from '../../components/HealthSlide';
import Link from 'next/link';
import CustomHead from '../../components/CustomHead';

const HealthcareAndWellness = () => {
  const [sliderShow, setSliderShow] = useState ("trends")

  return (
    <>

<CustomHead title="Viralon | Experienced Team in Healthcare & Wellness 
Industry"
   keywords="Viralon, Digital Marketing Agency, Healthcare & Wellness Industry" 
   description=" In the Healthcare & Wellness Industry, Viralon stands as a beacon of innovation, reshaping marketing strategies & enhancing patient well-being." /> 

  <section id="banking-finance">
    <Header/>
   <SocialShare/>
    {/*-------------- Menu Section Codes End From Here -------------*/}
    {/*-------------- Hero Section Codes Start From Here -------------*/}
    <section
      className="section hero-section-2"
      style={{ background: "#ff5e28" }}
    >
      <img
        src="/images/industries/health-wellness/banner.png"
        className="h-label"
      />
      <div className="hero-img1">
        <div className="hero-content1">
          <h1 className=" pt-0 text-dark font-size-28">
            Transforming Healthcare and Wellness with Innovative{" "}
            <span className="text-gold"> Digital Solutions</span>
          </h1>
          <p>
            In the ever-evolving landscape of Healthcare and Wellness, Viralon
            Digital Services takes center stage as a catalyst for change. We
            understand the dynamic nature of this industry and are dedicated to
            providing innovative solutions that enhance patient care, streamline
            operations, and promote overall well-being.
          </p>
        </div>
        <div className="stick-img1">
          <img src="/images/industries/health-wellness/banner1.png" />
        </div>
      </div>
      <div className="overlayer" />
      <div className="container">
        {/*  <h1 class="page-heading"><span class="material-icons-round icon">groups</span>Banking And Finance</h1> */}
        {/*  <nav class="d-flex justify-content-end">
    <ol class="breadcrumb breadcrumb-style-1">
      <li class="breadcrumb-item"><a href="index.html">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">About</li>
    </ol>
  </nav> */}
      </div>
    </section>
    {/*-------------- Hero Section Codes End From Here -------------*/}
    <section>
      <div className="container1">
        {/*    <div class="row flex-wrap-reverse align-items-center pt-4 pb-4">
    <div class="col-md-5">
      <img src="./images/our-work/it.jpg"   class="mb-md-0 mb-4 w-400" alt="">
    </div>
    <d iv class="col-md-7 para-size">
      <h2 class="digial-heading "><span class="text-gold">Our Brand
      Raids</span> </h2>
   
      <p>
        Where traditional meets tech, and
          businesses thrive on the pulse of progress. At Viralon, we're not just pioneers, we're
          navigators of the digital universe. Join us on a transformative journey as we decode the
          essence of "Digital Transformation" and why it's the ultimate catalyst for success in today's
          business landscape.
     </p>

    
    </div>
  </div> */}
      </div>
    </section>
    <section className="container1 ">
      <div id="exTab1">
        <div className="tab-head">
          <div>
            <ul className="nav nav-pills">
                    <li>
                      <a data-toggle="tab" className="active show" onClick={(e) => {
                        e?.preventDefault()
                        setSliderShow("trends")
                      }}>
                        Marketing Trends
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" className="" onClick={(e) => {
                        e?.preventDefault()
                        setSliderShow("offer")
                      }}>
                        Marketing Offerings
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" onClick={(e) => {
                        e?.preventDefault()
                        setSliderShow("tectTrend")
                      }}>
                        Tech Trends
                      </a>
                    </li>
                    <li>
                      <a data-toggle="tab" onClick={(e) => {
                        e?.preventDefault()
                        setSliderShow("techOffer")
                      }}>
                        Tech Offerings
                      </a>
                    </li>
            </ul>
          </div>
        </div>
        <div className="tab-content clearfix">
          <HealthSlide  sliderShow={sliderShow}
              setSliderShow={setSliderShow}/>
       
          <div className="tab-pane" id="3a">
            <div className="container1 ">
              <div className=" row banking-bx">
                <div className="col-md-6 tab-listbx1">
                  <div className="z-index">
                    <h1 className="font-size-40 text-white">
                      Innovative Technology
                    </h1>
                    <p className="text-white">
                      {" "}
                      The Healthcare and Wellness sector is embracing
                      groundbreaking technologies that are revolutionizing
                      patient care and well-being. Some noteworthy innovations
                      and products include
                    </p>
                  </div>
                </div>
                <div className="col-md-6 tab-listbx">
                  <ul className="t-list">
                    <div className="swiper mySwiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
                      <div
                        className="swiper-wrapper"
                        id="swiper-wrapper-944cbe7ee4444c0a"
                        aria-live="off"
                        style={{ transitionDuration: "300ms" }}
                      >
                        <div
                          className="swiper-slide"
                          role="group"
                          aria-label="1 / 4"
                          style={{
                            width: 635,
                            opacity: 1,
                            transform: "translate3d(0px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img10.jpg"
                              alt="Health Wearables image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                Health Wearables
                              </a>
                              <p>
                                Wearable devices and fitness trackers empower
                                individuals to monitor their health and
                                well-being in real-time, promoting proactive
                                self-care.
                              </p>
                            </div>
                          </li>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-prev"
                          role="group"
                          aria-label="2 / 4"
                          style={{
                            width: 635,
                            opacity: 1,
                            transform: "translate3d(-635px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img11.jpg"
                              alt="Telemedicine  image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                Telemedicine Platforms
                              </a>
                              <p>
                                Advanced telemedicine platforms enable remote
                                diagnosis, consultations, and treatment,
                                ensuring accessible healthcare services.
                              </p>
                            </div>
                          </li>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-visible swiper-slide-active"
                          role="group"
                          aria-label="3 / 4"
                          style={{
                            width: 635,
                            opacity: 1,
                            transform: "translate3d(-1270px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img12.jpg"
                              alt="IoT-Enabled Healthcare  image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                IoT-Enabled Healthcare
                              </a>
                              <p>
                                Internet of Things (IoT) devices and sensors
                                enable real-time monitoring of patients' health
                                conditions, allowing for early intervention
                              </p>
                            </div>
                          </li>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-visible swiper-slide-active"
                          role="group"
                          aria-label="3 / 4"
                          style={{
                            width: 635,
                            opacity: 1,
                            transform: "translate3d(-1270px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img13.jpg"
                              alt="Health Apps and AI image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
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
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane" id="4a">
            <div className="container1 ">
              <div className=" row banking-bx">
                <div className="col-md-6 tab-listbx1">
                  <div className="z-index">
                    <h1 className="font-size-40 text-white">Tech Offerings</h1>
                    <p className="text-white">
                      {" "}
                      Viralon's innovative tech solutions are tailored to the
                      unique needs of the Healthcare and Wellness industry
                    </p>
                  </div>
                </div>
                <div className="col-md-6 tab-listbx">
                  <ul className="t-list">
                    <div className="swiper mySwiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
                      <div
                        className="swiper-wrapper"
                        id="swiper-wrapper-944cbe7ee4444c0a"
                        aria-live="off"
                        style={{ transitionDuration: "300ms" }}
                      >
                        <div
                          className="swiper-slide"
                          role="group"
                          aria-label="1 / 4"
                          style={{
                            width: 635,
                            opacity: 1,
                            transform: "translate3d(0px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img14.jpg"
                              alt="Custom Healthcare Apps  image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                Custom Healthcare Apps
                              </a>
                              <p>
                                Tailored mobile and web applications that cater
                                to specific healthcare needs, such as
                                appointment scheduling, patient records, and
                                telehealth services.
                              </p>
                            </div>
                          </li>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-prev"
                          role="group"
                          aria-label="2 / 4"
                          style={{
                            width: 635,
                            opacity: 1,
                            transform: "translate3d(-635px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img15.jpg"
                              alt="Telemedicine Platforms  image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                Telemedicine Platforms
                              </a>
                              <p>
                                Robust telemedicine solutions that enable secure
                                and convenient virtual consultations, connecting
                                healthcare providers with patients remotely.
                              </p>
                            </div>
                          </li>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          role="group"
                          aria-label="4 / 4"
                          style={{
                            width: 635,
                            opacity: 0,
                            transform: "translate3d(-1905px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img16.jpg"
                              alt="Electronic  image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                Electronic Health Records (EHR) Systems
                              </a>
                              <p>
                                Comprehensive EHR systems that streamline
                                patient data management, ensuring easy access to
                                medical records and enhancing patient care.
                              </p>
                            </div>
                          </li>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          role="group"
                          aria-label="4 / 4"
                          style={{
                            width: 635,
                            opacity: 0,
                            transform: "translate3d(-1905px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img17.jpg"
                              alt="Health and Wellness  image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                Health and Wellness Tracking Apps
                              </a>
                              <p>
                                Mobile applications that empower users to
                                monitor and manage their health and wellness,
                                including fitness tracking, diet planning, and
                                symptom tracking.
                              </p>
                            </div>
                          </li>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          role="group"
                          aria-label="4 / 4"
                          style={{
                            width: 635,
                            opacity: 0,
                            transform: "translate3d(-1905px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img18.jpg"
                              alt="Patient Engagement  image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                Patient Engagement Platforms
                              </a>
                              <p>
                                Solutions to enhance patient engagement through
                                personalized messaging, appointment reminders,
                                and educational content delivery.
                              </p>
                            </div>
                          </li>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          role="group"
                          aria-label="4 / 4"
                          style={{
                            width: 635,
                            opacity: 0,
                            transform: "translate3d(-1905px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img19.jpg"
                              alt="Healthcare Chatbots  image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                Healthcare Chatbots
                              </a>
                              <p>
                                AI-powered chatbots for instant patient support,
                                answering common queries, and guiding patients
                                through their healthcare journey.
                              </p>
                            </div>
                          </li>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          role="group"
                          aria-label="4 / 4"
                          style={{
                            width: 635,
                            opacity: 0,
                            transform: "translate3d(-1905px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img20.jpg"
                              alt="Medication Management image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                Medication Management Apps
                              </a>
                              <p>
                                Apps for medication tracking, reminders, and
                                dosage management, improving medication
                                adherence.
                              </p>
                            </div>
                          </li>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          role="group"
                          aria-label="4 / 4"
                          style={{
                            width: 635,
                            opacity: 0,
                            transform: "translate3d(-1905px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img21.jpg"
                              alt="Revenue Cycle  image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                Revenue Cycle Management (RCM) Software
                              </a>
                              <p>
                                RCM solutions for healthcare providers to
                                streamline billing and claims processing,
                                reducing administrative burdens.
                              </p>
                            </div>
                          </li>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          role="group"
                          aria-label="4 / 4"
                          style={{
                            width: 635,
                            opacity: 0,
                            transform: "translate3d(-1905px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img22.jpg"
                              alt="Healthcare Compliance Software  image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                Healthcare Compliance Software
                              </a>
                              <p>
                                Tools to ensure compliance with industry
                                regulations and standards, such as ICD-10 coding
                                and Meaningful Use requirements.
                              </p>
                            </div>
                          </li>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          role="group"
                          aria-label="4 / 4"
                          style={{
                            width: 635,
                            opacity: 0,
                            transform: "translate3d(-1905px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/mages/industries/health-wellness/img23.jpg"
                              alt="Healthcare Compliance Software  image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                Patient Portal Development
                              </a>
                              <p>
                                Secure and user-friendly patient portals for
                                accessing medical records, test results, and
                                communication with healthcare providers.
                              </p>
                            </div>
                          </li>
                        </div>
                        <div
                          className="swiper-slide swiper-slide-next"
                          role="group"
                          aria-label="4 / 4"
                          style={{
                            width: 635,
                            opacity: 0,
                            transform: "translate3d(-1905px, 0px, 0px)",
                            transitionDuration: "0ms"
                          }}
                        >
                          <li className="rel-industry">
                            <img
                              src="/images/industries/health-wellness/img24.jpg"
                              alt="Healthcare Compliance Software  image"
                            />
                            <div className="industry-overlay">
                              <a
                                href="#"
                                className="aos-init"
                                data-aos="fade-down"
                                data-aos-duration={2000}
                              >
                                Remote Monitoring Solutions
                              </a>
                              <p>
                                Remote patient monitoring systems for chronic
                                disease management and early intervention.
                              </p>
                            </div>
                          </li>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="para mt-5 margin-top-15 padding-bottom-15">
          {" "}
          In the dynamic realm of Healthcare and Wellness, Viralon Digital
          Services stands as a beacon of innovation, reshaping marketing
          strategies and enhancing patient well-being. From patient-centric
          experiences to cutting-edge technological solutions, Viralon is your
          partner in embracing the digital evolution of healthcare. Join hands
          with Viralon today and embark on a journey of transformation that
          enriches lives and drives success.
        </p>
      </div>
    </section>
    <div className="specil-bx">
      <div className="container">
        <div className="get-freebx">
          <div>
            <h2>
              {" "}
              <span style={{ color: "black" }}>Get a FREE 2</span> hrs
              consultation by our experts
            </h2>
          </div>
          <div>
            {/* <a href="#" class="book-btn">Let's Talk</a> */}
            <div className="mdtop studies-btn book-btn">
                    <Link
                      href="/contact-us">
                     <div className="btn btn-primary trans animated pulse abt-butn-bot"
                      id="customButton"
                    >
                      Talk to Expert
                      <img
                        src="/images/icons/next.png"
                        className="arrow next-arow arrow1 animate-right-to-left"
                      />
                    </div>
                    </Link>
                  </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shapebx">
      <img src="/images/shape.png" />
    </div>
    {/*-------------- Subscribe Section Codes Start From Here -------------*/}
    <div className="subscribe-container" id="subscribe">
      <div className="container1">
        <div className="sub-bx2">
          <div>
            <h1 className="sub-heading">Subscribe Now</h1>
            <p className="sub-para">
              We won't overburden you with annoying emails.
            </p>
            <div className="subbx">
              <div className="emailbox">
                <i className="ri-mail-line" />
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <div className="mdtop studies-btn book-btn">
                  <a
                    href="#"
                    className="btn btn-primary trans animated pulse abt-butn-bot"
                  >
                    Subscribe
                    <img
                      src="/images/icons/next.png"
                      className="arrow  next-arow arrow1  animate-right-to-left"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="subs-img ">
            <img
              src="/images/subscribe1.png"
              alt="Subscribe Image"
              className="gif"
            />
          </div>
        </div>
      </div>
    </div>
    {/*-------------- Subscribe Section Codes End From Here -------------*/}
    {/*-------------- Footer Section Codes Start From Here -------------*/}
    <Footer/>
    {/*-------------- Footer Section Codes End From Here -------------*/}
    {/* Aos Animation */}
    {/* Swiper JS */}
    {/* Initialize Swiper */}
    {/*  */}
    {/* Sub-Mega Menus Script */}
    {/* For Remove Before Icon */}
  </section>
</>

  )
}

export default HealthcareAndWellness