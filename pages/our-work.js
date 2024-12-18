import React, { useState, useEffect, use } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SocialShare from "../components/SocialShare";
import Subscriber from "../components/Subscriber";
import { apiUrl } from "../next.config";
import CustomHead from "../components/CustomHead";
const OurWork = () => {
  const [workData, setWorkData] = useState([]);
  const [tab, setTab] = useState("TECHNOLOGY");
  const [tabContent, setTabContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${nextConfig.apiUrl}/work`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWorkData(data);

        const tech = data?.filter((ele) => ele.type === "TECHNOLOGY");
        setTabContent(tech);
        setTab("TECHNOLOGY");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const newData = workData.filter((data) => data.type === tab);
    setTabContent(newData);
  }, [tab]);

  return (
    <>
      <CustomHead
        title="Viralon | Witness Viralon's Creative Achievements | Portfolio"
        keywords="Viralon,Our Work"
        description="Viralon excels in digital marketing. Our work, finely tuned to client needs and current trends, sets us apart. Elevate your brand with us!."
      />
      <Header />
      <SocialShare />
      <section id="our-work">
        {/*-------------- Menu Section Codes Start From Here -------------*/}
        {/*-------------- Menu Section Codes End From Here -------------*/}
        {/*-------------- Hero Section Codes Start From Here -------------*/}
        <section
          className="section hero-section-2"
          style={{ backgroundImage: "url(/images/hero-banners/our-work.webp)" }}
        >
          <div className="overlayer" />
          <div className="container">
            <h1 className="page-heading">
              <span className="material-icons-round icon">groups</span>Our Work
            </h1>
          </div>
        </section>
        {/*-------------- Hero Section Codes End From Here -------------*/}
        <section>
          <div className="container1">
            <div className="row flex-wrap-reverse align-items-center p-bottom-0 pt-4 pb-4">
              <div className="col-md-5">
                <img
                  src="/images/our-work/it.jpg"
                  className=" margin-top-15 mb-md-0 mb-4 w-400"
                  alt="Our Brands image"
                />
              </div>
              <div className="col-md-7 para-size">
                <h2 className="font-size-40 font-weight-900 text-dark heading_style_1 mb-3">
                  Our Brand
                  <span className="text-gold"> Raids</span>{" "}
                </h2>
                <p>
                  Where traditional meets tech, and businesses thrive on the
                  pulse of progress. At Viralon, we're not just pioneers, we're
                  navigators of the digital universe. Join us on a
                  transformative journey as we decode the essence of "Digital
                  Transformation" and why it's the ultimate catalyst for success
                  in today's business landscape.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="container1 ">
          <div id="exTab1">
            <div className="tab-head our-work-tab padding-top-0">
              <div>
                <ul className="nav nav-pills our-work-active">
                  <li
                    onClick={() => {
                      setTab("TECHNOLOGY");
                    }}
                  >
                    <a href="#1a" data-toggle="tab" className="active show">
                      TECHNOLOGY
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setTab("STRATEGY");
                    }}
                  >
                    <a href="#2a" data-toggle="tab">
                      STRATEGY
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setTab("OMNICHANNEL");
                    }}
                  >
                    <a href="#3a" data-toggle="tab">
                      OMNICHANNEL
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setTab("DIGITAL");
                    }}
                  >
                    <a href="#4a" data-toggle="tab">
                      DIGITAL
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setTab("DESIGN");
                    }}
                  >
                    <a href="#5a" data-toggle="tab">
                      DESIGN
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setTab("CONTENT");
                    }}
                  >
                    <a href="#6a" data-toggle="tab">
                      CONTENT
                    </a>
                  </li>
                  <li
                    onClick={() => {
                      setTab("CASE STUDY");
                    }}
                  >
                    <a href="#7a" data-toggle="tab">
                      CASE STUDY
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section className="container1">
            <div class="tab-content clearfix">
              <div class="tab-pane active show">
                <div class="container1 mob-container">
                  <div className="our-work-bx">
                    {tabContent &&
                      tabContent.map((item) => (
                        <div key={item.id}>
                          <div class="our-work-img">
                            <img
                              src={`${apiUrl}/${item?.images}`}
                              alt={item.title}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
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
export default OurWork;
