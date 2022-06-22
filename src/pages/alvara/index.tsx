import { Image } from '@chakra-ui/react';

export interface AlvaraProps {
  host: string;
}

const Alvara: React.FunctionComponent<AlvaraProps> = ({ host }) => (
  <div className="container">
    <div className="miolo">
      <div>{/* <img src="static/images/logo.png" width="275px" /> */}</div>
      <h1 className="alvara">ALVARÁ</h1>
      <p>
        O presidente da federação paranaense de kung fu wushu (FPRKW) no uso dos
        <br /> atributos que lhe conferem autoriza o SR(A) <b> nome_professor </b>,<br /> portador do RG rg SSP/SP, a ministrar
        aulas de Kung Fu / wushu
        <br /> nos estilos estilos .
      </p>
      <div className="flex-container">
        <span>
          <div style={{ width: '200px' }} />
        </span>
        <span>
          <div className="div-assinatura">
            <b>cidade, data de mes de ano</b>
            <br />
            <b>validade de (variavel_ ano)</b>
          </div>

          <div>__________________________</div>
          <div style={{ padding: '25px' }}>
            <b> Aldebran Valentim </b>
            <br />
            Presidente da Federação Paranaense de <br />
            Kung Fu Wushu
          </div>
        </span>
        <span>
          <Image src={`${host}/www.png`} width="200px" alt="Landscape picture" />
        </span>
      </div>
    </div>
  </div>
);

export default Alvara;
