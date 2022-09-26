import {
    Badge,
    chakra,
    Flex,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const URL = 'https://www.presse-citron.net/app/uploads/2022/01/Transfe%CC%81rer-ses-bitcoins.jpg'
const LOG = 'https://img.freepik.com/vector-gratis/registrarse-ilustracion-concepto_114360-7965.jpg?w=2000'
const DEP = 'https://img.freepik.com/vector-gratis/ilustracion-concepto-abstracto-billetera-digital_335657-3896.jpg'
const FOR = 'https://img.freepik.com/vector-gratis/documentacion-electronica-hombre-registro-comprobando-registro-repositorio-aprobacion-linea-formulario-pantalla-pagina-validacion-cronicas-gastos-ilustracion-metafora-concepto-aislado-vector_335657-4323.jpg?w=360'
const COR = 'https://img.freepik.com/vector-premium/correo-electronico-servicio-correo-electronico-marketing-correo-electronico-estilo-dibujos-animados-plano-moderno-ilustracion-vectorial_501813-138.jpg'

function GDeposito(){
    return(
        <>
            <Flex direction={'column'}>
                <Image src={URL} boxSize={{ base: 'full', md: '60%' }} alignSelf={'center'}></Image>
                <Heading color={'yellow.200'} textAlign={'center'}>Deposita o paga</Heading>
                <Text py={5} color={'whiteAlpha.700'}>
                    <chakra.h2 fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 1:</chakra.h2>
                    <Badge colorScheme={'teal'}><Link to="/signin">Regístrate</Link></Badge>, llenando el formulario con tus datos personales. Recuerda que toda tu información está protegida y encriptada, y no será usada sin tu consentimiento.
                    Si ya tienes una cuenta, <Badge colorScheme={'teal'}><Link to="/login">Inicia Sesión</Link></Badge> ingresando tu usuario y contraseña.
                </Text>
                <Image src={LOG} boxSize={{ base: '70%', md: '30%' }} alignSelf={'center'}></Image>
                <Text py={5} color={'whiteAlpha.700'}>
                    <chakra.h2 pt={3} fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 2:</chakra.h2>
                    Una vez dentro, ingresa en <Badge colorScheme={'teal'}><Link to="/account/deposits">Depósitos</Link></Badge> en la sección de tu dashboard.
                </Text>
                <Image src={DEP} boxSize={{ base: '70%', md: '30%' }} alignSelf={'center'}></Image>
                <Text py={5} color={'whiteAlpha.700'}>
                    <chakra.h2 pt={3} fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 3:</chakra.h2>
                    Llena el formulario, indicando la moneda (USDT, XRP, LDTC, XMR, ZCASH, ZDASH), la dirección de destino, y el monto que deseas transferir.
                    Recuerda que puedes consultar el saldo de tus criptos en la sección de <Badge colorScheme={'teal'}><Link to="/account/dashboard/balance">Balance</Link></Badge> de tu dashboard.
                </Text>
                <Image src={FOR} boxSize={{ base: '70%', md: '30%' }} alignSelf={'center'}></Image>
                <Text py={5} color={'whiteAlpha.700'}>
                    <chakra.h2 pt={3} fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 4:</chakra.h2>
                    Envía el pago y revisa tu correo electrónico, donde te llegará un recibo con los datos de la transacción y tu saldo actual.
                </Text>
                <Image src={COR} boxSize={{ base: '70%', md: '30%' }} alignSelf={'center'}></Image>
            </Flex>
        </>
    )
}

export default GDeposito;