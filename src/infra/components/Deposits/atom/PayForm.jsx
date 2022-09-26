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
import { Heading, Flex, Stack, Tabs, TabList, TabPanels, Tab, TabPanel, FormControl, FormLabel, FormErrorMessage, Input, 
		 Select, Textarea, Button, Text, Radio
} from "@chakra-ui/react";


export default function PayForm () {

	const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema.deposits)
    });

	// const [token, setToken] = useState("");

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

		console.log(JSON.stringify(payload));

		// setToken(localStorage.getItem("auth"));
		// const token = localStorage.getItem("auth");

		const config = {
			headers: { Authorization: `Bearer ${localStorage.getItem("auth")}` }
		};

        // await axios.get("https://resplendent-profiterole-d15e2e.netlify.app/getCheckJwt", config)
        await axios.post(POST.DEPOSIT, payload, config)
        .then( response => {
			console.log(response);
            resultToast("success", `${response.data.msg} 🎉`);
        })
        .catch( error => {
			console.log(error);
            resultToast("error", `${error.response.data.error} 😥`);
        });
    };

    return (
		<>
			<Stack
			w={['100%', '50%']}
			color={"white"}
			// align={"center"}
			// justify="center"
			p={6}
			spacing={4}
			rounded="lg"
			borderWidth={"1px"}
			borderColor={"purple.900"}
			overflowY="auto"
			>
				<form onSubmit={handleSubmit(onSubmit)}>

					<Heading size={"xs"} color="white" pb={4}> Selecciona la cuenta destino </Heading>
					<Tabs variant='unstyled' bg={"#1F0D3A"} rounded="lg">

							<TabList>
								<FormLabel>
									<Tab 
									_selected={{ color: 'white', bg: 'blue.500', rounded: 'lg' }}
									> 
										<input type="radio" value="email" id="email" {...register("type")} 
										/>
										Email
									</Tab>
								</FormLabel>
								<FormLabel>
									<Tab _selected={{ color: 'white', bg: 'blue.500', rounded: 'lg' }}> ID </Tab>
								</FormLabel>
								<FormLabel>
									<Tab _selected={{ color: 'white', bg: 'blue.500', rounded: 'lg' }}> Alias </Tab>
								</FormLabel>
							</TabList>

						<FormControl isInvalid={errors.destination}>

							<TabPanels>
								<TabPanel>	
									<Input type="text" size="md" placeholder="alan@turing.com" 
									{...register("destination")}
									/>
									<FormErrorMessage> {errors.destination && ERROR_YUP.MSG_DESTINATION} </FormErrorMessage>
								</TabPanel>
								<TabPanel>
									{/* <Input type="text" size="md" placeholder="XXX-XXX-XXX" 
									{...register("name")}
									/>
									<FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage> */}
								</TabPanel>
								<TabPanel>
									{/* <Input type="text" size="md" placeholder="enigma_cracker_52"
									{...register("name")}
									/>
									<FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage> */}
								</TabPanel>
							</TabPanels>

						</FormControl>
					</Tabs>

					<Flex
					pt={6}
					gap={6}
					>
						<FormControl isInvalid={errors.money}>
							<FormLabel> 
								<Heading size={"xs"}  pb={2}> Método de pago </Heading>
							</FormLabel>
							<Select 
							placeholder='Selecciona una moneda' color={"purple.500"}
							{...register("money")}>
								<option value='USDT'>USDT</option>
								<option value='XRP'>XRP</option>
								<option value='LTC'>LTC</option>
							</Select>
							<FormErrorMessage> {errors.money && ERROR_YUP.MSG_MONEY} </FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={errors.amount}>
                        	<FormLabel> 
								<Heading size={"xs"}  pb={2}> Monto a pagar </Heading>
							</FormLabel>
                            <Input type="number" size="md" placeholder="00.00" 
                            {...register("amount")}
                            />
                        	<FormErrorMessage> {errors.amount && ERROR_YUP.MSG_AMOUNT} </FormErrorMessage>
                    	</FormControl>

					</Flex>

					<FormControl isInvalid={errors.note} pt={6}>
						<FormLabel> 
							<Heading size={"xs"} pb={1}> Nota </Heading>
						</FormLabel>
						<Textarea
                            fontSize={["xs", "md"]}
                            placeholder="Mensaje opcional"
                            {...register('note')}/>
						<FormErrorMessage> {errors.note && ERROR_YUP.MSG_NOTE} </FormErrorMessage>
                    </FormControl>

					<Flex pt={8} gap={8}>
						<Text pt={2}> *La transacción se realizará en modo público </Text>
                        <Button colorScheme={'yellow'} variant={'solid'} flex={1} type="submit">
                            Pagar
                        </Button>
                    </Flex>
				</form>
			</Stack>
		</>
    );
}