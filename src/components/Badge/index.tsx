import { Flex } from '@chakra-ui/react';
import { Athlete } from '@prisma/client';

import FirstSection from '~/components/Badge/FirstSection';
import SecondSection from '~/components/Badge/SecondSection';

interface BadgeProps {
  host?: string;
  athlete: Athlete;
}

const Badge = ({ host = 'http://localhost:3000/logo.png', athlete }: BadgeProps) => (
  <Flex flexDir="column" w="520px" h="350px" background="linear-gradient(-20deg, rgb(1, 94, 164), white 100%)">
    <FirstSection athlete={athlete} host={host} />
    <SecondSection athlete={athlete} />
  </Flex>
);

export default Badge;
