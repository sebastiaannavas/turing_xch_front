// dependencies
import axios from "axios";
import { GET } from "../../../api/endpoints";
import { schema, ERROR_YUP } from "../../../api/yup";

// hooks
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from "@chakra-ui/react";

// components
import { Button, FormControl, FormLabel, FormErrorMessage, Input, Stack, Box } from '@chakra-ui/react';
import { Link } from "react-router-dom";


export default function RecoverForm () {

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

    const onSubmit = async ( { email } = payload ) => {

        // console.log(GET.RECOVER_PSW + email);

        await axios.get(GET.RECOVER_PSW + email)
        .then( response => {
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
                    gap={2}
                    px={'8px'}>
                    <FormControl isInvalid={errors.email}>
                        <FormLabel color={'yellow'}> Correo electrónico </FormLabel>
                            <Input type="email" size="md" placeholder="alan@turing.com" color={'white'}
                            {...register("email")} 
                            />
                        <FormErrorMessage> {errors.email && ERROR_YUP.MSG_EMAIL} </FormErrorMessage>
                    </FormControl>

                    <Button colorScheme={'yellow'} variant={'solid'} type="submit">
                        Enviar código
                    </Button>

                    <Box
                    justify={'center'}
                    fontWeight="600"
                    pt={2}
                    color={"purple.200"}
                    _hover={{ color: "purple.400" }}
                    transition={'color 0.5s ease'}
                    >
                        <Link to='/login'> Volver a iniciar sesión </Link>
                    </Box>

                </Stack>
            </form>
        </>
    );
}