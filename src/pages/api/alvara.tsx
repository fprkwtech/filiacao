import pdfHelper from '~/lib/pdfHelper';

import Alvara from '../alvara';

export default function handler(req: any, res: any) {
  pdfHelper.componentToPDFBuffer(<Alvara host={req.headers.host} />).then((buffer) => {
    res.setHeader('Content-Type', 'application/pdf');
    res.end(buffer);
  });
}
