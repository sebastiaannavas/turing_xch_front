// components
import { Flex, Stack, Heading, Text } from '@chakra-ui/react';
import LoginForm from './atom/LoginForm';

// icons
import { TuringIcon } from '../../../app/common/Icons/TuringIcon';

export default function Login () {

    return (
        <>
            <Stack 
            minH={'100vh'} 
            direction={{ base: 'column', md: 'row' }}
            >
                <Flex 
                    flex={1}
                    direction={"column"}
                    gap={8}
                    p={8}
                    align={"center"}
                    justify={"center"}
                    bgGradient={[
                        'linear(to-b, purple.500, #240046)',
                    ]}>
                    <Flex gap={4} align={"center"}>
                        <TuringIcon boxSize={[12, 16, 16, 16]} />
                        <Heading fontSize={{ base: '2xl', sm: '3xl' }} textAlign="center" color={"white"} pb={2}> 
                                Turing Exchange 
                        </Heading>
                    </Flex>
                    <Text fontSize={["lg", "3xl", "xl", "3xl"]} textAlign="center" color={"gray.100"}> 
                            ¡Ingresa tus datos!
                    </Text  >
                </Flex>

                <Flex 
                    p={8} 
                    flex={1} 
                    align={'center'} 
                    justify={'center'}>
                    <Stack 
                        pt={[0, 0, 10, 8]}
                        maxW={'md'}
                        w={"full"}>
                        <LoginForm />
                    </Stack>
                </Flex>
            </Stack>
        </>
    );
}