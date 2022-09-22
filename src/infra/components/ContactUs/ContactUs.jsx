// components
import { Flex, Heading, Text, Stack } from "@chakra-ui/react";
import ContactUsForm from "./atom/ContactUsForm";

function ContactUs(){
    return(
        <>
            <Flex
                bg={'white'}
                direction={{ base: 'column', md: 'row'}}
                alignItems={'center'}
                justifyContent={'center'}
                gap={10}
                px={16}
                pt={10}
                pb={[20, 20, 10, 10]}
                >
                <Flex
                    flex={1}
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
                        <Heading 
                        textTransform={'uppercase'}
                        bgGradient="linear(to-l, #f72585, #4361ee)"
  				        bgClip="text"
                        > 
                            ¿Tienes alguna duda?
                        </Heading>
                        <Text
                        textAlign={'center'}
                        color={'gray.800'}
                        fontWeight="600"
                        fontSize={'sm'}>
                            Para contactarnos, envía un mensaje en el siguiente formulario
                        </Text>
                    </Flex>
                </Flex>
                <Flex
                flex={1}
                bg={'#11001c'}
                py={6}
                px={6}
                rounded={10}>
                    <Stack 
                    w={"full"}
                    >
                        <ContactUsForm />
                    </Stack>
                </Flex>
            </Flex>
        </>
    )
}

export default ContactUs;