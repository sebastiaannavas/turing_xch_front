// dependencies
import { schema, ERROR_YUP } from "../../../api/yup";

// hooks
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

    const onSubmit = async ( payload ) => {
        // resultToast("error", `${error.response.data.description[0]} 😥`);
        // resultToast("error", "Aún no tienes una cuenta 😟");
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                color={'white'}
                gap={4}
                >
                    <FormControl isInvalid={errors.email}>
                        <FormLabel fontSize={["xs", "md"]}>  Tu correo electrónico </FormLabel>
                            <Input type="email" width={'full'} fontSize={["xs", "md"]} placeholder="alan@turing.com" 
                            {...register("email")} 
                            />
                        <FormErrorMessage> {errors.email && ERROR_YUP.MSG_EMAIL} </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.mensaje}>
                        <FormLabel fontSize={["xs", "md"]}>¿En qué podemos ayudarte? </FormLabel>
                            <Textarea
                            fontSize={["xs", "md"]}
                            width={'full'}
                            placeholder="Mensaje"
                                {...register('mensaje')}/>
                        <FormErrorMessage> {errors.mensaje && ERROR_YUP.MSG_MENSAJE} </FormErrorMessage>
                    </FormControl>

                    <Stack pt={2}>
                        <Button colorScheme={'yellow'} variant={'solid'} type="submit">
                            Enviar mensaje
                        </Button>
                    </Stack>

                </Stack>
            </form>
        </>
    );
}

export default ContactUsForm;