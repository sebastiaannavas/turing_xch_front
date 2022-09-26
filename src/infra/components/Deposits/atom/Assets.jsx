// components
import { Stack, Heading, SimpleGrid, Box, Flex, Text,
  	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer
} from "@chakra-ui/react";

// icons
import { FaBitcoin } from "react-icons/fa"

const Asset = () => {

	return (

		<Flex bg='whiteAlpha.50' px={3} py={2} fontSize="sm" w={"full"} color="white">

			<Stack flex={1} direction={"row"} align={"center"} spacing={4}>
				<FaBitcoin color="#ffce1f" size={"2em"} />
				<Stack spacing={-0.2}>
					<Text fontWeight={"bold"}> USDT </Text>
					<Text> TheterUS </Text>
				</Stack>
			</Stack>

			<Stack flex={1} spacing={-0.2}>
				<Text fontWeight={"bold"} align={"right"}> 1,913.15 </Text>
				<Text align={"right"}> ≈ 1,913.15 BUSD </Text>
			</Stack>

		</Flex>
	);
}

export default function Assets () {

    return (
      <>
        <Stack
		pb={4}
		px={4}
        w={['100%', '25%']}
        align={"center"}
        spacing={4}
        bg={"#1F0D3A"}
        borderWidth={"3px"}
        rounded="lg"
        borderColor="purple.400"
        >
			<Heading size={"sm"} color="white" pt={8} pb={4}> Activos disponibles </Heading>

			<Flex bg='gray.200' rounded={"lg"} px={3} py={2} fontSize="sm" w={"full"}>
				<Text flex={1}>Moneda</Text>
				<Text flex={1} align="right">Cantidad</Text>
			</Flex>

			<Stack
			width={"full"}
			overflowY={"auto"}
			>
				<Asset />
				<Asset />
				<Asset />
				<Asset />
				<Asset />
				<Asset />
			</Stack>

			{/* <TableContainer
				overflow={"hidden"}
				pt={2}
				color={"purple.200"}
				>
					<Table 
					size={"md"}
					>
						<Thead>
						<Tr>
							<Th color={"purple.500"}> Moneda </Th>
							<Th color={"purple.500"} isNumeric> Cantidad </Th>
						</Tr>
						</Thead>
						<Tbody>
						<Tr>
							<Td> 
							Hola
							</Td>
							<Td isNumeric> 19.55 </Td>
						</Tr>
						<Tr>
							<Td> Venta (XRP) </Td>
							<Td isNumeric> 30.48 </Td>
						</Tr>
						</Tbody>
					</Table>
				</TableContainer> */}
			</Stack>
      </>
    );
}