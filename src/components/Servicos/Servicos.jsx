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
    <div className="servicos-container">
      <div className="servico-item">
        <input
          type="checkbox"
          id="prototipagem"
          name="prototipagem"
          checked={servicosSelecionados.prototipagem}
          onChange={handleChange}
        />
        <label htmlFor="prototipagem">Prototipagem <br/>(Biomodelo3D)</label>
      </div>
      <div className="servico-item">
        <input
          type="checkbox"
          id="escaneamento"
          name="escaneamento"
          checked={servicosSelecionados.escaneamento}
          onChange={handleChange}
        />
        <label htmlFor="escaneamento">Escaneamento <br/>Intra-Oral</label>
      </div>
    </div>
  );
};

export default Servicos;