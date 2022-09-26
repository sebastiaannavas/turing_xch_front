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
         Stack,
} from '@chakra-ui/react';


export default function RecoverPaswordForm () {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema.recover)
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

            // await axios.post(POST.NEW_USER, payload);
            resultToast("success", "¡El código ha sido enviado a tu correo!🎉");
        } 
        catch (error) { 
            resultToast("error", "Se produjo un problema 😥");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                    gap={2}
                    px={'8px'}>
                    <FormControl isInvalid={errors.email}>
                        <FormLabel color={'yellow'}> Correo electrónico </FormLabel>
                            <Input type="email" size="md" placeholder="alan@turing.com" color={'white'} variant={"filled"}
                            {...register("email")} 
                            />
                        <FormErrorMessage> {errors.email && ERROR_YUP.MSG_EMAIL} </FormErrorMessage>
                    </FormControl>

                    <Button colorScheme={'yellow'} variant={'solid'} type="submit">
                        Enviar código
                    </Button>

                </Stack>
            </form>
        </>
    );
}