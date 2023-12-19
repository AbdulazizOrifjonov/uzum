import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import photo1 from "../../assets/main_page_banner (7).jpg";
import photo2 from "../../assets/main_page_banner (8).jpg";
import photo3 from "../../assets/main_page_banner (9).jpg";

function Carousel() {
  return (
    <div className="carousel">
      <Swiper
        pagination={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="carousel__inner"
      >
        <SwiperSlide>
          <img
            className="carousel__desktop"
            src="https://images.uzum.uz/clk2p8lenntcj8a9j80g/main_page_banner.jpg"
            alt=""
          />
          <img
            className="carousel__mobile"
            src="https://images.uzum.uz/clk2qc56sfhsc0umi9d0/main_page_banner.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={photo3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Carousel;
