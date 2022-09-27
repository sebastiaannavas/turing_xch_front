import {
    Tr,
    Td,
} from '@chakra-ui/react';

function RowLTC(props){

    let { type, from_to, amount, balance, money, date } = props;

    return(
        <Tr>
            <Td color={'white'} >{currentDate}</Td>
            <Td color={'white'} >{currentHour}</Td>
        </Tr>
    )
}

export default RowLTC;