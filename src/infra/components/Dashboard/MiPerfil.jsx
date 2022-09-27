// dependencies
import axios from "axios";
import { GET } from "../../api/endpoints";

// hooks
import { useState, useEffect } from 'react';

// components
import { Box, Button, Flex, Divider, 
         Heading, Input, Spinner
} from '@chakra-ui/react';


function MiPerfil () {

    const [loading, setLoading] = useState(true);

    const [profile, setProfile] = useState();

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("auth")}` }
    };

    const getUser = async () => {

        await axios.get(GET.USER_PROFILE, config)
        .then( response => {
            console.log(response.data.msg);
            setProfile(response.data.msg);
            setLoading(false);
        })
        .catch( error => {
            console.log(error);
        });
    };

    useEffect(() => { 

        window.addEventListener("load", getUser);

        return () => {
            window.removeEventListener("load", getUser);
        };

    }, []);


    return (
        <Flex
        flex={0.75}
        bg='gray.700'
        direction={'column'}
        justifyContent={'space-between'}
        p={10}
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
            <Heading
                color={'yellow.200'}
                fontWeight={'bold'}
                fontSize={'xl'}
                >
                Mi perfil
            </Heading>

            <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justifyContent={'space-between'}
            >
                <Heading
                fontWeight={'bold'}
                fontSize={'md'}
                color={'white'}>
                    Nombre y Apellido
                </Heading>
                <Box
                minW={"250px"}
                py={2}
                rounded={'lg'}
                textAlign={'center'}
                color={'gray.500'}
                bg={'gray.800'}
                >
                    {profile.name}
                </Box>         
            </Flex>

            <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justifyContent={'space-between'}
            >
                <Heading
                fontWeight={'bold'}
                fontSize={'md'}
                color={'white'}>
                    Dirección de correo electrónico
                </Heading>
                <Box
                minW={"250px"}
                py={2}
                rounded={'lg'}
                textAlign={'center'}
                color={'gray.500'}
                bg={'gray.800'}
                >
                    {profile.email}
                </Box>         
            </Flex>

            <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justifyContent={'space-between'}
            >
                <Heading
                fontWeight={'bold'}
                fontSize={'md'}
                color={'white'}>
                    ID de la cuenta
                </Heading>
                <Box
                minW={"250px"}
                py={2}
                rounded={'lg'}
                textAlign={'center'}
                color={'gray.500'}
                bg={'gray.800'}
                >
                    {profile.uuid}
                </Box>         
            </Flex>

            <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justifyContent={'space-between'}
            // mb={2}
            >
                <Heading
                fontWeight={'bold'}
                fontSize={'md'}
                color={'white'}>
                    Teléfono
                </Heading>
                <Box
                minW={"250px"}
                py={2}
                rounded={'lg'}
                textAlign={'center'}
                color={'gray.500'}
                bg={'gray.800'}
                >
                    {profile.tlf}
                </Box>         
            </Flex>

            <Divider orientation='horizontal' />

            <Heading
                color={'yellow.200'}
                fontWeight={'bold'}
                fontSize={'xl'}
                >
                Cambiar dirección de correo electrónico
            </Heading>

            <form>
                <Flex
                direction={'column'}
                gap={4}
                >
                    <Input type="email" placeholder="alan@turing.com"/>
                    
                    <Button colorScheme={'blue'} variant={'solid'}>
                        Guardar correo
                    </Button>
                </Flex>
            </form>
            </>
            }
        </Flex>
    )
}

export default MiPerfil;