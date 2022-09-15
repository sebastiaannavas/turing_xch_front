// components
import { Link } from "react-router-dom";
import { Button, Flex, Input } from "@chakra-ui/react";


export default function HeroCta ( { ctaLink, ctaText } ) {

    return (
        <>
            <Flex 
            direction={['column', 'row']} 
            gap={4}
            pt={6}
            >
                <Input 
                placeholder='E-mail'
                variant={"filled"}
                focusBorderColor="purple.400"
                color="white" />

                <Link to={ ctaLink } > 
                    <Button 
                    w={"full"}
                    colorScheme='purple' 
                    lineHeight="1"
                    >
                        { ctaText }
                    </Button>
                </Link>

            </Flex>
        </>
    );
}