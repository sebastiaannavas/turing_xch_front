// dependencies
import axios from "axios";
import { POST } from "../../../api/endpoints";
import { schemaRecoverPassword, ERROR_YUP } from "../../../api/yup";

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
        resolver: yupResolver(schemaRecoverPassword)
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
                        <FormLabel color={'white'}> Correo electrónico </FormLabel>
                            <Input type="email" size="md" placeholder="alan@turing.com" color={'white'}
                            // MOCK
                            // value={email}
                            // onChange={ (event) => setEmail(event.target.value) }

                            {...register("email")} 
                            />
                        <FormErrorMessage> {errors.email && ERROR_YUP.MSG_EMAIL} </FormErrorMessage>
                    </FormControl>

                    <Button colorScheme={'blue'} variant={'solid'} type="submit">
                        Enviar código
                    </Button>

                </Stack>
            </form>
        </>
    );
}