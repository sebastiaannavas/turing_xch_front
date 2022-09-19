// components
import { Flex, Box, SimpleGrid } from "@chakra-ui/react";
import Feature from "./atom/Feature";

// icons
import { DepositIcon } from "../../../app/common/Icons/DepositIcon";
import { TradeIcon } from "../../../app/common/Icons/TradeIcon";
import { WalletIcon } from "../../../app/common/Icons/WalletIcon";

export default function Features () {

  return (
    <>
        <Flex 
        direction={['column', 'row']}
        align={['center', 'stretch']}
        justify={['center', 'space-between']}
        gap={8}
        pt={16}
        px={16}
        >
            <Feature
            icon={<TradeIcon w={8} h={8} />}
            title={'Trading al instante'}
            text={
                'Compra y vende las criptomonedas más rentables del mercado sin ser un experto'
            }
            />
            <Feature
            icon={<DepositIcon w={8} h={8} />}
            title={'Depósitos entre usuarios'}
            text={
                'Intercambia tus activos con terceros en nuestra plataforma'
            }
            />
            <Feature
            icon={<WalletIcon w={8} h={8} />}
            title={'Wallets anónimas'}
            text={
                'Obtén tus balances y realiza transacciones en modo privado'
            }
            />
        </Flex>
    </>
  );
}