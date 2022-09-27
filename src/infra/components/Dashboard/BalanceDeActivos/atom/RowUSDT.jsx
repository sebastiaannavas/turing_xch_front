import {
    Tr,
    Td,
} from '@chakra-ui/react';

function RowUSDT(props){

    let { type, from_to, amount, balance, money, date } = props;

    let iat = (new Date(date * 1000)).toLocaleString();
    let data = iat.split(",");
    let currentDate = data[0].trim();
    let currentHour = data[1].trim();
    money = money.toUpperCase();

    return(
        <Tr>
            <Td color={'white'} >{currentDate}</Td>
            <Td color={'white'} >{currentHour}</Td>
            <Td color={'white'} >{from_to}</Td>
            <Td color={type == "credit" ? "green" : "red"} >{amount}{" "}{money}</Td>
            <Td color={'white'} >{balance}{" "}{money}</Td>
        </Tr>
    )
}

export default RowUSDT;