import React from 'react';

import { Flex, Image } from '@chakra-ui/react';
import { Athlete } from '@prisma/client';

import InformationField from './InformationField';

interface SecondSectionProps {
  athlete: Athlete;
}

export default function SecondSection({ athlete }: SecondSectionProps) {
  return (
    <Flex justifyContent="space-between" px="32px" mt="16px" alignItems="flex-end">
      <Image alt="Foto do atleta" h="140px" w="120px" src="http://localhost:3000/foto.jpeg" border="2px solid black" />
      <Flex flexDir="column" w="300px">
        <Flex>
          <InformationField title="Nome" value={athlete.name} />
        </Flex>
        <Flex>
          <InformationField flexDir="column" title="Data de Nascimento" value={String(athlete.birthDate)} />
          <InformationField flexDir="column" title="RG" value={athlete.rg ? athlete.rg : 'Sem RG'} />
        </Flex>
        <Flex>
          <InformationField flexDir="column" title="Validade" value="10/31/2001" />
          <InformationField flexDir="column" title="Cidade" value="Dourados" />
        </Flex>
        <Flex>
          <InformationField title="Professor" value="FPRKW" />
          <InformationField title="Registro" value="180186" />
        </Flex>
      </Flex>
    </Flex>
  );
}
