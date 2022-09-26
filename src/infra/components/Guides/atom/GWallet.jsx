import {
    Badge,
    chakra,
    Flex,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const POR = 'https://www.business2community.com/es/wp-content/uploads/sites/5/2022/04/Mejores-Bitcoin-wallets-en-2022-monederos-de-BTC-comparados-hoy.jpeg';
const LOG = 'https://img.freepik.com/vector-gratis/registrarse-ilustracion-concepto_114360-7965.jpg?w=2000'
const PRO = 'https://member.aeronpay.org/public/logos/login.png'
const SEC = 'https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg'

function GWallet(){
    return(
        <>
            <Flex direction={'column'}>
                <Image src={POR} boxSize={{ base: 'full', md: '60%' }} alignSelf={'center'}></Image>
                <Heading color={'yellow.200'} textAlign={'center'}>Configura tu Wallet</Heading>
                <Text py={5} color={'whiteAlpha.700'}>
                    <chakra.h2 fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 1:</chakra.h2>
                    <Badge colorScheme={'teal'}><Link to="/signin">Regístrate</Link></Badge>, llenando el formulario con tus datos personales. Recuerda que toda tu información está protegida y encriptada, y no será usada sin tu consentimiento.
                    Si ya tienes una cuenta, <Badge colorScheme={'teal'}><Link to="/login">Inicia Sesión</Link></Badge> ingresando tu usuario y contraseña.
                </Text>
                <Image src={LOG} boxSize={{ base: '70%', md: '30%' }} alignSelf={'center'}></Image>
                <Text py={5} color={'whiteAlpha.700'}>
                    <chakra.h2 pt={3} fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 2:</chakra.h2>
                    Una vez dentro, ingresa en <Badge colorScheme={'teal'}><Link to="/account/dashboard/security">Seguridad</Link></Badge> en la sección de tu dashboard.
                </Text>
                <Image src={PRO} boxSize={{ base: '80%', md: '40%' }} alignSelf={'center'}></Image>
                <Text py={5} color={'whiteAlpha.700'}>
                    <chakra.h2 pt={3} fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 3:</chakra.h2>
                    Configura el tipo de Wallet con la que deseas realizar tus operaciones, Pública o Privada.
                    Recuerda que en la wallet privada, ninguno de tus datos se mostrará al momento de realizar transacciones.
                </Text>
                <Image src={SEC} boxSize={{ base: '70%', md: '30%' }} alignSelf={'center'}></Image>
            </Flex>
        </>
    )
}

export default GWallet;