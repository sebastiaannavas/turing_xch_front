// dependencies
import axios from "axios";
import { POST } from "../../../api/endpoints";
import { schema, ERROR_YUP } from "../../../api/yup";
// import addUser from "../../../api/addUser";

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

    const [jwt, setJwt] = useState("");
    
    // const [authError, setJwtError] = useState("");

    // --- MOCK

    // const [email, setEmail] = useState("alan@turing.com");
    // const [psw, setPsw] = useState("Alanturing123.");
    // const users = [{ email: "alan@turing.com", psw: "Alanturing123." }];

    // --- MOCK


    const onSubmit = async ( payload ) => {

        // let [ data, setData ] = useState( {} );
        // let [ error, setError ] = useState( "" );

        // useEffect ( () => {

        //     ( async function () {
                
        //         try {
        
        //             let { data } = await axios.post(POST.NEW_USER, payload);
        //             setData( data.token );
        
        //         } catch ( error ) { setError( console.log(error) ) }
    
        //     } )()

            
        
        // }, []);

        // setJwt(data);
        // localStorage.setItem("auth", jwt);
        // navigate("/dashboard");
        // resultToast("success", "¡Tu cuenta ha sido registrada!🎉");

        // try {

            // let { data } = addUser(POST.NEW_USER, payload);
            // setJwt( data );
            // localStorage.setItem("auth", jwt);
            // navigate("/dashboard");
            // resultToast("success", "¡Tu cuenta ha sido registrada!🎉");


            
            await axios.post(POST.NEW_USER, payload)
            .then( response => {
                // setJwt(response.data.token)
                localStorage.setItem("auth", response.data.token);
                navigate("/dashboard");
                resultToast("success", "¡Tu cuenta ha sido registrada!🎉");
            })
            .catch( error => {
                console.log(error.response.data.description[0]);
            });
            
            // --- MOCK
            
            // const account = users.find( (user) => user.email === email );
            // if (account && account.psw === psw) {
                // localStorage.setItem("auth", jwt);
                // console.log(JSON.stringify(payload));
                // navigate("/dashboard");
                // resultToast("success", "¡Tu cuenta ha sido registrada!🎉");
            // } else {
            //     resultToast("error", "Aún no tienes una cuenta 😟");
            // }

            // --- MOCK
        // } 
        // catch (error) { 
        //     console.log(error.description);
        //     resultToast("error", "Se produjo un problema 😥");
        // }
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
                            // --- MOCK

                            // value={email}
                            // onChange={ (event) => setEmail(event.target.value) }

                            // --- MOCK

                            {...register("email")} 
                            />
                        <FormErrorMessage> {errors.email && ERROR_YUP.MSG_EMAIL} </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.psw}>
                        <FormLabel> Contraseña </FormLabel>
                            <InputGroup size="md">
                                <Input placeholder="Ingresa una contraseña" type={show ? 'text' : 'password'}
                                // --- MOCK

                                // value={psw}
                                // onChange={ (event) => setPsw(event.target.value) }

                                // --- MOCK

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

                                // --- MOCK

                                // value={psw}

                                // --- MOCK

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
                        <Button colorScheme={'yellow'} variant={'solid'} type="submit">
                            Registrarse
                        </Button>
                    </Stack>

                </Stack>
            </form>
        </>
    );
}