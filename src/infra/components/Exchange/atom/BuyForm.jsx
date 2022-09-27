// dependencies
import axios from "axios";
import { schema, ERROR_YUP } from "../../../api/yup";

// hooks
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from "@chakra-ui/react";

// components
import { Button, FormControl, FormErrorMessage, Input, Select, Heading,
         Stack, InputGroup, InputLeftAddon, InputRightAddon, Flex, Box
} from '@chakra-ui/react';


export default function BuyForm () {

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
                // w={"100%"}
                // justify={"space-between"}
                gap={2}
                >
                    <FormControl isInvalid={errors.name}>
							<Select
							placeholder='Selecciona una moneda' color={"purple.600"} fontWeight={600}
							{...register("name")}>
								<option value='USDT'>USDT</option>
								<option value='XRP'>XRP</option>
								<option value='LTC'>LTC</option>
								<option value='XMR'>XMR</option>
								<option value='DASH'>DASH</option>
								<option value='ZCASH'>ZCASH</option>
							</Select>
							<FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage>
					</FormControl>

                    <Box
                    // w={"full"}
                    overflow="hidden"
                    py={2}
                    rounded={'lg'}
                    textAlign={'center'}
                    color={'gray.500'}
                    bg={'gray.800'}
                    >
                        <div style={{ overflow: "auto" }}>
                        {"00.0000000000000000000"}
                        </div>
                    </Box>

                    <FormControl isInvalid={errors.name}>
                        <InputGroup>
                            {/* <InputLeftAddon children='Precio' bg={"transparent"} /> */}
                            <Input type="number" size="md" value="00.00" 
                            {...register("name")}
                            />
                            {/* <InputRightAddon children='XRP' /> */}
                        </InputGroup>
                        <FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage>
                    </FormControl>

                    <Stack pt={4}>
                        <Button colorScheme={'green'} variant={'solid'} type="submit">
                            COMPRAR
                        </Button>
                    </Stack>

                </Stack>
            </form>
        </>
    );
};