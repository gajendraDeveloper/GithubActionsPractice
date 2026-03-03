import React from "react";
import { behindTheSceneImages } from "../../constants";

const BehindTheScene = () => {
  return (
    <section className=" bg-[#faf6ee] px-4 py-32 sm:px-6 lg:px-12 space-y-16">
      
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
          BEHIND THE SCENES
        </h2>
        <a
          href=""
          className="text-sm sm:text-base underline underline-offset-4"
        >
          FOLLOW US ON INSTAGRAM
        </a>
      </div>

      {/* Images */}
      <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:flex lg:justify-between lg:gap-4 ">
        {behindTheSceneImages.map((img, index) => (
          <div
            key={index}
            className={`
              mx-auto
              w-36 h-36
              sm:w-44 sm:h-44
              lg:w-56 lg:h-56
              overflow-hidden rounded-full border
              transition-all
              ${index % 2 !== 0 ? "lg:mt-10" : "lg:mt-0"}
            `}
          >
            <img
              src={img.src}
              alt="hand craft"
              className="h-full w-full rounded-full object-cover
                         transition-transform duration-500 ease-out
                         hover:scale-125"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BehindTheScene;
