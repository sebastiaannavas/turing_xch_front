// routes
import { Navigate, Outlet } from "react-router-dom"

// components
import { Flex } from "@chakra-ui/react"

import FirstPanel from "./FirstPanel";

export default function Dashboard () {

    return (
        <>
            <Flex
                bg={'black'}
                width={'full'}
                direction={{ base: 'column', md: 'row'}}
                gap={2}>
                <FirstPanel />
                <Outlet />
            </Flex>
        </>
    );
}