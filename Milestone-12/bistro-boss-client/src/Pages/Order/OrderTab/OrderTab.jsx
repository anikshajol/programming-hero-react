import { useState } from "react";
import FoodCard from "../../Shared/Card/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const OrderTab = ({ items }) => {
  const itemsPerPage = 6;
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // const pagination = {
  //   el: ".swiper-pagination",
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="' + className + '">' + (index + 1) + "</span>";
  //   },
  // };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  const handlePaginationChange = (swiper) => {
    setCurrentPage(swiper.realIndex + 1);
  };

  return (
    <div>
      <Swiper
        pagination={pagination}
        onSwiper={handlePaginationChange}
        className="mySwiper"
      >
        {[...Array(totalPages)].map((_, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {items
                .slice(index * itemsPerPage, (index + 1) * itemsPerPage)
                .map((item) => (
                  <FoodCard key={item._id} item={item}></FoodCard>
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTab;
