import WebTablesPage from "../../pages/WebTablesPage";

describe('Frontend - Web Tables', () => {
    it('Criar, editar e deletar um registro na tabela', () => {
        cy.visit('/');
        cy.contains('h5', 'Elements').click();
        cy.contains('.btn-light', 'Web Tables').click();


        const userData = {
            firstName: 'Teste',
            lastName: 'QA',
            email: 'teste.qa@teste.com',
            age: '26',
            salary: '5000',
            department: 'QA'
        };

        const updatedData = {
            firstName: 'Novo',
            lastName: 'Nome',
            email: 'novo.teste@teste.com',
            age: '29',
            salary: '7000',
            department: 'Dev'
        };

        WebTablesPage.openAddbuttonModal();
        WebTablesPage.fillRegistrationForm(userData);
        WebTablesPage.submit();
        cy.contains(userData.email).should('be.visible');

        WebTablesPage.editRecordByEmail(userData.email, updatedData);
        WebTablesPage.submit();
        cy.contains(updatedData.email).should('be.visible');

        WebTablesPage.deleteRecordByEmail(updatedData.email);
        cy.contains(updatedData.email).should('not.exist');
    });
});