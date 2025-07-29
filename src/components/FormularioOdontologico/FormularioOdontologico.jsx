import React, { useState } from 'react';
import './FormularioOdontologico.css';
import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import LocalizacaoClinica from '../LocalizacaoClinica/LocalizacaoClinica';

const FormularioOdontologico = () => {
  // Estado único do formulário
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

  // Função principal de manipulação de mudanças
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Função específica para formatar data
  const handleDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) value = value.substring(0, 2) + '/' + value.substring(2);
    if (value.length > 5) value = value.substring(0, 5) + '/' + value.substring(5, 9);
    setFormData(prev => ({ ...prev, pacienteDataNasc: value }));
  };

  // Função específica para formatar telefone
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 0) {
      value = '(' + value.substring(0, 2) + ') ' + value.substring(2, 7) +
        (value.length > 7 ? '-' + value.substring(7, 11) : '');
    }
    setFormData(prev => ({ ...prev, pacienteTelefone: value }));
  };

  // Função de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    // Lógica para enviar os dados ao servidor ou API
  };

  return (
    <div className="formulario-container">
      {/* Formulário com layout de três colunas */}
      <form onSubmit={handleSubmit} className="form-tres-colunas">

        {/* 
          COLUNA 1: secao-checkbox 
        */}
        <div className="secao-checkbox col-4">
          <div className="box-checkbox">
            <h1>LAB 3D</h1>
            <div className="checkbox-container">
              <div className="col-6">

                <CustomCheckbox
                  id="prototipagem"
                  className="checkbox-prototipagem altura-grupo"
                  label=" Prototipagem (Biomodelo3D)"
                  checked={formData.enviarMaisUmFormulario}
                  onChange={handleChange}
                  disabled={false}
                />
                <CustomCheckbox
                  id="impressaoModelo"
                  className="checkbox-prototipagem altura-grupo checkbox-impressao-modelo"
                  label="Impressão de Modelo"
                  checked={formData.impressaoModelo}
                  onChange={handleChange}
                  disabled={false}
                />

                <div className="demaismodelos altura-grupo">

                  <CustomCheckbox
                    id="demaisModelos1"
                    className="checkbox-demais-modelos"
                    label="Demais modelos da loja 3D"
                    checked={formData.demaisModelos1}
                    onChange={handleChange}
                    disabled={false}
                  />
                  <CustomCheckbox
                    id="demaisModelos2"
                    className="checkbox-demais-modelos"
                    label="Demais modelos da loja 3D"
                    checked={formData.demaisModelos2}
                    onChange={handleChange}
                    disabled={false}
                  />

                </div>
              </div>
              <div className="col-6 h-100">
                <div className="group1 altura-grupo">

                  <CustomCheckbox
                    id="maxila"
                    label="Maxila"
                    checked={formData.maxila}
                    onChange={handleChange}
                    disabled={false}
                  />
                  <CustomCheckbox
                    id="maxilaExtendida"
                    label="Maxila Extendida"
                    checked={formData.maxilaExtendida}
                    onChange={handleChange}
                    disabled={false}
                  />

                  <CustomCheckbox
                    id="mandibula"
                    label="Mandíbula"
                    checked={formData.mandibula}
                    onChange={handleChange}
                  />

                  <CustomCheckbox
                    id="mandibulaTotal"
                    label="Mandíbula Total"
                    checked={formData.mandibulaTotal}
                    onChange={handleChange}
                  />

                  <div className="outra">

                    <label className="checkbox-outra">Outra</label>
                    <input
                      type="checkbox"
                      name="outro"
                      checked={formData.outro}
                      onChange={handleChange}
                      className='input-outra'
                    />
                  </div>
                </div>
                <div className="group2 altura-grupo">
                  <CustomCheckbox
                    id="modeloEstudo"
                    label="Modelo de estudo (par)"
                    checked={formData.modeloEstudo}
                    onChange={handleChange}
                    disabled={false}
                  />

                  <CustomCheckbox
                    id="modeloFerradura"
                    className="checkbox-ferradura"
                    label={
                      <>
                        Modelo ferradura (par)
                        <br />
                        (para alinhador/placa)
                      </>
                    }
                    checked={formData.modeloFerradura}
                    onChange={handleChange}
                    disabled={false}
                  />
                  <CustomCheckbox
                    id="modeloTrabalho"
                    label="Modelo de trabalho (par)"
                    checked={formData.modeloTrabalho}
                    onChange={handleChange}
                    disabled={false}
                  />
                </div>
              </div>
            </div>

            {/* Grupo Prototipagem */}

            {/* Subgrupo Maxila, Mandíbula e Outro */}
            <div className="sub-checkbox-group">
              <div className="form-group">

              </div>
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
          </div>

          <h1 className='titulo-radiologia' >Radiologia</h1>
          <div className="radiologia-container">
          </div>

        </div>

        {/* 
          COLUNA 2: unidades-container 
          Apresenta as informações das unidades/endereços.
        */}
        <div className="unidades-container col-4">
          <LocalizacaoClinica />
          <LocalizacaoClinica />
          <LocalizacaoClinica />
        </div>

        {/* 
          COLUNA 3: grancum-form-container 
         */}
        <div className="grancum-form-container col-4">
          <div className="grancum-header">
            <h1>GRANÇUM</h1>
            <h2>RADIOLOGIA E DOCUMENTAÇÃO ODONTOLÓGICA</h2>
          </div>

          <h3>SOLICITAÇÃO DE EXAMES</h3>
          {/* Seção do formulário detalhado */}
          <div className="form-section">
            {/* Dados do paciente */}
            <h4 className='form-titulo'>Paciente</h4>

            {/*Nome */}
            <div className="form-row nome-line">
              <div className="d-flex align-items-end" style={{ borderBottom: '1px solid #08395F' }}>
                <label className="nome-label">Nome:</label>
                <div className="nome-input-container">
                  <input
                    type="text"
                    name="pacienteNome"
                    value={formData.pacienteNome}
                    onChange={handleChange}
                    className="nome-input"
                  />
                </div>
              </div>
            </div>

            {/* Linha Data | Telefone */}
            <div className="form-row data-telefone-line">
              <div className="d-flex align-items-end" style={{ borderBottom: '1px solid #08395F' }}>
                {/* Campo Data */}
                <div className="d-flex align-items-end me-1 w-50">
                  <label className="">Data nasc.</label>
                  <div className="position-relative">
                    <input
                      type="text"
                      name="pacienteDataNasc"
                      value={formData.pacienteDataNasc}
                      onChange={handleDateChange}
                      className="input-hidden"
                      placeholder="dd/mm/aaaa"
                      maxLength="10"
                      style={{ width: '130px' }}

                    />
                    <div className="input-visible">
                      {formData.pacienteDataNasc || '‎'.repeat(10)}
                    </div>
                  </div>
                </div>
                <span>|</span>
                {/* Campo Telefone */}
                <div className="d-flex align-items-end ms-1 w-50">
                  <label className="">Telefone</label>
                  <div className="position-relative">
                    <input
                      type="text"
                      name="pacienteTelefone"
                      value={formData.pacienteTelefone}
                      onChange={handlePhoneChange}
                      className="input-hidden"
                      placeholder="(00) 00000-0000"
                      maxLength="14"
                      style={{ width: '130px' }}
                    />
                    <div className="input-visible">
                      {formData.pacienteTelefone || '‎'.repeat(14)} {/* Espaços invisíveis para manter o tamanho */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dados do profissional */}
          <h4 className='form-titulo'>Profissional</h4>

          <div class="form-row-enviar-mais">
            <div class="form-check">
              <input type="checkbox" id="checkboxNoLabel" aria-label="..." />
              <label class="form-check-label" for="checkboxNoLabel">
                Enviar mais um formulário
              </label>
            </div>
          </div>

          <div className="form-row">
            <div className="d-flex align-items-end" style={{ borderBottom: '1px solid #08395F' }}>
              <label className='text-nome'>Nome:</label>
              <div className="nome-input-container">
                <input
                  type="text"
                  name="profissionalNome"
                  value={formData.pacienteNome}
                  onChange={handleChange}
                  className="nome-input"
                />
              </div>
              <span>|</span>
              <label className='text-cro'>CRO/UF:</label>
              <input
                className='input-cro'
                type="text"
                name="profissionalCroUf"
                value={formData.profissionalCroUf}
                onChange={handleChange}
              />
            </div>

            <div className="form-group form-group-especialidade" style={{ borderBottom: '1px solid #08395F' }}>
              <label>Especialidade:</label>
              <input
                className='input-text'
                type="text"
                name="especialidade"
                value={formData.especialidade}
                onChange={handleChange}
              />
            </div>
          </div>
          {/* Endereço e Contato */}
          <div className="form-row">
            <div className="form-group form-group-endereco " style={{ borderBottom: '1px solid #08395F' }}>
              <label>Endereço:</label>
              <input
                className='input-text'
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group form-group-cidade" style={{ borderBottom: '1px solid #08395F' }}>
              <div className="d-flex align-items-end">
                <label>Cidade:</label>
                <input
                  type="text"
                  name="cidade"
                  value={formData.cidade}
                  onChange={handleChange}
                />
                <span>|</span>

                <label>CEP:</label>
                <input
                  className='input-cep'
                  type="text"
                  name="cep"
                  value={formData.cep}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="form-group form-group-telefone" style={{ borderBottom: '1px solid #08395F' }}>
            <label>Telefone:</label>
            <input
              className='input-text'
              type="text"
              name="profissionalTelefone"
              value={formData.profissionalTelefone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group form-group-email" style={{ borderBottom: '1px solid #08395F' }}>
            <label>E-mail:</label>
            <input
              className='input-text'
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Exame */}
          <h4 className='form-titulo'>Exame</h4>

          {/* Finalidade */}
          <div>
            <div className="form-group form--" style={{ borderBottom: '1px solid #08395F' }}>
              <label>Finalidade:</label>
              <input
                className='input-text'
                type="text"
                name="finalidade"
                value={formData.finalidade}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Atenção especial */}
          <div>
            <div className="form-group form--" style={{ borderBottom: '1px solid #08395F' }}>
              <label>Atenção especial para:</label>
              <input
                type="text"
                className='input-text'
                name="atencaoEspecial"
                value={formData.atencaoEspecial}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Observações clínicas */}
          <div style={{
            padding: '0 0 5px 0',
          }}>
            <label style={{
              display: 'block',
              marginBottom: '5px',
            }}>Observações clínicas:</label>

            <div style={{
              position: 'relative',
              paddingLeft: '10px'
            }}>
              {/* Linhas guia */}
              <div style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: '0',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                pointerEvents: 'none'
              }}>
                <div style={{ borderBottom: '1px solid #08395F', width: '100%' }}></div>
                <div style={{ borderBottom: '1px solid #08395F', width: '100%' }}></div>
                <div style={{ borderBottom: '1px solid #08395F', width: '100%' }}></div>

              </div>

              {/* Área de texto */}
              <textarea
                name="observacoes"
                value={formData.observacoes}
                onChange={handleChange}
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  resize: 'none',
                  height: '50px',

                }}
                rows={3}
              />
            </div>
          </div>

          {/* Autorização */}
          <div className="form-group">
            <div className="container-autorizacao-radiologia">
              <input type="checkbox" id="checkboxAutorizacao" className="checkbox-autorizacao-input" />
              <label htmlFor="checkboxAutorizacao" className="label-autorizacao-radiologia">
                Autoriza eventual complementação necessária a critério do Radiologista
              </label>
            </div>
          </div>

          {/* Data e Assinatura */}
          <div
            className="form-row"
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "Row",
              justifyContent: "Center",
              marginTop: 20,

            }}
          >
            {/* Campo Data */}
            <div
              className="form-group"
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="text"
                  name="dia"
                  maxLength={2}
                  placeholder=""
                  value={formData.dia || ""}
                  onChange={handleChange}
                  style={{
                    width: 30,
                    border: "none",
                    padding: 0,
                    borderBottom: "1px solid rgb(60, 49, 49)",
                    textAlign: "center",

                    outline: "none",
                  }}
                />
                {/* Barra vertical */}
                <span style={{ color: "rgb(60, 49, 49)" }}>|</span>

                <input
                  type="text"
                  name="mes"
                  maxLength={2}
                  placeholder=""
                  value={formData.mes || ""}
                  onChange={handleChange}
                  style={{
                    width: 30,
                    border: "none",
                    padding: 0,
                    borderBottom: "1px solid rgb(60, 49, 49)",
                    textAlign: "center",
                    outline: "none",
                  }}
                />
                {/* Barra vertical */}
                <span style={{ color: "rgb(60, 49, 49)" }}>|</span>

                <input
                  type="text"
                  name="ano"
                  maxLength={4}
                  placeholder=""
                  value={formData.ano || ""}
                  onChange={handleChange}
                  style={{
                    width: 50,
                    border: "",
                    padding: 0,
                    borderBottom: "1px solid rgb(60, 49, 49)",
                    textAlign: "center",
                    fontSize: 18,
                    outline: "none",
                  }}
                />
              </div>
              <label>Data:</label>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: 12,
                  color: "rgb(60, 49, 49)",
                  width: 100,
                }}
              >

              </div>
            </div>

            {/* Campo Assinatura */}
            <div
              className="form-group"
              style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
            >

              <div
                style={{
                  borderBottom: "1px solid rgb(60, 49, 49)",
                  width: 250,
                  height: 24,
                  marginTop: 4,
                }}
              >

              </div>
              <label>Assinatura:</label>
            </div>
          </div>

          {/* Rodapé com informações de contato */}
          <div className="footer">
            <div className="footer-header mb-1">
              <div className="titulo-com-linha">
                Atendimento e Agendamento de Exames
              </div>
            </div>
            <div className="footer-content">
              <div className="footer-bloco">
                <span>Telefone</span>
                <p>11 4127-8757</p>
              </div>
              <div className="footer-bloco">
                <span>On-line</span>
                <p>craneum.com.br</p>
              </div>
            </div>

            <div className="footer-bloco">
              <strong>"VALORES ESTIMADOS POR TELEFONE ESTÃO SUJEITOS A CONFIRMAÇÃO NO ATENDIMENTO</strong>
              </div>


            {/* Closing tag for grancum-form-container */}

          </div>
        </div>
      </form>
    </div>
  );
};

export default FormularioOdontologico;
