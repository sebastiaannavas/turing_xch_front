// dependencies
import axios from "axios";
import { POST } from "../../../api/endpoints";
import { schema, ERROR_YUP } from "../../../api/yup";

// routes
import { Link, useLocation } from "react-router-dom";

// hooks
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

// components
import { Button, FormControl, FormLabel, FormErrorMessage, Input, 
         Stack, InputGroup, InputRightElement, IconButton,
         Alert, AlertIcon, AlertTitle, AlertDescription, Box
} from '@chakra-ui/react';

// icons
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ArrowBackIcon } from "@chakra-ui/icons";


function useQuery() {
    return new URLSearchParams(useLocation().search);
}


export default function NewPswForm () {

    let query = useQuery();

    const [loading, setLoading] = useState(true);

    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("error");

    // psw visibility 1
    const [show, setShow] = useState(false);
    
    const handleClick = () => setShow(!show);
    
    // psw visibility 2
    const [showOk, setShowOk] = useState(false);

    const handleClickOk = () => setShowOk(!showOk);

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema.forgot)
    });

    const onSubmit = async ( payload ) => {

        payload = {...payload, emailToken: query.get("emailToken")};
        // console.log(JSON.stringify(payload));

        await axios.post(POST.NEW_PSW, payload)
        .then( response => {
            setLoading(false);
            setStatus("success");
            setMessage(`${response.data.msg} 🎉`);
        })
        .catch( error => {
            setLoading(false);
            setStatus("error");
            setMessage(`${error.response.data.error} 😟`);
        });
    };

    return (
        <>
            {loading &&
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                gap={2}
                px={'8px'}
                color={"white"}>

                    <FormControl isInvalid={errors.psw}>
                        <FormLabel> Contraseña </FormLabel>
                            <InputGroup size="md">
                                <Input placeholder="Ingresa una contraseña" type={show ? 'text' : 'password'}
                                {...register("psw")}
                                />
                                <InputRightElement>
                                    <IconButton size="md" variant={"ghost"} onClick={handleClick} 
                                    _hover={{ bg: 'transparent' }}
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
                                    _hover={{ bg: 'transparent' }}
                                    icon={showOk ? < Visibility fontSize="small" /> : < VisibilityOff fontSize="small" />} 
                                    />
                                </InputRightElement>
                            </InputGroup>
                        <FormErrorMessage> {errors.okPsw && ERROR_YUP.MSG_OKPSW} </FormErrorMessage>   
                    </FormControl>

                    <Stack pt={4}>
                        <Button colorScheme={'yellow'} variant={'solid'} type="submit">
                            Cambiar
                        </Button>
                    </Stack>

                </Stack>
            </form>
            }

            {!loading &&
            <Alert
            status={status}
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
            rounded={"lg"}
            >
                <AlertIcon boxSize='40px' mr={0} />
                <AlertTitle mt={4} mb={4} fontSize='lg'>
                    { message }
                </AlertTitle>
                <AlertDescription maxWidth='sm'>
                    <Stack
                        direction="row"
                        align="center"
                        justify={'center'}
                        fontWeight="600"
                        color={ status == "success" ? 'green' : 'red' }
                        _hover={{ color: status == "success" ? 'green.400' : 'red.400' }}
                        transition={'color 0.5s ease'}
                        >
                            <ArrowBackIcon />
                            { status == "success" &&
                            <Link to='/login'> Volver a iniciar sesión </Link>
                            }
                            { status == "error" &&
                            <Link to='/recover'> Intentar de nuevo </Link>
                            }
                        </Stack>
                </AlertDescription>
            </Alert>
            }
        </>
    );
}