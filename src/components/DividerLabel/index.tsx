import { Divider, Grid, GridProps, Text } from '@chakra-ui/react';

export interface DividerLabelProps extends GridProps {
  label?: string;
  width?: string;
}

const DividerLabel: React.ComponentType<DividerLabelProps> = ({ label, width, ...props }) => (
  <Grid gap="6" padding="4" justifyContent="center" alignItems="center" templateColumns="1fr auto 1fr" width={width} {...props}>
    <Divider />
    <Text fontSize="md" textTransform="uppercase" color="gray.500" fontWeight="700">
      {label}
    </Text>
    <Divider />
  </Grid>
);

export default DividerLabel;
