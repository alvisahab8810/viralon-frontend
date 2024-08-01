import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialShare from "../components/SocialShare";
import Subscriber from "../components/Subscriber";
import axios from "axios";
import nextConfig from "../next.config";
import { toast } from "react-toastify";
import CustomHead from "../components/CustomHead";
const Careers = () => {
  const [jobs, setJobs] = useState([]);

  const [applicantData, setApplicantData] = useState({});

  useEffect(() => {
    // Fetch jobs from the API endpoint
    fetch(`${nextConfig.apiUrl}/job/`)
      .then((response) => response.json())
      .then((data) => setJobs(data))
      .catch((error) => console.error("Error fetching jobs:", error));
  }, []);

  // const handleApplyNowClick = (jobId) => {
  //   // Handle apply now click action
  // };

  const handleApplyNowClick = (jobId) => {
    const job = jobs.find((job) => job.id === jobId);
    if (job) {
      setApplicantData({
        ...applicantData,
        job_title: job.title,
        job_id: jobId,
        job_designation: job.designation,
        job_description: job.description,
        job_min_experience: job.min_experience,
        job_max_experience: job.max_experience,
      });
    }
  };

  const handleImageUpload = async (file) => {
    try {
      if (!file) {
        toast.error("Please select an image to upload.");
        return;
      }

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch(`${nextConfig.apiUrl}/upload/`, {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        setApplicantData({
          ...applicantData,
          file_path: data?.file_path,
          file_name: data?.file_name,
          file_id: data?._id,
        });
        toast.success("Image uploaded successfully");
      } else {
        toast.error("Error uploading image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Error uploading image");
    }
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      if (applicantData.cv) {
        // If CV is selected, upload it
        const cvFormData = new FormData();
        cvFormData.append("file", applicantData.cv);

        setApplicantData({ ...applicantData, cv: cvLink });
      }

      // Submit applicant form
      const applicantSubmitResponse = await axios.post(
        `${nextConfig.apiUrl}/applicant/create`,
        applicantData
      );
      console.log(
        "Applicant data submitted successfully:",
        applicantSubmitResponse.data
      );

      // Reset form data
      setApplicantData({
        name: "",
        email: "",
        cv: "",
        portfolioLink: "",
      });
    } catch (error) {
      console.error("Error submitting applicant data:", error);
    }
  };
  // console.log(applicantData, "applicantData");
  return (
    <>

      <CustomHead title="Viralon Careers | Shape Your Future Here | Join Our Team"
        keywords="Viralon,Careers"
        description=" Explore exciting career opportunities at Viralon. Join us in shaping the future of digital marketing. Your journey begins here" />
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

            {/* Display job positions */}
            {jobs.map((job, key) => (
              <div
                key={key}
                className="row align-items-center justify-content-between pt-4 pb-4 positionbx"
              >
                <div className="col-md-6 po-titles">
                  <h2>{job.title}</h2>
                  <p>
                    {job.name} <span className="bullet">.</span>
                    {job.min_experience}-{job.max_experience}
                  </p>
                </div>
                <div className="col-md-6 apply-now-bx">
                  <button
                    className="apply-now-btn"
                    data-toggle="modal"
                    data-target={`#exampleModalCenter${job.id}`}
                    // onClick={() => handleApplyNowClick(job.id)}
                    onClick={() => {
                      setApplicantData(job);
                    }}
                  >
                    Apply Now <i className="ri-arrow-right-circle-line" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Apply Modals for each job */}
        {jobs.map((job) => (
          <div
            key={job.id}
            className="modal fade"
            id={`exampleModalCenter${job.id}`}
            tabIndex="-1"
            role="dialog"
            aria-labelledby={`exampleModalCenterTitle${job.id}`}
            aria-hidden="true"
          >
            <div
              className="modal-dialog careers-modal modal-dialog-centered"
              role="document"
            >
              <div className="modal-content">
                <div className="modal-header">
                  <h5
                    className="modal-title"
                    id={`exampleModalLongTitle${job.id}`}
                  >
                    {/* {console.log(applicantData,'application dat')} */}
                    {applicantData.title} Application
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                      <label htmlFor={`job-title${applicantData.job_id}`}>
                        Job Title
                      </label>
                      {/* <input
                        type="text"
      className="form-control"
      id={`job-title${applicantData.job_id}`}
      placeholder="Enter your job title"
      value={applicantData.job_title}
      readOnly
                        /> */}
                      <p>{applicantData?.title}</p>
                    </div>

                    <div className="form-group">
                      <label htmlFor={`job-description${applicantData.job_id}`}>
                        Job Description
                      </label>
                      <p>{applicantData?.description}</p>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor={`job-min_experience${applicantData.job_min_experience}`}
                      >
                        Min Experience
                      </label>
                      <p>{applicantData?.min_experience}</p>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor={`job-max_experience${applicantData.job_max_experience}`}
                      >
                        Max Experience
                      </label>
                      <p>{applicantData?.max_experience}</p>
                    </div>

                    <div className="form-group">
                      <label htmlFor={`name${applicantData.job_id}`}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id={`name${applicantData.job_id}`}
                        placeholder="Enter your name"
                        value={applicantData.name}
                        onChange={(e) =>
                          setApplicantData({
                            ...applicantData,
                            name: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`email${applicantData.job_id}`}>
                        Your Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id={`email${applicantData.job_id}`}
                        placeholder="Enter your email"
                        value={applicantData.email}
                        onChange={(e) =>
                          setApplicantData({
                            ...applicantData,
                            email: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`mobile${applicantData.job_id}`}>
                        Your Mobile
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id={`mobile${applicantData.job_id}`}
                        placeholder="Enter your mobile number"
                        value={applicantData.mobile}
                        onChange={(e) =>
                          setApplicantData({
                            ...applicantData,
                            mobile: e.target.value,
                          })
                        }
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`cv${applicantData.job_id}`}>
                        CV Upload
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id={`cv${applicantData.job_id}`}
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleImageUpload(e?.target?.files[0])}
                        required
                      />
                    </div>
                    {/* Submit Button */}
                    <div className="form-group">
                      <button type="submit" className="btn btn-primary">
                        Submit Now
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Subscribe Section */}
      <Subscriber />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Careers;
