import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollAnimationData } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimation = () => {
  const containerRef = useRef();
  const leftMoveRef = useRef();
  const rightMoveRef = useRef();
  const duplicatedData = [...ScrollAnimationData, ...ScrollAnimationData];


  useGSAP(() => {
      gsap.to(leftMoveRef.current, {
        xPercent: -80,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftMoveRef.current,
          start: "top 90%",
          scrub: true,
        },
      });

      gsap.from(rightMoveRef.current, {
        xPercent: -80,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightMoveRef.current,
          start: "top 90%",
          scrub: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="py-16 space-y-12 bg-[#faf6ee] overflow-x-hidden"
    >
      {/* Right Move */}
   <div
  ref={rightMoveRef}
  className="
    flex items-center
    gap-x-14 sm:gap-x-20 md:gap-x-28
    whitespace-nowrap w-full
  "
>
  {duplicatedData.map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-4  w-full px-2"
    >
      <img
        src={item.src}
        alt="flower"
        className="w-6 sm:w-8 md:w-10"
      />
      <h1 className="
        font-semibold
        text-4xl sm:text-6xl md:text-8xl lg:text-9xl
      ">
        {item.label}
      </h1>
    </div>
  ))}
</div>


      {/* Left Move */}
      <div
  ref={leftMoveRef}
  className="
    flex items-center
    gap-x-14 sm:gap-x-20 md:gap-x-28
    whitespace-nowrap
  "
>
  {duplicatedData.map((item, index) => (
    <div
      key={index}
      className="flex items-center gap-4 px-2"
    >
      <img
        src={item.src}
        alt="flower"
        className="w-6 sm:w-8 md:w-10"
      />
      <h1 className="
        font-semibold
        text-4xl sm:text-6xl md:text-8xl lg:text-9xl
      ">
        {item.label}
      </h1>
    </div>
  ))}
</div>

    </section>
  );
};

export default ScrollAnimation;
