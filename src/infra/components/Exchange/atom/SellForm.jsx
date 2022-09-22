// dependencies
import axios from "axios";
import { schema, ERROR_YUP } from "../../../api/yup";

// hooks
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from "@chakra-ui/react";

// components
import { Button, FormControl, FormErrorMessage, Input, 
         Stack, InputGroup, InputLeftAddon, InputRightAddon
} from '@chakra-ui/react';


export default function SellForm () {

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema.signin)
    });

    const onSubmit = async ( payload ) => {

        // await axios.post(POST.NEW_USER, payload)
        // .then( response => {
        //     resultToast("success", "¡Tu cuenta ha sido registrada!🎉");
        // })
        // .catch( error => {
        //     resultToast("error", `${error.response.data.description[0]} 😥`);
        // });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Stack
                gap={4}
                >
                    <FormControl isInvalid={errors.name}>
                        <InputGroup>
                            <InputLeftAddon children='Precio' bg={"transparent"} />
                            <Input type="text" size="md" borderStartColor="transparent"
                            {...register("name")}
                            />
                            <InputRightAddon children='XRP' />
                        </InputGroup>
                        <FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.email}>
                        <InputGroup>
                            <InputLeftAddon children='Cantidad' />
                            <Input type="text" size="md" 
                            {...register("email")}
                            />
                            <InputRightAddon children='USDT' />
                        </InputGroup>
                        <FormErrorMessage> {errors.email && ERROR_YUP.MSG_EMAIL} </FormErrorMessage>
                    </FormControl>

                    <Stack pt={4}>
                        <Button colorScheme={'red'} variant={'solid'} type="submit">
                            VENDER
                        </Button>
                    </Stack>

                </Stack>
            </form>
        </>
    );
};