import { Box, Flex, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const trade = {
    url: 'https://i.pinimg.com/564x/96/40/d3/9640d3f7529fcd5ae5778591aabda45a.jpg'
}
const deposito = {
    url: 'https://www.presse-citron.net/app/uploads/2022/01/Transfe%CC%81rer-ses-bitcoins.jpg'
}
const wallet = {
    url: 'https://www.business2community.com/es/wp-content/uploads/sites/5/2022/04/Mejores-Bitcoin-wallets-en-2022-monederos-de-BTC-comparados-hoy.jpeg'
}

function Blog(){
    return(
        <Flex
            id="blog"
            direction={'column'}
            bg={'#F0F0F0'}
            pt={10}>
            <Heading textAlign={'center'}>¿Cómo accionar dentro de la plataforma?</Heading>
            <SimpleGrid columns={[1, 1,  3, 3]} gap={4} p={10}>
                <Link to='/guides/GTrade'>
                    <Box
                        _hover={{
                            shadow: 'outline',
                            transform: 'scale(0.98)'
                        }}
                        height={'full'}
                        shadow={'2xl'}
                        direction={'column'}
                        alignItems={'center'}
                        borderWidth={'2px'}>
                        <Image src={trade.url} w={'full'}></Image>
                        <Box px={5}>
                            <Heading textAlign={'center'}>Haz Trading</Heading>
                            <Text textAlign={'justify'}>
                                Selecciona la cripto de tu interés, visualiza las fluctuaciones de su valor a lo largo del tiempo,
                                consulta el valor actual del mercado. Visualiza también el historial de las transacciones.
                                Compra o vende activos de forma rápida y segura.
                            </Text>
                        </Box>
                    </Box>
                </Link>
                <Link to='/guides/GDeposito'>
                    <Box
                        _hover={{
                            shadow: 'outline',
                            transform: 'scale(0.98)'
                        }}
                        height={'full'}
                        shadow={'2xl'}
                        direction={'column'}
                        alignItems={'center'}
                        borderWidth={'2px'}>
                        <Image src={deposito.url} w={'full'}></Image>
                        <Box px={5}>
                            <Heading textAlign={'center'}>Deposita o paga</Heading>
                            <Text textAlign={'left'}>
                                Trasnfiere rapidamente tus activos a otras cuentas en cualquiera de las criptomonedas disponibles en la plataforma.
                                Tan solo seleccionando la cripto de interés, la dirección de depósito y el monto, realizarás operaciones al instante.
                            </Text>
                        </Box>
                    </Box>
                </Link>
                <Link to='/guides/GWallet'>
                    <Box
                        _hover={{
                            shadow: 'outline',
                            transform: 'scale(0.98)'
                        }}
                        height={'full'}
                        shadow={'2xl'}
                        direction={'column'}
                        alignItems={'center'}
                        borderWidth={'2px'}>
                        <Image src={wallet.url} w={'full'}></Image>
                        <Box px={5}>
                            <Heading textAlign={'center'}>Configura tu Wallet</Heading>
                            <Text textAlign={'justify'}>
                                Ten la libertad de escoger cuándo tus datos son mostrados cada vez que realizas una transacción.
                                Con un solo clic puedes encriptar todos los datos de las operaciones para evitar que tus transacciones sean rastreadas.
                            </Text>
                        </Box>
                    </Box>
                </Link>
            </SimpleGrid>
        </Flex>
    )
}


export default Blog;