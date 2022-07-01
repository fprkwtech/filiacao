import { QRCode } from 'react-qrcode-logo';
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
export interface AlvaraProps {
  host: string;
  nome: string;
  rg: string;
  estilos: string;
  cidade: string;
  data: string;
  validade: string;
  url: string;
}

const Alvara: React.FunctionComponent<AlvaraProps> = ({ host, nome, rg, estilos, cidade, data, validade, url }) => (
  <Box
    width="740px"
    height="460px"
    padding="45px"
    margin="0"
    bgColor="rgb(242, 243, 230)"
    backgroundImage={`http://${host}/borda-alvara.png`}
    bgRepeat="no-repeat"
    bgSize="contain"
    bgPosition="center"
  >
    <Flex direction="column" alignItems="center" className="miolo" width="full">
      <Box margin="0">
        <Image src={`http://${host}/logo.png`} width="130px" alt="logo" />
      </Box>
      <Heading margin="0" padding="15px 0" as="h1" fontSize="35px" fontWeight="400">
        ALVARÁ
      </Heading>
      <Text width="full" textAlign="center" padding="0 35px" margin="0" fontSize="20px" lineHeight="1.1">
        O presidente da federação paranaense de kung fu wushu (FPRKW) no uso dos atributos que lhe conferem autoriza o SR(A){' '}
        <b>{nome}</b>, portador do RG {rg} SSP/SP, a ministrar aulas de Kung Fu / wushu nos estilos estilos {estilos}.
      </Text>
      <Flex justifyContent="space-between" alignItems="flex-end" height="full" width="full">
        <Box>
          <Box style={{ width: '150px' }} />
        </Box>
        <Flex direction="column" justifyContent="center" alignItems="center" textAlign="center" width="400px">
          <Box style={{ padding: '30px' }}>
            <b>
              {cidade}, {data}
            </b>
            <br />
            <b>Validade de {validade}</b>
          </Box>

          <Box>__________________________</Box>
          <Box style={{ padding: '15px' }}>
            <Text fontSize="15px" lineHeight="1.1" fontWeight="700" margin="0">
              Aldebran Valentim
            </Text>
            <Text fontSize="15px" lineHeight="1.1" fontWeight="400" margin="0">
              Presidente da Federação Paranaense de
            </Text>
            <Text fontSize="15px" lineHeight="1.1" fontWeight="400" margin="0">
              Kung Fu Wushu
            </Text>
          </Box>
        </Flex>
        <Flex justifyContent="flex-end" alignItems="flex-end" width="150px">
          <QRCode value={url} eyeRadius={0} size={110} />
        </Flex>
      </Flex>
    </Flex>
  </Box>
);

export default Alvara;
