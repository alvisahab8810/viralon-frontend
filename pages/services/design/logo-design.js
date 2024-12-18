import React from "react";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import SocialShare from "../../../components/SocialShare";
import Subscriber from "../../../components/Subscriber";
import LogoSlider from "../../../components/LogoSlider";
import Link from "next/link";
import CustomHead from "../../../components/CustomHead";
import SpecialBox from "../../../components/SpecialBox";

const logoDesign = () => {
  return (
    <>
      <CustomHead
        title="Viralon | Stand Out with Our Creative Logo Design Services"
        keywords="Viralon, Digital Marketing Agency, Logo Design"
        description="Viralon is the best digital marketing agency for logo design.At Viralon, we understand that your logo is more than just a visual element."
      />
      <Header />
      <SocialShare />
      {/*-------------- Menu Section Codes Start From Here -------------*/}

      {/*-------------- Menu Section Codes End From Here -------------*/}
      {/*-------------- Hero Section Codes Start From Here -------------*/}
      <section
        className="section hero-section-2 sm-none"
        style={{
          backgroundImage: "url(/images/hero-banners/logo-design.jpg)",
          backgroundPosition: "center",
        }}
      ></section>
      <section
        className="section hero-section-2 desk-none"
        style={{
          backgroundImage: "url(/images/hero-banners/logo-design-sm.jpg)",
          backgroundPosition: "center",
        }}
      />
      {/*-------------- Hero Section Codes End From Here -------------*/}
      <div className="design-hero">
        <div className="container">
          <div className="de-hero1">
            <div className="de-hero-content">
              <h1>
                Crafting Brands,
                <br /> One Logo at a Time{" "}
              </h1>
              <p>
                At Viralon Digital Services, we understand that your logo is
                more than just a visual element; it's the cornerstone of your
                brand's identity. Our expert logo designers are passionate about
                creating unique and memorable logos that set your business apart
                from the competition.
              </p>
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
            <div className="hero-2">
              <img
                src="/images/design/ui-ux/logo.jpg"
                className="m-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Why Ui Ux  design matters section start from here */}
      <section className="why-ui-ux">
        <div className="container">
          <h2 className="text-dark main-heading text-center font-size-30">
            Why a Well-Designed Logo Matters
          </h2>
          <p className="text-dark text-center max-width100 mt-3">
            A logo is often the first impression a potential customer has of
            your brand. Here's why investing in professional logo design is
            crucial
          </p>
          <div className="row flex-wrap-reverse align-items-center mt-5 margin-top-15">
            <div className="col-md-5 shape-img-bx make-img">
              <img
                src="/images/design/ui-ux/why-logo.jpg"
                className="mb-md-0 why-img mb-4 "
                alt=""
              />
            </div>
            <div className="col-md-7 para-size">
              <div className="container mob-container">
                <div className="our-methodology our-methodology1">
                  <div>
                    <h3>Brand Recognition</h3>
                    <p>
                      A distinctive logo helps customers recognize and remember
                      your brand. It's the face of your business in a crowded
                      marketplace.
                    </p>
                  </div>
                  <div>
                    <h3>Trust and Credibility</h3>
                    <p>
                      {" "}
                      A well-crafted logo instills trust and confidence in your
                      products or services, making it more likely for customers
                      to choose your brand.
                    </p>
                  </div>
                  <div>
                    <h3>Differentiation</h3>
                    <p>
                      Your logo sets you apart from competitors. It communicates
                      your unique value proposition and brand personality.
                    </p>
                  </div>
                  <div>
                    <h3>Versatility</h3>
                    <p>
                      {" "}
                      A great logo is versatile and can be used across various
                      platforms, from business cards and websites to billboards
                      and social media profiles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Ui Ux  design matters section end from here */}
      {/* Our Way to UX/UI Design Start From Here */}
      {/* <section class="our-way"> 
  <div class="container"> 

    <h2 class="text-dark main-heading text-center font-size-30">Our Approach to Logo Design
    </h2>
     <p class="text-dark text-center max-width100 mt-3">At Viralon, we believe that a   successful  logo is the result of a collaborative process that 
aligns with your brand's vision. Here's how we approach logo design
    </p>

     

    <div class="our-way-bx">
<div> 
  <div class="de-icons">
    <img src="./images/design/ui-ux/l-icon1.png">
  </div>  
   <h3>Discovery</h3>
   <p> We start by getting to know your brand, its values, target audience, and 
     competitors. This insight helps us create a logo that resonates with your audience.</p>
 </div>

  <div> 
    <div class="de-icons">
     <img src="./images/design/ui-ux/icon2.png">
    </div> 
   <h3>Creative Concept</h3>
   <p>Our designers brainstorm and develop several logo concepts, exploring 
    different styles, colors, and typography options.</p>
 </div>


  <div> 
    <div class="de-icons">
     <img src="./images/design/ui-ux/icon3.png">
    </div> 
   <h3>Sketching and Prototyping</h3>
   <p>We turn our concepts into sketches and digital prototypes, 
    refining the most promising ideas into potential logo designs.</p>
 </div>


  <div> 
    <div class="de-icons">
      <img src="./images/design/ui-ux/l-icon4.png">
    </div> 
   <h3>Feedback and Iteration</h3>
   <p>We value your input. We work closely with you to gather 
   feedback and make iterative improvements to the chosen design.</p>
 </div>

  <div> 
    <div class="de-icons">
      <img src="./images/design/ui-ux/l-icon5.png">
    </div> 
   <h3>Finalization</h3>
   <p>Once you're satisfied with the design, we finalize it, ensuring it meets all 
      technical requirements and is ready for use in various media.</p>
 </div>

    </div>  
  </div>  
</section> */}
      <LogoSlider />
      {/* Our Way to UX/UI Design End From Here */}
      {/* Our UX/UI Design Services Start From Here */}
      <section className="ui-ux-services logo-services">
        <div className="container">
          <h2 className="text-dark main-heading text-center font-size-30">
            Our Logo Design Services
          </h2>
          <div className="logo-bx-container">
            <div className="main-logo-bx">
              <div className="first-logo-bx">
                <div className="first-active">
                  <div className="de-icons1 ">
                    <img src="/images/design/ui-ux/l1.png" />
                  </div>
                  <h3>Custom Logo Design</h3>
                  <p>
                    We create tailor-made logos that capture the essence of your
                    brand, helping you stand out in your industry.
                  </p>
                </div>
                <div>
                  <div className="de-icons1">
                    <img src="/images/design/ui-ux/l3.png" />
                  </div>
                  <h3>Logo Redesign</h3>
                  <p>
                    If your current logo needs a refresh or modernization, we
                    can breathe new life into it while preserving its core
                    identity.
                  </p>
                </div>
              </div>
            </div>
            <div className="main-logo-bx">
              <div className="servicesbx-5">
                <div className="de-icons1">
                  <img src="/images/design/ui-ux/l5.png" />
                </div>
                <h3>Iconography</h3>
                <p>
                  {" "}
                  In addition to full logos, we can design icons and symbols for
                  use on social media, mobile apps, and other digital platforms.
                </p>
              </div>
            </div>
            <div className="ui-conent">
              <div className="first-logo-bx">
                <div>
                  <div className="de-icons1">
                    <img src="/images/design/ui-ux/l2.png" />
                  </div>
                  <h3>Brand Identity Packages</h3>
                  <p>
                    Need more than just a logo? We offer comprehensive brand
                    identity packages that include logo, color schemes,
                    typography, and brand guidelines.
                  </p>
                </div>
                <div className="first-active">
                  <div className="de-icons1">
                    <img src="/images/design/ui-ux/l4.png" />
                  </div>
                  <h3>Vectorization and File Formats</h3>
                  <p>
                    We provide high-quality vector files and various formats,
                    ensuring your logo looks sharp on any platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="logo-footer">
        <div className="container">
          <h2 className="text-dark main-heading text-center font-size-30">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-dark text-center max-width100 mt-3">
            Your logo is a vital part of your brand's identity, and it deserves
            the attention of experienced designers who understand its
            importance. Partner with Viralon Digital Services, and let's create
            a logo that tells your brand's unique story and leaves a lasting
            impression
          </p>
          <p className="text-dark text-center max-width100 mt-5">
            Contact us today to discuss your logo design project and discover
            how we can help you establish a strong and memorable brand presence.
          </p>
        </div>
      </section>
      {/*-------------- Trending Section Codes Start From Here -------------*/}
      {/* <div className="trending-container mb-5">
          <SpecialBox />

          <h1 className="heading1 pt-5 ">
            Tren<span className="text-gold">ding</span>
          </h1>
          <div className="container1">
            <div className="row mt-4">
              <div className="col-xl-4 col-md-6 mb-30 ">
                <div className="blog-style-one">
                  <div className="thumb">
                    <Link href="/blog-details">
                      <img src="../../images/blog/blog1.jpg" alt="Thumb" />
                    </Link>
                  </div>
                  <div className="info">
                    <div className="blog-meta">
                      <ul>
                        <li>
                          <Link href="#">30 Aug 2024</Link>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <Link href="/blog-details">
                        Discovery incommode earnestly commanded if.
                      </Link>
                    </h4>
                    <Link href="/blog-details" className="btn-simple">
                      <i className="ri-arrow-right-s-line"></i> Read more
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 mb-30 ">
                <div className="blog-style-one">
                  <div className="thumb">
                    <Link href="/blog-details">
                      <img src="../../images/blog/blog2.jpg" alt="Thumb" />
                    </Link>
                  </div>
                  <div className="info">
                    <div className="blog-meta">
                      <ul>
                        <li>
                          <Link href="#">30 Aug 2024</Link>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <Link href="/blog-details">
                        Expression acceptance imprudence particular
                      </Link>
                    </h4>
                    <Link href="/blog-details" className="btn-simple">
                      <i className="ri-arrow-right-s-line"></i> Read more
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 mb-30">
                <div className="blog-style-one">
                  <div className="thumb">
                    <Link href="/blog-details">
                      <img src="../../images/blog/blog3.jpg" alt="Thumb" />
                    </Link>
                  </div>
                  <div className="info">
                    <div className="blog-meta">
                      <ul>
                        <li>
                          <Link href="#">30 Aug 2024</Link>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <Link href="/blog-details">
                        Considered imprudence of technical friendship.
                      </Link>
                    </h4>
                    <Link href="/blog-details" className="btn-simple">
                      <i className="ri-arrow-right-s-line"></i> Read more
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link href="/blogs" className="explore">
            Explore More <i className="ri-arrow-right-line" />
          </Link>
        </div> */}
      {/*-------------- Trending Section Codes End From Here -------------*/}
      {/*-------------- Subscribe Section Codes Start From Here -------------*/}
      <Subscriber />
      {/*-------------- Subscribe Section Codes End From Here -------------*/}
      {/*-------------- Footer Section Codes Start From Here -------------*/}
      <Footer />
      {/*-------------- Footer Section Codes End From Here -------------*/}
      {/* Swiper JS */}
      {/* Aos Animation */}
      {/*  */}
      {/* Sub-Mega Menus Script */}
      {/* For Remove Before Icon */}
    </>
  );
};

export default logoDesign;
