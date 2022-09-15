// components
import { Box, Image } from "@chakra-ui/react";

export default function HeroShot( { image } ) {

  return (
    <>
        <Box 
        w={["80%", "60%", "40%", "40%"]} 
        mt={8}
        >
            <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
        </Box>
    </>
  );
}