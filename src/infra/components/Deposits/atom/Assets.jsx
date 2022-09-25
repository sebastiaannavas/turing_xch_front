import { Stack, Heading,
  Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer
} from "@chakra-ui/react";

export default function Assets () {

    return (
      <>
        <Stack
        w={['100%', '25%']}
        align={"center"}
        spacing={4}
        bg={"purple.900"}
        borderWidth={"3px"}
        rounded="lg"
        borderColor="purple.400"
        >
          <Heading size={"sm"} color="white" pt={8}> Activos disponibles </Heading>
          <TableContainer
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
                      {/* <Stack> */}
                        {/* <Text> Hola </Text>
                        <Text> Chao </Text> */}
                      {/* </Stack> */}
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
							</TableContainer>
        </Stack>
      </>
    );
}