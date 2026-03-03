import { useMemo, useState } from "react";
import HeroSection from "../components/shopComponent/HeroSection";
import ShopByCategory from "../components/shopComponent/ShopByCategory";
import CommonProductCard from "../components/common/CommonProductCard";
import { products } from "../constants/index";
import SubscribeSection from "../components/shopComponent/SubscribeSection";
import { useNavigate } from "react-router-dom";

const ShopPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const navigate = useNavigate();


  const filteredProducts = useMemo(() =>
    activeCategory === "All Products"
      ? products
      : products.filter(item => item.category === activeCategory),
  [activeCategory, products]
);
const handleCardClick = (item) => {
    navigate(`/productdetail/${item.id}`);
}

  return (
    <div className="w-full h-full px-6  ">
      <HeroSection title={activeCategory} />

      <ShopByCategory
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />

         <div >
        <CommonProductCard data={filteredProducts} onClick={handleCardClick} /></div>
       <SubscribeSection />
    </div>
  );
};

export default ShopPage;
