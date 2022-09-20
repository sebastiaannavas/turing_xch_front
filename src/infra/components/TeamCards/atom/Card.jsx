import {
    Avatar,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
} from '@chakra-ui/react';

import { FaLinkedin, FaGithub} from 'react-icons/fa'

function Card(props){
    const { name, role, LinkedIn, GitHub, avatar } = props;

    return(
        <Flex
            color={'white'}
            direction={'column'}
            alignItems={'center'}
            textAlign={'center'}>
            <Stack
                height={'300px'}
                width={'300px'}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'50%'}
                borderWidth={'2px'}
                bg={'whiteAlpha.200'}>
                <Avatar
                    src={avatar}
                    height={'250px'}
                    width={'250px'}
                    alignSelf={'center'}
                    m={{ base: '0 0 35px 0', md: '0 0 0 0' }}
                    mb={'-0.5'}
                    _hover={{transform: 'scale(1.2)'}} />
            </Stack>
            <Heading
                fontSize={30}>
                {name}
            </Heading>
            <Text color={'yellow'}>
                {role}
            </Text>
            <Flex gap={5}>
                <Link href={LinkedIn} target="_blank">
                    <FaLinkedin size={40} />
                </Link>
                <Link href={GitHub} target="_blank">
                    <FaGithub size={40} />
                </Link>
            </Flex>
        </Flex>
    )
}


export default Card;