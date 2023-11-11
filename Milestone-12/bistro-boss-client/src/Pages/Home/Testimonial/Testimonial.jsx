import { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <div>
      <SectionTitle
        subheading={"What Our Clients Say"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <div>
        <p></p>
      </div>

      <div className=" py-10">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper w-[70%] "
        >
          {/* <SwiperSlide>Slide 1</SwiperSlide> */}

          {reviews.map((review) => (
            <SwiperSlide className="px-10 text-center " key={review._id}>
              <div className="text-center flex justify-center pb-2">
                <Rating style={{ maxWidth: 180 }} value={3} readOnly />
              </div>
              <p className="px-16">{review?.details}</p>
              <p className="text-3xl text-[#CD9003]">{review.name}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
