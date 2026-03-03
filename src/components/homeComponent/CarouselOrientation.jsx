import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { mainSlidesData } from "../../constants";

export function CarouselOrientation() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      // navigation
      // pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop
      className="w-full h-[90vh] relative"
    >
      {mainSlidesData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div
              className={`absolute inset-0 bg-black/40 flex flex-col justify-center p-8 text-white
                ${
                  slide.position === "left"
                    ? "items-start text-left"
                    : slide.position === "center"
                    ? "items-center text-center"
                    : "items-end text-right"
                }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                {slide.title}
              </h2>
              <p className="max-w-2xl text-lg md:text-xl mb-6">
                {slide.description}
              </p>

              <button className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-black hover:text-white transition">
                Learn More
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
