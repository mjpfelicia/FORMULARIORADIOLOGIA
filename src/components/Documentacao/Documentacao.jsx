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
          {opcoes2D.map((item, index) => (
            <li key={`2d-${index}`} className="item-opcao">
              <label htmlFor={`2d-${index}`} className="parentheses">
                <input type="checkbox" id={`2d-${index}`} />
                <span className="symbol"></span> {item}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Coluna Cefalometria */}
      <div className="documentacao-bloco">
        <div className="cefalo-conteudo">
          <div className="titulo-bloco">Cefalometria</div>
        </div>
      </div>

      {/* Coluna 3D */}
      <div className="documentacao-bloco">
        <div className="titulo-bloco">3D</div>
        <ul className="documentacao-lista">
          {opcoes3D.map((item, index) => (
            <li key={`3d-${index}`} className="item-opcao">
              <label htmlFor={`3d-${index}`} className="parentheses">
                <input type="checkbox" id={`3d-${index}`} />
                <span className="symbol"></span> {item}
              </label>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Documentacao;