import {
    Box,
    Button,
    chakra,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
} from '@chakra-ui/react';

const datos = {
    nombre: 'Alan',
    apellido: 'Turing',
    correo: 'alan@turing.com',
    id: 'xx-xx-xx-xx',
    direccion: 'xxx-xxx-xxx-xxx',
}

function MiPerfil(){

    const { nombre, apellido, correo, id, direccion } = datos;

    return(
        <Flex
            flex={0.75}
            bg='gray.700'
            direction={'column'}
            justifyContent={'space-between'}
            p={10}>
            <Heading
                color={'yellow.200'}
                textAlign={'left'}
                fontWeight={'bold'}
                fontSize={'120%'}>
                Mi perfil
            </Heading>
            <Text textAlign={'justify'} color={'gray.400'} fontSize={'80%'}>
                Datos personales
            </Text>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'5%'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    Nombre y Apellido
                </chakra.h3>
                <Box
                    textAlign={'center'}
                    color={'gray.500'}
                    bg={'gray.800'}
                    minW={'175px'}>
                    {nombre}{' '}{apellido}
                </Box>         
            </Flex>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'5%'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    Dirección de correo
                </chakra.h3>
                <Box
                    textAlign={'center'}
                    color={'gray.500'}
                    bg={'gray.800'}
                    minW={'175px'}>
                    {correo}
                </Box>         
            </Flex>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'5%'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    ID de usuario
                </chakra.h3>
                <Box
                    textAlign={'center'}
                    color={'gray.500'}
                    bg={'gray.800'}
                    minW={'175px'}>
                    {id}
                </Box>         
            </Flex>
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justifyContent={'space-between'}
                mb={'3%'}>
                <chakra.h3
                    fontFamily={'Work Sans'}
                    fontWeight={'bold'}
                    fontSize={'75%'}
                    textTransform={'uppercase'}
                    color={'white'}>
                    Dirección de depósito
                </chakra.h3>
                <Box
                    textAlign={'center'}
                    color={'gray.500'}
                    bg={'gray.800'}
                    minW={'175px'}>
                    {direccion}
                </Box>         
            </Flex>
            <chakra.hr></chakra.hr>
            <Heading
                color={'yellow.200'}
                textAlign={'left'}
                fontWeight={'bold'}
                fontSize={'120%'}
                mt={'3%'}>
                Cambiar dirección de correo electrónico
            </Heading>
            <Text textAlign={'justify'} color={'gray.400'} fontSize={'80%'}>
                Ingresa una dirección de correo activa que dispongas.
            </Text>
            <form>
                <Flex
                    direction={'column'}
                    >
                    <FormControl id="email" color={'white'} w={'auto'}>
                        <FormLabel>Nuevo correo</FormLabel>
                        <Input type="email" />
                    </FormControl>
                        <Button colorScheme={'blue'} variant={'solid'} mt={2}>
                            Guardar correo
                        </Button>
                </Flex>
            </form>
        </Flex>
    )
}

export default MiPerfil;