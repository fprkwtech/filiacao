import pdfHelper from '~/lib/pdfHelper';

import Alvara from '../alvara';

const options = {
  orientation: 'landscape',
  border: '0mm',
};

export default function handler(req: any, res: any) {
  pdfHelper
    .componentToPDFBuffer(
      <Alvara
        host={req.headers.host}
        nome="Antonio Willian Sousa"
        rg="59663346"
        estilos="Louva-a-Deus e Shaolin do Norte"
        cidade="Londrina"
        data="24 de junho de 2022"
        validade="1 ano"
        url="https://google.com"
      />,
      options,
    )
    .then((buffer) => {
      res.setHeader('Content-Type', 'application/pdf');
      res.end(buffer);
    });
}
