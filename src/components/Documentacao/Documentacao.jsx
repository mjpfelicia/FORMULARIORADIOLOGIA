import React from 'react';
import './Documentacao.css';


const Documentacao = () => {
  return (
    <div className="documentacao-container">
    
      <div className="documentacao-grid  primeira_coluna ">
        <ul className="">
          <li>
            <label className="parentheses" htmlFor="clinica">
              <input type="checkbox" id="clinica" />
              <span className="symbol"></span> Clínica
            </label>
          </li>
          <li>
            <label className="parentheses" htmlFor="estetica">
              <input type="checkbox" id="estetica" />
              <span className="symbol"></span> Estética
            </label>
          </li>
          <li>
            <label className="parentheses" htmlFor="ortodontica">
              <input type="checkbox" id="ortodontica" />
              <span className="symbol"></span> Ortodôntica
            </label>
          </li>
          <li>
            <label className="parentheses" htmlFor="cirurgica">
              <input type="checkbox" id="cirurgica" />
              <span className="symbol"></span> Cirúrgica
            </label>
          </li>
           <li>
            <label className="parentheses" htmlFor="cirurgica">
              <input type="checkbox" id="cirurgica" />
              <span className="symbol"></span> Cirúrgica
            </label>
          </li>
           <li>
            <label className="parentheses" htmlFor="cirurgica">
              <input type="checkbox" id="cirurgica" />
              <span className="symbol"></span> Cirúrgica
            </label>
          </li>
           <li>
            <label className="parentheses" htmlFor="cirurgica">
              <input type="checkbox" id="cirurgica" />
              <span className="symbol"></span> Cirúrgica
            </label>
          </li>
           <li>
            <label className="parentheses" htmlFor="cirurgica">
              <input type="checkbox" id="cirurgica" />
              <span className="symbol"></span> Cirúrgica
            </label>
          </li>


        </ul>

        <label className="parentheses" htmlFor="outraDoc">
          <input type="checkbox" id="outraDoc" />
          <span className="symbol borda"></span> Outra
          <input type="text" className="linha-simples1" />
        </label>
      </div>

      <div className='segunda_coluna'>
         <ul className="">
          <li>
            <label className="parentheses" htmlFor="clinica">
              <input type="checkbox" id="clinica" />
              <span className="symbol"></span> Clínica
            </label>
          </li>
          <li>
            <label className="parentheses" htmlFor="estetica">
              <input type="checkbox" id="estetica" />
              <span className="symbol"></span> Estética
            </label>
          </li>
          <li>
            <label className="parentheses" htmlFor="ortodontica">
              <input type="checkbox" id="ortodontica" />
              <span className="symbol"></span> Ortodôntica
            </label>
          </li>
          <li>
            <label className="parentheses" htmlFor="cirurgica">
              <input type="checkbox" id="cirurgica" />
              <span className="symbol"></span> Cirúrgica
            </label>
          </li>
           <li>
            <label className="parentheses" htmlFor="cirurgica">
              <input type="checkbox" id="cirurgica" />
              <span className="symbol"></span> Cirúrgica
            </label>
          </li>
      
         


        </ul>
      </div>



    </div>
  );
};

export default Documentacao;