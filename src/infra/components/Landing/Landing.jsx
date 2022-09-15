// components
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Partners from "../Hero/atom/Partners";
import Features from "../Feat/Features";
import HeroMarket from "../HeroMarket/HeroMarket";
import Footer from "../Footer/Footer";


export default function Landing() {

  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <HeroMarket />
      <Footer />
    </>
  );
}