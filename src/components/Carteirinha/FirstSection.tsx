import { Flex, Image, Text, VStack } from '@chakra-ui/react';

interface FirstSectionProps {
  host?: string;
}

export default function FirstSection({ host }: FirstSectionProps) {
  return (
    <Flex justifyContent="space-around" pt="32px" alignItems="center">
      <Image w="120px" h="120px" src={host} alt="Logo" />
      <Flex flexDir="column" textAlign="center">
        <Image w="300px" h="40px" src="http://localhost:3000/federacao_letras.png" alt="Letras federação" />
        <VStack>
          <Text m="0" fontSize="12px">
            FEDERAÇÃO PARANAENSE DE KUNG FU / WUSHU
          </Text>
          <Text m="0" fontSize="12px">
            CNPJ 02.147.454/0001-15
          </Text>
          <Text m="0" border="1px solid black" p="8px" borderRadius="5px" fontSize="12px">
            PROFESSOR
          </Text>
        </VStack>
      </Flex>
    </Flex>
  );
}
