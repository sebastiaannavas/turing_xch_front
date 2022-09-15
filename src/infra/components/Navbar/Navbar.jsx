// hooks
import { useState } from "react";

// components
import NavContainer from "./atom/NavContainer";
import Logo from "./atom/Logo";
import MenuToggle from "./atom/MenuToggle"
import NavLinks from "./atom/NavLinks";

function Navbar () {

	const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

	return (
		<>
			<NavContainer>
				<Logo toggle={toggle} isOpen={isOpen} />
				<MenuToggle toggle={toggle} isOpen={isOpen} />
				<NavLinks isOpen={isOpen} />
			</NavContainer>
		</>
	);
}

export default Navbar;