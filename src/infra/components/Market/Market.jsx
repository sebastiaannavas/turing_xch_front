// components
import { Stack, Heading, Text, Highlight, Box, SimpleGrid, Button } from "@chakra-ui/react";
import TopCards from "./atom/TopCards";


const Header = () => {

  	return (
		<>
			<Stack
			spacing={12}
			>
				<Heading
				as="h1"
				size="xl"
				fontWeight="extrabold"
				textAlign={"center"}
				bgGradient="linear(to-l, #f72585, #4361ee)"
  				bgClip="text"
				>
					Cryptos del Momento
				</Heading>
				<Text 
				color={'gray.800'} 
				align="center"
				> 
					<Highlight
					query='Turing Exchange' 
					styles={{ px: '1', py: '1', bg: 'yellow.300', fontWeight: 'bold' }}
					>
						¡Consulta los precios de las criptomonedas que Turing Exchange ofrece para ti! 
					</Highlight>
				</Text>
			</Stack>
		</>
	);
}

export default function Market() {

    return (
		<>
			<Stack
			id="market"
			spacing={16}
			px={12}
			py={20}
			pb={24}
			bg={"gray.100"}
			>
				<Header />
				<Box p={4}>
					<SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>
						<TopCards />
						<TopCards />
						<TopCards />
						<TopCards />
						<TopCards />
						<TopCards />
					</SimpleGrid>
				</Box>
			</Stack>	
		</>
    )
}


// ---

// icons
// import { Search2Icon } from "@chakra-ui/icons";

// const MarketBrowserLink = () => {

// 	return (
// 		<>
// 			<Stack align={"center"}>
// 				<Button 
// 				leftIcon={ <Search2Icon /> } 
// 				colorScheme='purple'
// 				p={6}
// 				> 
// 					Descubre más 
// 				</Button>
// 			</Stack>
// 		</>
// 	);
// }