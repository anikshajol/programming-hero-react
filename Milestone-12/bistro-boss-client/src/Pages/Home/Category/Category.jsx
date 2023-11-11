import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Category = () => {
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const texts = ["salad", "soup", "pizzas", "desserts", "salad"];

  return (
    <div>
      <div>
        <SectionTitle
          subheading={"From 11:00am to 10:00pm"}
          heading={"ORDER ONLINE"}
        ></SectionTitle>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            {" "}
            <img className="relative" src={slide} alt="" />
            <p className="text-overlay text-center font-bold text-red-700">
              {texts[idx]}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Category;
