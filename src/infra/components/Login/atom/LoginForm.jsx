// dependencies
import axios from "axios";
import { POST } from "../../../api/endpoints";
import { schema, ERROR_YUP } from "../../../api/yup";

// hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from "@chakra-ui/react";

// components
import { Button, FormControl, FormLabel, FormErrorMessage, Input, 
         Stack, InputGroup, InputRightElement, IconButton, Box
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

// icons
import { Visibility, VisibilityOff } from "@mui/icons-material";


export default function LoginForm () {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema.login)
    });

    const navigate = useNavigate();

    // psw visibility 1
    const [show, setShow] = useState(false);
    
    const handleClick = () => setShow(!show);

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

        await axios.post(POST.LOG_USER, payload)
        .then( response => {
            localStorage.setItem("auth", response.data.token);
            navigate("/account");
            resultToast("success", `${response.data.msg} 🎉`);
        })
        .catch( error => {
            resultToast("error", `${error.response.data.error} 😟`);
        });
        
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                gap={4}
                >
                    <FormControl isInvalid={errors.email}>
                        <FormLabel> Correo electrónico </FormLabel>
                            <Input type="text" size="md" placeholder="alan@turing.com" 
                            {...register("email")} 
                            />
                        <FormErrorMessage> {errors.email && ERROR_YUP.MSG_EMAIL} </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.psw}>
                        <FormLabel> Contraseña </FormLabel>
                            <InputGroup size="md">
                                <Input placeholder="Contraseña" type={show ? 'text' : 'password'}
                                {...register("psw")}
                                />
                                <InputRightElement>
                                    <IconButton size="md" variant={"ghost"} onClick={handleClick}
                                    icon={show ? < Visibility fontSize="small" /> : < VisibilityOff fontSize="small" />} 
                                    />
                                </InputRightElement>
                            </InputGroup>
                        <FormErrorMessage> {errors.psw && ERROR_YUP.MSG_PSW} </FormErrorMessage>   
                    </FormControl>

                    <Stack 
                    gap={4}
                    pt={4}>
                        <Box
                        align={'end'}
                        justify={'end'}
                        fontWeight="600"
                        color={"purple.700"}
                        _hover={{ color: "purple.400" }}
				        transition={'color 0.5s ease'}
                        >
                            <Link to='/recover'> ¿Olvidaste tu contraseña? </Link>
                        </Box>
                        <Button colorScheme={'yellow'} variant={'solid'} type="submit">
                            Ingresar
                        </Button>
                        <Box
                        align={'center'}
                        justify={'center'}
                        fontWeight="600"
                        pt={2}
                        color={"gray.400"}
                        _hover={{ color: "gray.600" }}
				        transition={'color 0.5s ease'}
                        >
                            <Link to='/signin'> ¿Aún no tienes una cuenta? Regístrate </Link>
                        </Box>
                    </Stack>

                </Stack>
            </form>
        </>
    );
}