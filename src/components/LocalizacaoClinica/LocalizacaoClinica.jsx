import React from 'react';
import IconeAcessibilidade from '../IconeAcessibilidade/IconeAcessibilidade';
import './LocalizacaoClinica.css';

const LocalizacaoComInfo = ({
  titulo,
  endereco,
  cidade,
  mapaSrc,
  textoAcessibilidade,
  unidade,
  crosp,
  responsavel,
  crospResponsavel,
  mostrarIcone = true,
  infoStrongPos = 'meio',
}) => {
  return (
    <>
      <h1 className="titulo-localizacao">{titulo}</h1>
      <div className="localizacao-container">
        <div className="mapa-com-info">
          <div className="mapa">
            <iframe
              title={`mapa-${titulo}`}
              src={mapaSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="info-lateral">
            {mostrarIcone && textoAcessibilidade && (
              <div className="info-acessibilidade com-icone">
                <IconeAcessibilidade />
                <p>{textoAcessibilidade}</p>
              </div>
            )}

            <div className={`info-strong ${infoStrongPos}`}>
              {endereco}
            </div>

            {!mostrarIcone && textoAcessibilidade && (
              <div className="info-acessibilidade sem-icone">
                <p>{textoAcessibilidade}</p>
              </div>
            )}

            <div className="info-lateral-end">
              <p>{unidade}</p>
              <p>{crosp}</p>
              <p>
                sob responsabilidade técnica do<br />
                {responsavel}<br />
                {crospResponsavel}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocalizacaoComInfo;
