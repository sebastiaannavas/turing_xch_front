// components
import { Flex, Stack, Tabs, Tab, TabList, TabPanels, TabPanel } from "@chakra-ui/react";

export default function Exchange() {

	return (
		<>
			<Stack
			direction={"row"}
			minH="85vh"
			>
				<Flex
				flex={1}
				align="center"
				justify={"center"}
				bg={"gray.200"}
				>
					K-Lines
				</Flex>

				<Flex
				flex={1}
				// direction={"column"}
				justify={"center"}
				// bg={"gray.400"}
				pt={8}
				pr={6}
				pl={4}
				>
					<Flex
					direction={"column"}
					>
						<Tabs 
						isFitted 
						variant='enclosed'
						bg={"gray.800"}
						rounded="lg"
						w={"100vh"}
						h="60%"
						>
							<TabList mb='1em'>
								<Tab> MARKET </Tab>
								<Tab> LIMIT </Tab>
							</TabList>
							<TabPanels>
								<TabPanel>
									<p> MARKET </p>
								</TabPanel>
								<TabPanel>
									<p> LIMIT </p>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</Flex>
				</Flex>
			</Stack>
		</>
	);
}