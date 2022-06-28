import { Box, Image } from '@chakra-ui/react';

const Logo = () => (
  <Box display="flex" justifyContent="center" alignItems="center" padding={4}>
    <Image src="/logo.png" alt="logo" width={200} />
  </Box>
);

export default Logo;
