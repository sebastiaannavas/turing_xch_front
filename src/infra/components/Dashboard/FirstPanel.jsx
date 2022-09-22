import {
    Button,
    Flex,
    Heading,
    Stack,
    Text,
} from '@chakra-ui/react';
import Avatar from 'boring-avatars';
import { Link } from 'react-router-dom';


// Esta data se extrae de la base de datos. Estos son mocks
export const personalData = {
    name: 'Alan',
    lastname: 'Turing',
    username: 'alanturing',
    email: 'alan@turing.com',
    id: 'xx-xx-xx-xx',
    address: 'xxx-xxx-xxx-xxx',
}

function FirstPanel(){

    const logout = () => localStorage.removeItem("auth");

    const { name, lastname, username, id } = personalData;

    return(
        <Flex
            flex={0.25}
            pt={8}
            pb={5}
            bg={'gray.400'}
            direction={'column'}
            alignItems={'space-between'}>
            <Stack
                px={5}
                width={'full'}
                direction={'column'}
                alignItems={'center'}>
                <Avatar 
                    size={'250px'}
                    name={name}
                    variant='pixel'
                    colors={["#260D33", "#003F69", "#106B87", "#157A8C", "#000000"]}
                    />
                <Heading>
                    {name}{' '}{lastname}
                </Heading>
                <Text>
                    {username}{' '}{id}
                </Text>

            </Stack>
            <Stack
                px={2}
                display={'flex'}
                alignItems={'space-between'}
                gap={4}>
                <Link to=''>
                    <Button variant={'ghost'} width={'full'} mt={'3%'}>
                        Mi perfil
                    </Button>
                </Link>
                <Link to='security'>
                    <Button variant={'ghost'} width={'full'} mt={'3%'}>
                        Seguridad
                    </Button>
                </Link>
                <Link to='balance'>
                    <Button variant={'ghost'} width={'full'} mt={'3%'}>
                        Balance de activos
                    </Button>
                </Link>
                <Link to='support'>
                    <Button variant={'ghost'} width={'full'} mt={'3%'}>
                        Soporte
                    </Button>
                </Link>
                <Link to="/">
                    <Button
                        variant={'outline'}
                        width={'full'}
                        mt={'3%'}
                        bg={'red.600'}
                        onClick={logout}>
                        Cerrar sesión
                    </Button>
                </Link>
            </Stack>
        </Flex>
    )
}

export default FirstPanel;
