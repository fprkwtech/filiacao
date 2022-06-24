import React from 'react';

import { Flex } from '@chakra-ui/react';

import { CarteirinhaComponent } from '../api/Carteirinha/CarteirinhaPdf';

export default function Emissao() {
  return (
    <Flex w="100%" justifyContent="center" h="100vh" alignItems="center">
      <CarteirinhaComponent />
    </Flex>
  );
}
