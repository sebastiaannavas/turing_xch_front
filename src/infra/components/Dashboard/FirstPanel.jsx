// dependencies
import axios from "axios";
import { GET } from "../../api/endpoints";

// routes
import { Link } from 'react-router-dom';

// hooks
import { useState, useEffect } from 'react';

// components
import { Button, Flex, Heading, Stack, Spinner } from '@chakra-ui/react';
import Avatar from 'boring-avatars';


function FirstPanel(){

    const logout = () => localStorage.removeItem("auth");

    const [loading, setLoading] = useState(true);

    const [profile, setProfile] = useState();

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("auth")}` }
    };

    const getUser = async () => {

        await axios.get(GET.USER_PROFILE, config)
        .then( response => {
            console.log(response.data.msg);
            setProfile(response.data.msg);
            setLoading(false);
        })
        .catch( error => {
            console.log(error);
        });
    };

    useEffect(() => { 

        window.addEventListener("load", getUser);

        return () => {
            window.removeEventListener("load", getUser);
        };

    }, []);

    return(

        <Flex
            flex={0.25}
            bg={'gray.400'}
            direction={'column'}
            // alignItems={'space-between'}
            >

            {loading && 
            <Spinner
            thickness='4px'
            speed='0.65s'
            emptyColor='gray.200'
            color='purple.500'
            size='xl'
            />
            }

            {!loading &&

            <>
            <Stack
                // width={'full'}
                pt={10}
                pb={6}
                gap={2}
                direction={'column'}
                alignItems={'center'}>
                <Avatar 
                    size={'120px'}
                    name={profile.name}
                    variant='bauhaus'
					colors={["#9d4edd", "#613dc1", "#f72585", "#ffce1f", "#ff6d00"]}
                    />
                <Heading size="lg">
                    {profile.name}
                </Heading>
            </Stack>
            <Stack
                px={10}
                // display={'flex'}
                // alignItems={'space-between'}
                gap={4}>
                <Link to=''>
                    <Button variant={'ghost'} width={'full'} >
                        Mi perfil
                    </Button>
                </Link>
                <Link to='security'>
                    <Button variant={'ghost'} width={'full'} >
                        Seguridad
                    </Button>
                </Link>
                <Link to='balance'>
                    <Button variant={'ghost'} width={'full'} >
                        Balance de activos
                    </Button>
                </Link>
                <Link to='support'>
                    <Button variant={'ghost'} width={'full'} >
                        Soporte
                    </Button>
                </Link>
                <Link to="/">
                    <Button
                        variant={'outline'}
                        width={'full'}
                        colorScheme="red"
                        onClick={logout}>
                        Cerrar sesión
                    </Button>
                </Link>
            </Stack>
            </>
            }
        </Flex>
    )
}

export default FirstPanel;