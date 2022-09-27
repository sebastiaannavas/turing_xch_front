// dependencies
import axios from "axios";
import { GET } from "../../../api/endpoints";

// hooks
import { useState, useEffect } from 'react';

// components
import { Flex, Tabs, TabList, TabPanels, Tab, Spinner,
         TabPanel, Table, Thead, Tbody, Tr, Th, TableContainer
} from '@chakra-ui/react';


import RowUSDT from './atom/RowUSDT';
// import RowXRP from './atom/RowXRP';
// import RowLTC from './atom/RowLTC';
// import RowXMR from './atom/RowXMR';
// import RowDASH from './atom/RowDASH';
// import RowZCASH from './atom/RowZCASH';


const operacionesUSDT = [
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 10.00,
    saldo: 'queda',
    },
    {
    tipo: 'egreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 1000.00,
    saldo: 'queda',
    }
];


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

function BalanceDeActivos(){

    const [loading, setLoading] = useState(true);

    const [movements, setMovements] = useState();

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("auth")}` }
    };

    const getDeposits = async () => {

        await axios.get(GET.MOVEMENTS, config)
        .then( response => {
            console.log(response.data.movements);
            setMovements(response.data.movements);
            setLoading(false);
        })
        .catch( error => {
            console.log(error);
        });
    };

    useEffect(() => { 

        window.addEventListener("load", getDeposits);

        return () => {
            window.removeEventListener("load", getDeposits);
        };

    }, []);

    return(
        <Flex
            flex={0.75}
            bg='gray.700'
            direction={'column'}
            p={10}>
                <Tabs 
                isFitted variant='enclosed'
                h={"75vh"}
                bg="#1F0D3A"
                rounded={"lg"}
                >
                    <TabList mb={2} bg={'white'} rounded={"lg"}>
                        <Tab>USDT</Tab>
                        {/* <Tab>XRP</Tab>
                        <Tab>LTC</Tab>
                        <Tab>XMR</Tab>
                        <Tab>DASH</Tab>
                        <Tab>ZCASH</Tab> */}
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
                    </TabPanels>
                </Tabs>
        </Flex>
    )
}

export default BalanceDeActivos;