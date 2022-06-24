import React from 'react';

import { Flex, Image } from '@chakra-ui/react';

import InformationField from './InformationField';

export default function SecondSection() {
  return (
    <Flex justifyContent="space-between" px="32px" mt="16px" alignItems="flex-end">
      <Image alt="Foto do atleta" h="140px" w="120px" src="http://localhost:3000/foto.jpeg" border="2px solid black" />
      <Flex flexDir="column" w="300px">
        <Flex>
          <InformationField title="Nome" value="João Pedro Soares Piovesan" />
        </Flex>
        <Flex>
          <InformationField flexDir="column" title="Data de Nascimento" value="31/10/2001" />
          <InformationField flexDir="column" title="RG" value="6.498.950-2" />
        </Flex>
        <Flex>
          <InformationField flexDir="column" title="Validade" value="31/10/2001" />
          <InformationField flexDir="column" title="Cidade" value="Londrina" />
        </Flex>
        <Flex>
          <InformationField title="Professor" value="FPRKW" />
          <InformationField title="Registro" value="180186" />
        </Flex>
      </Flex>
    </Flex>
  );
}
