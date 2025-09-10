import React from 'react';
import './Documentacao.css';

const opcoes2D = [
  'Ortodontica Completa',
  'Ortodontica Especial',
  'OFM',
  'Implante',
  'Periodontal',
  'Protesista',
  'HBTC-RFA',
  'Outra'
];

const opcoes3D = [
  'Ortodontica',
  'OFM',
  'Implante',
  'Periodontal',
  'Protesista'
];

const Documentacao = () => {
  return (
    <div className="documentacao-container">


      {/* Coluna 2D */}
      <div className="documentacao-bloco">
        <div className="titulo-bloco">2D</div>
        <ul className="documentacao-lista">
          {opcoes2D.map((item, index) => {
            const isOrtodonticaCompleta = item === 'Ortodontica Completa';
            const isOFM = item === 'OFM';

            return (
              
              <li
                key={`2d-${index}`}
                className={`item-opcao ${isOrtodonticaCompleta ? 'linha-destaque' : isOFM ? 'linha-ofm-destaque' : ''
                  }`}
              >
                <label htmlFor={`2d-${index}`} className="parentheses">
                  <input type="checkbox" id={`2d-${index}`} />
                  <span className="symbol"></span> {item}
                </label>

                {/* Linha para Ortodontica Completa */}
                {isOrtodonticaCompleta && <div className="linha-horizontal-destaque"></div>}

                {/* Linha para OFM */}
                {isOFM && <div className="linha-horizontal-ofm"></div>}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Coluna Cefalometria */}
      <div className="documentacao-bloco-cefalo">
        <div className="cefalo-conteudo">
          <div className="linha-com-cefalo">
            <div className="linha-esquerda"></div>
            <div className="titulo-bloco-cefalo">Cefalometria</div>
          </div>
        </div>
      </div>

      {/* Coluna 3D */}
      <div className="documentacao-bloco-3d">
        <div className="titulo-bloco">3D</div>
        <div className="borda-esquerda-parcial">
          <div className="opcoes-3d-container">
            <ul className="documentacao-lista">
              {opcoes3D.map((item, index) => {
                const isOrtodontica = item === 'Ortodontica';
                const isOFM = item === 'OFM';

                return (
                  <li
                    key={`3d-${index}`}
                    className={`item-opcao ${isOrtodontica ? 'linha-ortodontica-3d' : isOFM ? 'linha-ofm-3d' : ''
                      }`}
                  >
                    <label htmlFor={`3d-${index}`} className="parentheses">
                      <input type="checkbox" id={`3d-${index}`} />
                      <span className="symbol"></span> {item}
                    </label>

                    {isOrtodontica && <div className="linha-horizontal-3d"></div>}
                    {isOFM && <div className="linha-horizontal-ofm"></div>}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>


      <div className="documentacao-bloco-cefalo-fundo">
        <div className="cefalo-conteudo">
          <div className="linha-com-cefalo">
            <div className="linha-esquerda"></div>
            <div className="titulo-bloco-cefalo">Cefalometria</div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Documentacao;