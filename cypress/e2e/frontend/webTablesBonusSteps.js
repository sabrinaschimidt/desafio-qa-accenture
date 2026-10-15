import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import WebTablesPage from "../../pages/WebTablesPage";

const dynamicUsers = [];

for(let i = 1; i <= 12; i++){
    dynamicUsers.push({
        firstName: `User${i}`,
        lastName: `Teste${i}`,
        email: `usuario${i}@teste.com`,
        age: '25',
        salary: '5000',
        department: 'QA'
    });
}

Given("que acesso a página de Web Tables", () => {
    cy.visit('/');
    cy.contains('h5','Elements').click();
    cy.contains('.btn-light', 'Web Tables').click();
});

When("crio 12 novos registros na tabela de forma dinâmica", () => {
    dynamicUsers.forEach(user => {
        WebTablesPage.openAddbuttonModal();
        WebTablesPage.fillRegistrationForm(user);
        WebTablesPage.submit();
    });
});

Then("a tabela deve conter todos os 12 novos registros", () => {
    cy.get('.pagination select').select('20');
    dynamicUsers.forEach(user => {
        cy.contains(user.email).should('be.visible');
    });
});

When("deleto todos os novos registros criados", () => {
    WebTablesPage.deleteRecordByEmail(dynamicUsers[0].email);
});

Then("nenhum dos novos registros deve estar presente na tabela", () => {
    dynamicUsers.forEach(user => {
        cy.contains(user.email).should('not.exist');
    });
    cy.get('[title="Delete"]').should('have.length', 3);
});
