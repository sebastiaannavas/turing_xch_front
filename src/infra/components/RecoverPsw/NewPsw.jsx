// components
import { Flex, Stack, Heading, Text } from '@chakra-ui/react';
import NewPswForm from './atom/NewPswForm';

// icons
import { TuringIcon } from '../../../app/common/Icons/TuringIcon';

export default function NewPsw () {

    return (
        <>
            <Flex 
            minH={'100vh'} 
            direction={{ base: 'column', md: 'row-reverse' }}
            >
                <Flex
                    flex={1}
                    pt={6}
                    direction={"column"}
                    align={"center"}
                    justify={"center"}
                    bgGradient={[
                        'linear(to-b, #240046, #3f37c9)',
                    ]}>
                    <Flex gap={4} align={"center"} pb={4}>
                        <TuringIcon boxSize={[12, 16, 16, 16]} />
                        <Heading fontSize={['2xl', '3xl']} textAlign="center" color={"white"} pb={[1, 2]}> 
                                Turing Exchange 
                        </Heading>
                    </Flex>

                    <Stack
                    gap={8}
                    p={10}
                    >
                        <Stack
                        gap={2}
                        >
                            <Text fontSize={['2xl', '3xl']} textAlign="center" color={"gray.100"}> 
                                    Establecer nueva contraseña
                            </Text>
                            <Text
                                fontSize={{ base: 'sm', sm: 'md' }}
                                color={"purple.400"}
                                textAlign="center"
                                >
                                A partir de ahora, deberás iniciar sesión con la contraseña que envíes
                            </Text>
                        </Stack>

                        <NewPswForm />

                    </Stack>
                </Flex>
            </Flex>
        </>
    );
}