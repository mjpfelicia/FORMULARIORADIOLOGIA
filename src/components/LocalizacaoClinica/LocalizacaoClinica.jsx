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
}) => {
  return (
    <>
      <h1 className="titulo-Localizacao">{titulo}</h1>
      <div className="localizacao-container">
        <div className="mapa-com-info">
          <div className="mapa">
            <iframe
              title={`mapa-${titulo}`}
              src={mapaSrc}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <div className="info-lateral">
            <div className="info-lateral-content">
              {mostrarIcone && (
                <div className="info-lateral">
                  <IconeAcessibilidade />
                </div>
              )}
              <p>{textoAcessibilidade}</p>
            </div>

            <div className="info-lateral">
              <strong className="infor-stong">{endereco}</strong>
            </div>

            <div className="info-lateral-end">
              <p>{unidade}</p>
              <p>{crosp}</p>
              <p>
                sob responsabilidade técnica do<br />
                {responsavel}
                <br />
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