// components
import { Image, Flex, Link, Box } from "@chakra-ui/react";
import { motion } from 'framer-motion';

export default function Partners () {

  return (
    <>
        <Flex
        direction={['column', 'row']}
        align="center"
        justify={['center', 'space-between']}
        gap={[8, 0]}
        wrap="wrap"
        pt={10}
        px={28} // REVIEW
        pb={20}
        >

        <Box 
        as={motion.div}
        boxSize={["100%", "35%", "25%", "20%"]}
        opacity="0.5"
        whileHover={{ scale: 1.1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        transition='0.1s linear'
        >
            <Link href="https://www.socialoplesk.com/" target={"_blank"}>
                <Image src="https://dl.dropboxusercontent.com/s/c3bnblz67jfl6sf/oplesk.png?dl=0" alt="Social Oplesk" />
            </Link>
        </Box>

        <Box 
        as={motion.div}
        boxSize={["80%", "25%", "15%", "10%"]}
        opacity="0.5"
        whileHover={{ scale: 1.1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        transition='0.1s linear'
        >
            <Link href="https://www.cocopago.app/" target={"_blank"}>
                <Image src="https://dl.dropboxusercontent.com/s/ryfxd38gtg7iotw/coco.png?dl=0" alt="Coco Pago" />
            </Link>
        </Box>

        <Box 
        as={motion.div}
        boxSize={["80%", "25%", "15%", "15%"]}
        opacity="0.5"
        whileHover={{ scale: 1.1, opacity: 1 }}
        whileTap={{ scale: 0.9 }}
        transition='0.1s linear'
        >
            <Link href="https://ar.shipro.pro/" target={"_blank"}>
                <Image src="https://dl.dropboxusercontent.com/s/orgxxp4iz1rjyfr/shipro.png?dl=0" alt="Shipro" />
            </Link>
        </Box>

        </Flex>
    </>
  );
}