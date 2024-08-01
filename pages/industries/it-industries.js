import React, { useState } from 'react'
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SocialShare from "../../components/SocialShare";
import ItSlide from '../../components/ItSlide';
import Link from 'next/link';
import CustomHead from '../../components/CustomHead';

const ItIndustries = () => {

  const [sliderShow, setSliderShow] = useState ("trends")

  return (
    <>
   <CustomHead title="Viralon | IT Industry | Grow Your IT Company with Viralon"
   keywords="Viralon, Digital Marketing Agency, IT Industry" 
   description="In the ever-evolving IT industry landscape, At Viralon, we are dedicated to delivering innovative solutions that propel growth & efficiency." /> 

  <section id="banking-finance">
    <Header/>
    <SocialShare/>
   
    
    {/*-------------- Hero Section Codes Start From Here -------------*/}
    <section
      className="section hero-section-2 it-section"
      style={{ background: "#ff5e28" }}
    >
      <img src="/images/industries/it/banner1.png" className="b-label" />
      <div className="hero-img2">
        <div className="hero-content1">
          <h1 className=" pt-0 text-dark font-size-28">
            Pioneering Digital Transformation in the{" "}
            <span className="text-gold">IT Industry</span>
          </h1>
          <p>
            In the ever-evolving landscape of the IT industry, innovation is the
            driving force that shapes businesses and technologies. At Viralon
            Digital Services, we recognize the dynamic nature of the sector and
            are dedicated to delivering transformative solutions that propel
            growth, efficiency, and technological advancement.
          </p>
        </div>
        <div className="stick-img1">
          <img src="/images/industries/it/banner.png" />
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
          <ItSlide    sliderShow={sliderShow}
              setSliderShow={setSliderShow}/>
        </div>
        <p className="para mt-5 margin-top-15 padding-bottom-15">
          {" "}
          In the swiftly changing world of E-Commerce, Viralon Digital Services
          shines as a tech-savvy trail guide, using fresh ideas to reshape how
          we sell and succeed. From making shopping personal to creating amazing
          tech solutions, Viralon is here to be your companion in shaping the
          way we shop online. Come join us in this journey of innovation,
          starting today, and open the door to endless possibilities in the
          world of E-Commerce
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

export default ItIndustries