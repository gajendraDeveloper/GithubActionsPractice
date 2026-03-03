import React from "react";

const Journal = () => {
  return (
    <section className="bg-[#faf6ee] border-t border-b">
      {/* Heading */}
      <div className="px-4 sm:px-8 py-10 sm:py-14">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-wide">
          JOURNAL
        </h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 border-t">
        {/* Left Image */}
        <div className="flex flex-col gap-6 justify-center items-center p-8 sm:p-12 border-b lg:border-b-0 lg:border-r">
          <div className="w-64 h-64 sm:w-96 sm:h-96 rounded-full overflow-hidden border">
            <img
              src="https://cdn.prod.website-files.com/620bf38aed2292791a215ffa/620bf434a8a577e316ea8f10_pexels-marina-m-8356835-min-min.jpg"
              alt="Journal ceramic"
              className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
        
          </div>
              <h2 className="text-5xl ">2022 pottery trends</h2>
              <p className="text-center">Rerum cumque eveniet quos odio corrupti rerum. Sed odio sunt sed tempora doloribus qui expedita id.</p>
        </div>

        {/* Right Image */}
        <div className="flex flex-col gap-6 justify-center items-center p-8 sm:p-12">
          <div className="w-64 h-64 sm:w-96 sm:h-96 rounded-full overflow-hidden border">
            <img
              src="https://cdn.prod.website-files.com/620bf38aed2292791a215ffa/620bf4c2d1e35ede28546cb9_pexels-cottonbro-6694747%201-min.jpg"
              alt="Journal studio"
              className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
            />
             
          </div>
          <h2 className="text-5xl">How to start your brand</h2>
          <p className="text-center">Voluptate laboriosam dicta officia voluptate architecto sint velit rerum qui. Ut perferendis consequatur qui nisi iste.</p>
        </div>
      </div>
    </section>
  );
};

export default Journal;
