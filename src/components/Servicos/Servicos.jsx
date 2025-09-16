import React, { useState } from 'react';
import './Servicos.css';

const Servicos = () => {
  const [servicosSelecionados, setServicosSelecionados] = useState({
    prototipagem: false,
    escaneamento: false,
  });

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setServicosSelecionados((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  return (
    <div className="protocolo-container">
   
      <ul className="protocolo-lista">
        <li className="protocolo-item">
          <label htmlFor="prototipagem" className="parentheses">
            <input
              type="checkbox"
              id="prototipagem"
              name="prototipagem"
              checked={servicosSelecionados.prototipagem}
              onChange={handleChange}
            />
            <span className="symbol"></span> Prototipagem <br />(Biomodelo3D)
          </label>
        </li>
        <li className="protocolo-item">
          <label htmlFor="escaneamento" className="parentheses">
            <input
              type="checkbox"
              id="escaneamento"
              name="escaneamento"
              checked={servicosSelecionados.escaneamento}
              onChange={handleChange}
            />
            <span className="symbol"></span> Escaneamento <br />Intra-Oral
          </label>
        </li>
      </ul>
    </div>
  );
};

export default Servicos;