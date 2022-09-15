// routes
import { Link } from "react-router-dom"

// components
import { Stack, Heading, Text, Button } from "@chakra-ui/react"

// icons
import { Home } from "@mui/icons-material"

export default function NotFound () {

	return (
		<>
			<Stack
			align="center"
			justify="center"
			h={"100vh"}
			gap={10}
			>
				<Heading
				as="h1"
				size="4xl"
				fontWeight="bold"
				color="purple.800"
				textAlign="center"
				>
					:(
				</Heading>

				<Heading
				as="h1"
				size="4xl"
				fontWeight="bold"
				color="purple.800"
				textAlign="center"
				>
					¡Lo sentimos!
				</Heading>

				<Stack
				w={"33.33%"}
				gap={4}
				>
					<Heading
					as="h3"
					size="lg"
					fontWeight="bold"
					color="gray.800"
					textAlign="center"
					>
						404 - Página no encontrada
					</Heading>
					<Text
					color={'gray.800'} 
					align="center"
					>
						La página que buscas ha sido eliminada, 
						cambió de nombre o no se encuentra disponible temporalmente
					</Text>
				</Stack>

				<Link to="/">
					<Button
					leftIcon={ <Home /> }
					colorScheme='purple'
					p={6}
					>
						Volver a la página principal
					</Button>
				</Link>

			</Stack>
		</>
	);
}