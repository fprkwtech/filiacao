import { Page, Document } from '@react-pdf/renderer';

import { styles } from '~/pages/Emissao/styles';

const Carteirinha = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <h1>hehe</h1>
    </Page>
  </Document>
);

export default Carteirinha;
