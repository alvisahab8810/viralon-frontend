import React from 'react';
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import SocialShare from "../../../components/SocialShare";
import PaidMediaSlider from '../../../components/PaidMediaSlider';
import PaidMediaMakeItHappen from '../../../components/PaidMediaMakeItHappen';
import Link from 'next/link';
import CustomHead from '../../../components/CustomHead';
const paidMediaMarketing = () => {
  return (
    <>

     <CustomHead title="Viralon | Reach More Customers with Paid Media Marketing"
      keywords="Viralon, Digital Marketing Agency, Paid Media Marketing" 
      description="Viralon is the best paid media marketing agency for your business growth." /> 
  <Header/>
  <SocialShare/>
  <section id="marketings">
    {/*-------------- Menu Section Codes Start From Here -------------*/}
    {/*-------------- Menu Section Codes End From Here -------------*/}
    {/*-------------- Hero Section Codes Start From Here -------------*/}
    <section className="section-sm">
    <video
           autoPlay={true}
           loop
           muted=""
           playsInline=""
           defaultmuted=""
           preload="auto"
     > 
        <source src="/images/hero-banners/paid-media.mp4" type="video/mp4" />
      </video>
    </section>
    <div className="mdtop pt-3 mt-5 studies-btn book-btn  d-block">
      <Link
        href="/contact-us">
        <div className="btn paid-btn btn-primary trans animated pulse abt-butn-bot"
      >
        Talk to Expert
        <img
          src="/images/icons/next.png"
          className="arrow  next-arow arrow1  animate-right-to-left"
        />
      </div>
      </Link>
    </div>
    {/*-------------- Hero Section Codes End From Here -------------*/}
    {/*-------------- Social Media Marketing Section Codes Start From Here -------------*/}
    <section className="pt-5">
      <div className="container">
        <h2 className="text-dark main-heading text-center font-size-30">
          Paid Media Marketing
        </h2>
        <p className="text-dark text-justi text-center max-width100 mt-3">
          In today's digital age, the competition for consumers' attention is
          fiercer than ever. That's where Paid Media Marketing comes into play,
          a strategic approach that enables businesses to stand out, connect
          with their target audience, and achieve tangible results.
        </p>
      </div>
      <section className="paid-media container mob-container">
        <div className="container">
          <div className="row flex-wrap-reverse max-width800 align-items-center">
            <div className="col-md-6 para-size">
              <h1 className=" pt-0 text-dark font-size-28">
                What is Paid Media Marketing?
              </h1>
              <p>
                Paid Media Marketing, often referred to as paid advertising, is
                a digital marketing strategy in which businesses pay to promote
                their content, products, or services on various online
                platforms. Unlike organic methods, such as SEO or social media
                posting, paid media marketing involves a budget allocation to
                ensure your message reaches a specific audience effectively.
              </p>
            </div>
            <div className="col-md-6 ">
              <img
                src="/images/paid-media-marketing/img1.jpg"
                className="m-auto d-block mb-md-0 mb-4 w-4s50 "
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </section>
    {/* Platform Section Start From Here */}
    <section className="platforms-section">
      <div className="container">
        <h2 className="text-dark main-heading text-center font-size-30">
          Platforms Used in Paid Media Marketing
        </h2>
        <p className="text-dark text-center max-width100 mt-3">
          Paid Media Marketing leverages a variety of online platforms to
          showcase your brand and engage potential customers. Let's dive into
          the major categories and platforms within each
        </p>
      </div>
      <div className="row  margin-top-15 margin-bottom-15 flex-wrap-reverse align-items-center mt-5 mb-5">
        <div className="container">
          {/*  <div class="pmmbx-container">
        <div class="style1">
          <h1> Search Engine Advertising</h1>
          <p>
            <strong>Google Ads:</strong> The undisputed leader in search engine advertising, Google Ads allows you to
            display your ads at the top of Google's search results pages. It's highly effective for reaching
            users actively searching for products or services.<br><br>

            <strong> Bing Ads:</strong> Similar to Google Ads, Bing Ads lets you advertise on Microsoft's search engine,
            Bing. It's particularly valuable for reaching a slightly different audience.
          </p>
        </div>
        <div class="style2">
          <h1>Social Media Advertising</h1>
          <p>
            Facebook Ads: With its vast user base and in-depth targeting options, Facebook Ads can put
          your brand in front of a highly segmented audience. This platform is excellent for both B2B
          and B2C marketing.<br><br>

          <strong> Instagram Ads:</strong> Owned by Facebook, Instagram offers visually appealing ad formats and is
          ideal for brands looking to engage younger, image-focused audiences.<br><br>

          <strong>Twitter Ads:</strong> Twitter Ads can help you promote your tweets or profiles to reach users
          interested in trending topics or niche markets.<br><br>

          <strong>  LinkedIn Ads:</strong> For B2B marketing, LinkedIn Ads provide access to a highly professional user
          base. You can target by job title, industry, and more.
          </p>
        </div>

        <div class="style3">
          <h1> Display Advertising</h1>
          <p> 
            <strong> Google Display Network:</strong> This expansive network allows you to display banner ads on
             millions of websites. It's excellent for brand awareness and remarketing.<br><br>

             <strong> Programmatic Advertising:</strong> An automated, data-driven approach that buys ad inventory in
             real-time across multiple websites. It maximizes ad placement efficiency.
          </p>
        </div>

        <div class="style4">

          <h1>Video Advertising</h1>
          <p>
            <strong> YouTube Ads:</strong> YouTube is the second-largest search engine globally, and video ads here can
            reach a massive audience.
          </p>
        </div>

        <div class="style5">
          <h1>Native Advertising</h1>
          <p>
            <strong>  Outbrain:</strong> Outbrain specializes in content discovery and native advertising, helping your
          content blend seamlessly with popular media websites.<br><br>

           <strong>  Taboola:</strong> Similar to Outbrain, Taboola is a native advertising platform that places your
           content on high-traffic websites.
          </p>
        </div>

        <div class="style6">
          <h1>Shopping Advertising</h1>
          <p>
           <strong>  Google Shopping:</strong> Ideal for e-commerce businesses, Google  Shopping ads display product
           images and information directly in search results.<br><br>

            <strong>  Amazon Advertising:</strong> If you're selling products on  Amazon, their advertising platform can
           significantly boost your visibility on the platform.
          </p>
        </div>

        <div class="style7">
          <h1>App Advertising</h1>
          <p> 
             <strong> Apple Search Ads:</strong>Promote your app within Apple's App Store, reaching users actively
             searching for new apps.<br><br>

            <strong> Google App Campaigns:</strong>Drive app installs and in-app  actions across Google's various
            platforms.
          </p>
        </div>

        <div class="style8">
          <h1>Remarketing</h1>
          <p>
            AdRoll: AdRoll specializes in remarketing campaigns, displaying your    ads to users who have
            previously visited your website.     <br><br>

           Each platform offers unique advantages and caters to different marketing objectives.
            Choosing the right mix of platforms depends on your business goals, target audience, and
           budget.  <br><br>
     
          In the ever-evolving landscape of digital marketing, Paid Media Marketing remains a potent
          tool to reach, engage, and convert your audience. By understanding the platforms available
          and tailoring your strategy, you can harness the full potential of paid media marketing to
          propel your business forward.
 

          </p>
        </div>
      </div> */}
          <div className="appFrame">
            <article className="accordion">
              <section id="acc0">
                <h2>
                  <a href="#acc0">Search Engine Advertising</a>
                </h2>
                <p
                  id="diary"
                  contentEditable="true"
                  style={{ outline: "none" }}
                >
                  <strong>Google Ads:</strong> The undisputed leader in search
                  engine advertising, Google Ads allows you to display your ads
                  at the top of Google's search results pages. It's highly
                  effective for reaching users actively searching for products
                  or services.
                  <br />
                  <br />
                  <strong> Bing Ads:</strong> Similar to Google Ads, Bing Ads
                  lets you advertise on Microsoft's search engine, Bing. It's
                  particularly valuable for reaching a slightly different
                  audience.
                </p>
              </section>
              <section id="acc1">
                <h2>
                  <a href="#acc1">Social Media Advertising</a>
                </h2>
                <p
                  id="diary"
                  contentEditable="true"
                  style={{ outline: "none" }}
                >
                  Facebook Ads: With its vast user base and in-depth targeting
                  options, Facebook Ads can put your brand in front of a highly
                  segmented audience. This platform is excellent for both B2B
                  and B2C marketing.
                  <br />
                  <br />
                  <strong> Instagram Ads:</strong> Owned by Facebook, Instagram
                  offers visually appealing ad formats and is ideal for brands
                  looking to engage younger, image-focused audiences.
                  <br />
                  <br />
                  <strong>Twitter Ads:</strong> Twitter Ads can help you promote
                  your tweets or profiles to reach users interested in trending
                  topics or niche markets.
                  <br />
                  <br />
                  <strong> LinkedIn Ads:</strong> For B2B marketing, LinkedIn
                  Ads provide access to a highly professional user base. You can
                  target by job title, industry, and more.
                </p>
              </section>
              <section id="acc2">
                <h2>
                  <a href="#acc2">Display Advertising</a>
                </h2>
                <p
                  id="diary"
                  contentEditable="true"
                  style={{ outline: "none" }}
                >
                  <strong> Google Display Network:</strong> This expansive
                  network allows you to display banner ads on millions of
                  websites. It's excellent for brand awareness and remarketing.
                  <br />
                  <br />
                  <strong> Programmatic Advertising:</strong> An automated,
                  data-driven approach that buys ad inventory in real-time
                  across multiple websites. It maximizes ad placement
                  efficiency.
                </p>
              </section>
              <section id="acc3">
                <h2>
                  <a href="#acc3">Video Advertising</a>
                </h2>
                <p
                  id="diary"
                  contentEditable="true"
                  style={{ outline: "none" }}
                >
                  {" "}
                  <strong> YouTube Ads:</strong> YouTube is the second-largest
                  search engine globally, and video ads here can reach a massive
                  audience.
                </p>
              </section>
              <section id="acc4">
                <h2>
                  <a href="#acc4">Native Advertising</a>
                </h2>
                <p
                  id="diary"
                  contentEditable="true"
                  style={{ outline: "none" }}
                >
                  <strong> Outbrain:</strong> Outbrain specializes in content
                  discovery and native advertising, helping your content blend
                  seamlessly with popular media websites.
                  <br />
                  <br />
                  <strong> Taboola:</strong> Similar to Outbrain, Taboola is a
                  native advertising platform that places your content on
                  high-traffic websites.
                </p>
              </section>
              <section id="acc5">
                <h2>
                  <a href="#acc5">Shopping Advertising</a>
                </h2>
                <p
                  id="diary"
                  contentEditable="true"
                  style={{ outline: "none" }}
                >
                  <strong> Google Shopping:</strong> Ideal for e-commerce
                  businesses, Google Shopping ads display product images and
                  information directly in search results.
                  <br />
                  <br />
                  <strong> Amazon Advertising:</strong> If you're selling
                  products on Amazon, their advertising platform can
                  significantly boost your visibility on the platform.
                </p>
              </section>
              <section id="acc6">
                <h2>
                  <a href="#acc6">App Advertising</a>
                </h2>
                <p
                  id="diary"
                  contentEditable="true"
                  style={{ outline: "none" }}
                >
                  <strong> Apple Search Ads:</strong>Promote your app within
                  Apple's App Store, reaching users actively searching for new
                  apps.
                  <br />
                  <br />
                  <strong> Google App Campaigns:</strong>Drive app installs and
                  in-app actions across Google's various platforms.
                </p>
              </section>
              <section id="acc7">
                <h2>
                  <a href="#acc7">Remarketing</a>
                </h2>
                <p
                  id="diary"
                  contentEditable="true"
                  style={{ outline: "none" }}
                >
                  AdRoll: AdRoll specializes in remarketing campaigns,
                  displaying your ads to users who have previously visited your
                  website. <br />
                  <br />
                  Each platform offers unique advantages and caters to different
                  marketing objectives. Choosing the right mix of platforms
                  depends on your business goals, target audience, and budget.{" "}
                  <br />
                  <br />
                  In the ever-evolving landscape of digital marketing, Paid
                  Media Marketing remains a potent tool to reach, engage, and
                  convert your audience. By understanding the platforms
                  available and tailoring your strategy, you can harness the
                  full potential of paid media marketing to propel your business
                  forward.
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    </section>
    {/* Platform Section End From Here */}
    {/* Core Task Section Start From Here */}
    {/* <div className="social-media">
      <h2 className="text-white s-heading text-center  pb-4 font-size-30">
        Core Tasks in Viralon's Paid Media Marketing Services
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
                        Strategic Campaign Planning
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                      <p className="core-para">
                        We don't believe in throwing your budget at the wall and
                        hoping something sticks. Our experts meticulously plan
                        your paid media campaigns, identifying the most
                        effective platforms, targeting options, and ad formats
                        to achieve your specific goals
                      </p>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx  new-class">
                        <img src="/images/icons/strategic-plan.png" />
                      </div>
                      <h3>Strategic Campaign Planning</h3>
                      <p className="core-para">
                        We don't believe in throwing your budget at the wall and
                        hoping something sticks. Our experts meticulously plan
                        your paid media campaigns, identifying the most
                        effective platforms, targeting options, and ad formats
                        to achieve your specific goals
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
                        Keywords are the foundation of any successful paid media
                        campaign. We conduct comprehensive keyword research to
                        ensure your ads are not only seen but also seen by the
                        right audience. Continuous optimization ensures your
                        budget is spent wisely
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide"
                role="group"
                aria-label="3 / 18"
                style={{ width: "427.333px", marginRight: 30 }}
              >
                <div className="core-image">
                  <div className="core-underbx">
                    <div className="corecont">
                      <h3>
                        Ad Creation and A/B Testing
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/icon15.png" />
                      </div>
                      <h3>Ad Creation and A/B Testing</h3>
                      <p className="core-para">
                        Crafting compelling ads is an art, and we're the
                        artists. We create eye-catching, persuasive ad creatives
                        that resonate with your audience. Through rigorous A/B
                        testing, we refine and optimize your ads for maximum
                        impact.
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
                        Budget Management
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/budget.png" />
                      </div>
                      <h3>Budget Management</h3>
                      <p className="core-para">
                        {" "}
                        Effective budget allocation is crucial. We manage your
                        ad spend with precision, ensuring you get the most bang
                        for your buck. Our strategies maximize reach and
                        conversions while minimizing wastage
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
                        Performance Analysis and Reporting
                        <i className="ri-arrow-right-line right-icon" />
                      </h3>
                    </div>
                  </div>
                  <div className="core-overlay">
                    <div className="core-text">
                      <div className="core-iconbx">
                        <img src="/images/icons/icon7.png" />
                      </div>
                      <h3>Performance Analysis and Reporting</h3>
                      <p className="core-para">
                        Transparency is key. We provide regular, data-driven
                        reports that highlight key performance metrics. Our
                        experts analyze the data to identify opportunities for
                        improvement and adjust strategies accordingly.
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
    <PaidMediaSlider/>
    {/* Core Task Section End From Here */}
    {/* Significance Section Start From Here */}
    <section className="significance-section">
      <div className="container">
        <h2 className="text-dark main-heading text-center font-size-30">
          The Significance of Paid Media Marketing For Your Brand
        </h2>
        <p className="text-dark text-center max-width100 mt-3">
          Paid Media Marketing is more than just ads; it's your direct pathway
          to reaching potential customers. In a crowded digital landscape, it
          allows you to cut through the noise and deliver your message where it
          matters most. With the right strategy, it can
        </p>
        <div className="signi-container">
          <div className="signibx22">
            <div className="left-itemss">
              <div className="signi-left-itemsbxx">
                <div className="signi-items22">
                  <div className="left-items-icon">
                    <img src="/images/icons/brand1.png" />
                  </div>
                </div>
                <div className="left-items11">
                  <h3>Boost Brand Visibility</h3>
                  <p>
                    Gain instant visibility on search engines and social media
                    platforms
                  </p>
                </div>
              </div>
            </div>
            <div className="left-itemss ">
              <div className="signi-left-itemsbxx">
                <div className="signi-items22">
                  <div className="left-items-icon">
                    <img src="/images/icons/brand2.png" />
                  </div>
                </div>
                <div className="left-items11">
                  <h3>Drive Targeted Traffic</h3>
                  <p>Reach the right audience at the right time</p>
                </div>
              </div>
            </div>
            <div className="left-itemss ">
              <div className="signi-left-itemsbxx">
                <div className="signi-items22">
                  <div className="left-items-icon">
                    <img src="/images/icons/brand3.png" />
                  </div>
                </div>
                <div className="left-items11">
                  <h3>Enhance Conversion Rates</h3>
                  <p>Convert leads into customers more effectively.</p>
                </div>
              </div>
            </div>
            <div className="left-itemss ">
              <div className="signi-left-itemsbxx">
                <div className="signi-items22">
                  <div className="left-items-icon">
                    <img src="/images/icons/brand4.png" />
                  </div>
                </div>
                <div className="left-items11">
                  <h3> Maximize ROI</h3>
                  <p> Optimize your marketing spend for the best returns.</p>
                </div>
              </div>
            </div>
            <div className="left-itemss ">
              <div className="signi-left-itemsbxx">
                <div className="signi-items22">
                  <div className="left-items-icon">
                    <img src="/images/icons/brand5.png" />
                  </div>
                </div>
                <div className="left-items11">
                  <h3>Outpace Competition</h3>
                  <p>Stay ahead in a competitive market.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <section className=" make action-slider container">
      <div className="container">
        <h2 className="text-dark margin-bottom-22 main-heading text-center font-size-30">
          Making It Happen – Our Action Plan
        </h2>
        <div className="row flex-wrap-reverse max-width800 mt-5 margin-top-15  align-items-center">
          <div className="col-md-6  left-slider para-size">
            <div className="swiper mySwiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-11c10610b5dad108f2"
                aria-live="off"
                style={{ transitionDuration: "0ms", transitionDelay: "0ms" }}
              >
                <div className="swiper-slide">
                  <img
                    src="/images/paid-media-marketing/slider/img1.jpg"
                    alt="Understand Your Business Image"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="/images/paid-media-marketing/slider/img2.jpg"
                    alt="Craft Image"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="/images/paid-media-marketing/slider/img3.jpg"
                    alt="Execute With Pr Image"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="/images/paid-media-marketing/slider/img4.jpg "
                    alt="Analy and Optimize Image"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="/images/paid-media-marketing/slider/img5.jpg"
                    alt="Deliver Results Image"
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
            <div className="swiper mySwiper swiper-fade swiper-initialized swiper-horizontal swiper-watch-progress swiper-backface-hidden">
              <div
                className="swiper-wrapper"
                id="swiper-wrapper-a87b38bc6401ce16"
                aria-live="off"
                style={{ transitionDuration: "0ms", transitionDelay: "0ms" }}
              >
                <div className="swiper-slide">
                  <div className="action-content aos-init" data-aos="fade-up">
                    <p data-aos="fade-up" className="aos-init">
                      <b>Understand Your Business</b>
                      <br />
                      We delve deep into your business to understand your unique
                      goals and challenges.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="action-content aos-init" data-aos="fade-up">
                    <p data-aos="fade-up" className="aos-init">
                      <b>Craft a Tailored Strategy</b> <br />
                      We design a custom paid media strategy that aligns with
                      your objectives.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="action-content aos-init" data-aos="fade-up">
                    <p data-aos="fade-up" className="aos-init">
                      <b>Execute with Precision</b>
                      <br /> We implement the strategy with precision, keeping a
                      keen eye on performance.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="action-content aos-init" data-aos="fade-up">
                    <p data-aos="fade-up" className="aos-init">
                      <b>Analyze and Optimize</b>
                      <br />
                      We continuously analyze data, identifying opportunities
                      for improvement.
                    </p>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="action-content aos-init" data-aos="fade-up">
                    <p data-aos="fade-up" className="aos-init">
                      <b>Deliver Results</b>
                      <br />
                      Our focus is on delivering results that exceed your
                      expectations.
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
    <PaidMediaMakeItHappen/>
    <section className="solid-section">
      <div className="container">
        <h2 className="text-dark main-heading text-center font-size-30">
          Why Choose Viralon for Paid Media Marketing - 5 Solid Reasons
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
                <h3> Expertise</h3>
                <p>
                  {" "}
                  Our team of seasoned digital marketers brings a wealth of
                  experience to the table, ensuring your campaigns are in
                  capable hands.
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
                  We don't believe in one-size-fits-all solutions. Your
                  campaigns are tailored to your unique needs
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
                  We provide regular reports and updates, keeping you informed
                  every step of the way.
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
                  Our strategies are built on data analysis, ensuring every
                  decision is backed by insights.
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
                <h3>Results-Oriented</h3>
                <p>
                  We're not just about running campaigns; we're about delivering
                  measurable results that impact your bottom line.
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
          <div>
            <h2>
              {" "}
              <span style={{ color: "black" }}>Get a FREE 2</span> hrs
              consultation by our experts
            </h2>
          </div>
          <div>
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
    {/* Initialize Swiper */}
  </section>
  {/* Sub-Mega Menus Script */}
  {/* For Remove Before Icon */}
</>

  )
}

export default paidMediaMarketing