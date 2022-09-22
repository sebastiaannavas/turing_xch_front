// dependencies
import axios from "axios";
import { POST } from "../../../api/endpoints";
import { schema, ERROR_YUP } from "../../../api/yup";

// hooks
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

    // psw visibility 1
    const [show, setShow] = useState(false);
    
    const handleClick = () => setShow(!show);
    
    // psw visibility 2
    const [showOk, setShowOk] = useState(false);

    const handleClickOk = () => setShowOk(!showOk);

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema.login)
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

    // MOCK
    // const [email, setEmail] = useState("alan@turing.com");
    // const [psw, setPsw] = useState("Alanturing123.");
    // const users = [{ email: "alan@turing.com", psw: "Alanturing123." }];

    // const [auth, setAuth] = useState(localStorage.getItem(localStorage.getItem("auth") || false));
    // let [auth, setAuth] = useState(false);

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
            resultToast("success", "¡Bienvenido!🎉");
        } 
        catch (error) { 
            resultToast("error", "Se produjo un problema 😥");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                gap={4}
                >
                    <FormControl isInvalid={errors.email}>
                        <FormLabel> Correo electrónico </FormLabel>
                            <Input type="email" size="md" placeholder="alan@turing.com" 
                            // MOCK
                            // value={email}
                            // onChange={ (event) => setEmail(event.target.value) }

                            {...register("email")} 
                            />
                        <FormErrorMessage> {errors.email && ERROR_YUP.MSG_EMAIL} </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.psw}>
                        <FormLabel> Contraseña </FormLabel>
                            <InputGroup size="md">
                                <Input placeholder="Contraseña" type={show ? 'text' : 'password'}
                                // MOCK
                                // value={psw}
                                // onChange={ (event) => setPsw(event.target.value) }

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