// routes
import { Link } from "react-router-dom";

// components
import { Button, IconButton, Box, Stack, Tooltip } from "@chakra-ui/react";

// icons
import { PersonOutline } from "@mui/icons-material";

const NavGroup = ( { children, isOpen } ) => {

    return (
		<Box 
		display={{ base: isOpen ? "block" : "none", md: "block" }} 
		>
			<Stack
			spacing={4}
			align={["right", "center", "center", "center"]}
			direction={["column", "row", "row", "row"]}
			pt={[6, 6, 0, 0]}
			>
				{ children }
			</Stack>
		</Box>
    )
}

export default function NavLinks ( {isOpen} ) {

	return (
		<>
			<NavGroup isOpen={isOpen}>
				<Box
				_hover={{ color: "purple.400" }}
				transition={'color 0.5s ease'}
				>
					<Link to="/" style={{ fontWeight: "bold" }}> Inicio </Link>
				</Box>

				<Box
				_hover={{ color: "purple.400" }}
				transition={'color 0.5s ease'}
				>
					<Link to="/" style={{ fontWeight: "bold" }}> Mercado </Link>
				</Box>

				<Box
				_hover={{ color: "purple.400" }}
				transition={'color 0.5s ease'}
				>
					<Link to="/" style={{ fontWeight: "bold" }}> Blog </Link>
				</Box>

				<Box
				_hover={{ color: "purple.400" }}
				transition={'color 0.5s ease'}
				>
					<Link to="/" style={{ fontWeight: "bold" }}> Nosotros </Link>
				</Box>

				<Stack direction="row" spacing='4'>
					<Link to="/login">
						<Tooltip label='Iniciar Sesión'>
							<IconButton 
							color="purple.400"
							variant="ghost" 
							aria-label='Iniciar sesión' 
							icon={<PersonOutline />} />
						</Tooltip>
					</Link>
					
					<Link to="/signin">
						<Button colorScheme='purple'> Registrarse </Button>
					</Link>
				</Stack>
			</NavGroup>
		</>
	);
}