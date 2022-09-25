import {
    Flex,
    Heading,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Table,
    Thead,
    Tr,
    Th,
    TableContainer,
} from '@chakra-ui/react';

// Estos son los generadores de filas a partir de los datos de la base de datos
import RowUSDT from './atom/RowUSDT';
import RowXRP from './atom/RowXRP';
import RowLTC from './atom/RowLTC';
import RowXMR from './atom/RowXMR';
import RowDASH from './atom/RowDASH';
import RowZCASH from './atom/RowZCASH';


// Todos estos datos se extraen de la base de datos... estos son mocks
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
    },
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 100.00,
    saldo: 'queda',
    },
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
    },
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 100.00,
    saldo: 'queda',
    },
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
    },
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 100.00,
    saldo: 'queda',
    },
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
    },
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 100.00,
    saldo: 'queda',
    }
];
const operacionesXRP = [
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 20.00,
    saldo: 'queda',
    },
    {
    tipo: 'egreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 2000.00,
    saldo: 'queda',
    },
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 200.00,
    saldo: 'queda',
    }
];
const operacionesLTC = [
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 30.00,
    saldo: 'queda',
    },
    {
    tipo: 'egreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 3000.00,
    saldo: 'queda',
    },
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 300.00,
    saldo: 'queda',
    }
];
const operacionesXMR = [
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 40.00,
    saldo: 'queda',
    },
    {
    tipo: 'egreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 4000.00,
    saldo: 'queda',
    },
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 400.00,
    saldo: 'queda',
    }
];
const operacionesDASH = [
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 50.00,
    saldo: 'queda',
    },
    {
    tipo: 'egreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 5000.00,
    saldo: 'queda',
    },
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 500.00,
    saldo: 'queda',
    }
];
const operacionesZCASH = [
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 60.00,
    saldo: 'queda',
    },
    {
    tipo: 'egreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 6000.00,
    saldo: 'queda',
    },
    {
    tipo: 'ingreso',
    fecha: 'xx/xx/xx',
    hora: 'xx:xx',
    monto: 600.00,
    saldo: 'queda',
    }
];

function TableHead(){
    return(
        <TableContainer>
            <Table>
                <Thead>
                    <Tr>
                        <Th color={'white'}>Fecha y Hora</Th>
                        <Th color={'white'} isNumeric>Monto</Th>
                        <Th color={'white'} isNumeric>Saldo</Th>
                    </Tr>
                </Thead>
            </Table>
        </TableContainer>
    )
}

function BalanceDeActivos(){

    return(
        <Flex
            flex={0.75}
            bg='gray.700'
            direction={'column'}
            p={10}>
                <Tabs isFitted variant='enclosed'>
                    <TabList mb='1em' bg={'white'} rounded={10} >
                        <Tab>USDT</Tab>
                        <Tab>XRP</Tab>
                        <Tab>LTC</Tab>
                        <Tab>XMR</Tab>
                        <Tab>DASH</Tab>
                        <Tab>ZCASH</Tab>
                    </TabList>
                    <Flex 
                    maxH={'600px'} 
                    overflowY={'auto'}
                    sx={
                        { 
                            '&::-webkit-scrollbar': {
                                width: "5px"
                            },
                              
                            '&::-webkit-scrollbar-track': {
                                bg: "purple.50",
                                borderRadius: "20px"
                            },
                               
                            '&::-webkit-scrollbar-thumb': {
                                bg: "purple.400", 
                                borderRadius: "20px"
                            },
                              
                            '&::-webkit-scrollbar-thumb:hover': {
                                bg: "purple.600"
                            }
                        }
                    }
                    >
                        <TabPanels>
                            <TabPanel>
                                <TableHead />
                                {operacionesUSDT.map((content) => (
                                    <RowUSDT {...content}/>
                                ))}
                            </TabPanel>
                            <TabPanel>
                                <TableHead />
                                {operacionesXRP.map((content) => (
                                    <RowXRP {...content}/>
                                ))}
                            </TabPanel>
                            <TabPanel>
                                <TableHead />
                                {operacionesLTC.map((content) => (
                                    <RowLTC {...content}/>
                                ))}
                            </TabPanel>
                            <TabPanel>
                                <TableHead />
                                {operacionesXMR.map((content) => (
                                    <RowXMR {...content}/>
                                ))}
                            </TabPanel>
                            <TabPanel>
                                <TableHead />
                                {operacionesDASH.map((content) => (
                                    <RowDASH {...content}/>
                                ))}
                            </TabPanel>
                            <TabPanel>
                                <TableHead />
                                {operacionesZCASH.map((content) => (
                                    <RowZCASH {...content}/>
                                ))}
                            </TabPanel>
                        </TabPanels>
                    </Flex>
                </Tabs>
        </Flex>
    )
}

export default BalanceDeActivos;