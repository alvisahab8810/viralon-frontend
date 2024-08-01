import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialShare from "../components/SocialShare";
import Subscriber from "../components/Subscriber";
import Link from "next/link";
import CustomHead from "../components/CustomHead";
import nextConfig from "../next.config";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    designation: "",
    mobile: "",
    email: "",
    budget_range: "",
    services: "",
    project_details: "",
    privacy_accepted: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);

    try {
      const response = await fetch(`${nextConfig.apiUrl}/contact/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Contact created successfully!');
        // Clear form data after successful submission
        setFormData({
          first_name: "",
          last_name: "",
          designation: "",
          mobile: "",
          email: "",
          budget_range: "",
          services: "",
          project_details: "",
          privacy_accepted: false,
        });
      } else {
        console.error('Failed to create contact.');
      }
    } catch (error) {
      console.error('Error creating contact:', error);
    }
  };

  return (
    <>

      <CustomHead title="Viralon | Your Brand’s BFF  | Grow Your Business | Hire Us"
        keywords="VIralon, Hire us"
        description="Elevate your brand with Viralon! Unlock unparalleled digital marketing expertise. Choose success. Hire us for transformative strategies!" />

      <Header />
      <SocialShare />
      <section id="what-we-do">
        {/*-------------- Hero Section Codes Start From Here -------------*/}
        <section
          className="section hero-section-2"
          style={{
            backgroundImage: "url(/images/hero-banners/contact-us.webp)",
          }}
        >
          <div className="overlayer" />
          <div className="container">
            <h1 className="page-heading">
              <span className="material-icons-round icon">groups</span>Contact
              Us
            </h1>
          </div>
        </section>
        {/*-------------- Hero Section Codes End From Here -------------*/}
        <form onSubmit={handleSubmit}>
          <div className="container1 margin-top-30">
            <div className="shapbx aos-init aos-animate">
              {" "}
              <h3 className="work-heading">Contact us</h3>
            </div>
            <h1 className="heading1 aos-init aos-animate">
              Get in touch and we&apos;ll be happy to answer all{" "}
              <span className="text-gold">your questions.</span>{" "}
            </h1>
            <div className="contact-usbx padding-top">
              <div>
                <h2>
                  If you&apos;ve got any questions, please fill out the form
                  below and we promise to get back to you with lightning speed!
                </h2>
                <div className="form-row mt-3">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="First Name*"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Last Name*"
                      required
                    />
                  </div>
                </div>
                <div className="form-row mt-3">
                  <div className="form-group col-md-6">
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Designation*"
                      required
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-control"
                      placeholder="Business Email*"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-control"
                    placeholder="Contact No*"
                    maxLength={11}
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <label className="form-label label-title mb-3">
                    Select a budget range for your project
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <div>
                    <input
                      type="radio"
                      name="budget_range"
                      id="budget1-3"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="budget1-3" className="pr-range">
                      1-3 Lakh
                    </label>

                    <input
                      type="radio"
                      name="budget_range"
                      id="budget3-7"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="budget3-7" className="pr-range">
                      3-7 Lakh
                    </label>

                    <input
                      type="radio"
                      name="budget_range"
                      id="budget7-15"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="budget7-15" className="pr-range">
                      7-15 Lakh
                    </label>

                    <input
                      type="radio"
                      name="budget_range"
                      id="budget15"
                      onChange={handleInputChange}
                    />
                    <label htmlFor="budget15" className="pr-range">
                      15+ Lakh
                    </label>
                  </div>
                </div>
                <div className="form-group mt-4">
                  <select id="inputCustomization" className="form-control1" name="services" value={formData.services} onChange={handleInputChange}>
                    <option>Select Services</option>
                    <option value="Digital Transformation">Digital Transformation</option>
                    <option value="Technolgy Consulting">Technolgy Consulting</option>
                    <option value="Social Media Marketing">Social Media Marketing</option>
                    <option value="Paid Media Marketing">Paid Media Marketing</option>
                    <option value="Search Engine Optimisation">Search Engine Optimisation</option>
                    <option value="Content Marketing">Content Marketing</option>
                    <option value="Email Marketing">Email Marketing</option>
                    <option value="Influencer Marketing">Influencer Marketing</option>
                    <option value="Analytics/ Reporting">Analytics/ Reporting</option>
                    <option value="Video Marketing">Video Marketing</option>
                    <option value="UI/ UX">UI/ UX</option>
                    <option value="Logo Design">Logo Design</option>
                    <option value={"Brochure Design"}>Brochure Design</option>
                    <option value="Product Label Design">Product Label Design</option>
                    <option value="Infographics">Infographics</option>
                  </select>
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control inputtextarea"
                    name="project_details"
                    value={formData.project_details}
                    onChange={handleInputChange}
                    placeholder="Tell us more about your project"
                  />
                </div>
                <div className="form-group mt-3">
                  <input
                    type="checkbox"
                    name="privacy_accepted"
                    checked={formData.privacy_accepted}
                    onChange={handleInputChange}
                  />
                  <span>
                    Please accept{" "}
                    <a href="#" className="privacy-link" required="true">
                      Privacy Policy
                    </a>
                  </span>
                </div>
                <button
                  type="submit"
                  className="btn margin-top-25 btn-primary m-auto d-block mt-5"
                >
                  Submit
                </button>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d14236.91644458698!2d81.005388!3d26.864461!3m2!1i1024!2i768!4f13.1!4m8!3e0!4m0!4m5!1s0x399be3591f162b99%3A0xec0c1d5692729281!2sViralon%20Digital%20Services%2C%2012TH%20Floor%2CB%20Wing%2C%20Summit%20Space%20Building%2C%20Vibhuti%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20226010!3m2!1d26.8650958!2d81.0119909!5e0!3m2!1sen!2sin!4v1700626668064!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  className="map mb-4 border border-10 border-white shadow-sm"
                />
                {/* Contact Information */}
                <div className=" mt-3 border-bottom border-gold-light d-flex align-items-center pb-2 animate__ animate__fadeInUp wow animated">
                  <span className="material-icons-round font-size-20 text-gold bg-gold-light p-3 rounded-circle">
                    call
                  </span>
                  <div className="ms-3">
                    <span className="font-weight-600 text-dark font-weight-500">
                      Phone
                    </span>
                    <a
                      href="tel:9305451301"
                      className="d-block link text-secondary link"
                    >
                      +91 93054 51301
                    </a>
                  </div>
                </div>
                {/* Repeat similar blocks for other contact information */}
                {/* Contact Information */}
                <div className="border-bottom border-gold-light d-flex align-items-center py-3 animate__ animate__fadeInUp wow animated">
                  <span className="material-icons-round font-size-20 text-gold bg-gold-light p-3 rounded-circle">
                    mail_outline
                  </span>
                  <div className="ms-3">
                    <span className="font-weight-600 text-dark font-weight-500">
                      Email
                    </span>
                    <a
                      href="mailto:info@viralon.in"
                      className="d-block link text-secondary link"
                    >
                      info@viralon.in
                    </a>
                  </div>
                </div>
                {/* Repeat this block for other contact information */}
                {/* For example, for address */}
                <div className="border-gold-light d-flex align-items-center py-3 animate__ animate__fadeInUp wow animated">
                  <span className="material-icons-round font-size-20 text-gold bg-gold-light p-3 rounded-circle">
                    place
                  </span>
                  <div className="ms-3 w-100">
                    <div className="d-flex justify-content-between">
                      <span className="font-weight-600 text-dark font-weight-500">
                        Address
                      </span>
                      <a
                        href="https://maps.app.goo.gl/pwTET6KsguoixVid6"
                        className="btn-sm get-d bg-gold-light text-dark ms-2 font-size-12 link center"
                      >
                        Get Direction{" "}
                        <span className="material-icons-round ms-1">
                          north_east
                        </span>
                      </a>
                    </div>
                    <div>
                      Viralon Digital Services <br />
                      12th Floor, B Wing, Summit Building <br />
                      Vibhuti Khand, Gomti Nagar, Lucknow-226010
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        {/* Other JSX components */}
      </section>
      <Subscriber />
      <Footer />
    </>
  );
};

export default ContactUs;
