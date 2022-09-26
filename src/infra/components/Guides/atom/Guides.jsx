import {
    Flex,
    Heading,
} from "@chakra-ui/react";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";

import NavContainer from "../../Navbar/atom/NavContainer";
import NavLinks from "../../Navbar/atom/NavLinks";
import Logo from "../../Navbar/atom/Logo";
import MenuToggle from "../../Navbar/atom/MenuToggle";


function Guides(){
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    return(
        <>
            <NavContainer>
				<Logo toggle={toggle} isOpen={isOpen} />
				<MenuToggle toggle={toggle} isOpen={isOpen} />
				<NavLinks isOpen={isOpen} />
			</NavContainer>
            <Flex
                bg={'#180311'}
                p={10}
                gap={10}
                minH={'100vh'}
                direction={{ base: 'column', md: 'row' }}>
                <Flex gap={10} direction={'column'}>
                    <Heading color={'white'} textTransform={'uppercase'} fontSize={50}>Guías</Heading>
                    <Flex
                        minW={20}
                        direction={'column'}
                        color={'yellow.100'}
                        fontSize={'15px'}
                        gap={5}>
                        <Link to='/guides/GTrade'>Haz Trading</Link>
                        <Link to='/guides/GDeposito'>Deposita o paga</Link>
                        <Link to='/guides/GWallet'>Configura tu Wallet</Link>
                    </Flex>
                </Flex>
                <Outlet />
            </Flex>
        </>
    )
}

export default Guides;