import React from "react";

const MainSection = () => {
  return (
    <section className="bg-[#faf6ee] px-4 sm:px-6 md:px-8 pb-16 sm:pb-20 lg:pb-28">
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full aspect-video overflow-hidden rounded-xl border">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src="https://cdn.prod.website-files.com/620b9cf17e6991e60d87bb5f/62193b4aa2c0381684a0e598_pexels-tea-oebel-6692621%20(2)%20(1)-transcode.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
