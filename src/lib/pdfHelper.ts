import { renderToStaticMarkup } from 'react-dom/server';

import pdf from 'html-pdf';

export interface OptionsProps {
  format?: string;
  orientation?: string;
  border?: string;
  footer?: any;
  type?: string;
  timeout?: number;
}

const componentToPDFBuffer = (component: any, options?: OptionsProps) =>
  new Promise((resolve, reject) => {
    const html = renderToStaticMarkup(component);

    const documentOptions = {
      format: 'A4',
      orientation: 'portrait',
      border: '10mm',
      footer: {
        height: '10mm',
      },
      type: 'pdf',
      timeout: 30000,
      ...options,
    };

    pdf.create(html, documentOptions as any).toBuffer((err, buffer) => {
      if (err) {
        return reject(err);
      }

      return resolve(buffer);
    });
  });

export default { componentToPDFBuffer };
