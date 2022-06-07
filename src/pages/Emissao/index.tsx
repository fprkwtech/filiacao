import { useEffect, useState } from 'react';

import { PDFDownloadLink } from '@react-pdf/renderer';

import Carteirinha from '~/components/Carteirinha';

const Emissao = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/*Coloquei o componente Carteirinha aqui para
        podermos visualizar a carteirinha sem termos que baixar
      */}
      <Carteirinha />
      {isClient && (
        <PDFDownloadLink document={<Carteirinha />} fileName="resume.pdf">
          <h1>Clique aqui para baixar o pdf</h1>
        </PDFDownloadLink>
      )}
    </>
  );
};

export default Emissao;
