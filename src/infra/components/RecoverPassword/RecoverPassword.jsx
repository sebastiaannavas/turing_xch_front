// components
import { Flex, Stack, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import RecoverPasswordForm from './atom/RecoverPasswordForm';

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
                    direction={"column"}
                    align={"center"}
                    justify={"center"}
                    bgGradient={[
                        'linear(to-b, #3B082B, #240046)'
                    ]}>
                    <Flex gap={4} align={"center"} pb={8}>
                        <TuringIcon boxSize={[12, 16, 16, 16]} />
                        <Heading fontSize={{ base: '3xl', sm: '4xl' }} textAlign="center" color={"yellow"} pb={2}> 
                                Turing Exchange 
                        </Heading>
                    </Flex>
                    <Text fontSize={["lg", "3xl", "xl", "3xl"]} textAlign="center" color={"purple.100"}> 
                            ¿Olvidaste tu contraseña?
                    </Text>
                    <Text
                        fontSize={{ base: 'sm', sm: 'md' }}
                        color={useColorModeValue('gray.400', 'gray.400')}>
                        Se enviará tu contraseña al correo que ingreses
                    </Text>
                    <Flex
                        pt={'20px'}
                        align={'center'} 
                        justify={'center'}
                        width={'full'}>
                        <RecoverPasswordForm />
                    </Flex>
                </Flex>

            </Flex>
        </>
    );
}