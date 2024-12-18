import React, { useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SocialShare from "../../components/SocialShare";
import FoodSlider from "../../components/FoodSlider";
import Link from "next/link";
import CustomHead from "../../components/CustomHead";
const FoodIndustries = () => {
  const [sliderShow, setSliderShow] = useState("trends");

  return (
    <>
      <CustomHead
        title=" Viralon | Boost Your Food Industry Presence with Viralon's 
         Solutions"
        keywords="Viralon, Digital Marketing Agency, Food Industry"
        description="Explore the vibrant world of the food industry on 
      Viralon. From farm to fork, discover delicious trends, sustainable 
      practices, and culinary delights!"
      />
      <section id="banking-finance">
        <Header />
        <SocialShare />

        {/*-------------- Menu Section Codes End From Here -------------*/}
        {/*-------------- Hero Section Codes Start From Here -------------*/}
        <section
          className="section hero-section-2"
          style={{ background: "#ff5e28" }}
        >
          <img src="/images/industries/food/banner.png" className="f-label" />
          <div className="hero-img1">
            <div className="hero-content1">
              <h1 className=" pt-0 text-dark font-size-28">
                Transforming the Food Industry width Innovative{" "}
                <span className="text-gold"> Digital Solutions</span>
              </h1>
              <p>
                In the dynamic realm of the Food Industry, innovation is the
                recipe for success. At Viralon Digital Services, we recognize
                the evolving needs of the industry and are dedicated to
                delivering revolutionary solutions that drive growth,
                efficiency, and customer satisfaction
              </p>
            </div>
            <div className="stick-img1">
              <img src="/images/industries/food/banner.png" />
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
        <section className="container1 ">
          <div id="exTab1">
            <div className="tab-head">
              <div>
                <ul className="nav nav-pills">
                  <li>
                    <a
                      data-toggle="tab"
                      className="active show"
                      onClick={(e) => {
                        e?.preventDefault();
                        setSliderShow("trends");
                      }}
                    >
                      Marketing Trends
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="tab"
                      className=""
                      onClick={(e) => {
                        e?.preventDefault();
                        setSliderShow("offer");
                      }}
                    >
                      Marketing Offerings
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="tab"
                      onClick={(e) => {
                        e?.preventDefault();
                        setSliderShow("tectTrend");
                      }}
                    >
                      Tech Trends
                    </a>
                  </li>
                  <li>
                    <a
                      data-toggle="tab"
                      onClick={(e) => {
                        e?.preventDefault();
                        setSliderShow("techOffer");
                      }}
                    >
                      Tech Offerings
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content clearfix">
              <FoodSlider
                sliderShow={sliderShow}
                setSliderShow={setSliderShow}
              />
            </div>
            <p className="para mt-5 margin-top-15 padding-bottom-15">
              {" "}
              Amid the swiftly changing landscape of the Food Industry, Viralon
              Digital Services emerges as a pioneering force, skillfully
              wielding innovation to reshape marketing approaches and pave the
              path to triumph. From branding that emphasizes nutrition to
              revolutionary technological solutions, Viralon becomes your
              steadfast ally in shaping the destiny of the culinary realm. Take
              the decisive step to partner with Viralon today, and immerse
              yourself in the delectable essence of innovation that defines the
              future of the Food Industry
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
                  <Link href="/contact-us">
                    <div
                      className="btn btn-primary trans animated pulse abt-butn-bot"
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
        <Footer />
        {/*-------------- Footer Section Codes End From Here -------------*/}
        {/* Aos Animation */}
        {/* Swiper JS */}
        {/* Initialize Swiper */}
        {/*  */}
        {/* Sub-Mega Menus Script */}
        {/* For Remove Before Icon */}
      </section>
    </>
  );
};

export default FoodIndustries;
