import React, { useState } from 'react'

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SocialShare from "../../components/SocialShare";
import PersonalSlide from '../../components/PersonalSlide';
import Link from 'next/link';
import CustomHead from '../../components/CustomHead';
const PersonalCareIndustries = () => {

  const [sliderShow, setSliderShow] = useState ("trends")

  return (
    <>

  <CustomHead title=" Viralon | Grow Your Personal Care Brand With Viralon’s 
Expertise"
   keywords="Viralon, Digital Marketing Agency, Personal Care Industry" 
   description="Viralon is the best digital marketing agency for personal care industry.In the Personal Care Industry, innovation is the cornerstone of success. " /> 
  
  <section id="banking-finance">
    <Header/>
    <SocialShare/>
   {/*-------------- Hero Section Codes Start From Here -------------*/}
    <section
      className="section hero-section-2"
      style={{ background: "#ff5e28" }}
    >
      <img
        src="/images/industries/personal-care/banner.png"
        className="p-label"
      />
      <div className="hero-img1">
        <div className="hero-content1">
          <h1 className=" pt-0 text-dark font-size-28">
            Elevating Personal Care Industry through Innovative
            <span className="text-gold"> Digital Solutions</span>
          </h1>
          <p>
            In the ever-evolving landscape of the Personal Care Industry,
            innovation is the cornerstone of success. At Viralon Digital
            Services, we comprehend the dynamic nature of the sector and are
            committed to delivering groundbreaking solutions that fuel growth,
            efficiency, and consumer satisfaction.
          </p>
        </div>
        <div className="stick-img1">
          <img src="/images/industries/personal-care/banner1.png" />
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
         <PersonalSlide sliderShow={sliderShow}
              setSliderShow={setSliderShow}/>
         
        </div>
        <p className="para mt-5 margin-top-15 padding-bottom-15">
          In the ever-changing world of Personal Care, Viralon Digital Services
          is like a pioneer, leading the way with fresh and imaginative ideas.
          We're all about helping companies market their products in new and
          exciting ways to achieve success. Whether it's making brands more
          environmentally friendly or using the latest technology, we're here to
          help shape the future of personal care. Join us in using innovation to
          make a positive impact in the beauty and well-being industry. Start
          your journey with Viralon today and discover how technology can change
          the way we take care of ourselves.
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

export default PersonalCareIndustries