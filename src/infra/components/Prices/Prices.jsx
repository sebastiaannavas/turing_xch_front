// components
import { Stack, Heading, Text } from "@chakra-ui/react";

// icons
import { PricesIcon } from "../../../app/common/Icons/PricesIcon";

export default function Prices () {

  return (
    <>
      <Stack
        align="center"
        justify="center"
        h={"85vh"}
        gap={6}
        >
            <PricesIcon  w={24} h={24} />

            <Stack
            w={"33.33%"}
            gap={4}
            >
                <Heading
                as="h3"
                size="xl"
                fontWeight="bold"
                color="gray.800"
                textAlign="center"
                >
                    Próximamente
                </Heading>
                <Text
                color={'gray.800'} 
                align="center"
                >
                    Consulta los precios de tus criptos de preferencia en un
                    buscador y filtra por rentables, estables o anónimas
                </Text>
            </Stack>

            {/* <Link to="/account">
                <Button
                leftIcon={ <Home /> }
                colorScheme='purple'
                p={6}
                >
                    Volver al tablero principal
                </Button>
            </Link> */}
        </Stack>
    </>
  );
}