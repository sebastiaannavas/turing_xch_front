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
				<Link to="/" style={{ fontWeight: "bold" }}> Inicio </Link>
				<Link to="/" style={{ fontWeight: "bold" }}> Mercado </Link>
				<Link to="/" style={{ fontWeight: "bold" }}> Blog </Link>
				<Link to="/" style={{ fontWeight: "bold" }}> Nosotros </Link>
				<Stack direction="row" spacing='4'>
				<Tooltip label='Iniciar Sesión'>
					<IconButton 
					color="purple.400"
					variant="ghost" 
					aria-label='Iniciar sesión' 
					icon={<PersonOutline />} />
				</Tooltip>
				<Link to="/signin">
					<Button colorScheme='purple'> Registrarse </Button>
				</Link>
				</Stack>
			</NavGroup>
		</>
	);
}