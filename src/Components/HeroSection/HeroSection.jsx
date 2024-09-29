import { Icon } from "@iconify/react";
import HeroImage from "../../assets/hero-image.png";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <main className="hero-section-container">
      <div className="hero-section-left">
        <h1 className="hero-section-left-text1">Security Review for Products, Assets & General IT Controls</h1>
        <p className="hero-section-left-text2">Cyber-attacks present a significant and growing danger that can severely impact individuals and businesses. By staying aware of current threats and implementing appropriate security measures, individuals and organizations can effectively defend themselves against cyber-attacks and lower their risk of being affected by them</p>
        <button className="hero-section-left-button" >
          <p>Request Demo</p>
          <Icon icon="fa6-solid:arrow-right" />
        </button>
      </div>
      <div className="hero-section-right">
        <img src={HeroImage} alt="hero-image" className="hero-section-right-image" />
      </div>
    </main>
  )
}

export default HeroSection