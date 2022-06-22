import { Flex, Image } from '@chakra-ui/react';

import pdfHelper from '~/lib/pdfHelper';
const CarteirinhaComponent = () => (
  <Flex>
    <Image src="https://i.imgur.com/SkXDseI.png" alt="Logo" />
  </Flex>
);

export default function handler(req: any, res: any) {
  pdfHelper.componentToPDFBuffer(<CarteirinhaComponent />).then((buffer) => {
    res.setHeader('Content-Type', 'application/pdf');
    res.end(buffer);
  });
}
