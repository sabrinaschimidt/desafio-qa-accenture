import BrowserWindowsPage from "../../pages/BrowserWindowsPage";

describe('Frontend - Browser Windows', () => {
    it('abrir nova janela, validar mensagem e fechar', () => {
        cy.visit('/');
        cy.contains('h5', 'Alerts, Frame & Windows').click();
        cy.contains('.btn-light', 'Browser Windows').click();

        cy.window().then((win) => {
            cy.stub(win, 'open').as('windowOpen');
        });

        BrowserWindowsPage.clickNewWindow();
        cy.get('@windowOpen').should('be.calledWithMatch', '/sample');
        cy.visit('/sample');
        BrowserWindowsPage.elements.sampleHeading().should('have.text', 'This is a sample page');
        cy.go('back');
        cy.url().should('include', '/browser-windows');
    });
});