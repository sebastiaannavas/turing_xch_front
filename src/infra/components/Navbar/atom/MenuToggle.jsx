// components
import { Box } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

export default function MenuToggle ({ toggle, isOpen }) {

  return (
    <Box display={{ base: "block", md: "none" }} mb={1.4} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  );
}