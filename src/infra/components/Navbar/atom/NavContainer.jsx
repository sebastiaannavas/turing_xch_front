// components
import { Flex } from "@chakra-ui/react";

export default function NavContainer ( { children } ) {

  return (
    <Flex 
      as="nav"
      // position={["static", "static", "fixed", "fixed"]} // stay on scroll
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={6}
      opacity={["0.95", "0.95", "1", "1"]}
      bg={"#240046"}
      color="white"
      >
        { children }
    </Flex>
  );
}