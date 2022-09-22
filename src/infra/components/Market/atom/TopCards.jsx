// components
import { Box, Flex, Text } from "@chakra-ui/react";

// icons
import { FaBitcoin } from "react-icons/fa"

export default function TopCards() {

    return (
		<>
			<Box 
            rounded="lg"
            shadow="lg"
            bg="#11001c"
            p={6}
            overflow='hidden'
            display='flex'
            flexDirection={"column"}
            fontSize={["sm", "md", "md", "md"]}
            gap={4}
            >
                <Flex justify="space-between" align="center">
                    <Flex align={"center"} gap={1} >
                        <FaBitcoin color="#ffce1f" size={"1.5em"} />
                        <Text p={0.5} color="white" > Bitcoin </Text>
                    </Flex> 
                    <Box>
                        <Text p={0.5} color="purple.400" > 24h </Text>
                    </Box> 
                </Flex>
                <Flex justify="space-between" align="center">
                    <Box>
                        <Text p={0.5} color="white" fontWeight={"bold"} > USD 62,548.22 </Text>
                    </Box> 
                    <Box>
                        <Text p={0.5} color="green.300" fontWeight={"bold"} > +2.05% </Text>
                    </Box> 
                </Flex>
            </Box>
		</>
    )
}