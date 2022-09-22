// components
import { Avatar, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react';
import { FaLinkedin, FaGithub} from 'react-icons/fa'


export default function Card(props){
    const { name, role, teamRole, LinkedIn, GitHub, avatar } = props;

    return(
        <Flex
            color={'white'}
            direction={'column'}
            alignItems={'center'}
            textAlign={'center'}
            pt={14}
            >
            <Stack
                height={'10em'}
                width={'10em'}
                justifyContent={'center'}
                alignItems={'center'}
                borderRadius={'50%'}
                bg={'whiteAlpha.200'}>
                <Avatar
                    src={avatar}
                    size={"2xl"}
                    _hover={{transform: 'scale(1.2)'}} 
                    transition={'transform 0.5s ease'}
                    />
            </Stack>
            <Stack
            pt={8}
            align="center"
            gap={4}
            >
                <Heading fontSize={"2xl"}>
                    {name}
                </Heading>
                <Stack spacing={-0.5}>
                    <Text color={'yellow'} fontWeight="600">
                        {role}
                    </Text>
                    <Text color={'yellow'} fontWeight="600">
                        {teamRole}
                    </Text>
                </Stack>
                <Flex gap={5}>
                    <Link href={LinkedIn} target="_blank"
                    color={"#11001c"}
                    _hover={{ color: 'white' }}
                    transition={'color 0.5s ease'}
                    >
                        <FaLinkedin size={25} />
                    </Link>
                    <Link href={GitHub} target="_blank"
                    color={"#11001c"}
                    _hover={{ color: 'white' }}
                    transition={'color 0.5s ease'}
                    >
                        <FaGithub size={25} />
                    </Link>
                </Flex>
            </Stack>
        </Flex>
    )
}