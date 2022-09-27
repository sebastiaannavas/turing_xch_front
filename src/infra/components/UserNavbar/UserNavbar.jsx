// dependencies
import axios from "axios";
import { GET } from "../../api/endpoints";

// routes
import { Navigate, Outlet } from "react-router-dom"

// hooks
import { useState, useEffect } from "react";

// components
import NavContainer from "../Navbar/atom/NavContainer";
import Logo from "../Navbar/atom/Logo";
import MenuToggle from "../Navbar/atom/MenuToggle";
import UserLinks from "../Navbar/atom/UserLinks";


export default function UserNavbar () {

    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("auth")}` }
    };

    const getJwt = async () => {

        await axios.get(GET.JWT_VER, config)
        .then( response => {
            console.log(response.data.msg);
        })
        .catch( error => {
            console.log(error.response.data.error);
            localStorage.removeItem("auth");
        });
    };

    useEffect(() => { getJwt(); }, []);

    if (!localStorage.getItem("auth")) {
        
        return <Navigate replace to="/signin" />;
    }

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