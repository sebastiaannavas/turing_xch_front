// components
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import Card from './atom/Card';

const cards = [
    {
      name: 'Pedro Carvajal',
      role: 'Desarrollador Full-Stack',
      teamRole: 'Co-Fundador de Turing Testers',
      LinkedIn: 'https://www.linkedin.com/in/pedro-carvajal-b426a2175/',
      GitHub: 'https://github.com/Pecarvajal246',
      avatar: 'https://avatars.githubusercontent.com/u/98930451?v=4',
    },
    {
      name: 'Rafael Delgado',
      role: 'Desarrollador Full-Stack',
      teamRole: 'Co-Fundador de Turing Testers',
      LinkedIn: 'https://www.linkedin.com/in/rafael-delgado-dorante/',
      GitHub: 'https://github.com/rafael1delgado',
      avatar: 'https://avatars.githubusercontent.com/u/8202802?v=4',
    },
    {
      name: 'Sebastián Navas',
      role: 'Desarrollador Full-Stack',
      teamRole: 'Co-Fundador de Turing Testers',
      LinkedIn: 'https://linkedin.com/in/sebastiaan-navas',
      GitHub: 'https://github.com/sebastiaannavas',
      avatar: 'https://avatars.githubusercontent.com/u/61017802?v=4',
    },
    {
      name: 'Gianny Marquina',
      role: 'Desarrollador Full-Stack',
      teamRole: 'Co-Fundador de Turing Testers',
      LinkedIn: 'https://www.linkedin.com/feed/',
      GitHub: 'https://github.com/GianMRV',
      avatar: 'https://avatars.githubusercontent.com/u/103912805?v=4',
    }
];


export default function TeamCards(){

    return(
        <>
            <Flex
                id="about"
                // flex={1}
                bgGradient={[ 'linear(to-b, #240046, #6e44ff)' ]}
                px={16}
                py={24}
                direction={'column'}>
                <Box 
                color={'#ffce1f'}
                >
                    <Heading textAlign={'center'} pb={8}>
                        Conoce más sobre nuestro equipo
                    </Heading>
                </Box>
                <SimpleGrid
                    columns={[1, 1, 2, 4]}
                    spacing={8}
                    >
                    {cards.map((cardInfo) => (
                        <Card {...cardInfo} />
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    )
}