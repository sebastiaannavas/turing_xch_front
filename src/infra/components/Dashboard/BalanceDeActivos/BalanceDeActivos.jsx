// dependencies
import axios from "axios";
import { GET } from "../../../api/endpoints";

// hooks
import { useState, useEffect } from 'react';

// components
import { Flex, Tabs, TabList, TabPanels, Tab, Spinner,
         TabPanel, Table, Thead, Tbody, Tr, Th, Td, TableContainer
} from '@chakra-ui/react';

import RowUSDT from './atom/RowUSDT';


function TableHead(){

    return(
        <Thead>
            <Tr>
                <Th color={'white'}>Fecha</Th>
                <Th color={'white'}>Hora</Th>  
                <Th color={'white'}>Persona</Th>
                <Th color={'white'}>Monto</Th>
                <Th color={'white'}>Balance</Th>
            </Tr>
        </Thead>
    )
}

function TableHeader(){

    return(
        <Thead>
            <Tr>
                <Th color={'white'}>Moneda</Th>
                <Th color={'white'}>Cantidad</Th>
            </Tr>
        </Thead>
    )
}

function BalanceDeActivos(){

    const [loading, setLoading] = useState(true);

    const [movements, setMovements] = useState({});

    // const [balance, setBalance] = useState({});

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("auth")}` }
    };

    const getDeposits = async () => {

        await axios.get(GET.MOVEMENTS, config)
        .then( response => {
            console.log(response.data.movements);
            console.log(response.data.balance);
            setMovements(response.data.movements);
            // setBalance(response.data.balance);
            setLoading(false);
        })
        .catch( error => {
            console.log(error);
        });
    };

    useEffect(() => { 

        getDeposits();

        // window.addEventListener("load", getDeposits);

        // return () => {
        //     window.removeEventListener("load", getDeposits);
        // };

    }, []);

    return(
        <Flex
            flex={0.75}
            // bg='gray.700'
            direction={'column'}
            p={10}>
                <Tabs 
                isFitted variant='enclosed'
                h={"75vh"}
                bg="purple.900"
                rounded={"lg"}
                >
                    <TabList mb={2} bg={'white'} rounded={"lg"}>

                        {/* <Tab  fontWeight="bold"> Wallet </Tab> */}
                        <Tab  fontWeight="bold"> Movimientos </Tab>

                    </TabList>
                    <TabPanels>

                        <TabPanel>

                        {loading && 
                        <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='purple.500'
                        size='xl'
                        />
                        }

                        {!loading && 

                        <>

                            <TableContainer
                            h={"55vh"}
                            overflowY={"auto"}
                            >
                                <Table>
                                    <TableHead />
                                    <Tbody>
                                        {movements.map((content) => (
                                        <RowUSDT {...content}/>
                                        ))}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                            </>
                        }
                        </TabPanel>

                        {/* <TabPanel>

                        {loading && 
                        <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='purple.500'
                        size='xl'
                        />
                        }

                        {!loading && 

                        <>

                            <TableContainer
                            h={"55vh"}
                            overflowY={"auto"}
                            >
                                <Table>
                                    <TableHead />
                                    <Tbody>
                                        {balance.map((content) => (
                                        <RowLTC {...content}/>
                                        ))}
                                    </Tbody>
                                </Table>
                            </TableContainer>
                            </>
                        }
                        </TabPanel> */}
                    </TabPanels>
                </Tabs>
        </Flex>
    )
}

export default BalanceDeActivos;