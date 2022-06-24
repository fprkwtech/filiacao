import { extendTheme } from '@chakra-ui/react';
import { Styles } from '@chakra-ui/theme-tools';

const styles: Styles = {
  global: {
    body: {
      bg: 'gray.100',
    },
  },
};

export const theme = extendTheme({
  styles,
});
