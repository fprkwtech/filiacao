import React from 'react';

import { Button, Flex } from '@chakra-ui/react';

export default function Emissao() {
  const handleBadgeGeneration = (id: number) => {
    window.open(`http://localhost:3000/api/Badge/${id}`, '_blanl');
  };

  return (
    <Flex w="100%" justifyContent="center" h="100vh" alignItems="center">
      <Button onClick={() => handleBadgeGeneration(6)}>Gerar Badge</Button>
    </Flex>
  );
}
