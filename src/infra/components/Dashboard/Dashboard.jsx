// routes
import { Link, Navigate } from "react-router-dom"

// components
import { Stack, Heading, Text, Button } from "@chakra-ui/react"


export default function Dashboard () {

    if (!localStorage.getItem("auth")) {
        
        return <Navigate replace to="/signin" />;
    } 

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
                    :)
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
                    </Text>
                </Stack>

                <Link to="/">
                    <Button
                    colorScheme='red'
                    p={6}
                    >
                        Cerrar sesión
                    </Button>
                </Link>

            </Stack>
        </>
    );
}