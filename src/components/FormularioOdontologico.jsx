import React, { useState } from 'react';
import './FormularioOdontologico.css';

const FormularioOdontologico = () => {
  // Estado para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    // Checkbox LAB 3D
    prototipagem: false,
    maxila: false,
    maxilaExtendida: false,
    mandibula: false,
    mandibulaTotal: false,
    outro: false,
    outroDesc: '',

    // Checkbox Impressão de Modelo
    impressaoModelo: false,
    modeloEstudo: false,
    modeloFerradura: false,
    modeloTrabalho: false,

    // Checkbox Demais modelos da loja 3D
    demaisModelos1: false,
    demaisModelos2: false,

    // Dados do paciente
    pacienteNome: '',
    pacienteDataNasc: '',
    pacienteTelefone: '',

    // Dados do profissional
    profissionalNome: '',
    profissionalCroUf: '',
    especialidade: '',

    // Endereço
    endereco: '',
    cidade: '',
    cep: '',

    // Contato
    telefones: '',
    email: '',

    // Dados do exame
    exame: '',
    finalidade: '',
    atencaoEspecial: '',
    observacoes: '',

    // Autorização
    autorizacao: false,

    // Data e assinatura
    data: '',
    assinatura: ''
  });

  // Função para atualizar o estado do formulário ao mudar qualquer input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Função para tratar o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Aqui pode adicionar a lógica para enviar os dados ao servidor ou API
  };

  return (
    <div className="formulario-container">
      {/* Formulário com layout de três colunas */}
      <form onSubmit={handleSubmit} className="form-tres-colunas">

        {/* 
          COLUNA 1: secao-checkbox 
          Contém os grupos de checkbox do LAB 3D, Impressão de Modelo e demais modelos.
        */}
        <div className="secao-checkbox">
          <h1>LAB 3D</h1>
          <div className="checkbox-container">
            {/* Grupo Prototipagem */}
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="prototipagem"
                  checked={formData.prototipagem}
                  onChange={handleChange}
                />
                Prototipagem (Biomodelo3D)
              </label>
            </div>

            {/* Subgrupo Maxila, Mandíbula e Outro */}
            <div className="sub-checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="maxila"
                  checked={formData.maxila}
                  onChange={handleChange}
                />
                Maxila
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="maxilaExtendida"
                  checked={formData.maxilaExtendida}
                  onChange={handleChange}
                />
                Maxila Extendida
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="mandibula"
                  checked={formData.mandibula}
                  onChange={handleChange}
                />
                Mandíbula
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="mandibulaTotal"
                  checked={formData.mandibulaTotal}
                  onChange={handleChange}
                />
                Mandíbula Total
              </label>
            </div>
            {/* Checkbox 'Outra' com input de texto condicional */}
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="outro"
                checked={formData.outro}
                onChange={handleChange}
              />
              Outra:
            </label>
            {formData.outro && (
              <input
                type="text"
                name="outroDesc"
                value={formData.outroDesc}
                onChange={handleChange}
                placeholder="Descreva outra opção"
                className="input-outro"
              />
            )}
          </div>

          {/* Grupo Impressão de Modelo */}
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="impressaoModelo"
                checked={formData.impressaoModelo}
                onChange={handleChange}
              />
              Impressão de Modelo
            </label>
          </div>

          {/* Subgrupo modelos impressos */}
          <div className="sub-checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="modeloEstudo"
                checked={formData.modeloEstudo}
                onChange={handleChange}
              />
              Modelo de estudo (par)
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="modeloFerradura"
                checked={formData.modeloFerradura}
                onChange={handleChange}
              />
              Modelo ferradura (par)
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="modeloTrabalho"
                checked={formData.modeloTrabalho}
                onChange={handleChange}
              />
              Modelo de trabalho (par)
            </label>
          </div>



          {/* Grupo Demais modelos da loja 3D */}
          <div className="checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="demaisModelos1"
                checked={formData.demaisModelos1}
                onChange={handleChange}
              />
              Demais modelos da loja 3D
            </label>
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="demaisModelos2"
                checked={formData.demaisModelos2}
                onChange={handleChange}
              />
              Demais modelos da loja 3D
            </label>
          </div>
        </div>

        {/* 
          COLUNA 2: unidades-container 
          Apresenta as informações das unidades/endereços.
        */}
        <div className="unidades-container">
          <div className="unidade">
            <h3>SÃO BERNARDO (CENTRO)</h3>
            <p>TENSIONE</p>
            <p>SOCIEDADE</p>
            <p>PARTICULAR</p>
            <p>GOVERNO E VOLUME</p>
            <p>RUA CALLOS GORROS</p>
            <p>Unidade São Bernardo</p>
            <p>CR09&lt;1.3088</p>
            <p>sob responsabilidade técnica do Dr. Felício Seimo Zampieri</p>
            <p>CR09&gt;2533</p>
          </div>

          <div className="unidade">
            <h3>SANTO ANDRÉ (CENTRO)</h3>
            <p>Rua Álvares de Azevedo 154</p>
            <p>Assessibilidade parcial: consulte-nos.</p>
            <p>Estacionamento conveniado.</p>
            <p>Unidade Santo André</p>
            <p>CR09&lt;1.3569</p>
            <p>sob responsabilidade técnica do Dr. Felício Seimo Rosa Zampieri</p>
            <p>CR09&gt;37786</p>
          </div>

          <div className="unidade">
            <h3>SÃO PAULO (IBIRAPUERA)</h3>
            <p>Av. República do Líbano, 2139</p>
            <p>Assessibilidade parcial: consulte-nos.</p>
            <p>Estacionamento próprio.</p>
            <p>Unidade São Paulo</p>
            <p>CR09&lt;1.3487</p>
            <p>sob responsabilidade técnica do Dra. Maria Paula Caiuli</p>
            <p>Campanela Zampieri</p>
            <p>CR09&gt;35228</p>
          </div>
        </div>

        {/* 
          COLUNA 3: grancum-form-container 
          
        */}
        <div className="grancum-form-container">

          {/* Cabeçalho GRANÇUM (ocupando toda largura da coluna) */}
          <div className="grancum-header">
            <h1>GRANÇUM</h1>
            <h2>RADIOLOGIA E DOCUMENTAÇÃO ODONTOLÓGICA</h2>
          </div>

            <h3>SOLICITAÇÃO DE EXAMES</h3>
          {/* Seção do formulário detalhado */}
          <div className="form-section">

            {/* Dados do paciente */}
            <h4 className='form-titulo'>Paciente</h4>
            <div className="form-row">
              <div className="form-group">
                <label className='text-nome'>Nome:</label>
                <input className='input-text'
                  type="text"
                  name="pacienteNome"
                  value={formData.pacienteNome}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group-date">
                <label>Data nasc.</label>
                <input className='input-date'
                  name="pacienteDataNasc"
                  value={formData.pacienteDataNasc}
                  onChange={handleChange}
                />

                <label>Telefone:</label>
                <input className='input-tel'
                  type="tel"
                  name="pacienteTelefone"
                  value={formData.pacienteTelefone}
                  onChange={handleChange}
                />
              </div>

            </div>

            {/* Dados do profissional */}
            <h4 className='form-titulo'>Profissional</h4>
            <div className="form-row">
              <div className="form-group">
                <label>Nome:</label>
                <input
                  type="text"
                  name="profissionalNome"
                  value={formData.profissionalNome}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>CRO/UF:</label>
                <input
                  type="text"
                  name="profissionalCroUf"
                  value={formData.profissionalCroUf}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Especialidade:</label>
                <input
                  type="text"
                  name="especialidade"
                  value={formData.especialidade}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Endereço */}
            <h4>Endereço</h4>
            <div className="form-row">
              <div className="form-group">
                <label>Endereço:</label>
                <input
                  type="text"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Cidade:</label>
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>CEP:</label>
                <input
                  type="text"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Contato */}
            <h4>Contato</h4>
            <div className="form-row">
              <div className="form-group">
                <label>Telefones:</label>
                <input
                  type="tel"
                  name="telefones"
                  value={formData.telefones}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>E-mail:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Exame */}
            <h4 className='form-titulo'>Exame</h4>
            <div className="form-row">
              <div className="form-group" style={{ gridColumn: 'span 3' }}>
                <label>Exame:</label>
                <input
                  type="text"
                  name="exame"
                  value={formData.exame}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Finalidade */}
            <div className="form-row">
              <div className="form-group" style={{ gridColumn: 'span 3' }}>
                <label>Finalidade:</label>
                <textarea
                  name="finalidade"
                  value={formData.finalidade}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Atenção especial */}
            <div className="form-row">
              <div className="form-group" style={{ gridColumn: 'span 3' }}>
                <label>Atenção especial para:</label>
                <textarea
                  name="atencaoEspecial"
                  value={formData.atencaoEspecial}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Observações clínicas */}
            <div className="form-row">
              <div className="form-group" style={{ gridColumn: 'span 3' }}>
                <label>Observações clínicas:</label>
                <textarea
                  name="observacoes"
                  value={formData.observacoes}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Autorização */}
            <div className="autorizacao">
              <label>
                <input
                  type="checkbox"
                  name="autorizacao"
                  checked={formData.autorizacao}
                  onChange={handleChange}
                />
                Autoriza eventual complementação necessária a critério do Radiologista
              </label>
            </div>

            {/* Data e assinatura */}
            <div className="form-row">
              <div className="form-group">
                <label>Data:</label>
                <input
                  type="date"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Assinatura:</label>
                <input
                  type="text"
                  name="assinatura"
                  value={formData.assinatura}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Rodapé com informações de contato */}
            <div className="footer">
              <p>Atendimento e Agendamento de Exames</p>
              <p>Telefone 11 4127-8757 | On-line craneum.com.br</p>
            </div>

            {/* Botão enviar */}
            <button type="submit" className="submit-button">Enviar Formulário</button>
          </div>
        </div>

      </form>
    </div>
  );
};

export default FormularioOdontologico;
