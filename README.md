# My React App

This is a simple React application that demonstrates the structure and components of a React project.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd my-react-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

### Running the Application

To run the application in development mode, use the following command:

```
npm start
```

This will start the development server and open the application in your default web browser.

### Building for Production

To create a production build of the application, run:

```
npm run build
```

This will generate a `build` directory with the optimized production files.

### Components

- **App.jsx**: The main component that renders the application.
- **ExampleComponent.jsx**: A simple functional component demonstrating UI elements.

### License

This project is licensed under the MIT License. See the LICENSE file for more details.





# Código React para o Formulário Odontológico

Aqui está o código React para o formulário baseado no PDF fornecido:

```jsx
import React, { useState } from 'react';

const FormularioOdontologico = () => {
  const [formData, setFormData] = useState({
    prototipagem: '',
    maxila: false,
    maxilaExtendida: false,
    mandibula: false,
    mandibulaTotal: false,
    outro: '',
    impressaoModelo: '',
    modeloEstudo: false,
    modeloFerradura: false,
    modeloTrabalho: false,
    demaisModelos: false,
    pacienteNome: '',
    pacienteDataNasc: '',
    pacienteTelefone: '',
    profissionalNome: '',
    profissionalCroUf: '',
    especialidade: '',
    endereco: '',
    cidade: '',
    cep: '',
    telefones: '',
    email: '',
    exame: '',
    finalidade: '',
    atencaoEspecial: '',
    observacoes: '',
    autorizacao: false,
    data: '',
    assinatura: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Aqui você pode adicionar a lógica para enviar os dados
  };

  return (
    <div className="formulario-container">
      <h1>LAB 3D</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="secao">
          <h2>Prototipagem (Biomodelo3D)</h2>
          <div className="checkbox-group">
            <label>
              <input 
                type="checkbox" 
                name="maxila" 
                checked={formData.maxila} 
                onChange={handleChange} 
              />
              Maxila
            </label>
            <label>
              <input 
                type="checkbox" 
                name="maxilaExtendida" 
                checked={formData.maxilaExtendida} 
                onChange={handleChange} 
              />
              Maxila Extendida
            </label>
            <label>
              <input 
                type="checkbox" 
                name="mandibula" 
                checked={formData.mandibula} 
                onChange={handleChange} 
              />
              Mandíbula
            </label>
            <label>
              <input 
                type="checkbox" 
                name="mandibulaTotal" 
                checked={formData.mandibulaTotal} 
                onChange={handleChange} 
              />
              Mandíbula Total
            </label>
            <label>
              Outra: 
              <input 
                type="text" 
                name="outro" 
                value={formData.outro} 
                onChange={handleChange} 
              />
            </label>
          </div>
        </div>

        <div className="secao">
          <h2>Impressão de Modelo</h2>
          <div className="checkbox-group">
            <label>
              <input 
                type="checkbox" 
                name="modeloEstudo" 
                checked={formData.modeloEstudo} 
                onChange={handleChange} 
              />
              Modelo de estudo (par)
            </label>
            <label>
              <input 
                type="checkbox" 
                name="modeloFerradura" 
                checked={formData.modeloFerradura} 
                onChange={handleChange} 
              />
              Modelo ferradura (par)
            </label>
            <label>
              <input 
                type="checkbox" 
                name="modeloTrabalho" 
                checked={formData.modeloTrabalho} 
                onChange={handleChange} 
              />
              Modelo de trabalho (par)
            </label>
          </div>
        </div>

        <div className="secao">
          <label>
            <input 
              type="checkbox" 
              name="demaisModelos" 
              checked={formData.demaisModelos} 
              onChange={handleChange} 
            />
            Demais modelos da loja 3D
          </label>
        </div>

        <div className="unidades">
          <h2>Unidades</h2>
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
          
          {/* Repetir para outras unidades conforme necessário */}
        </div>

        <div className="secao-paciente">
          <h2>SOLICITAÇÃO DE EXAMES</h2>
          <h3>Paciente</h3>
          
          <div className="form-group">
            <label>Nome:</label>
            <input 
              type="text" 
              name="pacienteNome" 
              value={formData.pacienteNome} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Data nasc.:</label>
              <input 
                type="date" 
                name="pacienteDataNasc" 
                value={formData.pacienteDataNasc} 
                onChange={handleChange} 
              />
            </div>
            <div className="form-group">
              <label>Telefone:</label>
              <input 
                type="tel" 
                name="pacienteTelefone" 
                value={formData.pacienteTelefone} 
                onChange={handleChange} 
              />
            </div>
          </div>
          
          <h3>Profissional</h3>
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
          
          <div className="form-group">
            <label>Exame:</label>
            <input 
              type="text" 
              name="exame" 
              value={formData.exame} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="form-group">
            <label>Finalidade:</label>
            <textarea 
              name="finalidade" 
              value={formData.finalidade} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="form-group">
            <label>Atenção especial para:</label>
            <textarea 
              name="atencaoEspecial" 
              value={formData.atencaoEspecial} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="form-group">
            <label>Observações clínicas:</label>
            <textarea 
              name="observacoes" 
              value={formData.observacoes} 
              onChange={handleChange} 
            />
          </div>
          
          <div className="form-group checkbox">
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
        </div>
        
        <div className="footer">
          <p>Atendimento e Agendamento de Exames</p>
          <p>Telefone 11 4127-8757 | On-line craneum.com.br</p>
        </div>
        
        <button type="submit" className="submit-button">Enviar Formulário</button>
      </form>
    </div>
  );
};

export default FormularioOdontologico;
```

## CSS complementar (opcional)

Você pode adicionar este CSS para melhorar a aparência:

```css
.formulario-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

h1, h2, h3 {
  color: #333;
}

.secao {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.checkbox-group {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
}

.checkbox-group label {
  display: flex;
  align-items: center;
  gap: 5px;
}

.form-group {
  margin-bottom: 15px;
}

.form-row {
  display: flex;
  gap: 15px;
}

.form-row .form-group {
  flex: 1;
}

input[type="text"],
input[type="date"],
input[type="tel"],
input[type="email"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

textarea {
  min-height: 80px;
}

.unidades {
  margin: 20px 0;
}

.unidade {
  background-color: #f5f5f5;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 5px;
}

.submit-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #45a049;
}

.footer {
  margin-top: 30px;
  text-align: center;
  font-size: 14px;
  color: #666;
}
```

## Observações:

1. O código implementa todos os campos do formulário do PDF, incluindo:
   - Seção de prototipagem e impressão de modelos
   - Informações das unidades
   - Dados do paciente e profissional
   - Campos para solicitação de exames

2. O estado do formulário é gerenciado com React hooks (useState)

3. A função handleSubmit apenas loga os dados no console - você precisará implementar a lógica de envio para seu backend

4. O CSS fornecido é opcional e pode ser ajustado conforme suas necessidades de design

5. Para um formulário completo em produção, você pode querer adicionar validações e feedback ao usuário