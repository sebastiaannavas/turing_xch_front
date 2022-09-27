// dependencies
import axios from "axios";
import { GET } from "../../api/endpoints";

// routes
import { Link } from 'react-router-dom';

// hooks
import { useState, useEffect } from 'react';

// components
import { Button, Flex, Heading, Stack, Spinner } from '@chakra-ui/react';
// import Avatar from 'boring-avatars';
import MyAvatar from "../MyAvatar/MyAvatar";


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

        getUser();

        // window.addEventListener("load", getUser);

        // return () => {
        //     window.removeEventListener("load", getUser);
        // };

    }, []);

    return(

        <Flex
            flex={0.25}
            bg={'purple.900'}
            direction={'column'}
            justify={'center'}
            color="white"
            pb={2}
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
                // pt={10}
                pb={8}
                gap={4}
                direction={'column'}
                alignItems={'center'}>
                
                <MyAvatar size={"120px"} />

                {/* <Avatar 
                    size={'120px'}
                    // name={profile.name}
                    variant='bauhaus'
					colors={["#9d4edd", "#613dc1", "#f72585", "#ffce1f", "#ff6d00"]}
                    /> */}
                <Heading size="lg">
                    {profile.name}
                </Heading>
            </Stack>
            <Stack
                px={10}
                // display={'flex'}
                // alignItems={'space-between'}
                gap={4}
                >
                <Link to=''>
                    <Button variant={'ghost'} width={'full'} 
                    _hover={{ bg: 'purple.700' }}
                    >
                        Mi perfil
                    </Button>
                </Link>

                {/* <Link to='security'>
                    <Button variant={'ghost'} width={'full'} >
                        Seguridad
                    </Button>
                </Link> */}

                <Link to='balance'>
                    <Button variant={'ghost'} width={'full'} 
                    _hover={{ bg: 'purple.700' }}
                    >
                        Balance de activos
                    </Button>
                </Link>
                {/* <Link to='support'>
                    <Button variant={'ghost'} width={'full'} 
                    _hover={{ bg: 'purple.700' }}
                    >
                        Soporte
                    </Button>
                </Link> */}
                <Link to="/">
                    <Button
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