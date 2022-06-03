import { Box, Text } from '@chakra-ui/react';

import classes from './styles';

const Alvara = () => (
  <Box className="container">
    <Box className="classes.miolo">
      <Box>{/* <img src="static/images/logo.png" width="275px" /> */}</Box>
      <Text className="alvara">ALVARÁ</Text>
      <Text>
        O presidente da federação paranaense de kung fu wushu (FPRKW) no uso dos
        <br /> atributos que lhe conferem autoriza o SR(A) <b>nome_professor</b>,<br /> portador do RG rg SSP/SP, a ministrar
        aulas de Kung Fu / wushu
        <br /> nos estilos estilos .
      </Text>
      <Box className="flex-container">
        <Box>
          <Box />
        </Box>
        <Box>
          <Box className="Box-assinatura">
            <Text>cidade, data de mes de ano</Text>
            <br />
            <Text>validade de (variavel_ ano)</Text>
          </Box>

          <Box>__________________________</Box>
          <Box>
            <Text> Aldebran Valentim </Text>
            Presidente da Federação Paranaense de <br />
            Kung Fu Wushu
          </Box>
        </Box>
        <Box>{/* <img src="static/images/www.png" width="200px" /> */}</Box>
      </Box>
    </Box>
  </Box>
);

export default Alvara;
