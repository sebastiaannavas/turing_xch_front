import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const trade = {
    url: 'https://i.pinimg.com/564x/96/40/d3/9640d3f7529fcd5ae5778591aabda45a.jpg'
}

function Guides(){
    return(
        <>
            <Flex
                direction={'column'}
                px={2}
                gap={2}>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    borderWidth={'2px'}>
                    <Image src={trade.url} w={'40%'}></Image>
                    <Box px={5}>
                        <Heading textAlign={'center'}>¿Cómo hacer Trading?</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repudiandae laudantium doloremque nam in eos, ipsum vitae fugit tempore quasi soluta accusamus non id expedita, placeat velit autem architecto. Itaque?
                        </Text>
                    </Box>
                </Box>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    borderWidth={'2px'}>
                    <Box px={5}>
                        <Heading textAlign={'center'}>Depositar o pagar</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repudiandae laudantium doloremque nam in eos, ipsum vitae fugit tempore quasi soluta accusamus non id expedita, placeat velit autem architecto. Itaque?
                        </Text>
                    </Box>
                    <Image src={trade.url} w={'40%'}></Image>
                </Box>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    borderWidth={'2px'}>
                    <Image src={trade.url} w={'40%'}></Image>
                    <Box px={5}>
                        <Heading textAlign={'center'}>Configura tu Wallet</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde repudiandae laudantium doloremque nam in eos, ipsum vitae fugit tempore quasi soluta accusamus non id expedita, placeat velit autem architecto. Itaque?
                        </Text>
                    </Box>
                </Box>
            </Flex>
        </>
    )
}


export default Guides;