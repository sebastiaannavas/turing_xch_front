// dependencies
import axios from "axios";
import { GET } from "../../../api/endpoints";

// hooks
import { useState, useEffect } from "react";

// components
import { Stack, Heading, SimpleGrid, Box, Flex, Text,
} from "@chakra-ui/react";

// icons
import { SiDash, SiLitecoin, SiRipple, SiMonero, SiZcash } from "react-icons/si"
import { GiTwoCoins } from "react-icons/gi"

export const Asset = ( {icon, name, value} ) => {

	return (

		<Flex bg='whiteAlpha.50' px={3} py={2} fontSize="sm" w={"full"} color="white">

			<Stack flex={1} direction={"row"} align={"center"} spacing={4}>
				{icon}
				<Stack spacing={-0.2}>
					<Text fontWeight={"bold"}> {name} </Text>
					{/* <Text> TheterUS </Text> */}
				</Stack>
			</Stack>

			{/* <Stack flex={1} spacing={-0.2}> */}
			<Stack flex={1} align={"right"} justify={"center"}>
				<Text fontWeight={"bold"} align={"right"}> {value} </Text>
				{/* <Text align={"right"}> ≈ 1,913.15 BUSD </Text> */}
			</Stack>

		</Flex>
	);
}

export default function Assets () {

	const [balance, setBalance] = useState({});

    const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("auth")}` }
    };

    const getBalance = async () => {

        await axios.get(GET.BALANCE, config)
        .then( response => {
            console.log(response.data.msg);
            setBalance(response.data.msg);
            // setLoading(false);
        })
        .catch( error => {
            console.log(error);
        });
    };

    useEffect(() => { getBalance();

        // window.addEventListener("load", getBalance);

        // return () => {
        //     window.removeEventListener("load", getBalance);
        // };

    }, []);

    return (
      <>
        <Stack
		pb={4}
		px={4}
        w={['100%', '25%']}
        align={"center"}
        spacing={4}
        bg={"#1F0D3A"}
        borderWidth={"3px"}
        rounded="lg"
        borderColor="purple.400"
        >
			<Heading size={"sm"} color="white" pt={8} pb={4}> Activos disponibles </Heading>

			<Flex bg='gray.200' rounded={"lg"} px={3} py={2} fontSize="sm" w={"full"}>
				<Text flex={1}>Moneda</Text>
				<Text flex={1} align="right">Cantidad</Text>
			</Flex>

			<Stack
			pt={4}
			width={"full"}
			overflowY={"auto"}
			>
				<Asset icon={<GiTwoCoins color="#ffce1f" size={"2em"} />} name={"USDT"} value={balance.usdt} />
				<Asset icon={<SiRipple color="#ffce1f" size={"2em"} />} name={"XRP"} value={balance.xrp} />
				<Asset icon={<SiLitecoin color="#ffce1f" size={"2em"} />} name={"LTC"} value={balance.ltc} />
				<Asset icon={<SiMonero color="#ffce1f" size={"2em"} />} name={"XMR"} value={balance.xmr} />
				<Asset icon={<SiDash color="#ffce1f" size={"2em"} />} name={"DASH"} value={balance.dash} />
				<Asset icon={<SiZcash color="#ffce1f" size={"2em"} />} name={"ZCASH"} value={balance.zcash} />
			</Stack>
		</Stack>
      </>
    );
}