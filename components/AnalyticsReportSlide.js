import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const AnalyticsReportSlide = () => {
  return (
    <div className="social-media">
      <h2 className="text-white s-heading text-center  pb-4 font-size-30">
        Core Tasks that Viralon Excels in Content Marketing
      </h2>
      <div className="container">
        <div className="social-media-container">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}

            breakpoints={{
              240: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            className="mySwiper1 core-task-bx" 
          >
<SwiperSlide>
  <div
    className="swiper-slide"
    
  >
    <div className="core-image">
      <div className="core-underbx">
        <div className="corecont">
          <h3>
            Data Collection and Integration
            <i className="ri-arrow-right-line right-icon" />
          </h3>
        </div>
      </div>
      <div className="core-overlay">
        <div className="core-text">
          <div className="core-iconbx">
            <img src="/images/icons/onpage.png" alt="Onpage Icon" />
          </div>
          <h3>Data Collection and Integration</h3>
          <p className="core-para">
            Our journey begins by collecting data from various sources - websites, social media, ad campaigns, and more. We then integrate this data into a centralized system for comprehensive analysis.
          </p>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div
    className="swiper-slide "
   >
    <div className="core-image">
      <div className="core-underbx">
        <div className="corecont">
          <h3>
            Data Cleansing and Validation
            <i className="ri-arrow-right-line right-icon" />
          </h3>
        </div>
      </div>
      <div className="core-overlay">
        <div className="core-text">
          <div className="core-iconbx">
            <img src="/images/icons/strategic-plan.png" alt="Strategic Plan Icon" />
          </div>
          <h3>Data Cleansing and Validation</h3>
          <p className="core-para">
            Clean and accurate data is the foundation of insightful analytics. We meticulously cleanse and validate data to ensure its reliability.
          </p>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div
    className="swiper-slide"
    
  >
    <div className="core-image">
      <div className="core-underbx">
        <div className="corecont">
          <h3>
            Customized Dashboards
            <i className="ri-arrow-right-line right-icon" />
          </h3>
        </div>
      </div>
      <div className="core-overlay">
        <div className="core-text">
          <div className="core-iconbx">
            <img src="/images/icons/icon14.png" alt="Icon 14" />
          </div>
          <h3>Customized Dashboards</h3>
          <p className="core-para">
            We create customized dashboards that provide a visual representation of your data, making it easy for you to track key performance metrics at a glance.
          </p>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div
    className="swiper-slide"
    
  >
    <div className="core-image">
      <div className="core-underbx">
        <div className="corecont">
          <h3>
            In-Depth Analysis
            <i className="ri-arrow-right-line right-icon" />
          </h3>
        </div>
      </div>
      <div className="core-overlay">
        <div className="core-text">
          <div className="core-iconbx">
            <img src="/images/icons/content-creation.png" alt="Content Creation Icon" />
          </div>
          <h3>In-Depth Analysis</h3>
          <p className="core-para">
            Our team of data analysts dives deep into the data, identifying trends, patterns, and opportunities that can inform your marketing strategy.
          </p>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div
    className="swiper-slide"
   
  >
    <div className="core-image">
      <div className="core-underbx">
        <div className="corecont">
          <h3>
            Actionable Insights
            <i className="ri-arrow-right-line right-icon" />
          </h3>
        </div>
      </div>
      <div className="core-overlay">
        <div className="core-text">
          <div className="core-iconbx">
            <img src="/images/icons/icon7.png" alt="Icon 7" />
          </div>
          <h3>Actionable Insights</h3>
          <p className="core-para">
            We transform raw data into actionable insights, offering recommendations and strategies to optimize your online presence and marketing efforts.
          </p>
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsReportSlide;