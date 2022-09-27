// components
import { Flex } from "@chakra-ui/react";
import ChartAssets from "./atom/ChartAssets";
import PayForm from "./atom/PayForm";
import Assets from "./atom/Assets";

export default function Deposits() {

  return (
    <>
      <Flex 
      direction={['column', 'row']}
      justify={['center']}
      gap={8}
      px={8}
      py={8}
      h={"86vh"}
      bg={"#16002A"}
      >
        <Assets /> 
        <PayForm /> 
        <ChartAssets />
      </Flex>
    </>
  );
}