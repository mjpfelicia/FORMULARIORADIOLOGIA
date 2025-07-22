  
  # **Formulário Odontológico - React**  

Este projeto é um **formulário digital** para solicitação de exames odontológicos, desenvolvido em **React**, que substitui o formulário em PDF anteriormente utilizado. Ele oferece uma experiência interativa e organizada, dividida em três seções principais:  

1. **Checkboxes de Procedimentos (LAB 3D e Radiologia)**  
2. **Localização das Clínicas**  
3. **Formulário Grançum (Solicitação de Exames)**  

---

## **Funcionalidades**  
✅ **Checkboxes Dinâmicos**  
- Seleção de procedimentos (prototipagem, modelos de estudo, etc.) com estados gerenciados via `useState`.  
- Lógica condicional (ex: campo "Outro" aparece apenas quando selecionado).  

✅ **Dados do Paciente e Profissional**  
- Campos para nome, data de nascimento, telefone, CRO/UF e especialidade.  

✅ **Unidades de Clínica**  
- Exibição das unidades (São Bernardo, Santo André, São Paulo) com informações de endereço e responsáveis técnicos.  

✅ **Autorização e Envio**  
- Checkbox de autorização e campos para data/assinatura.  
- Função `handleSubmit` para envio dos dados (atualmente em `console.log`, pronto para integração com API).  

---

## **Tecnologias Utilizadas**  
- **React** (com Hooks: `useState`).  
- **CSS Modules** (para estilização organizada).  
- **Componentes Reutilizáveis** (`CustomCheckbox`, `LocalizacaoClinica`).  

---

## **Como Executar o Projeto**  
1. Clone o repositório:  
   ```bash
   git clone [URL_DO_REPOSITÓRIO]
   ```
2. Instale as dependências:  
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:  
   ```bash
   npm start
   ```

---

## **Próximas Melhorias**  
🔧 **Validação de Campos**: Adicionar máscaras para telefone, CEP e verificação de campos obrigatórios.  
🔧 **Integração com API**: Substituir `console.log` por chamadas HTTP (ex: Axios).  
🔧 **Responsividade**: Ajustar layout para mobile.  
🔧 **Testes**: Implementar testes com Jest e React Testing Library.  

---

## **Comparação com o Formulário em PDF**  
| **Recurso**          | **PDF**                     | **React**                     |
|----------------------|----------------------------|-------------------------------|
| **Interatividade**   | Estático (preenchimento manual) | Dinâmico (estados em tempo real) |
| **Validação**        | Nenhuma                    | Em desenvolvimento            |
| **Componentização**  | N/A                        | Checkboxes e seções reutilizáveis |



## **Contato**  
Em caso de dúvidas, entre em contato:  
📧 `mjpfelicia@gmail.com`  
🌐 [craneum.com.br](https://github.com/mjpfelicia/FORMULARIORADIOLOGIAr)  

--- 

**Licença**: MIT.