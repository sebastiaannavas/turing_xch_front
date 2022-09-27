// dependencies
import axios from "axios";
import { GET } from "../../api/endpoints";

// routes
import { Link } from "react-router-dom";

// hooks
import { useState, useEffect } from "react";
import { useToast } from "@chakra-ui/react";

// components
import { Flex, Stack, Text, Button, HStack, PinInput, PinInputField

} from "@chakra-ui/react";

// icons
import { TuringIcon } from "../../../app/common/Icons/TuringIcon";


export default function Verify2FA () {

    const [loading, setLoading] = useState(true);

    const [pincode, setPincode] = useState();   

    // const { register, handleSubmit, formState:{ errors } } = useForm({
    //     resolver: yupResolver(schema.pin)
    // });

    const toast = useToast();

    const resultToast = ( status, title ) => {

        return toast({
            title: title,
            status: status,
            duration: 5000,
            isClosable: true,
        });
    };

    const onSubmit = async () => {

        console.log(pincode);

        // await axios.get(GET.RECOVER_PSW + email)
        // .then( response => {
        //     resultToast("success", `${response.data.msg} 🎉`);
        // })
        // .catch( error => {
        //     resultToast("error", `${error.response.data.error} 😟`);
        // });
    };

    useEffect(() => {

        console.log(pincode);

    }, [pincode]);

    return (
      <>
        <Flex 
        minH={'100vh'} 
        direction={{ base: 'column', md: 'row-reverse' }}
        >
            <Flex
            flex={1}
            gap={4}
            pb={16}
            direction={"column"}
            align={"center"}
            justify={"center"}
            bgGradient={[
                'linear(to-b, #240046, #3f37c9)',
            ]}
            >
                <Stack gap={4} align={"center"} pb={6}>
                    <TuringIcon boxSize={[12, 16, 16, 20]} />
                    <Text fontSize={['2xl', '2xl']} textAlign="center" color={"gray.100"}> 
                        Ingresa el código enviado por SMS
                    </Text>
                </Stack>

                    <Stack
                    gap={6}
                    >
                        <HStack>
                            <PinInput size='lg' onComplete={ pin => setPincode(pin) } otp >
                                <PinInputField color={'white'} />
                                <PinInputField color={'white'} />
                                <PinInputField color={'white'} />
                                <PinInputField color={'white'} />
                                <PinInputField color={'white'} />
                                <PinInputField color={'white'} />
                            </PinInput>
                        </HStack>

                    <Button colorScheme={'yellow'} variant={'solid'} type="submit">
                        Reenviar código
                    </Button>

                    </Stack>
                {/* </form> */}
            </Flex>
        </Flex>
      </>
    );
}