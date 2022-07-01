import { Flex } from '@chakra-ui/react';

import FirstSection from '~/components/Badge/FirstSection';
import SecondSection from '~/components/Badge/SecondSection';
import { Carteirinha } from '~/types/carteirinha';

interface BadgeProps {
  host?: string;
  carteirinha: Carteirinha;
}

const Badge = ({ host = 'http://localhost:3000/logo.png', carteirinha }: BadgeProps) => (
  <Flex flexDir="column" w="520px" h="350px" background="linear-gradient(-20deg, rgb(1, 94, 164), white 100%)">
    <FirstSection host={host} />
    <SecondSection carteirinha={carteirinha} />
  </Flex>
);

export default Badge;
