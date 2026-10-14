import PracticeFormPage from "../../pages/PracticeFormPage";
describe('Frontend -Practice Form', () => {
    it('submeter formulário com dados aleatórios e anexar arquivo', () => {   
        cy.visit('/');
        cy.contains('h5', 'Forms').click();
        cy.contains('.btn-light', 'Practice Form').click();
    
        const studentData = {
            firstName: 'Teste',
            lastName: 'QA',
            email: 'teste.qa@teste.com',
            gender: 2,
            mobile: '7979751263',
            currentAddress: 'Rua Torta, 123',
            state: 'NCR',
            city: 'Delhi',
        };

        PracticeFormPage.fillBasicInfo(studentData);
        PracticeFormPage.fillSubject('Maths');
        PracticeFormPage.selectHobby(1);
        PracticeFormPage.uploadFile('sample.txt');
        PracticeFormPage.fillAdress(studentData);
        PracticeFormPage.submit();

        PracticeFormPage.elements.modalDialog().should('be.visible');
        PracticeFormPage.elements.modalTitle().should('have.text', 'Thanks for submitting the form');

        PracticeFormPage.closeModal();
        PracticeFormPage.elements.modalDialog().should('not.exist');
    });
});