import pdfHelper from '~/lib/pdfHelper';

export default function handler(req: any, res: any) {
  pdfHelper
    .componentToPDFBuffer(<div style={{ background: 'red', border: '1px dashed green' }}>Hello World!</div>)
    .then((buffer) => {
      res.setHeader('Content-Type', 'application/pdf');
      res.end(buffer);
    });
}
