import { Box } from '@chakra-ui/react';

export interface AlvaraProps extends  {
  title: string;
}

const Alvara: React.ComponentType<AlvaraProps> = (...props) => {
  console.log('oi');

  return <Box>oi</Box>;
};

export default Alvara;
