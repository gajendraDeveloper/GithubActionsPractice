import { useEffect } from "react";
import BehindTheScene from "../components/homeComponent/BehindTheScene";
import BestSeller from "../components/homeComponent/BestSeller";
import { CarouselOrientation } from "../components/homeComponent/CarouselOrientation";
import HomeClay from "../components/homeComponent/HomeClay";
import KeepInTouch from "../components/homeComponent/KeepInTouch";
import MainSection from "../components/homeComponent/MainSection";
import ReviewSection from "../components/homeComponent/ReviewSection";
import ScrollAnimation from "../components/homeComponent/ScrollAnimation";
import ShopByCategory from "../components/homeComponent/ShopByCategory";
import { useToast } from "../context/ToastNotification";


const Home = () => {
  const {showToast} = useToast();
  useEffect(() => {
    showToast({
      type: "success",
      message: "welcome to website"
    })
  }, [])
  return (
    <div className=" w-full  ">
      <div className="w-full ">
        <CarouselOrientation />
        <MainSection/>
        <BestSeller/>
        <ScrollAnimation/>
        <ShopByCategory/>
        <HomeClay/>
        <ReviewSection/>
        <KeepInTouch/>
        <BehindTheScene/>
      </div>
    </div>
  );
};

export default Home;
