import React from 'react';

import { Flex, FlexProps, Text } from '@chakra-ui/react';

interface InformationFieldProps extends FlexProps {
  title: string;
  value: string;
}

export default function InformationField({ title, value, ...props }: InformationFieldProps) {
  return (
    <Flex w="100%" {...props} border="1px solid black" p={6} borderRadius="2px" m="2px">
      <Text fontSize="12px" m="0">
        {title}:{' '}
      </Text>
      <Text fontSize="12px" m="0">
        {value}
      </Text>
    </Flex>
  );
}
