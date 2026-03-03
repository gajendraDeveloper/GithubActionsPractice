import BehindTheScene from "../components/homeComponent/BehindTheScene"
import AboutStudio from "../components/aboutComponent/AboutStudio"
import HeroSection from "../components/aboutComponent/HeroSection"
import MainSection from "../components/aboutComponent/MainSection"


const About = () => {
  return (
    <div>
      <HeroSection/>
      <MainSection/>
      <AboutStudio/>
      <BehindTheScene/>
    </div>
  )
}

export default About