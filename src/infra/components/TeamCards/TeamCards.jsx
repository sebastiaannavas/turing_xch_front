import {
    Box,
    Flex,
    Heading,
    SimpleGrid,
    Text,
} from '@chakra-ui/react';

import Card from './atom/Card';

const cards = [
    {
      name: 'Pedro Carvajal',
      role: 'Desarrollador Full-Stack. Co-Fundador de Turing Testers',
      LinkedIn: 'https://www.linkedin.com/in/pedro-carvajal-b426a2175/',
      GitHub: 'https://github.com/Pecarvajal246',
      avatar: 'https://avatars.githubusercontent.com/u/98930451?v=4',
    },
    {
      name: 'Rafael Delgado',
      role: 'Desarrollador Full-Stack. Co-Fundador de Turing Testers',
      LinkedIn: 'https://www.linkedin.com/in/rafael-delgado-dorante/',
      GitHub: 'https://github.com/rafael1delgado',
      avatar: 'https://avatars.githubusercontent.com/u/8202802?v=4',
    },
    {
      name: 'Sebastian Navas',
      role: 'Desarrollador Full-Stack. Co-Fundador de Turing Testers',
      LinkedIn: 'https://linkedin.com/in/sebastiaan-navas',
      GitHub: 'https://github.com/sebastiaannavas',
      avatar: 'https://avatars.githubusercontent.com/u/61017802?v=4',
    },
    {
      name: 'Gianny Marquina',
      role: 'Desarrollador Full-Stack. Co-Fundador de Turing Testers',
      LinkedIn: 'https://www.linkedin.com/feed/',
      GitHub: 'https://github.com/GianMRV',
      avatar: 'https://avatars.githubusercontent.com/u/103912805?v=4',
    },
];

function TeamCards(){

    return(
        <>
            <Flex
                id="about"
                flex={1}
                minH={'800px'}
                bgGradient={[ 'linear(to-b, #6B093B, #3B082B)' ]}
                p={5}
                direction={'column'}>
                <Box textAlign={'center'} color={'gray.200'}>
                    <Heading>
                        Conoce más sobre nuestra empresa y nuestro equipo
                    </Heading>
                    <Text px={'5%'} py={10} color={'white'}>
                        Somos un startup enfocado en el área de transacciones con criptomonedas.
                        Por medio de nuestra plataforma puedes comprar y tradear las criptomonedas top del momento,
                        además de enviar y recibir pagos al instante y consultar tus movimientos así como el balance
                        de tus activos. Pero no es todo, también podrás acceder a toda la información actualizada de
                        las criptos más importantes del mercado.
                        Y en temas de seguridad, somos la empresa número uno en la red, ya que podrás escoger cuándo se
                        muestran tus datos personales en las transacciones, con un simple click, gracias a la implementación de nuestra wallet anónima. 
                    </Text>
                </Box>
                <SimpleGrid
                    columns={{ base: 1, xl: 4 }}
                    spacing={'20'}
                    mt={16}
                    mx={'auto'}>
                    {cards.map((cardInfo) => (
                        <Card {...cardInfo} />
                    ))}
                </SimpleGrid>
            </Flex>
        </>
    )
}

export default TeamCards;