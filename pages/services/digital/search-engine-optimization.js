import React from 'react';
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import SocialShare from "../../../components/SocialShare";
import Subscriber from "../../../components/Subscriber";
import SeoSlider from '../../../components/SeoSlider';
import SeoSlider2 from '../../../components/SeoSlider2';
import SeoSlider3 from '../../../components/SeoSlider3';
import CustomHead from '../../../components/CustomHead';

const searchEngineOptimization = () => {
  return (
    <>

  <CustomHead title="Viralon | Improve Rankings with Search Engine Optimisation"
   keywords="Viralon, Digital Marketing Agency, Search Engine Optimistaion" 
   description="Viralon is the best Search Engine Optimisation agency for your business. For us, SEO is not just about ranking but also about delivering value." /> 
 
 <Header/>
 <SocialShare itemurl={`contact-us`} />
  <section id="marketings">
    {/*-------------- Menu Section Codes Start From Here -------------*/}
    
    {/*-------------- Menu Section Codes End From Here -------------*/}
    {/*-------------- Hero Section Codes Start From Here -------------*/}
    <section
      className="section hero-section-2 sm-none"
      style={{
        backgroundImage:
          "url(/images/hero-banners/search-engine-optimization.jpg)",
        backgroundPosition: "center"
      }}
    ></section>
    <section
      className="section hero-section-2 desk-none"
      style={{
        backgroundImage:
          "url(/images/hero-banners/search-engine-optimization-sm.jpg)",
        backgroundPosition: "center"
      }}
    />
    {/*-------------- Hero Section Codes End From Here -------------*/}
    {/*-------------- Social Media Marketing Section Codes Start From Here -------------*/}
    <section className="pt-5">
      <div className="container">
        <h2 className="text-dark main-heading text-center font-size-30">
          Unlocking the Power of Search Engine Optimization (SEO)
        </h2>
        <p className="text-dark text-center max-width100 mt-3">
          <strong>Elevate Your Digital Presence with Viralon</strong>
          <br />
          In today's digital world, the internet is the go-to destination for
          almost everything. Whether you're a business, a content creator, or an
          individual looking to share your passion, being visible online is
          paramount. That's where Search Engine Optimization (SEO) comes into
          play—it's the secret sauce that ensures your digital presence doesn't
          go unnoticed.
        </p>
      </div>
      <section className="seo container">
        <div className="container">
          <div className="row flex-wrap-reverse max-width800 align-items-center">
            <div className="col-md-6 seobx para-size">
              <h1 className=" pt-0 text-dark font-size-28">
                What is Search Engine Optimization (SEO)?
              </h1>
              <p>
                SEO is the strategic process of enhancing your website's
                visibility in search engine results. It's like a treasure map
                for the digital age, helping search engines like Google, Bing,
                and Yahoo understand your content and present it to users when
                they search for relevant information. But SEO isn't just about
                rankings; it's about delivering value to your audience.
              </p>
            </div>
            <div className="col-md-6 ">
              <img
                src="/images/seo/img3.jpg"
                className=" mb-md-0 mb-4 w-400"
                alt="Seo Image"
              />
            </div>
          </div>
        </div>
      </section>
    </section>

    
    {/* Platform Section Start From Here */}
    <section className="make-happen">
      <div className="container">
        <div className="hero-shape9">
          <img src="/images/pattern.png" style={{ width: 250 }} />
        </div>
        <h2 className="text-dark main-heading text-center font-size-30">
          Types of SEO: Unlocking the Different Dimensions
        </h2>
        <p className="text-dark text-center max-width100 mt-3">
          SEO isn't a one-size-fits-all concept; it encompasses various
          techniques and strategies to achieve different goals. Let's explore
          the main types of SEO:
        </p>
        <div className="row flex-wrap-reverse align-items-center mt-4">
          <div className="col-md-5 shape-img-bx make-img">
            <img
              src="/images/seo/img1.jpg"
              className=" mb-md-0 mb-4 "
              alt="Types Seo Image"
              style={{ width: 500 }}
            />
          </div>
          <div className="col-md-7 para-size">
            <div className="container mob-container">
             <div id="accordion">
                <div class="card">
                  <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                      <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        On-Page SEO: The Foundation of Optimization
                      </button>
                    </h5>
                  </div>

                  <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div class="card-body">
                        On-Page SEO is the bedrock of your website's search engine optimization. It focuses on 
                        optimizing individual web pages to rank higher and earn more relevant traffic. Key elements 
                        include<br/>

                        <b>Keyword Research:</b> Identifying the right keywords to target in your content.<br/>
                        <b>Content Optimization:</b> Crafting high-quality, keyword-rich content.<br/>
                        <b>Meta Tags:</b> Optimizing title tags, meta descriptions, and header tags.<br/>
                        <b>URL Structure:</b> Creating clean and keyword-friendly URLs.<br/>
                        <b>Image Optimization:</b> Enhancing images for search engines.
                      </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingTwo">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Off-Page SEO: Building Authority Beyond Your Website
                      </button>
                    </h5>
                  </div>
                  <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                     <div class="card-body">
                        Off-Page SEO involves activities conducted outside your website to improve its visibility and 
                        reputation. It's all about building trust and authority. Key elements include<br/>

                        <b>Link Building:</b> Acquiring high-quality, authoritative backlinks.<br/>
                        <b>Social Signals:</b> Leveraging social media and online mentions to boost your online presence.<br/>
                        <b>Brand Mentions:</b> Monitoring and managing online references to your brand.<br/>
                      </div>
                  </div>
                </div>
                <div class="card">
                  <div class="card-header" id="headingThree">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Technical SEO: The Mechanics Behind the Scenes
                      </button>
                    </h5>
                  </div>

                  <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                        <div class="card-body">
                        Technical SEO focuses on the backend of your website, optimizing its technical aspects to 
                          enhance search engine crawling and indexing. Key elements include
                          <br/>
                           <b> Site Speed:</b> Improving page loading times for a better user experience.<br/>
                          <b>Mobile-Friendliness:</b> Ensuring your site is mobile-responsive.<br/>
                          <b>Sitemap Creation:</b> Creating XML sitemaps to help search engines understand your site's 
                          structure.<br/>
                          <b>Robots.txt:</b> Configuring to control how search engines access your site.
                      </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingFour">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Local SEO: Capturing the Local Audience
                      </button>
                    </h5>
                  </div>
                  
                   <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                     <div class="card-body">
                        Local SEO is vital for businesses with physical locations. It's about optimizing your online 
                        presence to attract customers in your local area. Key elements include<br/>

                        <b>Google My Business:</b> Claiming and optimizing your Google My Business listing.<br/>
                        <b>Local Citations:</b> Ensuring consistent NAP (Name, Address, Phone Number) across online 
                        directories.<br/>
                        <b>Local Reviews:</b> Encouraging and managing customer reviews.<br/>
                        <b>Geo-Targeted Content:</b> Creating content tailored to local audiences.
                      </div>
                  </div>
                </div>

                <div class="card">
                  <div class="card-header" id="headingFive">
                    <h5 class="mb-0">
                      <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                       Voice Search SEO: Adapting to the Future
                      </button>
                    </h5>
                  </div>
                  
                   <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
                    <div class="card-body">
                        With the rise of voice-activated devices and virtual assistants, Voice Search SEO is gaining 
                        importance. It involves optimizing your content to cater to voice search queries, which often 
                        differ from typed searches.<br/><br/>
                        Each type of SEO serves a unique purpose and can be tailored to meet your specific goals 
                        and target audience. By understanding these dimensions, you can craft a holistic SEO 
                        strategy that elevates your online presence and connects you with your audience effectively.

                      </div>
                  </div>
                </div>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Platform Section End From Here */}
    {/* Core Task Section Start From Here */}
    {/* <div className="social-media">
      <h2 className="text-white s-heading text-center  pb-4 font-size-30">
        Core Tasks in Viralon's SEO Services
      </h2>
      <div className="container">
        <div className="social-media-container">
          <div className="swiper ssm-slider mySwiper1 swiper-initialized swiper-horizontal swiper-free-mode">
            <div
              className="swiper-wrapper core-task-bx"
              id="swiper-wrapper-103b6048154d2e46b"
              aria-live="off"
              style={{
                transitionDuration: "0ms",
                transform: "translate3d(-4032.7px, 0px, 0px)",
                transitionDelay: "0ms"
              }}
            >
              <div
                className="swiper-slide"
                role="group"
                aria-label="1 / 18"
                style={{ width: "427.333px", marginRight: 30 }}
              >
                <div className="core-image">
                  <div className="core-underbx">
                    <div className="corecont">
                      <h3>
                        Keyword Research and Optimization
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/icon14.png" />
                      </div>
                      <h3>Keyword Research and Optimization</h3>
                      <p className="core-para">
                        We delve deep into keyword research, identifying the
                        phrases your potential customers use to find products or
                        services like yours. We then strategically optimize your
                        website's content to target these keywords, ensuring
                        your site ranks for relevant searches.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="2 / 18"
                style={{ width: "427.333px", marginRight: 30 }}
              >
                <div className="core-image">
                  <div className="core-underbx">
                    <div className="corecont">
                      <h3>
                        Technical SEO Audits
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/strategic-plan.png" />
                      </div>
                      <h3>Technical SEO Audits</h3>
                      <p className="core-para">
                        We perform comprehensive technical audits to identify
                        and rectify issues that may be hindering your website's
                        performance in search results. This includes optimizing
                        site speed, mobile-friendliness, and fixing broken
                        links.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="4 / 18"
                style={{ width: "427.333px", marginRight: 30 }}
              >
                <div className="core-image">
                  <div className="core-underbx">
                    <div className="corecont">
                      <h3>
                        Content Creation and Optimization
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/content-creation.png" />
                      </div>
                      <h3>Content Creation and Optimization</h3>
                      <p className="core-para">
                        High-quality content is the backbone of SEO. Our team
                        creates and optimizes content that not only engages your
                        audience but also aligns with search engine algorithms.
                        This includes blog posts, product descriptions, and
                        more.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="5 / 18"
                style={{ width: "427.333px", marginRight: 30 }}
              >
                <div className="core-image">
                  <div className="core-underbx">
                    <div className="corecont">
                      <h3>
                        Link Building
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/icon7.png" />
                      </div>
                      <h3>Link Building</h3>
                      <p className="core-para">
                        Building high-quality, authoritative backlinks to your
                        website is crucial for SEO success. We employ ethical
                        link-building strategies to boost your site's authority
                        and credibility
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="5 / 18"
                style={{ width: "427.333px", marginRight: 30 }}
              >
                <div className="core-image">
                  <div className="core-underbx">
                    <div className="corecont">
                      <h3>
                        On-Page and Off-Page SEO
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/onpage.png" />
                      </div>
                      <h3>On-Page and Off-Page SEO</h3>
                      <p className="core-para">
                        {" "}
                        We optimize both on-page elements (titles, meta
                        descriptions, headers) and off-page factors (backlinks,
                        social signals) to ensure a holistic SEO approach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
        </div>
      </div>
    </div> */}
    <SeoSlider/>
    {/* Core Task Section End From Here */}
    {/* Significance Section Start From Here */}
    <SeoSlider2/>
    {/* <section className="make-happen  make action-slider container">
      <div className="container">
        <h2 className="text-dark main-heading text-center font-size-30">
          Our Methodology to SEO Success
        </h2>
        <div className="row flex-wrap-reverse max-width800 mt-5 margin-top-15  align-items-center">
          <div className="col-md-6  left-slider para-size">
            <div className="swiper mySwiper3 swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-11c10610b5dad108f2"
              >
                <div className="swiper-slide">
                  <img
                    src="/images/seo/slider/img1.jpg"
                    alt="Audit And Analysis Image"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="/images/seo/slider/img2.jpg"
                    alt="Keyword Strategy Image"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="/images/seo/slider/img3.jpg"
                    alt="On-Page Optimization Image"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="/images/seo/slider/img4.jpg "
                    alt="Content Creation Image"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="/images/seo/slider/img5.jpg"
                    alt="Link Building Image"
                  />
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
          </div>
          <div className="col-md-6 action-content1">
            <div className="swiper mySwiper3 swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-a87b38bc6401ce16"
              >
                <div className="swiper-slide">
                  <div className="action-content aos-init" data-aos="fade-up">
                    <p data-aos="fade-up" className="aos-init">
                      <b>Audit and Analysis</b>
                      <br />
                      We begin with a thorough audit of your current online
                      presence, identifying strengths and weaknesses.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="action-content aos-init" data-aos="fade-up">
                    <p data-aos="fade-up" className="aos-init">
                      <b>Keyword Strategy</b> <br />
                      We develop a targeted keyword strategy to align with your
                      business goals.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide ">
                  <div className="action-content aos-init" data-aos="fade-up">
                    <p data-aos="fade-up" className="aos-init">
                      <b>On-Page Optimization</b>
                      <br />
                      We optimize your website's on-page elements, ensuring they
                      meet SEO best practices.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="action-content aos-init" data-aos="fade-up">
                    <p data-aos="fade-up" className="aos-init">
                      <b>Content Creation</b>
                      <br />
                      Our team creates high-quality, relevant content that
                      resonates with your audience and search engines.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide ">
                  <div className="action-content aos-init" data-aos="fade-up">
                    <p data-aos="fade-up" className="aos-init">
                      <b>Link Building</b>
                      <br />
                      Ethical link-building strategies enhance your website's
                      authority and credibility.
                    </p>
                  </div>
                </div>
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
        <span className="swiper-pagination-bullet" tabIndex={0}>
          1
        </span>
        <span className="swiper-pagination-bullet" tabIndex={0}>
          2
        </span>
        <span className="swiper-pagination-bullet" tabIndex={0}>
          3
        </span>
        <span
          className="swiper-pagination-bullet swiper-pagination-bullet-active"
          tabIndex={0}
          aria-current="true"
        >
          4
        </span>
        <span className="swiper-pagination-bullet" tabIndex={0}>
          5
        </span>
      </div>
      <div className="prev-next">
        <div
          className="swiper-button-next1"
          tabIndex={0}
          role="button"
          aria-label="Next slide"
          aria-controls="swiper-wrapper-a87b38bc6401ce16"
          aria-disabled="false"
        >
          <img src="/images/icons/right-arrow.png" />
        </div>
        <div
          className="swiper-button-prev1"
          tabIndex={0}
          role="button"
          aria-label="Previous slide"
          aria-controls="swiper-wrapper-a87b38bc6401ce16"
          aria-disabled="false"
        >
          <img src="/images/icons/left-arrow.png" />
        </div>
      </div>
    </section> */}
    <SeoSlider3/>
    <section className="solid-section">
      <div className="container">
        <h2 className="text-dark main-heading text-center font-size-30">
          Why Choose Viralon for Search Engine Optimization - 5 Solid Reasons
        </h2>
        <div className="solid-social-bx5 pt-4 pb-5">
          <div className="left-itemss">
            <div className="solid-left-itemsbxx">
              <div className="left-items22">
                <div className="left-items-icon">
                  <img src="/images/icons/proven.png" />
                </div>
              </div>
              <div className="left-items11">
                <h3> Proven Expertise</h3>
                <p>
                  {" "}
                  Our team comprises seasoned SEO experts with a track record of
                  delivering results.
                </p>
              </div>
            </div>
          </div>
          <div className="left-itemss">
            <div className="solid-left-itemsbxx">
              <div className="left-items22">
                <div className="left-items-icon">
                  <img src="/images/icons/customization.png" />
                </div>
              </div>
              <div className="left-items11">
                <h3>Customization</h3>
                <p>
                  We tailor our SEO strategies to your unique business needs and
                  goals.
                </p>
              </div>
            </div>
          </div>
          <div className="left-itemss">
            <div className="solid-left-itemsbxx">
              <div className="left-items22">
                <div className="left-items-icon">
                  <img src="/images/icons/trans.png" />
                </div>
              </div>
              <div className="left-items11">
                <h3> Transparency</h3>
                <p>
                  We believe in open communication and provide regular reports
                  to keep you informed
                </p>
              </div>
            </div>
          </div>
          <div className="left-itemss">
            <div className="solid-left-itemsbxx">
              <div className="left-items22">
                <div className="left-items-icon">
                  <img src="/images/icons/data-driven.png" />
                </div>
              </div>
              <div className="left-items11">
                <h3>Data-Driven</h3>
                <p>
                  Our decisions are rooted in data analysis, ensuring the best
                  strategies are implemented.
                </p>
              </div>
            </div>
          </div>
          <div className="left-itemss">
            <div className="solid-left-itemsbxx">
              <div className="left-items22">
                <div className="left-items-icon">
                  <img src="/images/icons/results.png" />
                </div>
              </div>
              <div className="left-items11">
                <h3>Long-Term Results</h3>
                <p>
                  We focus on sustainable, long-term SEO success, not
                  short-lived tactics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <section class="container1 "> 
 
   <div id="exTab1"> 
    <div class="tab-head">
<div>
 <ul class="nav nav-pills">
  <li>
   <a href="#1a" data-toggle="tab" class="active show"> Significance of Social Media</a>

</li>

<li>
  <a href="#2a" data-toggle="tab" class="">Scale Up Funnel Social Media</a>
</li>

 <li>
  <a href="#3a" data-toggle="tab"> 5 Rock-Solid Reasons</a>
 </li>
   
  </ul>
</div>

  
     </div>


<div class="tab-content clearfix">

  <div class="tab-pane active show" id="1a">
    <div class="container1 ">
        <div class=" row banking-bx">
          <div class="col-md-6 tab-listbx1"> 
              <div class="z-index"> 
                  <h1 class="font-size-40 text-white">The Significance of Social Media Marketing for Your Brand</h1>
              <p class="text-white"> In today's digital age, the world is interconnected through screens, and the epicenter of this
              virtual landscape is social media. For brands aiming to thrive, Social Media Marketing has
              evolved from an option to a necessity. Here's why

              </p>
              </div>  
            
          </div>

          <div class="col-md-6 tab-listbx">


         <ul class="t-list">
              <div class="swiper mySwiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
              <div class="swiper-wrapper" id="swiper-wrapper-944cbe7ee4444c0a" aria-live="off" style="transition-duration: 0ms; transition-delay: 0ms;">
             

              <div class="swiper-slide" role="group" aria-label="2 / 4" style="width: 635px; opacity: 1; transform: translate3d(-635px, 0px, 0px); transition-duration: 0ms;">
                <li><a href="#">Global Reach, Local Impact: </a></li>
                 <p>Social media platforms have erased geographical boundaries.
                  With billions of users active daily, your brand can transcend borders and reach a global
                  audience, while still catering to local markets.</p>
                  <img src="images/industries/food/ecommerce.png" class="width-200">

              </div>

               

              <div class="swiper-slide swiper-slide-prev" role="group" aria-label="3 / 4" style="width: 635px; opacity: 1; transform: translate3d(-1270px, 0px, 0px); transition-duration: 0ms;">
                 <li><a href="#">Engagement that Matters</a></li>
                  <p> Social media isn't a monologue; it's a dialogue. It allows  you to
                    engage directly with your audience, responding to comments, addressing concerns, and
                    building meaningful relationships that foster loyalty.
                  </p>
                  <img src="images/industries/food/person.png" class="width-200">

              </div>

               <div class="swiper-slide swiper-slide-visible swiper-slide-active" role="group" aria-label="4 / 4" style="width: 635px; opacity: 1; transform: translate3d(-1905px, 0px, 0px); transition-duration: 0ms;">
                 <li><a href="#">Spotlight on Authenticity</a></li>
                 <p>  Consumers today seek more than just products; they crave
                    authentic experiences. Social media provides a platform to showcase your brand's
                    personality, values, and culture, connecting on a deeper level.</p>
                  <img src="images/industries/food/social.png" class="width-200">

               </div>

                <div class="swiper-slide swiper-slide-visible swiper-slide-active" role="group" aria-label="4 / 4" style="width: 635px; opacity: 1; transform: translate3d(-1905px, 0px, 0px); transition-duration: 0ms;">
                 <li><a href="#">Data-Driven Insights</a></li>
                 <p>   The digital realm offers a treasure trove of data. Social  media analytics
                  provide invaluable insights into audience behavior, preferences, and trends, enabling you to
                  fine-tune your strategies for optimum results.</p>
                  <img src="images/industries/food/social.png" class="width-200">

               </div>

                <div class="swiper-slide swiper-slide-visible swiper-slide-active" role="group" aria-label="4 / 4" style="width: 635px; opacity: 1; transform: translate3d(-1905px, 0px, 0px); transition-duration: 0ms;">
                 <li><a href="#">Amplification of Brand Awareness</a></li>
                 <p>A strong social media presence elevates brand
                    awareness. With each share, retweet, or mention, your brand's reach expands exponentially,
                    enhancing its visibility and resonance</p>
                  <img src="images/industries/food/social.png" class="width-200">

               </div>

                     <div class="swiper-button-next swiper-button-disabled" tabindex="-1" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-944cbe7ee4444c0a" aria-disabled="true">
                       <img src="images/icons/right-arrow.png">
                     </div>
                  
                      <div class="autoplay-progress">
                        <svg viewBox="0 0 48 48" style="--progress: 0;">
                          <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span>5s</span>
                      </div>

                     <div class="swiper-pagination mt-5 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet" tabindex="0">1</span><span class="swiper-pagination-bullet" tabindex="0">2</span><span class="swiper-pagination-bullet" tabindex="0">3</span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" aria-current="true">4</span></div>

                 </div>
        <div class=" row banking-bx">
               <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
         <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div></ul>  
          </div>
        </div>

    </div>
  </div>
  <div class="tab-pane" id="2a">
     <div class="container1">
        <div class="row banking-bx"> 

          <div class="col-md-6 tab-listbx1"> 
              <div class="z-index"> 
              <h1 class="font-size-40 text-white"> Power of Our Scale Up Funnel in Social Media Marketing</h1>
              <p class="text-white"> Welcome to the heart of our Social Media Marketing strategy – the Scale Up Funnel. At
            Viralon, we don't just aim to help your brand exist in the digital realm; we're here to make it
            thrive, evolve, and conquer. Let's dive into each stage of our Scale Up Funnel and uncover
            the magic we bring to the table
              </p>

              </div>  
            
          </div>

          <div class="col-md-6 tab-listbx">
            <ul class="t-list">
               <div class="swiper mySwiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
                <div class="swiper-wrapper" id="swiper-wrapper-944cbe7ee4444c0a" aria-live="off" style="transition-duration: 300ms;">
                 <div class="swiper-slide" role="group" aria-label="1 / 4" style="width: 635px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                   <li><a href="#" class="aos-init aos-animate" data-aos="fade-down" data-aos-duration="2000">Build: Laying the Foundation for Success</a> 
                    <p>
                      Here's where the journey begins. We lay a solid foundation by understanding your brand,
                      your goals, and your audience. Our experts dive deep to comprehend what makes your
                      brand unique. Armed with insights, we build a strategic roadmap tailored to your brand's
                      aspirations. This stage is all about setting the stage for a stellar Social Media Marketing
                      journey.
                    </p>
                    <img src="images/industries/food/nutrion.png" class="width-200">

                 </li>
                 </div>

                <div class="swiper-slide swiper-slide-prev" role="group" aria-label="2 / 4" style="width: 635px; opacity: 1; transform: translate3d(-635px, 0px, 0px); transition-duration: 0ms;">
                  <li><a href="#">Attract: Captivating the Right Crowd</a></li>
                 <p>Once the groundwork is set, it's time to roll out the red carpet for your ideal audience. We
                  craft magnetic content that speaks directly to your target demographic. Through engaging
                  visuals, compelling copy, and a sprinkle of creativity, we draw in the right people. The goal?
                  To turn passive scrollers into active engagers.</p>
                    <img src="images/industries/food/ecommerce1.png" class="width-200">

                </div>

                 

               
                 <div class="swiper-slide swiper-slide-next" role="group" aria-label="4 / 4" style="width: 635px; opacity: 0; transform: translate3d(-1905px, 0px, 0px); transition-duration: 0ms;">
                   <li><a href="#">Engage: Sparking Conversations and Connections</a></li>
                   <p>Engagement is where the magic happens. We're not here to simply talk at your audience;
                    we're here to converse, connect, and create relationships. Our interactive strategies
                    encourage comments, shares, and discussions. We're the matchmakers, and engagement is
                    the spark that ignites lasting connections between your brand and its followers.
                    </p>
                    <img src="images/industries/food/social1.png" class="width-200">

                 </div>

                  <div class="swiper-slide swiper-slide-visible swiper-slide-active" role="group" aria-label="3 / 4" style="width: 635px; opacity: 1; transform: translate3d(-1270px, 0px, 0px); transition-duration: 0ms;">
                   <li><a href="#">Convert: Turning Interest into Action</a></li>
                    <p>Engagement is wonderful, but conversions make the real difference. In this stage, we guide
                    your engaged audience towards taking action – be it signing up, making a purchase, or filling
                    out a form. Our targeted approach ensures that those who've shown interest now become
                    dedicated supporters of your brand.

                    </p>
                    <img src="images/industries/food/person1.png" class="width-200">

                </div>

                 <div class="swiper-slide swiper-slide-visible swiper-slide-active" role="group" aria-label="3 / 4" style="width: 635px; opacity: 1; transform: translate3d(-1270px, 0px, 0px); transition-duration: 0ms;">
                   <li><a href="#">Scale: Elevating Your Brand to New Heights</a></li>
                    <p>By now, your brand's momentum is unstoppable. But we're not stopping there. The Scale
                    stage is all about amplifying your success. We fine-tune strategies, expand reach, and
                    capitalize on the insights we've gathered along the way. Scaling isn't just about growth; it's
                    about sustainable growth that stands the test of time.

                    </p>
                    <img src="images/industries/food/person1.png" class="width-200">

                </div>


                       <div class="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-944cbe7ee4444c0a" aria-disabled="false">
                         <img src="images/icons/right-arrow.png">
                       </div>
                       
                        <div class="autoplay-progress">
                          <svg viewBox="0 0 48 48" style="--progress: 0.0031999999999999806;">
                            <circle cx="24" cy="24" r="20"></circle>
                          </svg>
                          <span>5s</span>
                        </div>

                       <div class="swiper-pagination mt-5 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>

                   </div>
                 <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </ul> 
          </div>
        </div>
      </div>

  </div>

  <div class="tab-pane" id="3a">
     <div class="container1 ">
        <div class=" row banking-bx">
          <div class="col-md-6 tab-listbx1"> 
              <div class="z-index"> 
                  <h1 class="font-size-40 text-white">Social Media Marketing: 5 Rock-Solid Reasons
                  </h1>
              <p class="text-white">Hey, savvy brand owner! We get it – picking  the right Social Media Marketing partner is a big
                deal. Well, consider us your brand's new best friend.
                Here's why teaming up with Viralon is a choice you won't regret:

              </p>
              </div>  
            

         
          </div>

          <div class="col-md-6 tab-listbx">
           <ul class="t-list">
              <div class="swiper mySwiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
              <div class="swiper-wrapper" id="swiper-wrapper-944cbe7ee4444c0a" aria-live="off" style="transition-duration: 300ms;">
               <div class="swiper-slide" role="group" aria-label="1 / 4" style="width: 635px; opacity: 1; transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;">
                 <li><a href="#" class="aos-init aos-animate" data-aos="fade-down" data-aos-duration="2000">Strategic Wizards at Your Service</a> 
                  <p>Say goodbye to guesswork. Our squad of strategic masterminds knows the ins and outs of
                  Social Media Marketing. We don't just post; we plot. Expect plans that align with your
                  brand's goals and hit the bullseye every time.</p>
                  <img src="images/industries/food/cloud-kitchen.png" class="width-200">

               </li>
               </div>

              <div class="swiper-slide swiper-slide-prev" role="group" aria-label="2 / 4" style="width: 635px; opacity: 1; transform: translate3d(-635px, 0px, 0px); transition-duration: 0ms;">
                <li><a href="#">Creativity That Turns Heads</a></li>
               <p> Yawn-worthy content? Not on our watch. Our creative geniuses are all about that wow
                  factor. We craft thumb-stopping, jaw-dropping content that makes your brand an instant
                  attention magnet. Prepare for the spotlight!
                  </p>
               <img src="images/industries/food/augmented.png" class="width-200">

              </div>

               

              <div class="swiper-slide swiper-slide-visible swiper-slide-active" role="group" aria-label="3 / 4" style="width: 635px; opacity: 1; transform: translate3d(-1270px, 0px, 0px); transition-duration: 0ms;">
                 <li><a href="#">Data-Driven Brilliance</a></li>
                  <p>Numbers speak, and we're fluent in data. Our strategies aren't just pretty; they're backed by
                  solid analytics. We track, measure, and tweak, ensuring your brand's success is grounded in
                  insights, not guesswork.
                  </p>
                  <img src="images/industries/food/mobile.png" class="width-200">

              </div>

               <div class="swiper-slide swiper-slide-next" role="group" aria-label="4 / 4" style="width: 635px; opacity: 0; transform: translate3d(-1905px, 0px, 0px); transition-duration: 0ms;">
                 <li><a href="#"> Your Brand's BFF</a></li>
                 <p>Your success is our obsession. We're not just a service provider; we're your brand's most
                    enthusiastic cheerleaders. We're invested in your growth and dedicated to taking your brand
                    to new heights, every step of the way.
                    </p>
                  <img src="images/industries/food/smart.png" class="width-200">

               </div>

                <div class="swiper-slide swiper-slide-next" role="group" aria-label="4 / 4" style="width: 635px; opacity: 0; transform: translate3d(-1905px, 0px, 0px); transition-duration: 0ms;">
                 <li><a href="#">Proven Results, Happy Clients</a></li>
                 <p>Don't just take our word for it – our portfolio speaks volumes. We've transformed brands,
              boosted engagement, and driven real, measurable results. The success stories of our happy
              clients are the best testament to our expertise.

                    </p>
                  <img src="images/industries/food/smart.png" class="width-200">

               </div>

                     <div class="swiper-button-next sn" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-944cbe7ee4444c0a" aria-disabled="false">
                       <img src="images/icons/right-arrow.png">
                     </div>
                     
                      <div class="autoplay-progress">
                        <svg viewBox="0 0 48 48" style="--progress: 0.0031999999999999806;">
                          <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span>5s</span>
                      </div>

                     <div class="swiper-pagination mt-5 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>

                 </div>
               <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span><span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
           </ul> 
             
          </div>
        </div>

      </div>
  </div>

   

    

</div>

        <p class="para mt-5"> Ready to give your brand the Social Media Marketing boost it deserves? Choose Viralon,
  where strategy meets creativity, and your brand's success is our top priority.
   Your brand's journey to digital stardom starts here!</p>
     </div>
</section> */}
    <div className="specil-bx">
      <div className="container">
        <div className="get-freebx">
          {/* <div> 
    <h2> <span style="color:black;">Get a  FREE 2</span> hrs consultation by our experts</h2>
  </div> */}
          <div>
            {/*  <div class="mdtop studies-btn book-btn">
<a href="#" class="btn btn-primary trans animated pulse abt-butn-bot">Talk to Expert<img src="./images/icons/next.png" class="arrow  next-arow arrow1  animate-right-to-left"></a>

 </div> */}
          </div>
        </div>
      </div>
    </div>
    <div className="shapebx">
      <img src="/images/shape.png" />
    </div>
    {/*-------------- Subscribe Section Codes Start From Here -------------*/}
    <Subscriber/>
    {/*-------------- Subscribe Section Codes End From Here -------------*/}
    {/*-------------- Footer Section Codes Start From Here -------------*/}
    <Footer/>
    {/*-------------- Footer Section Codes End From Here -------------*/}
    {/* Aos Animation */}
    {/* Swiper JS */}
    {/* Initialize Swiper */}
    {/*  */}
    {/* Initialize Swiper */}
    {/* Initialize Swiper 1 */}
    {/* Our Methodollgy Initialize Swiper */}
    {/* Sub-Mega Menus Script */}
    {/* For Remove Before Icon */}
  </section>
</>

  )
}

export default searchEngineOptimization