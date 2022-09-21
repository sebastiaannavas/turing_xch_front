import {
    Box,
    Button,
    chakra,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Text,
} from '@chakra-ui/react';
import { schema, ERROR_YUP } from '../../api/yup';

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from "@chakra-ui/react";

// Mock de datos del usuario
import { personalData } from './FirstPanel';

function MiPerfil(){

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema.changemail)
    });

    const toast = useToast();

    const resultToast = ( status, title ) => {

        return toast({
            title: title,
            status: status,
            duration: 5000,
            isClosable: true,
        });
    };

    const onSubmit = async ( payload ) => {

        try {

            // MOCK
            // const account = users.find( (user) => user.email == email );
            // if (account && account.psw == psw) {
            //     setAuth(true);
            //     localStorage.setItem("auth", true);
            //     console.log(auth);
            // }

            // await axios.post(POST.NEW_USER, payload);
            resultToast("success", "Correo actualizado!🎉");
        } 
        catch (error) { 
            resultToast("error", "Se produjo un problema 😥");
        }
    };

    const { name, lastname, email, id, address } = personalData;

    return(
        <Flex
            flex={0.75}
            bg='gray.700'
            direction={'column'}
            justifyContent={'space-between'}
            p={10}>
            <Heading
                color={'yellow.200'}
                textAlign={'left'}
                fontWeight={'bold'}
                fontSize={'120%'}>
                Mi perfil
            </Heading>
            <Text textAlign={'justify'} color={'gray.400'} fontSize={'80%'}>
                Datos personales
            </Text>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'5%'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    Nombre y Apellido
                </chakra.h3>
                <Box
                    textAlign={'center'}
                    color={'gray.500'}
                    bg={'gray.800'}
                    minW={'175px'}>
                    {name}{' '}{lastname}
                </Box>         
            </Flex>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'5%'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    Dirección de correo
                </chakra.h3>
                <Box
                    textAlign={'center'}
                    color={'gray.500'}
                    bg={'gray.800'}
                    minW={'175px'}>
                    {email}
                </Box>         
            </Flex>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'5%'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    ID de usuario
                </chakra.h3>
                <Box
                    textAlign={'center'}
                    color={'gray.500'}
                    bg={'gray.800'}
                    minW={'175px'}>
                    {id}
                </Box>         
            </Flex>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'3%'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    Dirección de depósito
                </chakra.h3>
                <Box
                    textAlign={'center'}
                    color={'gray.500'}
                    bg={'gray.800'}
                    minW={'175px'}>
                    {address}
                </Box>         
            </Flex>
            <chakra.hr></chakra.hr>
            <Heading
                color={'yellow.200'}
                textAlign={'left'}
                fontWeight={'bold'}
                fontSize={'120%'}
                mt={'3%'}>
                Cambiar dirección de correo electrónico
            </Heading>
            <Text textAlign={'justify'} color={'gray.400'} fontSize={'80%'}>
                Ingresa una dirección de correo activa que dispongas.
            </Text>
            <form>
                <Flex
                    direction={'column'}
                    >
                    <FormControl isInvalid={errors.email} color={'white'} w={'auto'}>
                        <FormLabel>Nuevo correo</FormLabel>
                        <Input type="email" placeholder="alan@turing.com" {...register("email")}/>
                        <FormErrorMessage>{errors.email && ERROR_YUP.MSG_EMAIL}</FormErrorMessage>
                    </FormControl>
                        <Button colorScheme={'blue'} variant={'solid'} mt={2}  onClick={handleSubmit(onSubmit)}>
                            Guardar correo
                        </Button>
                </Flex>
            </form>
        </Flex>
    )
}

export default MiPerfil;