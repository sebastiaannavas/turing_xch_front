import {
    Badge,
    chakra,
    Flex,
    Heading,
    Image,
    Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const URL = 'https://i.pinimg.com/564x/96/40/d3/9640d3f7529fcd5ae5778591aabda45a.jpg'
const LOG = 'https://img.freepik.com/vector-gratis/registrarse-ilustracion-concepto_114360-7965.jpg?w=2000'
const EXC = 'https://img.freepik.com/vector-gratis/investigacion-datos-estadisticos-indicadores-desempeno-empresa-retorno-inversion-razon-porcentual-fluctuacion-indices-cambio-significativo_335657-2552.jpg?w=2000'
const TRA = 'https://www.moonstride.com/wp-content/uploads/2020/11/payment-gateway-banner.svg'

function GTrade(){
    return(
        <>
            <Flex direction={'column'}>
                <Image src={URL} boxSize={{ base: 'full', md: '60%' }} alignSelf={'center'}></Image>
                <Heading color={'yellow.200'} textAlign={'center'}>Haz Trading</Heading>
                <Text py={5} color={'whiteAlpha.700'}>
                    <chakra.h2 fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 1:</chakra.h2>
                    <Badge colorScheme={'teal'}><Link to="/signin">Regístrate</Link></Badge>, llenando el formulario con tus datos personales. Recuerda que toda tu información está protegida y encriptada, y no será usada sin tu consentimiento.
                    Si ya tienes una cuenta, <Badge colorScheme={'teal'}><Link to="/login">Inicia Sesión</Link></Badge> ingresando tu usuario y contraseña.
                </Text>
                <Image src={LOG} boxSize={{ base: '70%', md: '30%' }} alignSelf={'center'}></Image>
                <Text py={5} color={'whiteAlpha.700'}>
                    <chakra.h2 pt={3} fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 2:</chakra.h2>
                    Una vez dentro, ingresa en <Badge colorScheme={'teal'}><Link to="/account">Exchange</Link></Badge> en la sección de tu dashboard.
                    Allí podrás consultar el valor y el historial de las principales criptomonedas antes de realizar una operación.
                </Text>
                <Image src={EXC} boxSize={{ base: '70%', md: '30%' }} alignSelf={'center'}></Image>
                <Text py={5} color={'whiteAlpha.700'}>
                    <chakra.h2 pt={3} fontWeight={'bold'} fontSize={25} color={'rgba(118,0,156,0.7)'}>Paso 3:</chakra.h2>
                    Luego, indica el activo que deseas comercializar y la acción (comprar o vender) y concreta la operación.
                </Text>
                <Image src={TRA} boxSize={{ base: '80%', md: '40%' }} alignSelf={'center'}></Image>
            </Flex>
        </>
    )
}

export default GTrade;