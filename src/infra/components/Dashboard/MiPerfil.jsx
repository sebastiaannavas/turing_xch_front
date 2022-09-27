// dependencies
import axios from "axios";
import { GET } from "../../api/endpoints";

// hooks
import { useState, useEffect } from 'react';
import { useToast } from "@chakra-ui/react";

// components
import { Box, Button, Flex, Divider, 
         Heading, Spinner,

         chakra, Tag, Text
} from '@chakra-ui/react';
import { Email } from '@mui/icons-material';


function MiPerfil () {

    const [loading, setLoading] = useState(true);

    const [profile, setProfile] = useState({});

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

    const toast = useToast();

    const resultToast = ( status, title ) => {

        return toast({
            title: title,
            status: status,
            duration: 5000,
            isClosable: true,
        });
    };

    const getEmail = async () => {

        await axios.get(GET.EMAIL_REVER + profile.email)
        .then( response => {
            resultToast("success", `${response.data.msg} 🎉`);
        })
        .catch( error => {
            resultToast("error", `${error.response.data.error} 😟`);
        });
    };

    useEffect(() => { 
        
        getUser();

        // window.addEventListener("load", getUser);

        // return () => {
        //     window.removeEventListener("load", getUser);
        // };

    }, []);


    return (
        <Flex
        flex={0.75}
        direction={'column'}
        justifyContent={'space-between'}
        // gap={10}
        borderColor={"purple.400"}
        borderWidth={"2px"}
        rounded={"lg"}
        mx={4}
        my={6}
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
                minW={"345px"}
                py={2}
                rounded={'lg'}
                textAlign={'center'}
                color={'white'}
                bg={'purple.600'}
                >
                    {/* Hola */}
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
                minW={"345px"}
                py={2}
                rounded={'lg'}
                textAlign={'center'}
                color={'white'}
                bg={'purple.600'}
                >
                    {/* Hola */}
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
                minW={"345px"}
                py={2}
                rounded={'lg'}
                textAlign={'center'}
                color={'white'}
                bg={'purple.600'}
                >
                    {/* Hola */}
                    {profile.uuid}
                </Box>         
            </Flex>

            <Flex
            direction={{ base: 'column', md: 'row' }}
            align="center"
            justifyContent={'space-between'}
            mb={2}
            >
                <Heading
                fontWeight={'bold'}
                fontSize={'md'}
                color={'white'}>
                    Teléfono
                </Heading>
                <Box
                minW={"345px"}
                py={2}
                rounded={'lg'}
                textAlign={'center'}
                color={'white'}
                bg={'purple.600'}
                >
                    {/* Hola */}
                    {profile.tlf}
                </Box>         
            </Flex>

            <Divider orientation='horizontal' />

            <Heading
                // pt={2}
                color={'yellow.200'}
                fontWeight={'bold'}
                fontSize={'xl'}>
                Seguridad
            </Heading>
            <Flex
                align="center"
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                >
                <chakra.h3
                    fontWeight={'bold'}
                    fontSize={'md'}
                    color={'white'}>
                    <Flex gap={6} alignItems={'center'}>
                        <Email size={20} />
                        <Text> Correo electrónico </Text>
                        <Tag 
                        variant="solid" 
                        colorScheme={profile.verified == true ? "green" : "gray"}> 
                            {profile.verified == true ? "Verificado" : "No verificado"} 
                        </Tag>
                    </Flex>
                </chakra.h3>
                <Button colorScheme={'yellow'} variant={'solid'} onClick={getEmail}>
                    Verificar
                </Button>         
            </Flex>
            </>
            }
        </Flex>
    )
}

export default MiPerfil;