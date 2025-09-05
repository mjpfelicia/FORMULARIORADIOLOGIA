import React from 'react';
import './RadiografiaForm.css';
import arcadaDentaria from '../../images/arcada-dentaria.png';


const RadiografiaForm = () => {
  return (
    <div className="border-radiografia radiografia-content">
      <h2 className="titulo-rodigrafia">Radiografia</h2>

      <div className="tomografia-grid Radiografia-grid">
        {/* Primeira Coluna */}
        <div className="primeira-col radiologia">
          <ul className="item-ul-radiografia">
            {[
              { id: 'Panorâmica', label: 'Panorâmica "elipsopantomografia' },
              { id: 'Padrao', label: 'Padrão' },
              { id: 'Oclusao', label: 'em Oclusão' },
              { id: 'tracado', label: 'com traçado implantes' },
              {
                id: 'osteoporose',
                label: (
                  <>
                    com traçado/Análise <br /> de <br /> osteopenia / osteoporose
                  </>
                ),
                className: 'texto-alinhado',
              },
            ].map(({ id, label, className }) => (
              <li key={id}>
                <label className={`parentheses ${className || ''}`} htmlFor={id}>
                  <input type="checkbox" id={id} />
                  <span className="symbol"></span> {label}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Segunda Coluna */}
        <div className="linha-checkboxes">
          <div className="coluna-esquerda">
            {['Teles', 'Lateral', 'Frontal', 'AnaliseCarpal'].map((id) => (
              <label className="parentheses" htmlFor={id} key={id}>
                <input type="checkbox" id={id} />
                <span className="symbol"></span> {id}
              </label>
            ))}
          </div>

          <div className="coluna-direita">
            <label className="parentheses" htmlFor="Cefalometria">
              <input type="checkbox" id="Cefalometria" />
              <span className="symbol"></span> Cefalometria
            </label>
          </div>
        </div>

        {/* Terceira Coluna */}
        <div className="terceira-coluna radiografia" style={{ display: 'flex' }}>
          <div>
            {[
              { id: 'Periapicais1', label: 'Periapicais' },
              {
                id: 'Periapicais2',
                label: (
                  <>
                    Levantamento <br /> completo (18 tomadas)
                  </>
                ),
              },
              {
                id: 'Apenas',
                label: (
                  <>
                    Apenas Regiões <br /> Assinaladas
                  </>
                ),
              },
              {
                id: 'AnaliseCarpal2',
                label: (
                  <>
                    Técnica Localização <br /> de Clarck <br /> (Considere a opção <br /> de tomografia)
                  </>
                ),
              },
            ].map(({ id, label }) => (
              <label className="parentheses texto-alinhado" htmlFor={id} key={id}>
                <input type="checkbox" id={id} />
                <span className="symbol"></span> {label}
              </label>
            ))}
          </div>
          <div className='content-arcada'>
            <div className="content-img-arcada">
              <img src={arcadaDentaria} alt="Arcada dentária" />
            </div>
            <label className="parentheses texto-alinhado" htmlFor="ampliada">
              <input type="checkbox" id="ampliada" />
              <span className="symbol"></span> Impressão ampliada
            </label>

          </div>
        </div>
      </div>
    </div>
  );
};

export default RadiografiaForm;