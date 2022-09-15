// components
import { Stack, Text, Flex, SimpleGrid, Link, Highlight } from "@chakra-ui/react";
import { IconContext } from "react-icons";

// icons
import { ImTrello, ImGithub, ImMail } from "react-icons/im"
import { TuringIcon } from "../../../app/common/Icons/TuringIcon";

const MediaButton = ( { children, href } ) => {

    return (
        <>
            <Link
            href={href}
            // transition={'background 0.3s ease'}
            // _hover={{
            //     bg: 'blackAlpha.200'
            // }}
            >
                <IconContext.Provider 
                value={{ color: "gray", size: "1.5em" }}
                >            
                    {children}
                </IconContext.Provider>
            </Link>
        </>
    );
};

const ListHeader = ({ children }) => {

    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
};

export default function Footer() {

	return (
        <>
            <Flex 
            align={"center"}
            justify={"space-around"} 
            py={10}
            px={16}
            bg="gray.100">
                <SimpleGrid
                columns={{ sm: 1, md: 3 }}
                spacing={16}>
                    <Stack spacing={6}>
                        <Stack 
                        direction={'row'} 
                        spacing={6}
                        align={"center"}>
                            <TuringIcon boxSize={10} />
                            <MediaButton href={'#'}>
                                <ImGithub />
                            </MediaButton>
                            <MediaButton href={'#'}>
                                <ImMail />
                            </MediaButton>
                            <MediaButton href={'#'}>
                                <ImTrello />
                            </MediaButton>
                            </Stack>
                            <Text fontSize={'sm'}>
                                <Highlight
                                query='© 2022 Turing Testers.' 
                                styles={{ fontWeight: '600' }}
                                >
                                    © 2022 Turing Testers. Todos los derechos reservados
                                </Highlight>
                            </Text>
                        </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader> Acerca de Turing</ListHeader>
                        <Link href={'#'}> Nosotros </Link>
                        <Link href={'#'}> Patrocinadores </Link>
                        <Link href={'#'}> Binance API </Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader> Soporte </ListHeader>
                        <Link href={'#'}> Atención al cliente </Link>
                        <Link href={'#'}> Blog / FAQ </Link>
                        <Link href={'#'}> Términos y Condiciones</Link>
                        <Link href={'#'}> Política de Privacidad</Link>
                    </Stack>
                </SimpleGrid>
            </Flex>
        </>
	);
}