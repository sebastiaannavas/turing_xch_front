import {
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
} from '@chakra-ui/react';

function RowUSDT(props){

    const { tipo, fecha, hora, monto, saldo } = props;

    if (tipo == 'ingreso'){
        return(
            <TableContainer>
                <Table>
                    <Tbody>
                        <Tr>
                            <Td color={'white'}>{fecha}{'-'}{hora}</Td>
                            <Td color={'white'} isNumeric>{monto}</Td>
                            <Td color={'white'} isNumeric>{saldo}</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        )
    }
    return(
        <TableContainer>
            <Table>
                <Tbody>
                    <Tr>
                        <Td color={'white'}>{fecha}{'-'}{hora}</Td>
                        <Td color={'red'} isNumeric>-{monto}</Td>
                        <Td color={'white'} isNumeric>{saldo}</Td>
                    </Tr>
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default RowUSDT;