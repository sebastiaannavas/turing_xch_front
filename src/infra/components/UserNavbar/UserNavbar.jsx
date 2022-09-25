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
        </>
    );
}