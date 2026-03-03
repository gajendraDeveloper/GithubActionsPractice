import CommonButton from "../common/CommonButton";

const HomeClay = () => {
  return (
    <section className="w-full bg-[#f1ebe4] px-4 sm:px-8 lg:px-14 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-14">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2 space-y-10">
          
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl">
              HOME CLAY KITS
            </h2>

           <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Ut lobortis ante sit amet neque tristique rutrum.
  Nullam a{" "}
  <span className="block">
    suscipit ex. Donec ac efficitur mauris.
  </span>
</p>

          </div>

          {/* Features */}
          <div className="space-y-4">
            {[
              "FREE SHIPPING",
              "NO NEED TO FIRE",
              "TOOLS AND CLAY INCLUDED",
            ].map((item, i) => (
              <div key={i} className="space-y-2">
                <hr className="w-56 sm:w-64 border-black/40" />
                <p className="tracking-wide">{item}</p>
              </div>
            ))}
            <hr className="w-56 sm:w-64 border-black/40" />
          </div>

          {/* CTA */}
          <CommonButton
            label="ORDER YOUR KIT NOW"
            styleLabel="relative z-10 text-base sm:text-lg font-semibold"
            styleButton="
              relative overflow-hidden px-6 py-3 rounded-3xl border
              bg-amber-300 cursor-pointer
              before:absolute before:inset-0
              before:bg-orange-400
              before:origin-top before:scale-y-0
              before:transition-transform before:duration-500 before:ease-out
              hover:before:scale-y-100
            "
          />
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="https://assets-global.website-files.com/620b9cf17e6991e60d87bb5f/620bc46392a0688fb2031eff_pexels-cup-of-couple-7302397-min-min-p-800.jpeg"
            alt="home clay kit"
            className="
              w-full max-w-sm sm:max-w-md lg:max-w-lg
              h-[350px] sm:h-[450px] lg:h-[550px]
              rounded-t-full object-cover border
            "
          />
        </div>

      </div>
    </section>
  );
};

export default HomeClay;
