// components
import { Box, Flex, Text } from "@chakra-ui/react";

// icons
import { FaBitcoin } from "react-icons/fa"

export default function TopCards() {

    return (
		<>
			<Box 
            // w={"25%"}
            // h={"25%"}
            rounded="lg"
            shadow="lg"
            bg="purple.800"
            p={6}
            overflow='hidden'

            display='flex'
            flexDirection={"column"}
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
                        <Text fontSize='lg' p={0.5} color="white" fontWeight={"bold"} > USD 62,548.22 </Text>
                    </Box> 
                    <Box>
                        <Text p={0.5} color="green.300" fontWeight={"bold"} > +2.05% </Text>
                    </Box> 
                </Flex>
                <Box>
                    <Text p={0.5} color="purple.400" > Último mes </Text>
                </Box>
            </Box>
		</>
    )
}