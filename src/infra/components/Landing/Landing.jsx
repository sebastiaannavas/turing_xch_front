// components
import { Box } from "@chakra-ui/react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Partners from "../Hero/atom/Partners";
import Features from "../Feat/Features";
import HeroMarket from "../HeroMarket/HeroMarket";
import Footer from "../Footer/Footer";


export default function Landing() {

  return (
    <>
      {/* <Box> */}

      <Navbar />
      <Hero />
      <Partners />
      {/* </Box> */}
      <Features />
      <HeroMarket />
      <Footer />
    </>
  );
}