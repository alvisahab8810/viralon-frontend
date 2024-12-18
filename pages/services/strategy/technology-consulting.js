import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import SocialShare from "../../../components/SocialShare";
import TechnologySlider from "../../../components/TechnologySlider";
import Link from "next/link";
import CustomHead from "../../../components/CustomHead";
const technologyConsulting = () => {
  return (
    <>
      <CustomHead
        title="Viralon | Technology Consulting for Business Efficiency "
        keywords="Viralon, Digital Marketing Agency, Technology Consulting"
        description="Expert technology consulting for strategic growth. 
        Transform your business with tailored solutions for success. Let 
        Viralon guide you!"
      />
      <Header />
      <SocialShare />
      <section id="technology-consulting">
        {/*-------------- Menu Section Codes Start From Here -------------*/}

        {/*-------------- Menu Section Codes End From Here -------------*/}
        {/*-------------- Hero Section Codes Start From Here -------------*/}
        <section className="digital-hero">
          <video
            autoPlay={true}
            loop
            muted=""
            playsInline=""
            defaultmuted=""
            preload="auto"
          >
            <source
              src="/images/hero-banners/technology-consulting.mp4"
              type="video/mp4"
              id="bg-video"
            />
          </video>
        </section>
        {/*-------------- Hero Section Codes End From Here -------------*/}
        {/* Harenessign Section Start From Here */}
        <section className=" pb-5 bottom-p">
          <div className="container1">
            <div className="row  bottom-p pt-5 padding-t max-width900 align-items-center">
              <p className="welcom-para ">
                Harenessing Innovation, Maximizing Impact At Viralon Digital
                Services, we understand that technology isn't just a tool - it's
                the diving force behind your business's growth and resilience.
                Our Technology Consulting services empower enterprises to
                navigate the ever-changing landscape of digital transformation
                with agility, precision, and innovation.
              </p>
            </div>
          </div>
        </section>
        {/* Harenessign Section End From Here */}
        <div className="our-specialization-container">
          <div className="specil-bx">
            <div className="container">
              <div className="get-freebx">
                <div>
                  <h2>
                    {" "}
                    <span style={{ color: "black" }}>Get a Free 2</span> 02 Hrs
                    Consultation By our Experts
                  </h2>
                </div>
                <div>
                  {/* <a href="#" class="book-btn">Let's Talk</a> */}
                  <div className="mdtop studies-btn book-btn">
                    <Link href="/contact-us">
                      <div className="btn btn-primary trans animated pulse abt-butn-bot">
                        Talk to Expert
                        <img
                          src="/images/icons/next.png"
                          className="arrow  next-arow arrow1  animate-right-to-left"
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
        </div>
        <TechnologySlider />
        {/* Why Choose Section End From Here */}
        {/* Steps Section Start From Here */}
        <section className="steps-container">
          <div className="container">
            <h3 className="font-size-40 font-weight-900 agile text-center text-dark">
              Our Agile Technology Consulting Methodology
            </h3>
            <div className="tech-consulting">
              <ul className="inforgrahic-block">
                <li className="top">
                  <span className="icon-img">
                    <img src="/images/technology-consulting/icons/icon1.png" />
                  </span>
                  <div>
                    <h4>Step 01: Discover</h4>
                    <p>
                      In this phase, we immerse ourselves in your business,
                      understanding your objectives, challenges, and technology
                      landscape.{" "}
                    </p>
                  </div>
                </li>
                <li className="bottom">
                  <span className="icon-img">
                    <img src="/images/technology-consulting/icons/icon2.png" />
                  </span>
                  <div>
                    <h4>Step 02: Define</h4>
                    <p>
                      Once we grasp your unique needs, we define a clear roadmap
                      for your technology transformation.
                    </p>
                  </div>
                </li>
                <li className="top">
                  <span className="icon-img">
                    <img
                      src="/images/technology-consulting/icons/icon3.png"
                      alt="Technology Consulting"
                      title="Technology Consulting"
                    />
                  </span>
                  <div>
                    <h4>Step 03: Develop</h4>
                    <p>
                      Agility shines in this phase as we start building your
                      solutions incrementally.
                    </p>
                  </div>
                </li>
                <li className="bottom">
                  <span className="icon-img">
                    <img src="/images/technology-consulting/icons/icon4.png" />
                  </span>
                  <div>
                    <h4>Step 04: Deploy</h4>
                    <p>
                      With your solutions taking shape, we seamlessly integrate
                      them into your existing systems.
                    </p>
                  </div>
                </li>
                <li className="top">
                  <span className="icon-img">
                    <img src="/images/technology-consulting/icons/icon5.png" />
                  </span>
                  <div>
                    <h4>Step 05: Deliver</h4>
                    <p>
                      The moment of truth arrives as your upgraded technology is
                      put to work.
                    </p>
                  </div>
                </li>
                <li className="bottom remove">
                  <span className="icon-img">
                    <img src="/images/technology-consulting/icons/icon6.png" />
                  </span>
                  <div>
                    <h4>Step 06: Iterate</h4>
                    <p>
                      Agility doesn't stop at deployment. We continuously gather
                      feedback, analyze data, and refine your solutions.{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        {/* Steps Section End From Here */}
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
        <Footer />
        {/*-------------- Footer Section Codes End From Here -------------*/}
        {/* Swiper JS */}
        {/* Swiper JS */}
        {/* Aos Animation */}
        {/* Initialize Swiper */}
        {/* Sub-Mega Menus Script */}
        {/* For Remove Before Icon */}
      </section>
    </>
  );
};

export default technologyConsulting;
