import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import './styles.css';
import { Autoplay } from 'swiper/modules';

const SocialMediaSwiper = () => {
  return (
    <div className="social-media-container">
     <Swiper
  spaceBetween={30}
  slidesPerView={3}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    240: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }}


  modules={[Autoplay, ]}
  className="swiper mySwiper1 ssm-slider"
>
        <SwiperSlide>
          <div className="right-items">
            <div className="right-itemsbx">
              <div className="right-items1">
                <h3>Strategic Planning</h3>
                <p>
                  We create customized Social Media Marketing strategies
                  aligned with your brand's goals and target audience.
                </p>
              </div>
              <div className="right-items2">
                <div className="right-items-icon">
                  <img src="/images/icons/icon1.png" alt="Icon 1" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Repeat the above SwiperSlide structure for each content item */}

        <SwiperSlide>
          <div className="right-items">
            <div className="right-itemsbx">
              <div className="right-items1">
                <h3>Content Creation</h3>
                <p>
                  Crafting compelling content, from eye-catching visuals to
                  engaging copy, designed to resonate with your audience
                </p>
              </div>
              <div className="right-items2">
                <div className="right-items-icon">
                  <img src="/images/icons/icon2.png" alt="Icon 2" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>



<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Content Scheduling</h3>
        <p>
          Timing is key. We schedule posts at optimal times to ensure
          maximum visibility and engagement.
        </p>
      </div>
      <div className="right-items3">
        <div className="right-items-icon">
          <img src="/images/icons/icon3.png" alt="Icon 3" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Community Management</h3>
        <p>
          We actively engage with your audience, responding to comments,
          messages, and mentions, fostering connections.
        </p>
      </div>
      <div className="right-items3">
        <div className="right-items-icon">
          <img src="/images/icons/icon4.png" alt="Icon 4" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Advertising Campaigns</h3>
        <p>
          Crafting and managing targeted ad campaigns to reach specific
          audiences and achieve desired outcomes.
        </p>
      </div>
      <div className="right-items4">
        <div className="right-items-icon">
          <img src="/images/icons/icon5.png" alt="Icon 5" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Analytics and Insights</h3>
        <p>
          Regularly analyzing data to track performance, understand
          audience behavior, and optimize strategies
        </p>
      </div>
      <div className="right-items4">
        <div className="right-items-icon">
          <img src="/images/icons/icon6.png" alt="Icon 6" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Follower Growth</h3>
        <p>
          Employing organic and strategic methods to grow your social
          media followers and expand your reach.
        </p>
      </div>
      <div className="right-items5">
        <div className="right-items-icon">
          <img src="/images/icons/icon7.png" alt="Icon 7" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Trend Monitoring</h3>
        <p>
          Staying updated with industry trends and incorporating them
          into your strategy to stay relevant.
        </p>
      </div>
      <div className="right-items5">
        <div className="right-items-icon">
          <img src="/images/icons/icon8.png" alt="Icon 8" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Conversion Tracking</h3>
        <p>
          Monitoring and optimizing strategies to guide engaged users
          towards desired actions, such as purchases or sign-ups.
        </p>
      </div>
      <div className="right-items6">
        <div className="right-items-icon">
          <img src="/images/icons/icon9.png" alt="Icon 9" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Reports and Analysis</h3>
        <p>
          Providing regular reports that showcase the impact of our
          efforts and the progress towards your goals
        </p>
      </div>
      <div className="right-items6">
        <div className="right-items-icon">
          <img src="/images/icons/icon10.png" alt="Icon 10" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Innovation and Adaptation</h3>
        <p>
          Continuously evolving strategies based on data and trends to
          ensure long-term success.
        </p>
      </div>
      <div className="right-items7">
        <div className="right-items-icon">
          <img src="/images/icons/icon11.png" alt="Icon 11" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Brand Personality</h3>
        <p>
          Infusing your brand's unique voice, values, and personality
          into all social media interactions.
        </p>
      </div>
      <div className="right-items7">
        <div className="right-items-icon">
          <img src="/images/icons/icon12.png" alt="Icon 12" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Campaign Conceptualization</h3>
        <p>
          Creating innovative campaigns to drive special promotions,
          events, or product launches
        </p>
      </div>
      <div className="right-items8">
        <div className="right-items-icon">
          <img src="/images/icons/icon13.png" alt="Icon 13" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Audience Research</h3>
        <p>
          Thoroughly understanding your target audience's preferences,
          behaviors, and pain points
        </p>
      </div>
      <div className="right-items7">
        <div className="right-items-icon">
          <img src="/images/icons/icon14.png" alt="Icon 14" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Collaboration with Influencers</h3>
        <p>
          Partnering with relevant influencers to amplify your brand's
          reach and credibility
        </p>
      </div>
      <div className="right-items9">
        <div className="right-items-icon">
          <img src="/images/icons/icon15.png" alt="Icon 15" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Platform Expertise</h3>
        <p>
          Expertise across various social media platforms, tailoring
          strategies to each platform's nuances.
        </p>
      </div>
      <div className="right-items7">
        <div className="right-items-icon">
          <img src="/images/icons/icon16.png" alt="Icon 16" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Engagement Strategies</h3>
        <p>
          Employing tactics like polls, contests, and user-generated
          content to boost engagement
        </p>
      </div>
      <div className="right-items10">
        <div className="right-items-icon">
          <img src="/images/icons/icon17.png" alt="Icon 17" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide>
  <div className="right-items">
    <div className="right-itemsbx">
      <div className="right-items1">
        <h3>Crisis Management</h3>
        <p>
          Handling negative feedback or PR challenges swiftly and
          effectively to protect your brand's reputation.
        </p>
      </div>
      <div className="right-items10">
        <div className="right-items-icon">
          <img src="/images/icons/icon18.png" alt="Icon 18" />
        </div>
      </div>
    </div>
  </div>
</SwiperSlide>


      </Swiper>
    </div>
  );
};

export default SocialMediaSwiper;
