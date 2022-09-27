import { schema, ERROR_YUP } from '../../api/yup';

import { Button, chakra, Flex, Switch, FormControl, 
         FormLabel, Heading, Input, Tag, Divider,
         Text, InputGroup, InputRightElement, IconButton, FormErrorMessage
} from '@chakra-ui/react';

// icons
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Lock } from '@mui/icons-material';
import { Email } from '@mui/icons-material';

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
                fontWeight={'bold'}
                fontSize={'lg'}>
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
                        <Tag variant="solid" colorScheme="gray"> No verificado </Tag>
                        {/* <Tag variant="solid" colorScheme="green"> Verificado </Tag> */}
                    </Flex>
                </chakra.h3>
                <Button colorScheme={'yellow'} variant={'solid'} type="submit">
                    Verificar
                </Button>         
            </Flex>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                >
                <chakra.h3
                    fontWeight={'bold'}
                    fontSize={'md'}
                    color={'white'}>
                    <Flex gap={6} alignItems={'center'}>
                        <Lock size={20} />
                        <Text> Autenticación de 2 factores (2FA) </Text>
                    </Flex>
                </chakra.h3>
                <Switch/>            
            </Flex>
            
            <Divider orientation='horizontal' />
            
            <Heading
                color={'yellow.200'}
                fontWeight={'bold'}
                fontSize={'lg'}>
                Cambiar contraseña
            </Heading>
            <form>
                <Flex
                direction={'column'}
                gap={4}
                >
                    <FormControl id="password" color={'white'}>
                        <FormLabel> Contraseña actual </FormLabel>
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