// dependencies
import axios from "axios";
import { POST } from "../../../api/endpoints";
import { schema, ERROR_YUP } from "../../../api/yup";

// hooks
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from "@chakra-ui/react";

// components
import { Heading, Flex, Stack, Tabs, TabList, TabPanels, Tab, TabPanel, FormControl, FormLabel, FormErrorMessage, Input, 
		 Select, Textarea, Button, Text
} from "@chakra-ui/react";


export default function PayForm () {

	const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema.signin)
    });

	const onSubmit = async ( payload ) => {

        // await axios.post(POST.NEW_USER, payload)
        // .then( response => {
        //     localStorage.setItem("auth", response.data.token);
        //     navigate("/account");
        //     resultToast("success", `${response.data.msg} 🎉`);
        // })
        // .catch( error => {
        //     resultToast("error", `${error.response.data.description[0]} 😥`);
        // });
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
			>
				<form onSubmit={handleSubmit(onSubmit)}>

					<Heading size={"xs"} color="white" pb={4}> Selecciona la cuenta destino </Heading>
					<Tabs variant='unstyled' bg={"#1F0D3A"} rounded="lg">
						<FormControl isInvalid={errors.name}>

							<TabList>
							<FormLabel>
								<Tab _selected={{ color: 'white', bg: 'blue.500', rounded: 'lg' }}> Email </Tab>
							</FormLabel>
							<FormLabel>
								<Tab _selected={{ color: 'white', bg: 'green.400', rounded: 'lg' }}> ID </Tab>
							</FormLabel>
							<FormLabel>
								<Tab _selected={{ color: 'white', bg: 'green.400', rounded: 'lg' }}> Alias </Tab>
							</FormLabel>
							</TabList>

							<TabPanels>
							<TabPanel>	
								<Input type="text" size="md" placeholder="alan@turing.com" 
								{...register("name")}
								/>
								<FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage>
							</TabPanel>
							<TabPanel>
								<Input type="text" size="md" placeholder="XXX-XXX-XXX" 
								{...register("name")}
								/>
								<FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage>
							</TabPanel>
							<TabPanel>
								<Input type="text" size="md" placeholder="enigma_cracker_52"
								{...register("name")}
								/>
								<FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage>
							</TabPanel>
							</TabPanels>

						</FormControl>
					</Tabs>

					<Flex
					pt={6}
					gap={6}
					>

						<FormControl isInvalid={errors.name}>
							<FormLabel> 
								<Heading size={"xs"}  pb={2}> Método de pago </Heading>
							</FormLabel>
							<Select 
							placeholder='Selecciona una moneda' color={"purple.500"}
							{...register("name")}>
								<option value='USDT'>USDT</option>
								<option value='XRP'>XRP</option>
								<option value='LTC'>LTC</option>
							</Select>
							<FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage>
						</FormControl>

						<FormControl isInvalid={errors.name}>
                        	<FormLabel> 
								<Heading size={"xs"}  pb={2}> Monto a pagar </Heading>
							</FormLabel>
                            <Input type="text" size="md" placeholder="00.00" 
                            {...register("name")}
                            />
                        	<FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage>
                    	</FormControl>

					</Flex>

					<FormControl isInvalid={errors.name} pt={6}>
						<FormLabel> 
							<Heading size={"xs"} pb={1}> Nota </Heading>
						</FormLabel>
						<Textarea
                            fontSize={["xs", "md"]}
                            placeholder="Mensaje opcional"
                            {...register('mensaje')}/>
						<FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage>
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