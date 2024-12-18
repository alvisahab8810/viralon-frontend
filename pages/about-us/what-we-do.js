import Link from "next/link";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SocialShare from "../../components/SocialShare";
import Subscriber from "../../components/Subscriber";
import WhatWeDoSlider from "../../components/WhatWeDoSlider";
import CustomHead from "../../components/CustomHead";

const WhatWeDo = () => {
  return (
    <>
      <CustomHead
        title="Viralon | What We Do | Business-Focused Digital Marketing"
        keywords="Viralon, Digital Marketing Agency, What We Do"
        description="At Viralon, we are dedicated to harnessing the power of the digital realm to propel your business toward unparalleled success. "
      />
      <Header />
      <SocialShare />
      <section id="what-we-do">
        {/*-------------- Menu Section Codes Start From Here -------------*/}

        {/*-------------- Menu Section Codes End From Here -------------*/}
        {/*-------------- Hero Section Codes Start From Here -------------*/}
        <section
          className="section hero-section-2 sm-none"
          style={{
            backgroundImage: "url(/images/hero-banners/what-we-do-banner.jpg)",
          }}
        ></section>
        <section
          className="section hero-section-2 desk-none"
          style={{
            backgroundImage:
              "url(/images/hero-banners/what-we-do-banner-sm.jpg)",
          }}
        />
        {/* <section
          className="section hero-section-2 sm-none"
          style={{ backgroundImage: "url(/images/hero-banners/our-vision.jpg)" }}
        ></section>
        <section
          className="section hero-section-2 desk-none"
          style={{
            backgroundImage: "url(/images/hero-banners/our-vision-sm.jpg)"
          }}
          /> */}

        {/*-------------- Hero Section Codes End From Here -------------*/}
        {/*-------------- What We Do Section Codes Start From Here--------*/}
        <section className="pt-5 pb-5 bottom-p padding-t">
          <div className="container">
            <h2 className="text-center text-dark font-size-30 padding-top-20">
              Unlocking Digital <span className="text-gold"> Potential</span>{" "}
            </h2>
            <p className="v-para">
              {" "}
              At Viralon , we are dedicated to harnessing the power of the
              digital realm to propel your business towards unparalleled
              success. Our mission is built upon three core pillars, each
              representing a unique facet of our digital expertise.
            </p>
            <div className="row box-shadow margin-top-15 flex-wrap-reverse align-items-center max-width900 bottom-p padding-t   pt-5 pb-5">
              <div className="col-md-6 para-size">
                <h1 className="font-size-40 font-weight-900 text-dark heading_style_1  mb-3">
                  Full-Stack Digital{" "}
                  <span className="text-gold">Marketing Solutions</span>
                </h1>
                <p>
                  In an ever-evolving digital landscape, our team of experts
                  crafts comprehensive marketing strategies tailored to your
                  business needs. From SEO mastery to compelling content
                  creation and cutting-edge social media campaigns, we employ a
                  full-stack approach to enhance your online presence. Our
                  visionary strategies are designed to not only boost your
                  visibility but also engage and convert your target audience.
                  We believe in leading the way in digital marketing, guiding
                  you towards sustainable growth and enduring success.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/wwd.png"
                  className="mb-md-0 mb-4 w-455"
                  alt="Marketing Image"
                />
              </div>
            </div>
            <div className="row align-items-center box-shadow margin-top-15 pt-5 bottom-p padding-t pb-5 max-width900 ">
              <div className="col-md-6">
                <img
                  src="/images/digital-product.jpg"
                  className=" mb-md-0 mb-4  "
                  alt
                />
              </div>
              <div className="col-md-6 para-size">
                <h1 className="font-size-40 font-weight-900 text-dark  mb-3">
                  {" "}
                  Digital Product{" "}
                  <span className="text-gold"> Development</span>
                </h1>
                <p>
                  Innovation is at the heart of what we do. We collaborate
                  closely with our clients to conceptualize, design, and develop
                  digital products that redefine industries. Our team's
                  visionary thinking and technological prowess empower us to
                  create bespoke solutions that address specific challenges and
                  capitalize on emerging opportunities. Whether it's a mobile
                  app, a web platform, or a custom software solution, we are
                  committed to crafting products that lead the market and drive
                  your business towards digital excellence.
                </p>
              </div>
            </div>
            <div className="row flex-wrap-reverse bottom-p box-shadow margin-top-15 padding-t align-items-center max-width900  pt-5 pb-5">
              <div className="col-md-6 para-size">
                <h1 className="font-size-40 font-weight-900 text-dark heading_style_1  mb-3">
                  Cloud Solutions and{" "}
                  <span className="text-gold">Design Innovation</span>
                </h1>
                <p>
                  Embracing the future means harnessing the power of the cloud.
                  At Viralon, we offer cuttingedge cloud solutions that provide
                  flexibility, scalability, and security for your data and
                  applications. Our visionary approach to cloud architecture
                  ensures that your business remains agile and resilient in an
                  ever-changing world. In parallel, our design experts infuse
                  creativity and user-centric thinking into every project,
                  ensuring that your digital presence not only functions
                  flawlessly but also captivates and inspires. We believe in
                  designing experiences that elevate your brand and shape
                  industry standards.
                </p>
              </div>
              <div className="col-md-6">
                <img src="/images/cs.png" className="mb-md-0 mb-4 w-100" alt />
              </div>
            </div>
            <p className="para mt-5 margin-t-15">
              At Viralon , we are not just service providers; we are strategic
              partners on your digital journey. Our visionary leadership and
              unwavering commitment to excellence drive us to explore new
              horizons and push boundaries. Together, we'll navigate the digital
              landscape, uncover opportunities, and lead your business towards a
              future where innovation and success go hand in hand. Join us in
              shaping the digital world of tomorrow
            </p>
          </div>
        </section>
        {/*-------------- What We Do Section Codes End From Here -------------*/}
        {/* Our Industry Section Codes Start From Here */}
        {/* Our Industry Section Codes End From Here */}
        {/*-------------- Our Specilalization Section Codes Start From Here -------------*/}
        {/* <div className="our-specialization-container"> */}
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
        <div className="container">
          <h2 className="heading1 mt-3">
            Service <span className="text-gold">Lines</span>
          </h2>
          <div className="servicebx">
            <div className="service-accordion">
              <div className="accordion" id="accordion1">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="true"
                      aria-controls="collapseSix"
                    >
                      STRATEGY
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    class="collapse show"
                    aria-labelledby="headingSix"
                    data-parent="#accordion1"
                  >
                    <div className="card-body">
                      <ul
                        className="collapse-list nav nav-tab"
                        id="ex1"
                        role="tablist"
                      >
                        <li>
                          <Link href="/services/strategy/digital-transformation">
                            Digital Transformation
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/strategy/technology-consulting"
                            class="tech"
                          >
                            Technology Consulting
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      class="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseTwo"
                    >
                      DESIGN
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion1"
                  >
                    <div className="card-body">
                      <ul className="collapse-list">
                        <li>
                          <Link href="/services/design/ui-ux">UI/UX</Link>
                        </li>
                        <li>
                          <Link
                            href="/services/design/logo-design"
                            class="tech"
                          >
                            Logo Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/design/brocher-design"
                            class="tech"
                          >
                            Brochure Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/design/product-level-design"
                            class="tech"
                          >
                            Product Label Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/design/infographics"
                            class="tech"
                          >
                            Infographics
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      class="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      DIGITAL{" "}
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    class="collapse"
                    aria-labelledby="headingSeven"
                    data-parent="#accordion1"
                  >
                    <div className="card-body">
                      <ul className="collapse-list">
                        <li>
                          <Link href="/services/digital/social-media-marketing">
                            Social Media Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/digital/paid-media-marketing"
                            class="tech"
                          >
                            Paid Media Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/digital/search-engine-optimization"
                            class="tech"
                          >
                            Search Engine Optimization
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/digital/content-marketing"
                            class="tech"
                          >
                            Content Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/digital/email-marketing"
                            class="tech"
                          >
                            Email Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/digital/influencer-marketing"
                            class="tech"
                          >
                            Influencer Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/digital/analytics-report"
                            class="tech"
                          >
                            Analytics/Reporting
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/digital/video-marketing"
                            class="tech"
                          >
                            Video Marketing
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <WhatWeDoSlider/> */}
                {/* <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button type="button" className="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree">DESIGN</button>                     
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#myAccordion">
                  <div className="card-body">
                    <ul className="collapse-list">
                      <li><a href="ui-ux.html">UI/UX</a></li>
                      <li><a href="logo-design.html">Logo Design</a></li>
                      <li><a href="brochure-design.html">Brochure Design</a></li>
                      <li><a href="product-label-design.html">Product Label Design</a></li>
                      <li><a href="infographics.html">Infographics</a></li>
                    </ul>
                  </div>
                </div>
              </div> */}
                {/* <div class="accordion-item">
      <h2 class="accordion-header" id="headingFour">
          <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour">DIGITAL TRANSFORMATION</button>                     
      </h2>
      <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
          <div class="card-body">
              <ul class="collapse-list">
               <li><a href="#">Product Idetation &amp; Strategy</a></li>
               <li><a href="#">IOS Product Development</a></li>
               <li><a href="#">SAAS Based Product Development</a></li>
               <li><a href="#">Web Product Development</a></li>
               <li><a href="#">E-Commerce Product Development</a></li>
               <li><a href="#">Product Testing &amp; QA</a></li>
             </ul>
          </div>
      </div>
              </div> */}
                {/* <div class="accordion-item">
      <h2 class="accordion-header" id="headingFive">
          <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFive">CLOUD SOLUTION</button>                     
      </h2>
      <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#myAccordion">
          <div class="card-body">
               <ul class="collapse-list">
               <li><a href="#">Disaster Recovery</a></li>
               <li><a href="#">Cloud Service Integration</a></li>
               <li><a href="#">Backup &amp; Restore</a></li>
               <li><a href="#">Cloud Operations Management</a></li>
               <li><a href="#">Cloud Consulting</a></li>
               <li><a href="#">Product Testing &amp; QA</a></li>
             </ul>
          </div>
      </div>
              </div> */}
              </div>
            </div>
            <div className="service-crausel">
              <WhatWeDoSlider />
            </div>
          </div>
        </div>
        {/*-------------- Our Specilalization Section Codes End From Here -------------*/}
        {/*-------------- Trending Section Codes Start From Here -------------*/}
        <br />
        <br />
        <br />
        

        {/* <div className="trending-container mt-5 mb-5" id="trending">
        <h1 className="heading1 pt-5 who-we-are-h">
          Tren<span className="text-gold">ding</span>
        </h1>
        <div className="container1">
        <div className="row mt-4">
                    <div className="col-xl-4 col-md-6 mb-30 ">
                      <div className="blog-style-one">
                        <div className="thumb">
                          <Link href="/blog-details">
                            <img src="../images/blog/blog1.jpg" alt="Thumb" />
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
                            <img src="../images/blog/blog2.jpg" alt="Thumb" />
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
                            <img src="../images/blog/blog3.jpg" alt="Thumb" />
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
        <Link href="/blogs" className="explore ">
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
        {/* Initialize Swiper */}
        {/*  */}
        {/* Sub-Mega Menus Script */}
        {/* For Remove Before Icon */}
      </section>
    </>
  );
};

export default WhatWeDo;
