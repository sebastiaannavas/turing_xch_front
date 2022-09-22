// routes
import { Navigate, Outlet } from "react-router-dom"

// hooks
import { useState } from "react";

// components
import NavContainer from "../Navbar/atom/NavContainer";
import Logo from "../Navbar/atom/Logo";
import MenuToggle from "../Navbar/atom/MenuToggle";
import UserLinks from "../Navbar/atom/UserLinks";


export default function UserNavbar () {

    const logout = () => localStorage.removeItem("auth");

    // if (!localStorage.getItem("auth")) {
        
    //     return <Navigate replace to="/signin" />;
    // } 

    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <NavContainer>
				<Logo toggle={toggle} isOpen={isOpen} />
				<MenuToggle toggle={toggle} isOpen={isOpen} />
				<UserLinks isOpen={isOpen} />
			</NavContainer>
            
            <Outlet />

            {/* <Link to="/">
                <Button
                colorScheme='red'
                p={6}
                onClick={logout}
                >
                    Cerrar sesión
                </Button>
            </Link> */}
        </>
    );
}