import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
// import "./styles.css";

const Clients = () => {
  return (
    <section className="container1 our-clients">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        
        }}
        modules={[Pagination, Autoplay]}
        className="swiper mySwiper mys"
      >
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/logo1.png" alt="Logo 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/wabais.png" alt="Logo 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/logo1.png" alt="Logo 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/wabais.png" alt="Logo 2" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/logo1.png" alt="Logo 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/wabais.png" alt="Logo 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/logo1.png" alt="Logo 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/wabais.png" alt="Logo 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/logo1.png" alt="Logo 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/wabais.png" alt="Logo 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/logo1.png" alt="Logo 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/wabais.png" alt="Logo 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/logo1.png" alt="Logo 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/wabais.png" alt="Logo 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/logo1.png" alt="Logo 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/wabais.png" alt="Logo 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/logo1.png" alt="Logo 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./themes/viralon/images/icons/wabais.png" alt="Logo 2" />
        </SwiperSlide>
        {/* Add more SwiperSlides for each image */}
      </Swiper>
    </section>
  );
};

export default Clients;
