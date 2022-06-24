import { Flex } from '@chakra-ui/react';

import FirstSection from '~/components/Carteirinha/FirstSection';
import SecondSection from '~/components/Carteirinha/SecondSection';
import pdfHelper from '~/lib/pdfHelper';

interface CarteirinhaProps {
  host?: string;
}
export const CarteirinhaComponent = ({ host = 'http://localhost:3000/logo.png' }: CarteirinhaProps) => (
  <Flex flexDir="column" w="520px" h="350px" background="linear-gradient(-20deg, rgb(1, 94, 164), white 100%)">
    <FirstSection host={host} />
    <SecondSection />
  </Flex>
);

export default function handler(req: any, res: any) {
  pdfHelper.componentToPDFBuffer(<CarteirinhaComponent host={req.host} />).then((buffer) => {
    res.setHeader('Content-Type', 'application/pdf');
    res.end(buffer);
  });
}
