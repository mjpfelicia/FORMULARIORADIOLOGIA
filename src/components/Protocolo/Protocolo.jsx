import React from 'react';
import './Protocolo.css';

const opcoesProtocolo = [
  'Protocolo Easy 3D',
  'Protocolo SEG / Sym',
  'Protocolo Zampieri & Scarlati',
  'Estudo Biológico',
  'Outro'
];

const Protocolo = () => {
  return (
    <div className="protocolo-container">
      <div className='titulo-bloco-protocolo'>
      </div>
      <ul className="protocolo-lista">
        {opcoesProtocolo.map((item, index) => {
          const isOutro = item === 'Outro';

          return (
            <li key={`protocolo-${index}`} className="protocolo-item">
              <label htmlFor={`protocolo-${index}`} className="parentheses">
                <input type="checkbox" id={`protocolo-${index}`} name={`protocolo-${item}`} />
                <span className="symbol"></span> {item}
                {isOutro && (
                  <input
                    type="text"
                    className="linha-outra"
                    placeholder="________________"
                  />
                )}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Protocolo;