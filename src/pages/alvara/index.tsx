import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';

import classes from './styles';

export interface AlvaraProps {
  host: string;
  nome: string;
  rg: string;
  estilos: string;
  cidade: string;
  data: string;
  validade: string;
}

const Alvara: React.FunctionComponent<AlvaraProps> = ({ host, nome, rg, estilos, cidade, data, validade }) => (
  <Box
    width="740px"
    height="470px"
    padding="45px"
    bgColor="rgb(242, 243, 230)"
    backgroundImage={`http://${host}/borda-alvara.png`}
    bgRepeat="no-repeat"
    bgSize="contain"
    bgPosition="center"
  >
    <Flex direction="column" alignItems="center" className="miolo">
      <Box margin="0">
        <Image src={`http://${host}/logo.png`} width="150px" alt="logo" />
      </Box>
      <Heading margin="0" padding="15px 0" as="h1" fontSize="45px" fontWeight="400">
        ALVARÁ
      </Heading>
      <Text width="full" textAlign="center" margin="0 35px" fontSize="20px">
        O presidente da federação paranaense de kung fu wushu (FPRKW) no uso dos atributos que lhe conferem autoriza o SR(A){' '}
        <b> {nome} </b>, portador do RG {rg} SSP/SP, a ministrar aulas de Kung Fu / wushu nos estilos estilos {estilos}.
      </Text>
      <Flex justifyContent="space-between" alignItems="flex-end">
        <Box>
          <Box style={{ width: '90px' }} />
        </Box>
        <Box>
          <Box className="div-assinatura">
            <b>
              {cidade}, {data}
            </b>
            <br />
            <b>validade de {validade}</b>
          </Box>

          <Box>__________________________</Box>
          <Box style={{ padding: '25px' }}>
            <b> Aldebran Valentim </b>
            <br />
            Presidente da Federação Paranaense de <br />
            Kung Fu Wushu
          </Box>
        </Box>
        <Box>
          <Image src={`http://${host}/www.png`} width="90px" alt="Landscape picture" />
        </Box>
      </Flex>
    </Flex>
  </Box>
);

export default Alvara;
