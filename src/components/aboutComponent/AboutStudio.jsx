import React from "react";

const AboutStudio = () => {
  return (
    <section className="w-full border-y bg-[#ffdb5b]">
      <div className="
        max-w-7xl mx-auto
        flex flex-col lg:flex-row
      ">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-10 py-10 flex justify-center items-center">
          <div
            className="
              relative
              w-full sm:w-[90%] md:w-[80%]
              h-64 sm:h-72 md:h-96
              rounded-t-full
              bg-cover bg-center bg-no-repeat border
            "
            style={{
              backgroundImage:
                "url('https://assets-global.website-files.com/620b9cf17e6991e60d87bb5f/6219350c67ef287da9e2a216_pexels-cottonbro-6694310%20(1)-min.jpg')",
            }}
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-10 py-10 flex flex-col gap-6 justify-center text-center lg:text-left">
          <h1 className="
            uppercase font-semibold
            text-3xl sm:text-4xl md:text-5xl
          ">
            About our studio
          </h1>

          <div className="space-y-5 text-sm sm:text-base md:text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <p>
              Duis cursus, mi quis viverra ornare, eros dolor interdum nulla,
              ut commodo diam libero vitae erat.
            </p>
            <p>
              Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
              Nunc ut sem vitae risus tristique posuere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStudio;
