import { Routes, Route, Link } from "react-router-dom";

// components
import { Box, Heading } from "@chakra-ui/react"
import { TuringIcon } from "../../../../app/common/Icons/TuringIcon"

export default function Logo () {

  return (
    <>
      <Link to="/" style={{ display:"flex", gap: 6 }}> 
        <TuringIcon boxSize={12} />
        <Box padding={2}>
          <Heading size='md' p={0.5} color="white" > Turing Exchange </Heading>
        </Box>
      </Link>
    </>
  );
}