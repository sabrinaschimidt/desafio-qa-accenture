# desafio-qa-accenture


Projeto de automação de testes com foco na validação de API e interface (UI) sobre a plataforma DemoQA BookStore utilizando o Cypress.

---

## 🛠️ Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)** (v13+)
- **JavaScript (ES6+)**
- Arquitetura baseada em **Service Layer** para chamadas HTTP

---

## 📂 Estrutura do Projeto

```text
cypress/
├── e2e/
│   └── api/
│       └── bookStore.cy.js       # Teste do fluxo completo de API
├── services/
│   └── BookStoreService.js       # Encapsulamento dos endpoints e requisições HTTP
cypress.config.js
package.json
README.md

```

---

### Testes de Interface (UI)

1. **Bloqueio de foco e sobreposição de elementos:**
   * **Comportamento:** Modais ou elementos dinâmicos sobrepostos retiveram o foco ou impediram a interação direta com elementos da página.
   * **Contorno aplicado:** Envio da tecla `{esc}` para forçar o fechamento do elemento sobreposto e restabelecer o foco no fluxo de execução.

