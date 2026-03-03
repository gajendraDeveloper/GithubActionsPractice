import React from "react";
import CommonProductCard from "../common/CommonProductCard";
import { commonProductCardData } from "../../constants";
import { useNavigate } from "react-router-dom";

const BestSeller = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-[#f1ebe4] border-y px-4 sm:px-8 md:px-12 py-10">
      
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        
        {/* Heading */}
        <div className="space-y-6">
          <div className="font-semibold uppercase
            text-3xl sm:text-4xl md:text-5xl
          ">
            <h1>Our</h1>
            <h1>Bestsellers</h1>
          </div>

          {/* Arrow (hide on mobile) */}
          <img
            src="https://cdn.prod.website-files.com/620b9cf17e6991e60d87bb5f/620ce891885c660c064a6d62_Arrow%201.svg"
            alt="arrow"
            className="hidden md:block"
          />
        </div>

        {/* Product Cards */}
        <div className="w-full space-x-4 lg:max-w-4xl">
          <CommonProductCard
            data={commonProductCardData}
            onClick={() => console.log("product card clicked!!")}
          />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="pt-10 flex justify-center lg:justify-end">
        <p
          onClick={() => navigate("/shop")}
          className="
            underline text-base sm:text-lg
            cursor-pointer
            hover:text-gray-600
            transition-colors
          "
        >
          SEE ALL PRODUCTS
        </p>
      </div>
    </section>
  );
};

export default BestSeller;
