import React from 'react';

import { Flex, Image } from '@chakra-ui/react';

import { Carteirinha } from '~/types/carteirinha';

import InformationField from './InformationField';

interface SecondSectionProps {
  carteirinha: Carteirinha;
}

export default function SecondSection({ carteirinha }: SecondSectionProps) {
  return (
    <Flex justifyContent="space-between" px="32px" mt="16px" alignItems="flex-end">
      <Image alt="Foto do atleta" h="140px" w="120px" src="http://localhost:3000/foto.jpeg" border="2px solid black" />
      <Flex flexDir="column" w="300px">
        <Flex>
          <InformationField title="Nome" value={carteirinha.name} />
        </Flex>
        <Flex>
          <InformationField flexDir="column" title="Data de Nascimento" value={String(carteirinha.birthDate)} />
          <InformationField flexDir="column" title="RG" value={carteirinha.rg ? carteirinha.rg : 'Sem RG'} />
        </Flex>
        <Flex>
          <InformationField title="Validade" value={carteirinha.dueDate} />
          <InformationField title="Cidade" value={carteirinha.city} />
        </Flex>
        <Flex>
          <InformationField title="Professor" value="FPRKW" />
          <InformationField title="Registro" value="180186" />
        </Flex>
      </Flex>
    </Flex>
  );
}
