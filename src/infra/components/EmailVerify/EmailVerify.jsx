// dependencies
import axios from "axios";
import { GET } from "../../api/endpoints";

// routes
import { Link, useLocation } from "react-router-dom";

// hooks
import { useState, useEffect } from "react";

// components
import { Stack, Heading, Text, Button, Spinner } from "@chakra-ui/react";

// icons
import { Home } from "@mui/icons-material";
import { EmailIcon } from "../../../app/common/Icons/EmailIcon";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function EmailVerify() {

    let query = useQuery();

    const [loading, setLoading] = useState(true);

    // TODO: add error handling state on response.

    const verify = async () => {

        await axios.get(GET.EMAIL_VER + query.get("emailToken"))
        .then( response => {
            console.log(response);
            setLoading(false);
        })
        .catch( error => {
            console.log(error);
        });
    };
    
    useEffect(() => {

        window.addEventListener("load", verify);

        return () => {
            window.removeEventListener("load", verify);
        };

    }, []);

    return (
      <>
        <Stack
        align="center"
        justify="center"
        h={"100vh"}
        gap={10}
        >
            {loading && 
            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='purple.500'
            size='xl'
            />
            }

            {!loading && 
            <>
                <EmailIcon  w={24} h={24} />
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
                        Tu cuenta ha sido verificada
                    </Heading>
                    <Text
                    color={'gray.800'} 
                    align="center"
                    >
                        ¡Prepárate para comenzar a hacer trades, intercambiar cryptos y 
                        todas las posibilidades que ofrece tu wallet en Turing Exchange!
                    </Text>
                </Stack>

                <Link to="/account">
                    <Button
                    leftIcon={ <Home /> }
                    colorScheme='purple'
                    p={6}
                    >
                        Volver al tablero principal
                    </Button>
                </Link>
            </>
            }

        </Stack>
      </>
    );
}