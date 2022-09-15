// routes
import { Link, Navigate } from "react-router-dom"

// hooks
import { useState, useEffect } from "react";

// components
import { Stack, Heading, Text, Button } from "@chakra-ui/react"

// icons
import { Home } from "@mui/icons-material"

export default function Dashboard () {

    const [auth, setAuth] = useState(null);

    useEffect( () => {

        const log = localStorage.getItem("auth");
        console.log(log);
        if (log) {
            setAuth(log);
        }
    }, []);

    if (!auth) {

        return <Navigate replace to="/signin" />;

    } else {

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
                        :
                    </Heading>
    
                    <Heading
                    as="h1"
                    size="4xl"
                    fontWeight="bold"
                    color="purple.800"
                    textAlign="center"
                    >
                        ¡Bienvenido!
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
                            Este es tu dashboard
                        </Heading>
                        <Text
                        color={'gray.800'} 
                        align="center"
                        >
                            Te presentamos la página de inicio de tu cuenta.
                            Dinos qué te parece ;
                        </Text>
                    </Stack>
    
                    {/* <Link to="/">
                        <Button
                        leftIcon={ <Home /> }
                        colorScheme='purple'
                        p={6}
                        >
                            Volver a la página principal
                        </Button>
                    </Link> */}
    
                </Stack>
            </>
        );

    }
}