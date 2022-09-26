import { schema, ERROR_YUP } from '../../api/yup';

import {
    Button,
    chakra,
    Flex,
    Switch,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Text,
    InputGroup,
    InputRightElement,
    IconButton,
    FormErrorMessage,
} from '@chakra-ui/react';

// icons
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { FcGoogle } from 'react-icons/fc';
import { BiMailSend } from 'react-icons/bi';
import { MdAlternateEmail } from 'react-icons/md'

// hooks
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from "@chakra-ui/react";

function Seguridad(){

    // Old psw visibility
    const [showOld, setShowOld] = useState(false);
    
    const handleClickOld = () => setShowOld(!showOld);

    // psw visibility 1
    const [show, setShow] = useState(false);
    
    const handleClick = () => setShow(!show);
    
    // psw visibility 2
    const [showOk, setShowOk] = useState(false);

    const handleClickOk = () => setShowOk(!showOk);

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema.changepsw)
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
            resultToast("success", "¡Tu contraseña ha sido actualizada!🎉");
        } 
        catch (error) { 
            resultToast("error", "Se produjo un problema 😥");
        }
    };

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
                Seguridad
            </Heading>
            <Text textAlign={'justify'} color={'gray.400'} fontSize={'80%'}>
                Te recomendamos, por tu seguridad, utilizar una doble autenticación o la autenticación de Google
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
                    <Flex gap={2} alignItems={'center'}>
                        <MdAlternateEmail size={20} />
                        <Text>Email Authentication</Text>
                    </Flex>
                </chakra.h3>
                <Switch/>            
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
                    <Flex gap={2} alignItems={'center'}>
                        <BiMailSend size={20} />
                        <Text>SMS Authentication</Text>
                    </Flex>
                </chakra.h3>
                <Switch/>            
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
                    <Flex gap={2} alignItems={'center'}>
                        <FcGoogle size={20} />
                        <Text>Google Authentication</Text>
                    </Flex>
                </chakra.h3>
                <Switch/>            
            </Flex>
            <chakra.hr></chakra.hr>
            <Heading
                color={'yellow.200'}
                textAlign={'left'}
                fontWeight={'bold'}
                fontSize={'120%'}>
                Tipo de Wallet
            </Heading>
            <Text textAlign={'justify'} color={'gray.400'} fontSize={'80%'}>
                Para información sobre los tipos de wallet, puedes visitar la sección de Soporte 
            </Text>
            <RadioGroup>
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
                        Pública
                    </chakra.h3>
                    <Radio value='0'/>            
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
                        Anónima
                    </chakra.h3>
                    <Radio value='1'/>            
                </Flex>
            </RadioGroup>    
            <chakra.hr></chakra.hr>
            <Heading
                color={'yellow.200'}
                textAlign={'left'}
                fontWeight={'bold'}
                fontSize={'120%'}>
                Cambiar contraseña
            </Heading>
            <Text textAlign={'justify'} color={'gray.400'} fontSize={'80%'}>
                Te recomendamos usar una contraseña que no utilices para conectarte en otros sitios web
            </Text>
            <form>
                <Flex
                    direction={'column'}
                    >
                    <FormControl id="password" color={'gray.400'} w={'auto'}>
                        <FormLabel>Contraseña actual</FormLabel>
                        <InputGroup>
                            <Input placeholder="Contraseña" type={showOld ? 'text' : 'password'} />
                            <InputRightElement>
                                <IconButton size="md" variant={"ghost"} onClick={handleClickOld}
                                icon={showOld ? < Visibility fontSize="small" /> : < VisibilityOff fontSize="small" />} />
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                    <Flex
                        direction={{ base: 'column', md: 'row' }}
                        justifyContent={'space-between'}>
                        <FormControl isInvalid={errors.psw} color={'white'} mr={'2%'}>
                            <FormLabel>Nueva Contraseña</FormLabel>
                            <InputGroup>
                                <Input placeholder="Ingresa una contraseña" type={show ? 'text' : 'password'} {...register('psw')} />
                                <InputRightElement>
                                    <IconButton size="md" variant={"ghost"} onClick={handleClick}
                                    icon={show ? < Visibility fontSize="small" /> : < VisibilityOff fontSize="small" />} />
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{errors.psw && ERROR_YUP.MSG_PSW}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.okPsw} color={'white'}>
                            <FormLabel>Confirmar contraseña</FormLabel>
                            <InputGroup>
                                <Input placeholder="Confirma tu contraseña" type={showOk ? 'text' : 'password'} {...register('okPsw')} />
                                <InputRightElement>
                                    <IconButton size="md" variant={"ghost"} onClick={handleClickOk}
                                    icon={showOk ? < Visibility fontSize="small" /> : < VisibilityOff fontSize="small" />} />
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>{errors.okPsw && ERROR_YUP.MSG_OKPSW}</FormErrorMessage>
                        </FormControl>
                    </Flex>
                        <Button colorScheme={'blue'} variant={'solid'} mt={2} onClick={handleSubmit(onSubmit)}>
                            Guardar contraseña
                        </Button>
                </Flex>
            </form>
        </Flex>
    )
}

export default Seguridad;