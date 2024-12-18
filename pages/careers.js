import React, { useState } from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialShare from "../components/SocialShare";
import Subscriber from "../components/Subscriber";

import CustomHead from "../components/CustomHead";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


import "react-toastify/dist/ReactToastify.css";
const Careers = () => {

  const [loading, setLoading] = useState(false);

  const handleFormSubmission = async (event) => {
      event.preventDefault(); // Prevent the default form submission
      setLoading(true); // Set loading state to true
  
      const form = event.target;
      const formDataObj = new FormData(form);
  
      try {
          const response = await fetch(form.action, {
              method: form.method,
              body: formDataObj,
          });
  
          if (!response.ok) {
              throw new Error("Network response was not ok");
          }
  
          // Show success toast
          toast.success("Thank you for applying!");
  
          // Reset form fields
          form.reset();
      } catch (error) {
          console.error("Error:", error);
          // Show error toast
          toast.error("There was an error submitting the form. Please try again.");
      } finally {
          setLoading(false); // Set loading state to false
      }
  };
  
  
  


  return (
    <>
      <CustomHead
        title="Viralon Careers | Shape Your Future Here | Join Our Team"
        keywords="Viralon,Careers"
        description=" Explore exciting career opportunities at Viralon. Join us in shaping the future of digital marketing. Your journey begins here"
      />
      <Header />
      <SocialShare />
      <section id="what-we-do">
        {/*-------------- Hero Section Codes Start From Here -------------*/}
        <section
          className="section hero-section-2"
          style={{
            backgroundImage: "url(/images/hero-banners/careers.jpg)",
            backgroundPosition: "center",
          }}
        >
          <div className="overlayer" />
          <div className="container">
            <h1 className="page-heading">
              <span className="material-icons-round icon">groups</span>Careers
            </h1>
          </div>
        </section>
        {/*-------------- Hero Section Codes End From Here -------------*/}
        {/* Job Positions Section */}
        <section className="pt-5 pb-5">
          <div className="container1">
            <div
              className="shapbx aos-init aos-animate"
              data-aos="fade-down"
              data-aos-duration={2000}
            >
              <h3 className="work-heading">Lucknow Location</h3>
            </div>
            <h1
              className="heading1 aos-init aos-animate"
              data-aos="zoom-in"
              data-aos-duration={2000}
            >
              Open <span className="text-gold">Positions</span>
            </h1>

          
          </div>
        </section>

        {/* Apply Modals for each job */}
        <div className="container">
          <div className="row  align-items-center justify-content-between  pt-4 pb-4 positionbx">
          <div className="col-md-6 po-titles">
            <h2>Content Writer (2-3 Years)</h2>
            <p>Full Time <span className="bullet">.</span>Marketing</p>
     
          </div>
          <div className="col-md-6 apply-now-bx">
             <button className="apply-now-btn" data-toggle="modal" data-target="#exampleModalCenter2" fdprocessedid="t2bllc">Apply Now <i className="ri-arrow-right-circle-line"></i></button>
          </div>
          </div>
          <div className="row  align-items-center justify-content-between pt-4 pb-4 positionbx">
          <div className="col-md-6 po-titles">
            <h2>Graphics Designer (1-3 Years)</h2>
            <p>Full Time <span className="bullet">.</span>Marketing</p>
     
          </div>
          <div className="col-md-6 apply-now-bx">
             <button className="apply-now-btn" data-toggle="modal" data-target="#exampleModalCenter" fdprocessedid="4gi7w5">Apply Now <i className="ri-arrow-right-circle-line"></i></button>
          </div>
          </div>
          <div className="row  align-items-center justify-content-between  pt-4 pb-4 positionbx">
          <div className="col-md-6 po-titles">
            <h2>Video Editor (1-5 Years)</h2>
            <p>Full Time <span className="bullet">.</span>Marketing</p>
     
          </div>
          <div className="col-md-6 apply-now-bx">
             <button className="apply-now-btn" data-toggle="modal" data-target="#exampleModalCenter1" fdprocessedid="phnrzc">Apply Now <i className="ri-arrow-right-circle-line"></i></button>
          </div>
          </div>
        </div>
      </section>

    {/* ....................for graphics designer.......................... */}

    <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog careers-modal modal-dialog-centered" role="document">
         <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLongTitle"> </h5>
                <h2 className="bold">Graphics Designer (1-3 Years)</h2> <button type="button" className="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
            </div>
            <div className="modal-body">
                <p>Full Time <span>•</span> Marketing</p>
                <h4 className="bold font20"><strong>Whats it About:</strong></h4>
                <p className="font14">Do you want to sell sugar water for the rest of your life, or do you want to come with me and change the world?” – This is what Steve Jobs said to John Sculley, then Pepsi CEO, to lure him into Apple. Today, Apple happens to be the most profitable company in the world.&nbsp;</p>
                <p className="font14">Here’s Team Viralon asking you – Do you want to work in a regular 9 to 5 job in the background, or do you want to work with passionate people in an exciting work environment and change the world of social media marketing?</p>
                <p className="font14">We are currently seeking a Paid Media Lead to focus on developing cross-channel digital media strategies and managing and optimizing media efforts on an ongoing basis across all digital channels including paid search, display, and social.</p>
                <h4 className="bold font20"><strong>Key Responsibilities:</strong></h4>
                <ul className="list-styled">
                    <li>Manage end-to-end digital media campaigns and seek new areas of opportunity through research and analysis, campaign strategy, ad copy creation (search only), bid management, CPA optimization, and landing page testing.</li>
                    <li>Work with cross-functional teams including other media specialists to plan, implement, and improve account performance aligned with client goals and initiatives.</li>
                    <li>Proactively manage relationships with media vendors including search engines and social platforms (Google AdWords, Facebook Ads, Bing/MSN, LinkedIn).</li>
                    <li>Provide benchmark and tracking reports to Account Managers, Clients, and Media Team on key performance indicators and provide insights on how these map to larger client goals.</li>
                    <li>Analyze trends and improve media performance based on the client’s KPIs.</li>
                    <li>Drive innovation and implement testing strategies to continually uncover optimization levers, enhance learning, and improve performance.</li>
                </ul>
                <h4 className="bold font20"><strong>Must Have:</strong></h4>
                <ul className="list-styled">
                    <li>Minimum 1 year of digital media planning and buying experience with hands on experience specifically with self-service media including paid search and social advertising; agency environment a plus.</li>
                    <li>Experience with online marketing metrics such as return-on- investment, click-through rate, cost-per-click, cost-per-action, conversion rate, average order size, etc.</li>
                    <li>Exceptional analytics, project management skills, writing and organizational skills.</li>
                    <li>Ability to work in a fast paced environment.</li>
                    <li>Proficiency with Microsoft Office, especially Excel.</li>
                    <li>Experience with 3rd party media tools such as Adobe Media Optimizer, Kenshoo, Marin, DoubleClick, etc. is a plus.</li>
                </ul>
                <h4 className="bold font20"><strong>Advantage Viralon</strong><strong>:</strong></h4>
                <ul className="list-styled">
                    <li>Work with a bunch of people who are crazy about communication and content; and are happy to spend hours at end fussing over just the correct combination of words.</li>
                    <li>Work out of an office that’s nothing like an office. We hate cubicles and dress codes, and love crazy posters and endless chai coffee discussions.</li>
                    <li>We’ve worked in jobs with crazy timings, and understand the importance of having a life. So we’ll all join you at that pub for drinks after you’re done for the day.</li>
                    <li>We are young and growing fast, and working with us will take you on a roller coaster growth ride. And this roller coaster only goes up, up, up baby!</li>
                    <li>We just moved to a new hideout, have a look : </li>
                </ul>
                <h4 className="bold font20">Apply for this job here:</h4>
                <div role="form" className="wpcf7" id="wpcf7-f540-o12" lang="en-US" dir="ltr">
                    <div className="screen-reader-response">
                        <p role="status" aria-live="polite" aria-atomic="true"></p>
                        <ul> </ul>
                    </div>
                    {/* https://script.google.com/macros/s/AKfycbzzocX9rAfgddYBEgOJsRWywxJJo9epFJ4Eg5S8sz9a2o9qzGl7b37XtpiflzJiwKZX/exec */}
                    <ToastContainer />
                    
                    <form action="https://script.google.com/macros/s/AKfycbzbPwNQoSCJV1Dz0irSuvYBwoXrR2sWJU1YGUBVucWnS6ni4br-VTiL8MjEWogSzda3/exec" 
                        method="post" enctype="multipart/form-data" className="wpcf7-form init" onSubmit={handleFormSubmission}>
                      <div className="career-form-wrap">
                          <div className="career-form d-flex flex-wrap">
                              <div className="col-12 pt-3 px-0">
                                  <input type="hidden" name="appliedPosition" value="Graphics Designer (1-3 Years)" className="wpcf7-form-control wpcf7-hidden"/>
                              </div>
                              <div className="col-12 pt-3 px-0">
                                  <span className="wpcf7-form-control-wrap your-name">
                                      <input type="text" name="your-name" size="40" className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" placeholder="Name*" required />
                                  </span>
                              </div>
                              <div className="col-12 pt-3 px-0">
                                  <span className="wpcf7-form-control-wrap your-email">
                                      <input type="email" name="your-email" size="40" className="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control" placeholder="Email*" required />
                                  </span>
                              </div>
                              <div className="col-12 pt-3 px-0">
                                  <span className="wpcf7-form-control-wrap phoneNumber">
                                      <input type="tel" name="phoneNumber" size="40" maxlength="10" minlength="10" className="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control" placeholder="Phone Number*" required />
                                  </span>
                              </div>
                              <div className="col-12 pt-3 px-0">
                                  <p className="font14 bold">Upload CV*</p>
                                  <span className="wpcf7-form-control-wrap uploadCV">
                                  {/* <input type="file" name="uploadCV" accept=".pdf" required /> */}
                                      <input type="file" name="uploadCV" size="40" className="wpcf7-form-control wpcf7-file wpcf7-validates-as-required" accept=".pdf,.doc,.docx" required />
                                  </span>
                              </div>
                              <div className="col-12 pt-3 px-0">
                                  <button type="submit" className="btn btn-primary">Submit Now</button>
                                  {loading && (
                                    <div id="loader-overlay">
                                      <div className="spinner"></div>
                                      <p>Loading...</p>
                                    </div>
                                  )}
                              </div>
                          </div>
                      </div>
                      <div className="wpcf7-response-output" aria-hidden="true"></div>
                    </form>
                    
                </div>
            </div>
        </div>
      </div>
    </div>




    {/* ....................for video editor.......................... */}
{/* 
    <div class="modal fade" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog careers-modal modal-dialog-centered" role="document">
         <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle"> </h5>
                <h2 class="bold">Video Editor (1-6 Years)</h2> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
            </div>
            <div class="modal-body">
                <p>Full Time <span>•</span> Marketing</p>
                <h4 class="bold font20"><strong>Whats it About:</strong></h4>
                <p class="font14">Do you want to sell sugar water for the rest of your life, or do you want to come with me and change the world?” – This is what Steve Jobs said to John Sculley, then Pepsi CEO, to lure him into Apple. Today, Apple happens to be the most profitable company in the world.&nbsp;</p>
                <p class="font14">Here’s Team Viralon asking you – Do you want to work in a regular 9 to 5 job in the background, or do you want to work with passionate people in an exciting work environment and change the world of social media marketing?</p>
                <p class="font14">We are currently seeking a Paid Media Lead to focus on developing cross-channel digital media strategies and managing and optimizing media efforts on an ongoing basis across all digital channels including paid search, display, and social.</p>
                <h4 class="bold font20"><strong>Key Responsibilities:</strong></h4>
                <ul class="list-styled">
                    <li>Manage end-to-end digital media campaigns and seek new areas of opportunity through research and analysis, campaign strategy, ad copy creation (search only), bid management, CPA optimization, and landing page testing.</li>
                    <li>Work with cross-functional teams including other media specialists to plan, implement, and improve account performance aligned with client goals and initiatives.</li>
                    <li>Proactively manage relationships with media vendors including search engines and social platforms (Google AdWords, Facebook Ads, Bing/MSN, LinkedIn).</li>
                    <li>Provide benchmark and tracking reports to Account Managers, Clients, and Media Team on key performance indicators and provide insights on how these map to larger client goals.</li>
                    <li>Analyze trends and improve media performance based on the client’s KPIs.</li>
                    <li>Drive innovation and implement testing strategies to continually uncover optimization levers, enhance learning, and improve performance.</li>
                </ul>
                <h4 class="bold font20"><strong>Must Have:</strong></h4>
                <ul class="list-styled">
                    <li>Minimum 1 year of digital media planning and buying experience with hands on experience specifically with self-service media including paid search and social advertising; agency environment a plus.</li>
                    <li>Experience with online marketing metrics such as return-on- investment, click-through rate, cost-per-click, cost-per-action, conversion rate, average order size, etc.</li>
                    <li>Exceptional analytics, project management skills, writing and organizational skills.</li>
                    <li>Ability to work in a fast paced environment.</li>
                    <li>Proficiency with Microsoft Office, especially Excel.</li>
                    <li>Experience with 3rd party media tools such as Adobe Media Optimizer, Kenshoo, Marin, DoubleClick, etc. is a plus.</li>
                </ul>
                <h4 class="bold font20"><strong>Advantage Viralon</strong><strong>:</strong></h4>
                <ul class="list-styled">
                    <li>Work with a bunch of people who are crazy about communication and content; and are happy to spend hours at end fussing over just the correct combination of words.</li>
                    <li>Work out of an office that’s nothing like an office. We hate cubicles and dress codes, and love crazy posters and endless chai coffee discussions.</li>
                    <li>We’ve worked in jobs with crazy timings, and understand the importance of having a life. So we’ll all join you at that pub for drinks after you’re done for the day.</li>
                    <li>We are young and growing fast, and working with us will take you on a roller coaster growth ride. And this roller coaster only goes up, up, up baby!</li>
                    <li>We just moved to a new hideout, have a look : </li>
                </ul>
                <h4 class="bold font20">Apply for this job here:</h4>
                <div role="form" class="wpcf7" id="wpcf7-f540-o12" lang="en-US" dir="ltr">
                    <div class="screen-reader-response">
                        <p role="status" aria-live="polite" aria-atomic="true"></p>
                        <ul> </ul>
                    </div>
                    <form class="wpcf7-form init">
  
                        <div class="career-form-wrap">
                            <div class="career-form d-flex flex-wrap">
                                <div class="col-12 pt-3 px-0"> <input type="hidden" name="appliedPosition" value="Paid Media Specialist – Min 1 Year" class="wpcf7-form-control wpcf7-hidden"/> <input type="hidden" name="location" value="Bengaluru" class="wpcf7-form-control wpcf7-hidden"/></div>
                                <div class="col-12 pt-3 px-0"> <span class="wpcf7-form-control-wrap your-name"> <input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Name*" /></span> </div>
                                <div class="col-12 pt-3 px-0"> <span class="wpcf7-form-control-wrap your-email"> <input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control" aria-required="true" aria-invalid="false" placeholder="Email*" /></span> </div>
                                <div class="col-12 pt-3 px-0"> <span class="wpcf7-form-control-wrap phoneNumber"> <input type="tel" name="phoneNumber" value="" size="40" maxlength="10" minlength="10" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control" aria-required="true" aria-invalid="false" placeholder="Phone Number*" /></span> </div>
                                <div class="col-12 pt-3 px-0">
                                    <p class="font14 bold">Upload CV*</p>
                                    <p> <span class="wpcf7-form-control-wrap uploadCV"> <input type="file" name="uploadCV" size="40" class="wpcf7-form-control wpcf7-file wpcf7-validates-as-required" id="cv" accept=".pdf,.doc,.docx" aria-required="true" aria-invalid="false"/></span> </p>
                                </div>
                                <div class="col-12 pt-3 px-0">
                                    <p class="font14 bold">Upload Portfolio</p>
                                    <p> <span class="wpcf7-form-control-wrap uploadPortfolio"> <input type="file" name="uploadPortfolio" size="40" class="wpcf7-form-control wpcf7-file" id="portfolios" accept=".pdf,.doc,.docx" aria-invalid="false" /></span> </p>
                                    <h4 class="bold font20 or">OR</h4>
                                    <p> <span class="wpcf7-form-control-wrap portfolioLink"> <input type="url" name="portfolioLink" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-url wpcf7-validates-as-url form-control" aria-invalid="false" placeholder="Portfolio Link" /></span> </p>
                                </div>
                                <div class="col-12 pt-3 px-0"> <button type="submit" class="btn btn-primary">Submit Now</button> <span class="ajax-loader"></span> </div>
                            </div>
                        </div>
                        <div class="wpcf7-response-output" aria-hidden="true"></div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div> */}


    {/* ....................for Content Writer .......................... */}

    {/* <div class="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="modal-dialog careers-modal modal-dialog-centered" role="document">
         <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle"> </h5>
                <h2 class="bold">Content Writer  (1-5 Years)</h2> <button type="button" class="close" data-dismiss="modal" aria-label="Close"> <span aria-hidden="true">×</span> </button>
            </div>
            <div class="modal-body">
                <p>Full Time <span>•</span> Marketing</p>
                <h4 class="bold font20"><strong>Whats it About:</strong></h4>
                <p class="font14">Do you want to sell sugar water for the rest of your life, or do you want to come with me and change the world?” – This is what Steve Jobs said to John Sculley, then Pepsi CEO, to lure him into Apple. Today, Apple happens to be the most profitable company in the world.&nbsp;</p>
                <p class="font14">Here’s Team Viralon asking you – Do you want to work in a regular 9 to 5 job in the background, or do you want to work with passionate people in an exciting work environment and change the world of social media marketing?</p>
                <p class="font14">We are currently seeking a Paid Media Lead to focus on developing cross-channel digital media strategies and managing and optimizing media efforts on an ongoing basis across all digital channels including paid search, display, and social.</p>
                <h4 class="bold font20"><strong>Key Responsibilities:</strong></h4>
                <ul class="list-styled">
                    <li>Manage end-to-end digital media campaigns and seek new areas of opportunity through research and analysis, campaign strategy, ad copy creation (search only), bid management, CPA optimization, and landing page testing.</li>
                    <li>Work with cross-functional teams including other media specialists to plan, implement, and improve account performance aligned with client goals and initiatives.</li>
                    <li>Proactively manage relationships with media vendors including search engines and social platforms (Google AdWords, Facebook Ads, Bing/MSN, LinkedIn).</li>
                    <li>Provide benchmark and tracking reports to Account Managers, Clients, and Media Team on key performance indicators and provide insights on how these map to larger client goals.</li>
                    <li>Analyze trends and improve media performance based on the client’s KPIs.</li>
                    <li>Drive innovation and implement testing strategies to continually uncover optimization levers, enhance learning, and improve performance.</li>
                </ul>
                <h4 class="bold font20"><strong>Must Have:</strong></h4>
                <ul class="list-styled">
                    <li>Minimum 1 year of digital media planning and buying experience with hands on experience specifically with self-service media including paid search and social advertising; agency environment a plus.</li>
                    <li>Experience with online marketing metrics such as return-on- investment, click-through rate, cost-per-click, cost-per-action, conversion rate, average order size, etc.</li>
                    <li>Exceptional analytics, project management skills, writing and organizational skills.</li>
                    <li>Ability to work in a fast paced environment.</li>
                    <li>Proficiency with Microsoft Office, especially Excel.</li>
                    <li>Experience with 3rd party media tools such as Adobe Media Optimizer, Kenshoo, Marin, DoubleClick, etc. is a plus.</li>
                </ul>
                <h4 class="bold font20"><strong>Advantage Viralon</strong><strong>:</strong></h4>
                <ul class="list-styled">
                    <li>Work with a bunch of people who are crazy about communication and content; and are happy to spend hours at end fussing over just the correct combination of words.</li>
                    <li>Work out of an office that’s nothing like an office. We hate cubicles and dress codes, and love crazy posters and endless chai coffee discussions.</li>
                    <li>We’ve worked in jobs with crazy timings, and understand the importance of having a life. So we’ll all join you at that pub for drinks after you’re done for the day.</li>
                    <li>We are young and growing fast, and working with us will take you on a roller coaster growth ride. And this roller coaster only goes up, up, up baby!</li>
                    <li>We just moved to a new hideout, have a look : </li>
                </ul>
                <h4 class="bold font20">Apply for this job here:</h4>
                <div role="form" class="wpcf7" id="wpcf7-f540-o12" lang="en-US" dir="ltr">
                    <div class="screen-reader-response">
                        <p role="status" aria-live="polite" aria-atomic="true"></p>
                        <ul> </ul>
                    </div>
                    <form class="wpcf7-form init">
                        <div class="career-form-wrap">
                            <div class="career-form d-flex flex-wrap">
                                <div class="col-12 pt-3 px-0"> <input type="hidden" name="appliedPosition" value="Paid Media Specialist – Min 1 Year" class="wpcf7-form-control wpcf7-hidden"/> <input type="hidden" name="location" value="Bengaluru" class="wpcf7-form-control wpcf7-hidden"/></div>
                                <div class="col-12 pt-3 px-0"> <span class="wpcf7-form-control-wrap your-name"> <input type="text" name="your-name" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required form-control" aria-required="true" aria-invalid="false" placeholder="Name*" /></span> </div>
                                <div class="col-12 pt-3 px-0"> <span class="wpcf7-form-control-wrap your-email"> <input type="email" name="your-email" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-required wpcf7-validates-as-email form-control" aria-required="true" aria-invalid="false" placeholder="Email*" /></span> </div>
                                <div class="col-12 pt-3 px-0"> <span class="wpcf7-form-control-wrap phoneNumber"> <input type="tel" name="phoneNumber" value="" size="40" maxlength="10" minlength="10" class="wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-required wpcf7-validates-as-tel form-control" aria-required="true" aria-invalid="false" placeholder="Phone Number*" /></span> </div>
                                <div class="col-12 pt-3 px-0">
                                    <p class="font14 bold">Upload CV*</p>
                                    <p> <span class="wpcf7-form-control-wrap uploadCV"> <input type="file" name="uploadCV" size="40" class="wpcf7-form-control wpcf7-file wpcf7-validates-as-required" id="cv" accept=".pdf,.doc,.docx" aria-required="true" aria-invalid="false"/></span> </p>
                                </div>
                                <div class="col-12 pt-3 px-0">
                                    <p class="font14 bold">Upload Portfolio</p>
                                    <p> <span class="wpcf7-form-control-wrap uploadPortfolio"> <input type="file" name="uploadPortfolio" size="40" class="wpcf7-form-control wpcf7-file" id="portfolios" accept=".pdf,.doc,.docx" aria-invalid="false" /></span> </p>
                                    <h4 class="bold font20 or">OR</h4>
                                    <p> <span class="wpcf7-form-control-wrap portfolioLink"> <input type="url" name="portfolioLink" value="" size="40" class="wpcf7-form-control wpcf7-text wpcf7-url wpcf7-validates-as-url form-control" aria-invalid="false" placeholder="Portfolio Link" /></span> </p>
                                </div>
                                <div class="col-12 pt-3 px-0"> <button type="submit" class="btn btn-primary">Submit Now</button> <span class="ajax-loader"></span> </div>
                            </div>
                        </div>
                        <div class="wpcf7-response-output" aria-hidden="true"></div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div> */}





      

      {/* Subscribe Section */}
      <Subscriber />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Careers;
