// dependencies
import { schema, ERROR_YUP } from "../../../api/yup";

// hooks
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useToast } from "@chakra-ui/react";

// components
import { Heading, Flex, Stack, Tabs, TabList, TabPanels, Tab, TabPanel, FormControl, FormLabel, FormErrorMessage, Input, 
		 Select, Textarea, Button, Badge
} from "@chakra-ui/react";


export default function PayForm () {

	const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema.deposits)
    });

	const [type, setType] = useState("email");

	const handleType = evt => {

		const { value } = evt.target;

		setType( value ); 
	}

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

		payload = {...payload, type: type}

		// console.log(JSON.stringify(payload));

		const config = {
			headers: { Authorization: `Bearer ${localStorage.getItem("auth")}` }
		};

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
			justify="space-between"
			p={6}
			// spacing={4}
			rounded="lg"
			borderWidth={"1px"}
			borderColor={"purple.900"}
			overflowY="auto"
			>
				<form onSubmit={handleSubmit(onSubmit)}>

					<Heading size={"xs"} color="white" 
					pb={4}
					> Selecciona la cuenta destino </Heading>
					<Tabs variant='unstyled' bg={"#1F0D3A"} rounded="lg">

							<TabList>
								<FormLabel>
									<Tab 
									_selected={{ color: 'white', bg: 'blue.500', rounded: 'lg' }}
									value="email" onClick={handleType}
									> 
										{/* <input type="radio" value="email" id="email" {...register("type")} 
										/> */}
										Email
									</Tab>
								</FormLabel>
								<FormLabel>
									<Tab _selected={{ color: 'white', bg: 'blue.500', rounded: 'lg' }}
									value="uuid" onClick={handleType}
									> 
									ID 
									<Badge ml={3} colorScheme="yellow">
										Beta
									</Badge>
									</Tab>
								</FormLabel>
								<FormLabel>
									<Tab _selected={{ color: 'white', bg: 'blue.500', rounded: 'lg' }}
									value="tlf" onClick={handleType}
									> Teléfono 
									<Badge ml={3} colorScheme="yellow">
										Beta
									</Badge>
									</Tab>
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
									<Input type="text" size="md" placeholder="XXX-XXX-XXX" 
									// {...register("name")}
									/>
									{/* <FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage> */}
								</TabPanel>
								<TabPanel>
									<Input type="tel" size="md" placeholder="+584121234567"
									// {...register("name")}
									/>
									{/* <FormErrorMessage> {errors.name && ERROR_YUP.MSG_NAME} </FormErrorMessage> */}
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
							placeholder='Selecciona una moneda' color={"purple.600"} fontWeight={600}
							{...register("money")}>
								<option value='USDT'>USDT</option>
								<option value='XRP'>XRP</option>
								<option value='LTC'>LTC</option>
								<option value='XMR'>XMR</option>
								<option value='DASH'>DASH</option>
								<option value='ZCASH'>ZCASH</option>
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

					<Flex pt={6} gap={8}>
						{/* <Text pt={2}> *La transacción se realizará en modo público </Text> */}
                        <Button colorScheme={'yellow'} variant={'solid'} flex={1} type="submit">
                            Pagar
                        </Button>
                    </Flex>
				</form>
			</Stack>
		</>
    );
}