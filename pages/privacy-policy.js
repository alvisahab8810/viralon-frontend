import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialShare from "../components/SocialShare";
import Link from "next/link";
import Subscriber from "../components/Subscriber";
import CustomHead from "../components/CustomHead";
const PrivacyPolicy = () => {



  return (
    <>

   <CustomHead title="Viralon | Privacy Policy"
    keywords="Viralon,Privacy Policy" 
    description="Privacy Policy." /> 
      <Header />
      <SocialShare />
      <section id="our-work">
        {/*-------------- Menu Section Codes Start From Here -------------*/}
        {/*-------------- Menu Section Codes End From Here -------------*/}
        {/*-------------- Hero Section Codes Start From Here -------------*/}
        <section
          className="section hero-section-2"
          style={{ backgroundImage: "url(/images/hero-banners/privacy-policy.jpg)" }}
        >
          <div className="overlayer" />
          <div className="container">
            <h1 className="page-heading">
              <span className="material-icons-round icon">groups</span>Privacy Policy
            </h1>
          </div>
        </section>
        {/*-------------- Hero Section Codes End From Here -------------*/}

        <section className="privacy-section">
            <div className="container shadow-bx">
            <div class="shapbx aos-init aos-animate"> <h3 class="work-heading">Privacy Policy</h3></div>

           
            <h1 class="heading1 aos-init aos-animate">Privacy Policy for Viralon Digital Services  </h1>
             
                <p>
                    Last Updated: [27/04/2024]<br/>    
                </p>
                <p> Viralon Digital Services ("Viralon," "we," "us," or "our") is committed to protecting the 
                privacy of our clients and prospects. This Privacy Policy outlines how we collect, use,
                disclose, and safeguard the personal information of individuals who visit our website
                or engage with our digital marketing services.<br/> <br/>
                By accessing our website or using our services, you acknowledge that you have read,
                understood, and agree to be bound by this Privacy Policy.
                </p>
                
               
                
                <h3>1. Collection of Personal Information</h3> 

                <p> We collect personal information from clients and prospects in various ways, 
                including:</p>

                <ul>
                    <li>Information provided voluntarily, such as name, email address, phone number,
                    and company details.
                    </li>
                    <li>Information automatically collected when visiting our website, including IP 
                      address, browser type, operating system, and browsing behavior.</li>
                </ul>

               <h3> 2. Use of Personal Information</h3>

                <p>We use personal information for the following purposes:</p>

                <ul>
                    <li>To provide and maintain our services to clients.
                    </li>
                    <li>To communicate with clients and prospects about our services and 
                       promotions.</li>
                    <li>To customize and improve our website and services.</li>
                    <li>To analyze trends and user behavior for marketing and research purposes.</li>

                </ul>

           
                <h3>3. Disclosure of Personal Information</h3>

                <p> We may disclose personal information to third parties in the following 
                circumstances:</p>

                <ul>
                    <li>With client consent or as necessary to provide services.
                    </li>
                    <li>To comply with legal obligations or respond to lawful requests.</li>
                    <li>To protect the rights, property, or safety of Viralon, our clients, or others.</li>
                </ul>

                <h3> 4. Privacy Policy for Meta Ads, Google Ads, and LinkedIn Ads</h3>

                <p> When using advertising platforms such as Meta Ads (formerly Facebook Ads), 
                Google Ads, and LinkedIn Ads, we adhere to the following privacy practices:</p>

                <ul>
                    <li>We do not share client or prospect personal information with these platforms 
                      without consent.
                    </li>
                    <li>We use aggregated and anonymized data for advertising targeting and 
                     measurement purposes.</li>
                    <li>Clients and prospects may adjust their privacy settings on these platforms to 
                     control data sharing and ad preferences.</li>
                </ul>

               
               <h3>5. Security Measures</h3> 

               <p> We implement industry-standard security measures to protect personal information 
                from unauthorized access, disclosure, alteration, or destruction. This includes 
                encryption, firewalls, and access controls.</p>
                
                <h3>6. Data Retention</h3>
               
                 <p> We retain personal information for as long as necessary to fulfill the purposes 
                outlined in this Privacy Policy or as required by law. We regularly review and update 
                our data retention practices to ensure compliance with legal requirements.</p>

                <h3>7. Your Rights</h3>
                 <p>Clients and prospects have the following rights regarding their personal information:</p>

                 <ul>
                    <li>The right to access, update, or correct personal information.
                    </li>
                    <li>The right to request deletion of personal information, subject to legal 
                       limitations.</li>
                    <li>The right to opt-out of marketing communications or data sharing with third 
                     parties.</li>
                </ul>

             
               <h3> 8. Privacy Policy Updates</h3>
               
               <p> We may update this Privacy Policy periodically to reflect changes in our practices or 
                legal requirements. We will notify clients and prospects of any material changes by 
                posting the updated policy on our website.</p>

                <h3>9. Contact Us</h3>
               <p>
                If you have any questions, concerns, or requests regarding this Privacy Policy or our 
                data practices, please contact us at [<Link href="mailto:info@viralon.in">info@viralon.in</Link>].
                Conclusion<br/><br/>


                At Viralon Digital Services, we prioritize the privacy and security of our clients and 
                prospects' personal information. By adhering to this Privacy Policy and industry best 
                practices, we aim to build trust and confidence in our services as a reputable digital 
                marketing company.
               </p>
                
            </div>

        </section>
        
     
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
export default PrivacyPolicy;
