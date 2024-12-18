import Link from "next/link";
// import initMenu from '../public/js/menu';
import React, { useEffect } from "react";
import $ from "jquery"; // Import jQuery
const Header = () => {
  useEffect(() => {
    // jQuery script to run on component mount
    $(document).ready(function () {
      $(document).on(
        "click",
        ".pull-bs-canvas-right, .pull-bs-canvas-left",
        function () {
          $("body").prepend(
            '<div className="bs-canvas-overlay bg-dark position-fixed w-100 h-100"></div>'
          );
          if ($(this).hasClass("pull-bs-canvas-right")) {
            $(".bs-canvas-right").addClass("mr-0");
          } else {
            $(".bs-canvas-left").addClass("ml-0");
          }
          return false;
        }
      );

      $(document).on(
        "click",
        ".bs-canvas-close, .bs-canvas-overlay",
        function () {
          var elm = $(this).hasClass("bs-canvas-close")
            ? $(this).closest(".bs-canvas")
            : $(".bs-canvas");
          elm.removeClass("mr-0 ml-0");
          $(".bs-canvas-overlay").remove();
          return false;
        }
      );
    });

    // Cleanup on component unmount
    return () => {
      $(document).off("click", ".pull-bs-canvas-right, .pull-bs-canvas-left");
      $(document).off("click", ".bs-canvas-close, .bs-canvas-overlay");
      $(".bs-canvas-overlay").remove();
    };
  }, []);
  return (
    <>
      <header className="header bg-lg-white py-2 py-lg-0">
        <div className="container">
          <nav className="navbar navbar-expand-lg p-0">
            {/* <!-- Logo Desktop --> */}

            <div>
              <Link
                className="navbar-brand logo shape-2 py-3 ripple-animation border-top-unset "
                href="/"
              >
                <i className="ripple-helper"></i>
                <img
                  src="/themes/viralon/images/logo.png"
                  width="120"
                  alt="website logo"
                />
              </Link>
            </div>

            {/* <!-- Menu --> */}
            <div className="menu-1" id="collapsibleNavbar">
              <ul className="ms-auto navbar-nav">
                <li className="nav-item">
                  <Link href="/" className="nav-link ripple-animation active">
                    <i className="ripple-helper"></i>
                    Home
                  </Link>
                </li>
                <li className="nav-item  dropdown after-nav">
                  {" "}
                  <Link href="#" className="nav-link ripple-animation">
                    {" "}
                    <i className="ripple-helper"></i> About us{" "}
                  </Link>
                  <div className="row dropdown-menus">
                    <div className="col-md-12">
                      <ul className="sub-dropdown-main">
                        <li>
                          {" "}
                          <Link href="#">
                            {" "}
                            <img src="/themes/viralon/images/mega-menu-icons/info.png" />
                            About us <i className="ri-arrow-down-s-fill"></i>{" "}
                          </Link>{" "}
                        </li>
                      </ul>
                      <ul className="sub-mega-menu">
                        <li>
                          <Link href="/about-us/who-we-are">Who We Are</Link>
                        </li>
                        <li>
                          <Link href="/about-us/what-we-do">What We do </Link>
                        </li>
                        <li>
                          <Link href="/about-us/our-mission">Our Mission</Link>
                        </li>
                        <li>
                          <Link href="/about-us/our-vision">Our Vision</Link>
                        </li>
                        <li>
                          <Link href="/about-us/our-culture">Our Culture</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown after-nav">
                  <Link
                    href="#services_section services-arrow"
                    className="nav-link ripple-animation"
                  >
                    <i className="ripple-helper"></i>
                    Services
                  </Link>

                  <div className=" dropdown-menus1">
                    <div>
                      <ul className="mega-list strategy-list">
                        <li>
                          <Link href="#">
                            <img src="/themes/viralon/images/mega-menu-icons/strategy.png" />
                            Strategy <i className="ri-arrow-down-s-fill"></i>
                          </Link>
                        </li>
                      </ul>

                      <ul className="sub-mega-menu strategy-mega-menu">
                        <li>
                          <Link href="/services/strategy/digital-transformation">
                            Digital Transformation
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/services/strategy/technology-consulting"
                            className="tech"
                          >
                            Technology Consulting
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="mega-list digital-list">
                        <li>
                          <Link href="#">
                            <img src="/themes/viralon/images/mega-menu-icons/social-media.png" />
                            Digital <i className="ri-arrow-down-s-fill"></i>
                          </Link>
                        </li>
                      </ul>

                      <ul className="sub-mega-menu digital-mega-menu">
                        <li>
                          <Link href="/services/digital/social-media-marketing">
                            Social Media Marketing
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/services/digital/paid-media-marketing"
                            className="tech"
                          >
                            Paid Media Marketing
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/services/digital/search-engine-optimization"
                            className="tech"
                          >
                            Search Engine Optimization
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/services/digital/content-marketing"
                            className="tech"
                          >
                            Content Marketing
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/services/digital/email-marketing"
                            className="tech"
                          >
                            Email Marketing
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/services/digital/influencer-marketing"
                            className="tech"
                          >
                            Influencer Marketing
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/services/digital/analytics-report"
                            className="tech"
                          >
                            Analytics/Reporting
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/services/digital/video-marketing"
                            className="tech"
                          >
                            Video Marketing
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <ul className="mega-list design-list">
                        <li>
                          <Link href="#">
                            <img src="/themes/viralon/images/mega-menu-icons/web-design.png" />
                            Design <i className="ri-arrow-down-s-fill"></i>{" "}
                          </Link>
                        </li>
                      </ul>

                      <ul className="sub-mega-menu design-mega-menu">
                        <li>
                          <Link href="/services/design/ui-ux">UI/UX</Link>
                        </li>
                        <li>
                          <Link
                            href="/services/design/logo-design"
                            className="tech"
                          >
                            Logo Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/design/brocher-design"
                            className="tech"
                          >
                            Brochure Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/design/product-level-design"
                            className="tech"
                          >
                            Product Label Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/services/design/infographics"
                            className="tech"
                          >
                            Infographics
                          </Link>
                        </li>
                      </ul>
                    </div>
                    {/* 
                      <div style="display: none;">
                        <ul className="mega-list">
                          <li><Link href="#"> Technology</Link></li>
                        </ul>

                        <ul className="sub-mega-menu">
                          <li><Link href="#">Product Ideation &amp; Strategy</Link></li>
                          <li><Link href="#" className="tech">IOS Product Development</Link></li>
                          <li><Link href="#" className="tech">SAAS Based Product Development</Link></li>
                          <li><Link href="#" className="tech">Web Product Development</Link></li>
                          <li><Link href="#" className="tech">E-commerce Product Development</Link></li>
                          <li><Link href="#" className="tech">Product Testing &amp; QA</Link></li>
                        </ul>
                      </div>
                      <div style="display: none">
                        <ul className="mega-list">
                          <li><Link href="#"> <img src="images/mega-menu-icons/web-design.png" /> Cloud Solution</Link></li>
                        </ul>

                        <ul className="sub-mega-menu">
                          <li><Link href="digital-transform.html">Disaster Recovery</Link></li>

                          <li><Link href="#" className="tech">Cloud Service Integration</Link></li>
                          <li><Link href="#" className="tech">Backup &amp; Restore</Link></li>
                          <li><Link href="#" className="tech">Cloud Operations Management</Link></li>
                          <li><Link href="#" className="tech">Cloud Consulting</Link></li>

                        </ul>
                      </div> */}
                  </div>
                </li>

                <li className="nav-item dropdown after-nav">
                  <Link href="#" className="nav-link ripple-animation">
                    <i className="ripple-helper"></i>
                    Industries
                  </Link>
                  <div className="dropdown-menus">
                    <Link href="#" className="nav-link ripple-animation">
                      <div className="col-md-4 pl-0"></div>
                    </Link>
                    <div className="col-md-12">
                      <Link
                        href="#"
                        className="nav-link ripple-animation"
                      ></Link>
                      <ul className="sub-dropdown-main">
                        <Link
                          href="#"
                          className="nav-link ripple-animation"
                        ></Link>
                        <li>
                          <Link
                            href="#"
                            className="nav-link ripple-animation"
                          ></Link>
                          <Link href="#">
                            <img src="/themes/viralon/images/mega-menu-icons/industries.png" />
                            Industries <i className="ri-arrow-down-s-fill"></i>
                          </Link>
                        </li>
                      </ul>

                      <div className="row">
                        <ul className="sub-mega-menu">
                          <li>
                            <Link
                              href="/industries/banking-and-finance"
                              className="tech"
                            >
                              Banking &amp; Finance
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/industries/travel-industries"
                              className="tech"
                            >
                              Travel Industry
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/industries/it-industries"
                              className="tech"
                            >
                              IT Industry
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/industries/healthcare-and-wellness"
                              className="tech"
                            >
                              Health care &amp; Wellness Industry
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/industries/real-estate-industries"
                              className="tech"
                            >
                              Real-Estate Industry
                            </Link>
                          </li>

                          <li>
                            <Link href="/industries/food-industries">
                              Food Industry
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/e-commerce-industries">
                              E-commerce Industry
                            </Link>
                          </li>

                          <li>
                            <Link href="/industries/personal-care-industries">
                              Personal-Care Industry
                            </Link>
                          </li>

                          <li>
                            <Link href="/industries/education-industries">
                              Education Industry
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <Link href="/our-work" className="nav-link ripple-animation">
                    <i className="ripple-helper"></i>
                    Our Work
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/careers" className="nav-link ripple-animation">
                    <i className="ripple-helper"></i>
                    Careers{" "}
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link href="/blogs" className="nav-link ripple-animation">
                    <i className="ripple-helper"></i>
                    Blogs
                  </Link>
                </li> */}
              </ul>
              <div className="c-none">
                <Link
                  href="/contact-us"
                  className="nav-link ripple-animation header-btn border-0"
                >
                  <i className="ripple-helper"></i>
                  <i
                    className="ri-phone-fill"
                    style={{ marginRight: "5px" }}
                  ></i>
                  Hire us !
                </Link>
              </div>

              <div>
                {/* <img
                  src="/themes/viralon/images/icons/menu.png"
                  className="menu-show"
                /> */}

                <Link
                  className="pull-bs-canvas-left d-block text-success text-decoration-none"
                  href="#"
                >
                  {/* <span className="display-3">&#9776;</span> */}
                  {/* <h6>Pull Left Canvas</h6> */}

                  <img
                    src="/themes/viralon/images/icons/menu.png"
                    className="menu-show"
                    alt="Menu Icon Image"
                  />
                </Link>
              </div>

              <div className="bs-canvas bs-canvas-left position-fixed bg-light h-100">
                <header className="bs-canvas-header p-3 bg-white">
                  <Link href="/">
                    <img
                      src="/themes/viralon/images/logo.png"
                      width="100"
                      alt="website logo"
                    />
                  </Link>
                  <button
                    type="button"
                    className="bs-canvas-close close"
                    aria-label="Close"
                  >
                    <span
                      aria-hidden="true"
                      className="text-dark line-height-2"
                    >
                      &times;
                    </span>
                  </button>
                </header>

                <div id="accordion">
                  <div className="card-header1">
                    <h5 className="mb-0">
                      <button className="btn btn-link extra-link">
                        <Link href="/">Home</Link>
                      </button>
                    </h5>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          About Us
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <ul className="sub-dropdown padding-left-20">
                          <li>
                            <Link href="/about-us/who-we-are">Who We Are</Link>
                          </li>
                          <li>
                            <Link href="/about-us/what-we-do">What We do </Link>
                          </li>
                          <li>
                            <Link href="/about-us/our-mission">
                              Our Mission
                            </Link>
                          </li>
                          <li>
                            <Link href="/about-us/our-vision">Our Vision</Link>
                          </li>
                          <li>
                            <Link href="/about-us/our-culture">
                              Our Culture
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Services
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <div className="card">
                          <div className="card-header" id="subheadingOne">
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#SubcollapseOne"
                                aria-expanded="false"
                                aria-controls="SubcollapseOne"
                              >
                                Strategy
                              </button>
                            </h5>
                          </div>
                          <div
                            id="SubcollapseOne"
                            className="collapse"
                            aria-labelledby="subheadingOne"
                          >
                            <div className="card-body">
                              <ul className="sub-dropdown padding-left-20">
                                <li>
                                  <Link href="/services/strategy/digital-transformation">
                                    Digital Transformation
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/services/strategy/technology-consulting"
                                    className="tech"
                                  >
                                    Technology Consulting
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="subheadingThree">
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#SubcollapseThree"
                                aria-expanded="false"
                                aria-controls="SubcollapseThree"
                              >
                                Digital
                              </button>
                            </h5>
                          </div>
                          <div
                            id="SubcollapseThree"
                            className="collapse"
                            aria-labelledby="subheadingThree"
                          >
                            <div className="card-body">
                              <ul className="sub-dropdown padding-left-20">
                                <li>
                                  <Link href="/services/digital/social-media-marketing">
                                    Social Media Marketing
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/services/digital/paid-media-marketing"
                                    className="tech"
                                  >
                                    Paid Media Marketing
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/services/digital/search-engine-optimization"
                                    className="tech"
                                  >
                                    Search Engine Optimization
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/services/digital/content-marketing"
                                    className="tech"
                                  >
                                    Content Marketing
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/services/digital/email-marketing"
                                    className="tech"
                                  >
                                    Email Marketing
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/services/digital/influencer-marketing"
                                    className="tech"
                                  >
                                    Influencer Marketing
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/services/digital/analytics-report"
                                    className="tech"
                                  >
                                    Analytics/Reporting
                                  </Link>
                                </li>

                                <li>
                                  <Link
                                    href="/services/digital/video-marketing"
                                    className="tech"
                                  >
                                    Video Marketing
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="card">
                          <div className="card-header" id="subheadingFour">
                            <h5 className="mb-0">
                              <button
                                className="btn btn-link collapsed"
                                data-toggle="collapse"
                                data-target="#SubcollapseFour"
                                aria-expanded="false"
                                aria-controls="SubcollapseFour"
                              >
                                Design
                              </button>
                            </h5>
                          </div>
                          <div
                            id="SubcollapseFour"
                            className="collapse"
                            aria-labelledby="subheadingFour"
                          >
                            <div className="card-body">
                              <ul className="sub-dropdown padding-left-20">
                                <li>
                                  <Link href="/services/design/ui-ux">
                                    UI/UX
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/design/logo-design"
                                    className="tech"
                                  >
                                    Logo Design
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/design/brocher-design"
                                    className="tech"
                                  >
                                    Brochure Design
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/design/product-level-design"
                                    className="tech"
                                  >
                                    Product Label Design
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/design/infographics"
                                    className="tech"
                                  >
                                    Infographics
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h5 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Industries
                        </button>
                      </h5>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <ul className="sub-dropdown padding-left-20">
                          <li>
                            <Link
                              href="/industries/banking-and-finance"
                              className="tech"
                            >
                              Banking &amp; Finance
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/industries/travel-industries"
                              className="tech"
                            >
                              Travel Industry
                            </Link>
                          </li>

                          <li>
                            <Link
                              href="/industries/it-industries"
                              className="tech"
                            >
                              IT Industry
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/industries/healthcare-and-wellness"
                              className="tech"
                            >
                              Health care &amp; Wellness Industry
                            </Link>
                          </li>
                          <li>
                            <Link
                              href="/industries/real-estate-industries"
                              className="tech"
                            >
                              Real-Estate Industry
                            </Link>
                          </li>

                          <li>
                            <Link href="/industries/food-industries">
                              Food Industry
                            </Link>
                          </li>
                          <li>
                            <Link href="/industries/e-commerce-industries">
                              E-commerce Industry
                            </Link>
                          </li>

                          <li>
                            <Link href="/industries/personal-care-industries">
                              Personal-Care Industry
                            </Link>
                          </li>

                          <li>
                            <Link href="/industries/education-industries">
                              Education Industry
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="card-header1">
                    <h5 className="mb-0">
                      <button className="btn btn-link extra-link">
                        <Link href="/our-work">Our Work</Link>
                      </button>
                    </h5>
                  </div>

                  <div className="card-header1">
                    <h5 className="mb-0">
                      <button className="btn btn-link extra-link">
                        <Link href="/careers">Careers </Link>
                      </button>
                    </h5>
                  </div>

                  {/* <div className="card-header1">
                    <h5 className="mb-0">
                      <button className="btn btn-link extra-link">
                        <Link href="/blogs">Blogs</Link>
                      </button>
                    </h5>
                  </div> */}

                  <div className="card-header1">
                    <h5 className="mb-0">
                      <button className="btn btn-link extra-link">
                        <Link
                          href="/contact-us"
                          className="nav-link ripple-animation header-btn border-0"
                        >
                          <i
                            className="ri-phone-fill"
                            style={{ marginRight: "5px" }}
                          ></i>
                          Hire us !
                        </Link>
                      </button>
                    </h5>
                  </div>

                  <div className="card-header1 pl-4 ">
                    <h5 className="mb-0">
                    <p class="c-para text-dark fw-bold">Connect With Us</p>
                        <ul class="social-bx">
                          <li>
                            <a href="https://www.instagram.com/viralon_digital_services/?igsh=aHV4bGZkdGIwYXpk&amp;utm_source=qr">
                              <i class="ri-instagram-fill"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/profile.php?id=61551774960535&amp;mibextid=LQQJ4d">
                              <i class="ri-facebook-fill"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.linkedin.com/company/viralon-digital-services/">
                              <i class="ri-linkedin-fill"></i>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.youtube.com/@ViralonDigtialServices">
                              {" "}
                              <i class="ri-youtube-fill"></i>
                            </a>
                          </li>
                        </ul>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
