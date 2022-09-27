// components
import { Flex, Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import RecoverForm from './atom/RecoverForm';

// icons
import { TuringIcon } from '../../../app/common/Icons/TuringIcon';

export default function RecoverPassword () {

    return (
        <>
            <Flex 
            minH={'100vh'} 
            direction={{ base: 'column', md: 'row-reverse' }}
            >
                <Flex
                    flex={1}
                    pt={6}
                    gap={4}
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
                    gap={12}
                    p={10}
                    >
                        <Stack
                        gap={2}
                        >
                            <Text fontSize={['2xl', '3xl']} textAlign="center" color={"gray.100"}> 
                                    ¿Olvidaste tu contraseña?
                            </Text>
                            <Text
                                fontSize={{ base: 'sm', sm: 'md' }}
                                color={"purple.400"}
                                textAlign="center"
                                >
                                Se enviará un código de recuperación al correo que ingreses
                            </Text>
                        </Stack>

                        <RecoverForm />
                    </Stack>
                </Flex>
            </Flex>
        </>
    );
}