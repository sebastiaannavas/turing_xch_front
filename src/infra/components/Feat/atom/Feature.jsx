// components
import { Stack, Flex, Text } from "@chakra-ui/react";

export default function Feature ( { icon, title, text } ) {

    return (
      <>
        <Stack
        w={['100%', '33.33%']}
        align={"center"}
        spacing={4}>
            <Flex
            w={16}
            h={16}
            align={'center'}
            justify={'center'}
            color={'white'}
            rounded={'full'}
            bg={'gray.100'}
            mb={1}>
                { icon }
            </Flex>
            <Text fontWeight={600} align="center"> { title } </Text>
            <Text color={'gray.600'} align="center"> { text } </Text>
        </Stack>
      </>
    );
}