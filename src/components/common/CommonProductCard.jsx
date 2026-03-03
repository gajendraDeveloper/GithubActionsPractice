import gsap from "gsap";
import { useRef } from "react";

const CommonProductCard = ({ data=[], onClick }) => {
  const shopNow = useRef([]);

  const handleMouseEnter = (index) => {
    gsap.to(shopNow.current[index], {
      y: "0%",
      opacity: 1,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (index) => {
    gsap.to(shopNow.current[index], {
      y: "100%",
      opacity: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  };

  return (
    <div
      className="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        place-items-center
      "
    >
      {data.map((item, index) => (
        <div
          key={item.label}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        onClick={() => onClick(item)}
          className="
            relative cursor-pointer
            flex flex-col items-center  w-72 h-full
          "
        >
          {/* SALE badge */}
          {item.sale && (
            <div className="
              absolute top-4 left-2
              w-14 h-14 sm:w-16 sm:h-16
              rounded-full bg-amber-500
              flex items-center justify-center
              z-10
            ">
              <p className="text-xs sm:text-sm text-white font-semibold">
                SALE
              </p>
            </div>
          )}

          {/* Image */}
          <img
            src={item.src}
            alt={item.label}
            className="
              w-full max-w-[260px] sm:max-w-[280px]
              h-[300px] sm:h-[340px] md:h-[380px]
              object-cover border
              rounded-tl-full rounded-tr-full
            "
          />

          {/* Shop Now overlay */}
          <div
            ref={(el) => (shopNow.current[index] = el)}
            className="
              absolute bottom-24
              w-full max-w-[260px] sm:max-w-[280px]
              bg-[#cab5eb] border
              text-center py-2
              opacity-0 translate-y-full
            "
          >
            Shop Now
          </div>

          {/* Text */}
          <div className="flex flex-col items-center gap-2 py-3">
            <p className="text-sm sm:text-base font-medium">
              {item.label}
            </p>

            <div className="text-xs sm:text-sm text-center">
              {item.sale && (
                <strike className="text-gray-500">
                  {item.Price}
                </strike>
              )}
              <p>{item.ActualPrice}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommonProductCard;
