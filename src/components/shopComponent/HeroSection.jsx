const HeroSection = ({ title }) => {
  return (
    <div className="w-full h-96 px-4">
      <div
        className="w-full h-full border rounded-2xl flex justify-center items-center
                   bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://assets-global.website-files.com/620b9cf17e6991e60d87bb5f/62162c5df5c759942db4f330_pexels-pavel-danilyuk-7675025%201-min.jpg")',
        }}
      >
        <h1 className="
          bg-[#faf6ee]
          px-6 py-8
          text-5xl sm:text-6xl lg:text-7xl
          font-semibold
          rounded-full border
        ">
          {title.toUpperCase()}
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
