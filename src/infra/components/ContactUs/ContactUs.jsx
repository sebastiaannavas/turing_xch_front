import {
    Box,
    Container,
    Flex,
    Heading,
    Text,
} from "@chakra-ui/react";

import { TuringIcon } from "../../../app/common/Icons/TuringIcon";

import ContactUsForm from "./atom/ContactUsForm";

function ContactUs(){
    return(
        <>
            <Flex
                bg={'white'}
                direction={{ base: 'column', md: 'row'}}
                alignItems={'center'}
                justifyContent={'center'}
                gap={10}>
                <Flex
                    py={10}
                    px={5}
                    direction={'column'}
                    alignItems={'center'}
                    gap={10}>
                    <Flex
                        direction={'column'}
                        textAlign={'center'}
                        alignItems={'center'}
                        gap={5}>
                        <Heading textTransform={'uppercase'}>Contacto</Heading>
                        <Text
                            textAlign={'center'}
                            color={'gray.700'}
                            fontSize={'80%'}>
                            Para enviarnos un mensaje, llena el siguiente formulario
                        </Text>
                        <TuringIcon boxSize={'70%'}/>
                    </Flex>
                </Flex>
                <Flex
                    bg={'gray.800'}
                    my={10}
                    mx={5}
                    py={10}
                    px={5}
                    rounded={10}>
                    <ContactUsForm />
                </Flex>
            </Flex>
        </>
    )
}

export default ContactUs;