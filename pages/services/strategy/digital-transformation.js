import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import SocialShare from "../../../components/SocialShare";
import DigitalTransformationSlider from "../../../components/DigitalTransformationSlider";
import Link from "next/link";
import CustomHead from "../../../components/CustomHead";

const digitalTransformation = () => {
  return (
    <>
    <CustomHead title="Viralon | Empowering Businesses Through Digital Transformation"
     keywords="Viralon, Digital Marketing Agency, Digital Transformation" 
     description="At Viralon, we revolutionize your business with 
     tailored digital transformation solutions, streamlining processes 
     and driving growth." />
      <section id="technology-consulting">
        <Header />
        <SocialShare />

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
              src="/images/hero-banners/digital-transformation.mp4"
              type="video/mp4"
            />
          </video>
        </section>
        {/*-------------- Hero Section Codes End From Here -------------*/}
        {/* Harenessign Section Start From Here */}
        <section>
          <div className="container1">
            <div className="bottom-p  max-width900 align-items-center padding-top-0 pt-5">
              <p className="welcom-para">
                Welcome to the forefront of innovation and change where
                traditional meets tech, and businesses thrive on the pulse of
                progress. At Viralon, we're not just pioneers, we're navigators
                of the digital universe. Join us on a transformative journey as
                we decode the essence of "Digital Transformation" and why it's
                the ultimate catalyst for success in today's business landscape.
              </p>
            </div>
          </div>
        </section>
        {/* Harenessign Section End From Here */}
        {/* What is digital Transform section start here */}
        <section className="digital-transfom">
          <div className="container1">
            <div className="row flex-wrap-reverse max-width900 bottom-p padding-t align-items-center pt-5 pb-5 ">
              <div className="col-md-6 padding-0 pr-5 para-size">
                <h1 className="font-size-40 font-weight-900 text-dark heading_style_1  mb-3">
                  What is Digital{" "}
                  <span className="text-gold">Transformation</span>?
                </h1>
                <h2 className="sub-title text-dark">
                  {" "}
                  <span className="text-gold">"</span> Turning Ideas into Icons,
                  Analog into Apps <span className="text-gold">"</span>{" "}
                </h2>
                <p>
                  Digital Transformation isn't just a buzzword; it's a cosmic
                  shift that alters the DNA of business operations, customer
                  experiences, and industry landscapes. It's all about adopting
                  technology-driven strategies that rejuvenate your business
                  model, processes, and customer interactions, propelling you
                  into a future where innovation is your compass.
                </p>
              </div>
              <div className="col-md-6 r-img1">
                <img
                  src="/images/digital-transformation/img2.png"
                  className="border digital-shape1 border-10 border-white shadow-sm mb-md-0 mb-4 w-100"
                  alt=""
                />
              </div>
            </div>
            <div className="row  bottom-p padding-t max-width900 align-items-center pt-5 pb-5">
              <div className="col-md-5 r-img1 padding-top-15">
                <img
                  src="/images/digital-transformation/img3.png"
                  className="change-shape mb-md-0 mb-4 w-100"
                  alt="Embrace image"
                />
                {/*  <img src="/images/digital-transformation/img4.jpg" class="border digital-shape1 border-10 border-white shadow-sm mb-md-0 mb-4 w-100" alt=""> */}
              </div>
              <div className="col-md-7 para-size pl-5 padding-left-0 ">
                <h2 className="font-size-40-important font-weight-900 text-dark heading_style_1  mb-3">
                  Embrace the Now: Why Digital{" "}
                  <span className="text-gold">Transformation Matters</span>
                </h2>
                <h2 className="sub-title text-dark">
                  {" "}
                  <span className="text-gold">"</span> Adapt or Get Left Behind:
                  The Digital Darwinism <span className="text-gold">"</span>
                </h2>
                <p>
                  In a world where change is constant, Digital Transformation is
                  the ultimate survival strategy. It's not just about staying
                  relevant; it's about revolutionizing the way you operate. From
                  enhancing customer engagement to optimizing operations and
                  fostering agile decisionmaking, it's a journey that propels
                  your business beyond limitations.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* What is digital Transform section end here */}

        <DigitalTransformationSlider />
        {/* Why Choose Section End From Here */}
        {/* Size The Future Section Start From Here */}
        <div className="our-specialization-container mt-5">
          <div className="specil-bx">
            <div className="container">
              <div className="get-freebx">
                <div>
                  <h2>
                    {" "}
                    <span style={{ color: "black" }}>Get a Free</span> 02 Hrs
                    Consultation By our Experts
                  </h2>
                </div>
                <div>
                  {/* <a href="#" class="book-btn">Let's Talk</a> */}
                  <div className="mdtop studies-btn book-btn">
                    <Link
                      href="/contact-us">
                      <div className="btn btn-primary trans animated pulse abt-butn-bot"
                    >
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
        <section className="pt-5 pb-5 bottom-0 padding-t">
          <div className="container1">
            <div className="row flex-wrap-reverse align-items-center pt-4 pb-4 bottom-p padding-t">
              <div className="col-md-7 para-size">
                <h2 className="font-size-40 font-weight-900 text-dark heading_style_1  mb-3">
                  Seize the Future with Viralon{" "}
                  <span className="text-gold"> Digital Transformation </span>
                </h2>
                <p className="text-justify">
                  In an era where technology shapes destinies, Viralon Digital
                  Services stands as your partner in transformation. We don't
                  just facilitate change we fuel growth, innovation, and
                  customercentricity. Let us take you beyond the boundaries of
                  the conventionaland propel you into a future where
                  possibilities are infinite.
                </p>
                <ul className="cv-list">
                  <li>Choose Viralon</li>
                  <li>Unlock Your Potential</li>
                  <li>Transform Your Tomorrow</li>
                </ul>
              </div>
              <div className="col-md-5">
                <img
                  src="/images/digital-transformation/img3.jpg"
                  className="     mb-md-0 mb-4 w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* Size The Future Section End From Here */}
        <section
          className="pt-4 mt-5 pb-md-4 pb-50 position-relative margin-top bg-fixed"
          style={{ background: "black" }}
        >
          <div className="container py-5 d-flex justify-content-md-between justify-content-center position-relative flex-wrap">
            <div>
              <h2 className="font-size-40 digital-para text-center border-h2 font-weight-900 text-white heading_style_1  mb-3">
                Why Viralon for Your Digital Odyssey?
                <br />
                <span className="d-inline-block text-white font-weight-900 position-relative border-bottom-gradient font-size-32 mt-1 mb-3">
                  " Your Architects of Digital Destiny "
                </span>
              </h2>
              <p className="why-para">
                At Viralon, we're not just experts; we're digital Dreamweaver.
                With a trailblazing blend of expertise, experience, and
                innovation, we're your partners in the realm of Digital
                Transformation. We infuse your business DNA with the latest tech
                trends, guiding you towards a future that's seamless, agile, and
                perpetually relevant.
              </p>
            </div>
          </div>
        </section>
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
        {/* 
    
    */}
        {/*  */}
        {/* Sub-Mega Menus Script */}
        {/* For Remove Before Icon */}
      </section>
    </>
  );
};

export default digitalTransformation;
