// components
import { Flex } from "@chakra-ui/react";
import HeroHeader from "./atom/HeroHeader";
import HeroShot from "./atom/HeroShot";


export default function Hero () {

  return (
    <>
        <Flex
        align="center"
        justify="space-around"
        direction={{ base: "column", md: "row" }}
        minH={["70vh", "70vh", "35vh", "25vh"]}
        px={8}
        // pt={[8, 8, 36, 24]} // on fixed navbar
        pt={[8, 8, 4, 4]}
        pb={8}
        >
            <HeroHeader 
            title={"Únete y crea tu mundo crypto"} 
            subtitle={"Más simple y más seguro"} 
            ctaLink={ "/signin" } 
            ctaText={ "¡Comienza Ya!" } 
            />
            <HeroShot image={"https://bit.ly/3L9zhNQ"} />
        </Flex>
    </>
  );
}