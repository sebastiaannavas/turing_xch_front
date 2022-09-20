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
            color={"gray.400"}
            target="_blank"
            _hover={{ color: 'purple.500' }}
            transition={'color 0.5s ease'}
            >
                <IconContext.Provider 
                value={{ size: "1.5em" }}
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
                            <MediaButton href={'https://github.com/sebastiaannavas/turing_xch_front'}>
                                <ImGithub />
                            </MediaButton>
                            <MediaButton href={'mailto:turingwallet@gmail.com'}>
                                <ImMail />
                            </MediaButton>
                            <MediaButton href={'https://trello.com/invite/wallethackathon/acd27b940472e494f2f9189eacf56c49'}>
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
                        <Link href={'https://www.binance.com/es/binance-api'}> Binance API </Link>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader> Soporte </ListHeader>
                        <Link href={'mailto:turingwallet@gmail.com'}> Atención al cliente </Link>
                        <Link href={'#'}> Blog / FAQ </Link>
                        <Link href={'#'}> Términos y Condiciones</Link>
                        <Link href={'#'}> Política de Privacidad</Link>
                    </Stack>
                </SimpleGrid>
            </Flex>
        </>
	);
}