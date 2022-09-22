// components
import { Box, Heading, Link } from "@chakra-ui/react"
import { TuringIcon } from "../../../../app/common/Icons/TuringIcon"

export default function Logo () {

  return (
    <>
      <Link 
      href="https://github.com/sebastiaannavas/turing_xch_front" 
      target={"_blank"} 
      style={{ display:"flex", gap: 6, textDecoration: "none" }}> 
        <TuringIcon boxSize={12} />
        <Box padding={2}>
          <Heading size='md' p={0.5} color="white" > Turing Exchange </Heading>
        </Box>
      </Link>
    </>
  );
}