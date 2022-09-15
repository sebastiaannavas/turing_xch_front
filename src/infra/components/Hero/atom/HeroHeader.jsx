// components
import { Heading, Stack } from "@chakra-ui/react";
import HeroCta from "./HeroCta";

const Headline = ( { title } ) => {

    return (
        <>
        <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="#ffce1f"
        textAlign={["center", "center", "left", "left"]}
        >
            { title }
        </Heading>
        </>
    );
}

const SubHead = ( { subtitle } ) => {

    return (
        <>
            <Heading
            as="h2"
            size="md"
            color="white"
            fontWeight="normal"
            lineHeight={1.5}
            textAlign={["center", "center", "left", "left"]}
            >
                { subtitle }
            </Heading>
        </>
    );
}

export default function HeroHeader ( { title, subtitle, ctaLink, ctaText } ) {

  return (
        <>
        <Stack
            spacing={4}
            w={{ base: "80%", md: "40%" }}
            align={["center", "center", "flex-start", "flex-start"]}
            pb={[0, 0, 2, 4]}
            >
                <Headline title={ title } />
                <SubHead subtitle={ subtitle } />
                <HeroCta ctaLink={ ctaLink } ctaText={ ctaText } />
            </Stack>
        </>
    );
}