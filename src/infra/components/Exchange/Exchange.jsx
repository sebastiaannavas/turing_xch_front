// components
import { Flex, Text, Box, Stack, Tabs, Tab, TabList, TabPanels, TabPanel, Grid, GridItem, Heading, Divider, Center,
	Table,
	Thead,
	Tbody,
	Tr,
	Th,
	Td,
	TableContainer
} from "@chakra-ui/react";
import BuyForm from "./atom/BuyForm";
import SellForm from "./atom/SellForm";
import { ChartIcon } from "../../../app/common/Icons/ChartIcon";


const TableHead = () => {

    return(
        <Thead>
            <Tr>
                <Th color={'white'}>Fecha</Th>
                <Th color={'white'}>Hora</Th>  
                <Th color={'white'}>Persona</Th>
                <Th color={'white'}>Monto</Th>
                <Th color={'white'}>Balance</Th>
            </Tr>
        </Thead>
    )
}


export default function Exchange() {

	return (
		<>
			<Stack
			// TODO: set real background of app
			bg={"#16002A"}
			minH="85.4vh"
			>
				<Grid
				minH={"85vh"}
				templateRows='repeat(3, 1fr)'
				templateColumns='repeat(5, 1fr)'
				gap={4}
				>
					<GridItem rowSpan={3} colSpan={2} pt={4} pl={4} pb={3}>
						<Stack align={"center"} justify="center"
						bg='purple.900'
						rounded={"lg"}
						w={"100%"}
						h="100%"
						opacity={0.35}
						>
							<ChartIcon w={"380px"} h={"380px"} mr={4}/>
						</Stack>
					</GridItem>
					
					<GridItem rowSpan={2} colSpan={3} pt={4} pr={4}>
						<Tabs 
						isFitted 
						color={"purple.400"}
						rounded="lg"
						colorScheme={"purple"}
						w={"100%"}
						h="100%"
						px={4}
						>
							<TabList 
							borderColor="purple.900"
							color={"purple.800"}
							mb='1em'>
								<Tab fontWeight="600" > MERCADO </Tab>
								{/* <Tab fontWeight="600" > LÍMITE </Tab> */}
							</TabList>
							<TabPanels
							>
								<TabPanel
								>
									<Flex
									direction={"row"}
									>
										<Stack 
										// maxW={'md'}
										w={"50%"}
										// h={"100%"}
										align={'center'} 
										justify={'center'}
										// bg="gray"
										>
											<BuyForm />
										</Stack>

										<Center height='260px' px={4}>
											<Divider orientation='vertical' borderColor={"purple.800"} />
										</Center>

										<Stack 
										// maxW={'md'}
										w={"50%"}
										align={'center'} 
										justify={'center'}
										// bg="gray"
										>
											<SellForm />
										</Stack>
									</Flex>

								</TabPanel>
								{/* <TabPanel>
									<p> LIMIT </p>
								</TabPanel> */}
							</TabPanels>
						</Tabs>
					</GridItem>
						
					<GridItem colSpan={3} pb={3} pr={4}>
						<Box
						rounded={"lg"}
						w="100%" h="100%"
						px={4}
						pt={2}
						bg={"purple.900"}
						>
							<Heading size={"sm"} color="white" p={2}> Historial de Órdenes </Heading>
							<TableContainer
							h={"100px"}
							overflowY={"auto"}
							pt={2}
							color={"purple.200"}
							>
								<Table 
								size={"sm"}
								>
									<TableHead />
									<Tbody>
									<Tr>
										<Td> 14-09-2022 </Td>
										<Td> Compra (USDT) </Td>
										<Td> 19.55 </Td>
										<Td> 19.55 </Td>
										<Td> 19.55 </Td>
									</Tr>
									<Tr>
										<Td> 14-09-2022 </Td>
										<Td> Compra (USDT) </Td>
										<Td> 19.55 </Td>
										<Td> 19.55 </Td>
										<Td> 19.55 </Td>
									</Tr>
									<Tr>
										<Td> 14-09-2022 </Td>
										<Td> Compra (USDT) </Td>
										<Td> 19.55 </Td>
										<Td> 19.55 </Td>
										<Td> 19.55 </Td>
									</Tr>
									</Tbody>
								</Table>
							</TableContainer>
						</Box>
					</GridItem>
				</Grid>
			</Stack>
		</>
	);
}