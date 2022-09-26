// hooks
import { useState } from "react";

// components
import { Box } from "@chakra-ui/react";
import Hero from "../Hero/Hero";
import Partners from "../Hero/atom/Partners";
import Features from "../Feat/Features";
import Market from "../Market/Market";
import Blog from "../Guides/Blog";
import TeamCards from "../TeamCards/TeamCards";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";

// icons
import { ArrowUpward } from "@mui/icons-material";


export default function Landing() {

  const [visible, setVisible] = useState(false)
  
  const toggle = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled > 300 ? setVisible(true) : setVisible(false);
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  window.addEventListener('scroll', toggle, { passive: true } );

  return (
    <>
      <Box
      bgGradient={[
        'linear(to-b, #240046, #6e44ff)',
      ]}
      >

      <Hero />
      <Partners />

      </Box>

      <Features />
      <Market />
      <Blog />
      <TeamCards />
      <ContactUs />
      <Footer />

      <Box
      as="button"
      style={ { display: visible ? 'inline' : 'none' } }
      position={"fixed"}
      bottom='25px'
      right={['10px', '12px']}
      rounded="2xl"
      bg={"#240046"}
      pt={2}
      pb={1}
      px={2}
      zIndex={1}
      color="white"

      _hover={{ background: "#372280" }}
			transition={'background 0.5s ease'}

      onClick={scrollToTop}
      >
        <ArrowUpward  />
      </Box>
    </>
  );
}