import { productReviewData, productSlideData } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ReviewSection = () => {
  return (
    <section className="flex flex-col">
      
      {/* Review Cards */}
      <div className="bg-[#faf6ee] border-t px-4 sm:px-8 lg:px-8 py-16 lg:py-28">
        <div className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-12
        ">
          {productReviewData.map((card) => (
            <div
              key={card.label}
              className="flex flex-col items-center text-center gap-4"
            >
              <img
                src={card.src}
                alt={card.label}
                className="w-10 sm:w-12"
              />
              <h3 className="text-lg sm:text-xl font-semibold">
                {card.label.toUpperCase()}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 max-w-xs">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Slider */}
      <div className="bg-[#ffdb5b] border-t px-4 sm:px-8 py-14">
        <Swiper
          modules={[Navigation]}
          navigation
          loop
          spaceBetween={30}
          centeredSlides
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1.5,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full"
        >
          {productSlideData.map((data, index) => (
            <SwiperSlide key={index}>
              <div className="mx-auto max-w-md text-center px-12 ">
                <p className="text-sm sm:text-base">
                  {data.desc}
                </p>
                <h4 className="text-base sm:text-lg mt-3 font-semibold">
                  {data.loction.toUpperCase()}
                </h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
};

export default ReviewSection;
