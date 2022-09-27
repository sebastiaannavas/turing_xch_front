// components
import { Image, Flex, Link, Box } from "@chakra-ui/react";
import { motion } from 'framer-motion';

export default function Partners () {

  return (
    <>
        <Flex
        id="partners"
        direction={['column', 'column', 'row', 'row']}
        align="center"
        justify={['center', 'space-between']}
        gap={[8, 8, 0, 0]}
        wrap="wrap"
        pt={10}
        px={28}
        pb={20}
        >

        <Box 
        as={motion.div}
        boxSize={["100%", "35%", "25%", "20%"]}
        filter="grayscale(100%)"
        opacity={"0.5"}
        whileHover={{ scale: 1.1, opacity: 1, filter: "none" }}
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
        filter="grayscale(100%)"
        opacity={"0.5"}
        whileHover={{ scale: 1.1, opacity: 1, filter: "none" }}
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
        filter="grayscale(100%)"
        opacity={"0.5"}
        whileHover={{ scale: 1.1, opacity: 1, filter: "none" }}
        whileTap={{ scale: 0.9 }}
        transition='0.1s linear'
        >
            <Link href="https://www.itrock.com.ar/" target={"_blank"}>
                <Image src="https://dl.dropboxusercontent.com/s/ewqmb5gix2j620i/it-rock.png?dl=0" alt="IT Rock" />
            </Link>
        </Box>

        <Box 
        as={motion.div}
        boxSize={["80%", "25%", "15%", "15%"]}
        filter="grayscale(100%)"
        opacity={"0.5"}
        whileHover={{ scale: 1.1, opacity: 1, filter: "none" }}
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