import { Text, Flex, Stack } from "@chakra-ui/react";

export default function ChartAssets () {

    return (
      <>
        <Stack
        w={['100%', '25%']}
        align={"center"}
        justify="center"
        spacing={4}
        bg={"purple.900"}
        opacity={0.35}
        rounded={"lg"}
        >
          <Text align="center" color={"white"}> Chart / Receipt </Text>
        </Stack>
      </>
    );
}