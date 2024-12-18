import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SocialShare from "../../components/SocialShare";
import Subscriber from "../../components/Subscriber";
import BankingSlide2 from "../../components/BankingSlide2";
import Link from "next/link";
import CustomHead from "../../components/CustomHead";
const BankingAndFinance = () => {
  const [sliderShow, setSliderShow] = useState("trends");

  return (
    <>
      <CustomHead
        title="Viralon | Your Partner in Banking & Finance Solutions"
        keywords="Viralon, Digital Marketing Agency, Banking & Finance Industry"
        description="In the rapidly evolving Banking and Finance sector, Viralon stands as a trailblazer, leveraging innovation to reshape marketing strategies and drive growth"
      />

      <section id="banking-finance">
        <Header />
        <SocialShare />
        {/*-------------- Menu Section Codes Start From Here -------------*/}

        <div className="business-enquiry open-btn">
          <a href="contact-us.html">
            <span>Get a Quote</span>
          </a>
        </div>

        {/*-------------- Menu Section Codes End From Here -------------*/}
        {/*-------------- Hero Section Codes Start From Here -------------*/}
        <section
          className="section hero-section-2"
          style={{ background: "#ff5e28" }}
        >
          <img src="/images/industries/banking/img1.png" className="b-label" />
          <div className="hero-img">
            <div className="hero-content">
              <h1 className=" pt-0 text-dark font-size-28">
                Revolutionizing Banking &amp; Finance With{" "}
                <span className="text-gold"> Digital Solutions</span>
              </h1>
              <p>
                In the dynamic landscape of the Banking and Finance sector,
                staying ahead of the curve is crucial. At Viralon Digital
                Services, we understand the ever-evolving nature of the industry
                and are committed to delivering cutting-edge solutions that
                drive growth, efficiency, and customer satisfaction.
              </p>
            </div>
            <div className="stick-img">
              <img src="/images/industries/banking/img1.png" />
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

            {/* <BankingSlide/> */}

            <BankingSlide2
              sliderShow={sliderShow}
              setSliderShow={setSliderShow}
            />

            <p className="para mt-5 margin-top-15 padding-bottom-15">
              {" "}
              In the rapidly evolving Banking and Finance sector, Viralon
              Digital Services stands as a trailblazer, leveraging innovation to
              reshape marketing strategies and drive growth. From personalized
              experiences to advanced technological solutions, Viralon is the
              partner you can rely on to navigate the digital future of finance.
              Embrace innovation with Viralon today and revolutionize your
              institution&apos;s success.
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
                  We won&apos;t overburden you with annoying emails.
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
      </section>
    </>
  );
};

export default BankingAndFinance;
