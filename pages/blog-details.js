import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialShare from "../components/SocialShare";
import Subscriber from "../components/Subscriber";
import Link from "next/link";

const BlogDetails = () => {
  return (
    <>
      <Header />
      <SocialShare />

      <section
        className="section hero-section-2"
        style={{
          backgroundImage: "url(/images/hero-banners/blog-details.jpg)",
        }}
      >
        <div className="overlayer" />
        <div className="container">
          <h1 className="page-heading">
            <span className="material-icons-round icon">groups</span>Blogs
            Details
          </h1>
        </div>
      </section>

      <section className="blog-details-section postbox__area pt-100 ">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-8 col-lg-8 mb-50">
              <div className="postbox__wrapper">
                <article className="postbox__item format-image transition-3">
                  <div className="postbox__thumb p-relative m-img">
                    <div className="postbox__thumb-text-2 d-none d-md-block">
                      <span>30 August</span>
                    </div>
                    <img src="../images/blog/blog1.jpg" alt="" />
                  </div>
                  <div className="postbox__content mb-70">
                    <div className="postbox__meta-box  d-flex justify-content-between align-items-center">
                      <div className="postbox__meta">
                        <span>
                          <i className="ri-user-fill"></i>By Riyaz
                        </span>
                        <span>
                          <Link href="#">
                            <i className="ri-price-tag-3-fill"></i>Solution
                          </Link>
                        </span>
                        <span>
                          <Link href="#">
                            <i className="ri-chat-3-fill"></i>02 Comments
                          </Link>
                        </span>
                      </div>
                      <div className="postbox__meta d-none d-sm-block">
                        <span>
                          <i className="ri-heart-line"></i>8
                        </span>
                      </div>
                    </div>
                    <h3 className="postbox__title">
                      What is Link soul? It's like{" "}
                    </h3>
                    <div className="postbox__text">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but majority have suffered alteration in some
                        form, by injected humour, or randomised words which
                        don’t look even slightly believable. If you are going to
                        use Link passage of Lorem Ipsum. There are many
                        variations of passages of Lorem Ipsum available, but
                        majority have suffered alteration in some form, by
                        injected humour, or randomised words which don’t look
                        even slightly believable. If you are going to use Link
                        passage of Lorem Ipsum.
                      </p>
                      <p className="mb-20">
                        {" "}
                        Suspendisse ultricies vestibulum vehicula. Proin laoreet
                        porttitor lacus. Duis auctor vel ex eu elementum. Fusce
                        eu volutpat felis. Proin sed eros tincidunt, sagittis
                        sapien eu, porta diam. Aenean finibus scelerisque nulla
                        non facilisis. Fusce vel orci sed quam gravid
                      </p>

                      <div className="postbox__content pb-20">
                        <div className="postbox__content-thumb mb-50 d-flex justify-content-between">
                          <img src="../images/blog/blog2.jpg" alt="" />
                          <img src="../images/blog/blog3.jpg" alt="" />
                        </div>
                        <div className="postbox__text pb-20">
                          <h4 className="postbox__title ">
                            Our Personal Approach
                          </h4>
                          <p>
                            Aliquam condimentum, massa vel mollis volutpat, erat
                            sem pharetra quam, ac mattis arcu elit non massa.
                            Nam mollis nunc velit, vel varius arcu fringilla
                            tristique. Cras elit nunc, sagittis eu bibendum eu,
                            ultrices placerat sem. Praesent vitae metus auctor.
                          </p>
                        </div>
                      </div>

                      <div className="postbox__blockquote pb-10 p-relative d-flex justify-content-between align-items-start">
                        <blockquote>
                          <p>
                            And the day came when the risk to remain tight in{" "}
                            <br />
                            Link bud was more painful than the risk.
                          </p>
                          <cite>- Riyaz Ali</cite>
                        </blockquote>
                        <div className="postbox__blockquote-shape d-none d-xl-block">
                          <img src="../images/blog/quote.png" alt="" />
                        </div>
                      </div>
                      <div className="postbox__thumb m-img p-relative">
                        <div className="postbox__details-share-wrapper">
                          <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-6">
                              <div className="postbox__details-tag tagcloud">
                                <span>Tag:</span>
                                <Link href="#">SMM Services</Link>
                                <Link href="#"> PPC Services</Link>
                                <Link href="#"> Logo Design</Link>
                              </div>
                            </div>
                            <div className="col-xl-7 col-lg-6 col-md-6">
                              <div className="postbox__details-share text-lg-end">
                                <span>Share:</span>
                                <Link href="#">
                                  <i className="ri-instagram-fill"></i>
                                </Link>

                                <Link href="#">
                                  <i className="ri-facebook-fill"></i>
                                </Link>
                                <Link href="#">
                                  <i className="ri-linkedin-fill"></i>
                                </Link>

                                <Link href="#">
                                  <i className="ri-youtube-fill"></i>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="postbox__author black-bg d-sm-flex align-items-start  mb-50">
                    <div className="postbox__author-thumb">
                      <Link href="#">
                        <img src="../images/blog/author-1-3.png" alt="" />
                      </Link>
                    </div>
                    <div className="postbox__author-content">
                      <h3 className="postbox__author-title">
                        <Link href="#" className="text-white">
                          About Sakhsi Singh
                        </Link>
                      </h3>
                      <p className="text-white">
                        Supported substance consolidates parts of web promoting{" "}
                        <br /> and substance showcasing. It includes making
                      </p>

                      <div className="postbox__author-social d-flex align-items-center">
                        <Link href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-linkedin-in"></i>
                        </Link>
                        <Link href="#">
                          <i className="fa-brands fa-twitter"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="postbox__comment mb-50">
                    <h3 className="postbox__title">02 Comments</h3>
                    <ul>
                      <li>
                        <div className="postbox__comment-box p-relative">
                          <div className="postbox__comment-info d-flex align-items-start">
                            <div className="postbox__comment-avater mr-40">
                              <img src="../images/blog/author-1-1.png" alt="" />
                            </div>
                            <div className="postbox__comment-name p-relative">
                              <h5>Mithcel Adnan</h5>
                              <div className="postbox__comment-text">
                                <p>
                                  Curabitur luctus nisl in justo maximus
                                  egestas. Curabitur sit amet sapien <br /> vel
                                  nunc molestie pulvinar at vitae quam. Aliquam
                                  lobortis nisi vitae <br /> congue consectetur.
                                  Aliquam et quam non metus{" "}
                                </p>
                                <div className="postbox__comment-reply">
                                  <Link href="#">
                                    <i className="fa-solid fa-arrow-turn-down-left"></i>
                                    Reply
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="children">
                        <div className="postbox__comment-box p-relative">
                          <div className="postbox__comment-info d-flex align-items-start">
                            <div className="postbox__comment-avater mr-40">
                              <img src="../images/blog/author-1-2.png" alt="" />
                            </div>
                            <div className="postbox__comment-name p-relative">
                              <h5>Liza Olivarez</h5>
                              <div className="postbox__comment-text">
                                <p>
                                  Curabitur luctus nisl in justo maximus
                                  egestas. Curabitur sit <br />
                                  amet sapien vel nunc molestie pulvinar at
                                  vitae quam. Aliquam <br /> lobortis nisi vitae
                                  congue consectetur
                                </p>
                                <div className="postbox__comment-reply">
                                  <Link href="#">
                                    <i className="fa-regular fa-arrow-turn-down-left"></i>
                                    Reply
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="postbox__comment-form-box">
                    <h3 className="postbox__comment-form-title pb-15">
                      Write Link comment
                    </h3>
                    <div className="postbox__comment-form">
                      <form id="contact-form" action="#">
                        <div className="row">
                          <div className="col-xl-6 col-lg-6 col-12 mb-20">
                            <div className="tp-contact-form-input-box">
                              <input
                                type="text"
                                placeholder="Enter your name"
                                fdprocessedid="rg0fmb"
                              />
                            </div>
                          </div>
                          <div className="col-xl-6 col-lg-6 col-12 mb-20">
                            <div className="tp-contact-form-input-box">
                              <input
                                type="text"
                                placeholder="Enter your email"
                                fdprocessedid="1otvyi"
                              />
                            </div>
                          </div>
                          <div className="col-12 mb-20">
                            <div className="tp-contact-form-input-box">
                              <textarea placeholder="Write your message"></textarea>
                            </div>
                          </div>
                        </div>
                      </form>
                      {/* <button type="submit" className="theme-btn" fdprocessedid="42etka"><span>Send message</span></button> */}

                      <div className="mdtop studies-btn book-btn">
                        <button
                          className="btn btn-primary trans animated pulse abt-butn-bot"
                          fdprocessedid="v8c4d8"
                        >
                          Send message
                          <img
                            src="/themes/viralon/images/icons/next.png"
                            className="arrow  next-arow arrow1  animate-right-to-left"
                            alt="Next Arrow"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 mb-50">
              <div className="sidebar__wrapper">
                <div className="sidebar__widget sidebar__widget-theme-bg mb-30">
                  <div className="sidebar__widget-content">
                    <div className="sidebar__search">
                      <form action="#">
                        <div className="sidebar__search-input-2">
                          <input
                            type="text"
                            placeholder="Search here"
                            fdprocessedid="wmnsc"
                          />
                          <button type="submit" fdprocessedid="l7egc8">
                            <i className="ri-search-line"></i>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="sidebar__widget mb-30">
                  <h3 className="sidebar__widget-title">Our Latest Post</h3>
                  <div className="sidebar__widget-content">
                    <div className="sidebar__post">
                      <div className="rc__post mb-25 d-flex align-items-center">
                        <div className="rc__post-thumb mr-20">
                          <Link href="/blog-details">
                            <img src="../images/blog/blog3.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>
                              <i className="fa-regular fa-clock"></i>
                              August 30, 2024{" "}
                            </span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link href="/blog-details">
                              Electricity is arguably the <br />
                              most valuable resource
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="rc__post mb-25 d-flex align-items-center">
                        <div className="rc__post-thumb mr-20">
                          <Link href="/blog-details">
                            <img src="../images/blog/blog1.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>
                              <i className="fa-regular fa-clock"></i>
                              August 30, 2024{" "}
                            </span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link href="/blog-details">
                              Our electrical repair know <br />
                              what Link hassle
                            </Link>
                          </h3>
                        </div>
                      </div>
                      <div className="rc__post d-flex align-items-center">
                        <div className="rc__post-thumb mr-20">
                          <Link href="/blog-details">
                            <img src="../images/blog/blog2.jpg" alt="" />
                          </Link>
                        </div>
                        <div className="rc__post-content">
                          <div className="rc__meta">
                            <span>
                              <i className="fa-regular fa-clock"></i>
                              August 30, 2024{" "}
                            </span>
                          </div>
                          <h3 className="rc__post-title">
                            <Link href="/blog-details">
                              Without electricity, most <br />
                              the things we do
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="sidebar__widget mb-30">
                  <h3 className="sidebar__widget-title">Catagories</h3>
                  <div className="sidebar__widget-content">
                    <ul>
                      <li>
                        <Link href="/blog-details">
                          Social Media Marketing
                          <span>
                            <i className="ri-arrow-right-fill"></i>
                          </span>
                        </Link>
                      </li>

                      <li className="active">
                        <Link href="/blog-details">
                          Influencer Marketing
                          <span>
                            <i className="ri-arrow-right-fill"></i>
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/blog-details">
                          Digital Marketing
                          <span>
                            <i className="ri-arrow-right-fill"></i>
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/blog-details">
                          Graphics Designing
                          <span>
                            <i className="ri-arrow-right-fill"></i>
                          </span>
                        </Link>
                      </li>

                      <li>
                        <Link href="/blog-details">
                          Branding Design
                          <span>
                            <i className="ri-arrow-right-fill"></i>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="sidebar__widget mb-30">
                  <h3 className="sidebar__widget-title">Tags</h3>
                  <div className="sidebar__widget-content">
                    <div className="tagcloud">
                      <Link href="#">Digital Transformation</Link>
                      <Link href="#">Social Media Marketing</Link>
                      <Link href="#">Influencer Marketing</Link>
                      <Link href="#">Branding Design</Link>
                      <Link href="#">SEO Services</Link>
                      <Link href="#">Logo Design</Link>
                      <Link href="#">UI/UX</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*-------------- Subscribe Section Codes Start From Here -------------*/}
      <Subscriber />
      {/*-------------- Subscribe Section Codes End From Here -------------*/}
      {/*-------------- Footer Section Codes Start From Here -------------*/}
      <Footer />
    </>
  );
};

export default BlogDetails;
