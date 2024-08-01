import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import { EffectCube, Pagination, Autoplay } from "swiper/modules";

const slideData = [
  {
    title: 'SOCIAL MEDIA MARKETING',
    imageUrl: '/images/social-media-marketing/img2.jpg',
  },
  {
    title: 'PAID MEDIA MARKETING',
    imageUrl: '/images/digital/paid.jpg',
  },
  {
    title: 'VIDEO MARKETING',
    imageUrl: '/images/digital/video.jpg',
  },
  {
    title: 'INFOGRAPHICS',
    imageUrl: '/images/digital/infographics.jpg',
    
  },
  {
    title: 'LOGO DESIGN',
    imageUrl: '/images/digital/logo.jpg',
  },
  {
    title: 'EMAIL MARKETING',
    imageUrl: '/images/digital/email.jpg',
  },
  {
    title: 'PRODUCT LABEL',
    imageUrl: '/images/digital/catelaugh.jpg',
  },
  {
    title: 'INFLUENCER MARKETING',
    imageUrl: '/images/digital/influencer.jpg',
  },
  {
    title: 'CONTENT MARKETING',
    imageUrl: '/images/digital/content-marketing.jpg',
  },
  {
    title: 'USER EXPERIENCE/USER INTERFACE',
    imageUrl: '/images/digital/ui_ux.jpg',
  },

];

const WhatWeDoSlider = () => {
  return (
    <>
        <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={true}
        modules={[EffectCube, Pagination, Autoplay]}
        className="mySwiper"
      >
        {slideData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="our-specialization-container">
              <div className='strip'>{slide.title}</div>
              <p>{slide.content}</p>
              <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default WhatWeDoSlider;
