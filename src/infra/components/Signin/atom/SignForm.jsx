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
         Stack, InputGroup, InputRightElement, IconButton
} from '@chakra-ui/react';

// icons
import { Visibility, VisibilityOff } from "@mui/icons-material";


export default function SignForm () {

    // psw visibility 1
    const [show, setShow] = useState(false);
    
    const handleClick = () => setShow(!show);
    
    // psw visibility 2
    const [showOk, setShowOk] = useState(false);

    const handleClickOk = () => setShowOk(!showOk);

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
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
            resultToast("success", "¡Tu cuenta ha sido registrada!🎉");
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
                    <FormControl isInvalid={errors.fname}>
                        <FormLabel> Nombre y apellido </FormLabel>
                            <Input type="text" size="md" placeholder="Alan Turing" 
                            
                            {...register("fname")} 
                            />
                        <FormErrorMessage> {errors.fname && ERROR_YUP.MSG_NAME} </FormErrorMessage>
                    </FormControl>

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
                                <Input placeholder="Ingresa una contraseña" type={show ? 'text' : 'password'}
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

                    <FormControl isInvalid={errors.okPsw}>
                        <FormLabel> Confirmar contraseña </FormLabel>
                            <InputGroup size="md">
                                <Input placeholder="Confirma tu contraseña" type={showOk ? 'text' : 'password'}
                                {...register("okPsw")}
                                />
                                <InputRightElement>
                                    <IconButton size="sm" variant={"ghost"} onClick={handleClickOk}
                                    icon={showOk ? < Visibility fontSize="small" /> : < VisibilityOff fontSize="small" />} 
                                    />
                                </InputRightElement>
                            </InputGroup>
                        <FormErrorMessage> {errors.okPsw && ERROR_YUP.MSG_OKPSW} </FormErrorMessage>   
                    </FormControl>

                    <Stack pt={4}>
                        <Button colorScheme={'purple'} variant={'solid'} type="submit">
                            Registrarse
                        </Button>
                    </Stack>

                </Stack>
            </form>
        </>
    );
}