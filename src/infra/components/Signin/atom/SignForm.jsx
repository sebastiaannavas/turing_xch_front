// dependencies
import axios from "axios";
import { POST } from "../../../api/endpoints";
import { schema, ERROR_YUP } from "../../../api/yup";

// hooks
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from "@chakra-ui/react";

// components
import { Button, FormControl, FormLabel, FormErrorMessage, Input, 
         Stack, InputGroup, InputRightElement, IconButton
} from '@chakra-ui/react';
import { Link } from "react-router-dom";

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
        resolver: yupResolver(schema.signin)
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

    const navigate = useNavigate();

    // const [jwt, setJwt] = useState("");
    // const [authError, setJwtError] = useState("");

    const onSubmit = async ( payload ) => {

        await axios.post(POST.NEW_USER, payload)
        .then( response => {
            localStorage.setItem("auth", response.data.token);
            navigate("account");
            resultToast("success", "¡Tu cuenta ha sido registrada!🎉");
        })
        .catch( error => {
            resultToast("error", `${error.response.data.description[0]} 😥`);
        });

        // resultToast("error", "Aún no tienes una cuenta 😟");
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                gap={4}
                >
                    <FormControl isInvalid={errors.name}>
                        <FormLabel> Nombre y apellido </FormLabel>
                            <Input type="text" size="md" placeholder="Alan Turing" 
                            {...register("name")}
                            />
                        <FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.email}>
                        <FormLabel> Correo electrónico </FormLabel>
                            <Input type="email" size="md" placeholder="alan@turing.com" 
                            {...register("email")} 
                            />
                        <FormErrorMessage> {errors.email && ERROR_YUP.MSG_EMAIL} </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.psw}>
                        <FormLabel> Contraseña </FormLabel>
                            <InputGroup size="md">
                                <Input placeholder="Ingresa una contraseña" type={show ? 'text' : 'password'}
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
                    <Link to='/login'> ¿Ya tienes una cuenta? </Link>
                    <Stack pt={4}>
                        <Button colorScheme={'yellow'} variant={'solid'} type="submit">
                            Registrarse
                        </Button>
                    </Stack>

                </Stack>
            </form>
        </>
    );
}