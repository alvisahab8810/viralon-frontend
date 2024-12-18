import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SocialShare from "../../components/SocialShare";
import Subscriber from "../../components/Subscriber";
import Link from "next/link";
import CustomHead from "../../components/CustomHead";
const ourCulture = () => {
  return (
    <>
      <CustomHead
        title="Viralon | Our Culture | Innovation as way of life"
        keywords="Viralon, Digital Marketing Agency, Our Culture"
        description="At Viralon Digital Services, our culture is the heartbeat of our organization.It defines who we are, how we work, and what we stand for."
      />
      <Header />
      <SocialShare />
      <section id="what-we-do">
        {/*-------------- Menu Section Codes Start From Here -------------*/}
        {/*-------------- Menu Section Codes End From Here -------------*/}
        {/*-------------- Hero Section Codes  Start From Here -------------*/}
        <section
          className="section hero-section-2 sm-none"
          style={{
            backgroundImage: "url(/images/hero-banners/our-culture.jpg)",
            backgroundPosition: "center",
          }}
        ></section>
        <section
          className="section hero-section-2 desk-none"
          style={{
            backgroundImage: "url(/images/hero-banners/our-culture-sm.jpg)",
          }}
        />
        {/*-------------- Hero Section Codes End From Here -------------*/}
        {/*-------------- What We Do Section Codes Start From Here--------*/}
        <section className="pt-5 pb-5 padding-top-25">
          <div className="container">
            <h2 className="text-center text-dark font-size-40">
              Cultivating <span className="text-gold"> Excellence</span>
            </h2>
            <p className="v-para">
              At Viralon Digital Services, our culture is the heartbeat of our
              organization. It defines who we are, how we work, and what we
              stand for. Our culture is rooted in four core principles, each
              representing an essential aspect of our identity and our
              commitment to visionary leadership.
            </p>
            <div className="row flex-wrap-reverse bottom-p padding-t max-width900 padding-bottom align-items-center pt-5 pb-5">
              <div className="col-md-6 para-size">
                <h1 className="font-size-40 font-weight-900 text-dark heading_style_1  mb-3">
                  Innovation as a <br />{" "}
                  <span className="text-gold">Way of Life</span>
                </h1>
                <p>
                  Innovation is not just a buzzword for us; it&apos;s embedded
                  in our DNA. We foster a culture of constant creativity and
                  forward thinking. Our teams are encouraged to explore new
                  ideas, challenge the status quo, and push the boundaries of
                  what&apos;s possible in the digital world. We believe that
                  innovation is the key to staying ahead, and it&apos;s at the
                  forefront of everything we do.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/our-culture/inno.png"
                  className="border border-10 border-white shadow-sm mb-md-0 mb-4 w-100"
                  alt="Innovation Image"
                />
              </div>
            </div>
            <div className="row  bottom-p padding-t max-width900 padding-bottom align-items-center pt-5 pb-5">
              <div className="col-md-6">
                <img
                  src="/images/our-culture/img1.png"
                  className="border border-10 border-white shadow-sm mb-md-0 mb-4 w-100"
                  alt="Teamwork Image"
                />
              </div>
              <div className="col-md-6 para-size">
                <h2 className="font-size-40-important font-weight-900 text-dark heading_style_1  mb-3">
                  Collaboration and <span className="text-gold"> Teamwork</span>
                </h2>
                <p>
                  Our culture thrives on collaboration and teamwork. We
                  recognize that the best solutions emerge when diverse
                  perspectives come together. We promote an environment where
                  every team member&apos;s voice is valued, and ideas are shared
                  freely. Through collaboration, we achieve synergy that drives
                  our projects forward and helps our clients reach new heights.
                </p>
              </div>
            </div>
            <div className="row flex-wrap-reverse bottom-p padding-t padding-bottom max-width900  align-items-center pt-5 pb-5">
              <div className="col-md-6 para-size">
                <h3
                  className="font-size-40 font-weight-900 text-dark
                         heading_style_1  mb-3"
                >
                  Ethical Leadership and{" "}
                  <span className="text-gold"> Integrity</span>
                </h3>
                <p>
                  Ethical conduct is non-negotiable in our culture. We believe
                  that doing the right thing is the only way to do business. Our
                  teams uphold the highest standards of integrity, transparency,
                  and accountability. We lead by example, demonstrating that
                  ethical leadership is not just a choice but a fundamental
                  pillar of our culture.
                </p>
              </div>
              <div className="col-md-6">
                <img
                  src="/images/our-culture/img2.png"
                  className="border border-10 border-white shadow-sm mb-md-0 mb-4 w-100"
                  alt="Ethical Leadership Image"
                />
              </div>
            </div>
            <div className="row  padding-bottom max-width900 bottom-p padding-t  align-items-center pt-5 pb-5">
              <div className="col-md-6">
                <img
                  src="/images/our-culture/img3.png"
                  className="border border-10 border-white shadow-sm mb-md-0 mb-4 w-100"
                  alt="Learning & Growth Image"
                />
              </div>
              <div className="col-md-6 para-size">
                <h1 className="font-size-40 font-weight-900 text-dark heading_style_1  mb-3">
                  Learning and <br />
                  Growth
                </h1>
                <p>
                  Continuous learning is ingrained in our culture. We understand
                  that the digital landscape is ever-evolving, and to lead, we
                  must never stop growing. We invest in our team&apos;s
                  professional development, providing opportunities for
                  learning, training, and skill enhancement. Our culture
                  encourages a growth mindset, where challenges are seen as
                  opportunities to learn and improve.
                </p>
              </div>
            </div>
            <p className="para mt-5 margin-top">
              Our culture at Viralon Digital Services is more than just words on
              a page; it&apos;s a way of life. It&apos;s a commitment to
              innovation, collaboration, ethics, and growth. It&apos;s a pledge
              to be visionary leaders in the digital world, shaping the future
              of business with integrity and creativity. Join us in embracing
              this culture, and together, we&apos;ll build a brighter digital
              future for all.
            </p>
          </div>
        </section>
        {/*-------------- What We Do Section Codes End From Here -------------*/}
        {/* Our Industry Section Codes Start From Here */}
        {/* Our Industry Section Codes End From Here */}
        {/*-------------- Our Specilalization Section Codes Start From Here -------------*/}
        <div className="our-specialization-container">
          <div className="specil-bx">
            <div className="container">
              <div className="get-freebx">
                <div>
                  <h2>
                    {" "}
                    <span style={{ color: "black" }}>
                      Get your Solutions with
                    </span>{" "}
                    02 Hrs of Free Consultation
                  </h2>
                </div>
                <div>
                  {/* <a href="#" class="book-btn">Let&apos;s Talk</a> */}
                  <div className="mdtop studies-btn book-btn">
                    <Link href="/contact-us">
                      <div className="btn btn-primary trans animated pulse abt-butn-bot">
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
        </div>
        {/*-------------- Our Specilalization Section Codes End From Here -------------*/}
        {/*-------------- Trending Section Codes Start From Here -------------*/}
        {/* <div className="trending-container mb-5">
          <h1 className="heading1 pt-5 ">
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
        {/* Initialize Swiper */}
        {/*  */}
        {/* Sub-Mega Menus Script */}
        {/* For Remove Before Icon */}
      </section>
    </>
  );
};

export default ourCulture;
