import { useRef } from "react";
import { categoryData } from "../../constants";
import gsap from "gsap";

const ShopByCategory = () => {
  const imgRef = useRef([]);

  const handleMouseEnter = (index) => {
    gsap.to(imgRef.current[index], {
      y: "0%",
      opacity: 1,
      duration: 0.8,
      scale: 1.05,
    //   backdrop-blur-sm bg-[#cab5eb]/80,
      ease: "power3.inOut",
    });
  };
  const handleMouseLeave = (index) => {
    gsap.to(imgRef.current[index], {
      y: "100%",
      opacity: 0,
      duration: 0.7,
      ease: "power3.inOut",
    });
  };

  return (
    <div className="w-full h-full bg-[#faf6ee] p-12 border-b">
      <div className="w-full h-ful flex flex-col gap-12">
        <h2 className="text-5xl ">SHOP BY CATEGORY</h2>
        <div className="flex justify-between gap-6 w-full h-full">
          {categoryData.map((item, index) => (
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              key={item.label}
              className="w-full h-64 rounded-full overflow-hidden border relative"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full rounded-full object-cover "
              />
              <div className="flex justify-center border ">
                <p
                  ref={(el) => (imgRef.current[index] = el)}
                  className="opacity-0 absolute bottom-0 w-[28vw]  h-[15vh]  text-center pt-6 text-3xl  rounded-bl-full rounded-br-full bg-[#cab5eb]"
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
