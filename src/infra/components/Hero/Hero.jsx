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
        pt={[8, 8, 4, 4]}
        pb={8}
        bg="#240046"
        // bgGradient={[
        //   'linear(to-tr, teal.300, yellow.400)',
        //   'linear(to-t, blue.200, teal.500)',
        //   'linear(to-b, orange.100, purple.300)',
        // ]}
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