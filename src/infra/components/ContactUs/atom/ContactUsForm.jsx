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
import { Button, Flex, FormControl, FormLabel, FormErrorMessage, Input, 
    Stack, Textarea } from '@chakra-ui/react';

function ContactUsForm () {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema.contact)
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
                <Flex
                    color={'white'}
                    gap={5}
                    width={'full'}
                    direction={'column'}>
                    <FormControl isInvalid={errors.name}>
                        <FormLabel> Indícanos tu nombre </FormLabel>
                            <Input type="text" width={'full'} placeholder="Alan" 
                            {...register("name")}
                            />
                        <FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.email}>
                        <FormLabel>  Tu dirección de correo electrónico </FormLabel>
                            <Input type="email" width={'full'} placeholder="alan@turing.com" 
                            {...register("email")} 
                            />
                        <FormErrorMessage> {errors.email && ERROR_YUP.MSG_EMAIL} </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.mensaje}>
                        <FormLabel>¿En qué podemos ayudarte? </FormLabel>
                            <Textarea
                                width={'full'}
                                borderColor="gray.300"
                                _hover={{
                                borderRadius: 'gray.300',
                                }}
                                placeholder="Mensaje"
                                {...register('mensaje')}/>
                        <FormErrorMessage> {errors.mensaje && ERROR_YUP.MSG_MENSAJE} </FormErrorMessage>
                    </FormControl>

                    <Stack pt={4}>
                        <Button colorScheme={'yellow'} variant={'solid'} type="submit">
                            Enviar mensaje
                        </Button>
                    </Stack>

                </Flex>
            </form>
        </>
    );
}

export default ContactUsForm;