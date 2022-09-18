// components
import { Stack, Heading, Text, Highlight, Box, SimpleGrid, Button } from "@chakra-ui/react";
import TopCards from "./atom/TopCards";


const Header = () => {

  	return (
		<>
			<Heading
			as="h1"
			size="xl"
			fontWeight="bold"
			textAlign={"center"}
			color="gray.800"
			>
				Cryptos del Momento
			</Heading>
			<Text 
			color={'gray.800'} 
			align="center"
			> 
				<Highlight
				query='Turing Exchange' 
				styles={{ px: '1', py: '1', bg: 'purple.200', fontWeight: 'bold' }}
				>
					¡Consulta los precios de las criptomonedas que Turing Exchange ofrece para ti! 
				</Highlight>
			</Text>
		</>
	);
}

export default function HeroMarket() {

    return (
		<>
			<Stack
			spacing={8}
			px={12}
			pb={24}
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