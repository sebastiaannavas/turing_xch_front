// routes
import { Link } from "react-router-dom";

// components
import { Box, Stack, Badge,

	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverHeader,
	PopoverBody,
	PopoverArrow,
	PopoverCloseButton,

	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	MenuGroup,
	MenuDivider,

} from "@chakra-ui/react";
import Avatar from 'boring-avatars';

// icons
import { Info } from "@mui/icons-material";
import { MoonIcon } from "@chakra-ui/icons";

const NavGroup = ( { children, isOpen } ) => {

    return (
		<Box 
		display={{ base: isOpen ? "block" : "none", md: "block" }} 
		>
			<Stack
			spacing={8}
			align={["right", "center", "center", "center"]}
			direction={["column", "row", "row", "row"]}
			pt={[6, 6, 0, 0]}
			>
				{ children }
			</Stack>
		</Box>
    )
}

export default function UserLinks ( {isOpen} ) {

	const logout = () => localStorage.removeItem("auth");

	return (
		<>
			<NavGroup isOpen={isOpen}>
				<Box
				_hover={{ color: "purple.400" }}
				transition={'color 0.5s ease'}
				>
					<Link to="" style={{ fontWeight: "bold" }}> Exchange </Link> 
					{/* exchange */}
				</Box>

				<Box
				_hover={{ color: "purple.400" }}
				transition={'color 0.5s ease'}
				>
					<Link to="prices" style={{ fontWeight: "bold" }}> 
						Mercado 
						<Badge ml={2} colorScheme="yellow">
							Beta
						</Badge>
					</Link>
				</Box>

				<Box
				_hover={{ color: "purple.400" }}
				transition={'color 0.5s ease'}
				>
					<Link to="deposits" style={{ fontWeight: "bold" }}> Depósitos </Link>
				</Box>

				<Stack
				direction={"row"}
				spacing={8}
				>
					<Box
					as="button"
					color={"yellow.400"}
					pb={1}
					_hover={{ color: "yellow" }}
					transition={'color 0.5s ease'}
					>
						<MoonIcon />
					</Box>

					<Popover>
						<PopoverTrigger>
							<Box
							as="button"
							color={"purple.400"}
							pt={1.5}
							_hover={{ color: "purple.600" }}
							transition={'color 0.5s ease'}
							>
								<Info />
							</Box>
						</PopoverTrigger>
						<PopoverContent bg={"purple.500"}>
							<PopoverArrow />
							<PopoverCloseButton />
							<PopoverHeader fontWeight={"600"}> Binance API </PopoverHeader>
							<PopoverBody> Activos circulando: USDT 12.5 </PopoverBody>
						</PopoverContent>
					</Popover>

					<Menu>
						<MenuButton 
						as={"button"} 
						>
							<Avatar
							name="Alan"
							// TODO: reducer for first panel name
							size={"50px"}
							variant='bauhaus'
							colors={["#9d4edd", "#613dc1", "#f72585", "#ffce1f", "#ff6d00"]}
							/>
						</MenuButton>
						<MenuList 
						bg={"purple.500"} 
						color="gray.800"
						borderColor={"purple.800"}
						>
							<MenuGroup title='Cuenta'>
								<Link to="dashboard">
									<MenuItem
									// _hover={{ bg: 'purple.400' }}
									> Mi perfil </MenuItem>
								</Link>
								<Link to="dashboard/balance">
									<MenuItem> Wallet </MenuItem>
								</Link>
							</MenuGroup>
							<MenuDivider />
							<MenuGroup title='Configuración'>
								<Link to="dashboard/security">
									<MenuItem> Seguridad </MenuItem>
								</Link>
								<Link to="dashboard/support">
									<MenuItem> Soporte </MenuItem>
								</Link>
							</MenuGroup>
							<MenuDivider />
								<Link to="/">
									<MenuItem
									as={"button"}
									// color={"red.300"}
									fontWeight="600"
									onClick={logout}
									> Cerrar sesión </MenuItem>
								</Link>
						</MenuList>
					</Menu>
					
				</Stack>

			</NavGroup>
		</>
	);
}