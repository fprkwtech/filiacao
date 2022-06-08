import { useEffect, useState } from 'react';

import { BlobProvider, PDFDownloadLink, PDFViewer } from '@react-pdf/renderer';

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
        <PDFDownloadLink
          document={<Carteirinha />}
          fileName="resume.pdf"
          // eslint-disable-next-line react/no-children-prop
          children={({ blob, loading, url, error }) => {
            if (!loading) {
              return (
                <a href={url} target="_blank" rel="noreferrer">
                  Clique aqui
                </a>
              );
            }
          }}
        />
      )}
    </>
  );
};

export default Emissao;
