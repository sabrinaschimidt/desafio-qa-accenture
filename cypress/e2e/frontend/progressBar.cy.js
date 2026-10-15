import ProgressBarPage from "../../pages/ProgressBarPage";

describe('Frontend - Progress Bar', () => {
    beforeEach(() => {
        cy.intercept({ hostname: /googlesyndication|doubleclick|googleads|adservice/ }, { statusCode: 204, body: '' });
    });

    it('validar progresso da barra', () => {
        cy.visit('/');
        cy.contains('h5', 'Widgets').click();
        cy.contains('.btn-light', 'Progress Bar').click();

        ProgressBarPage.clickStartStopButton();
        ProgressBarPage.waitUntilReaches(10);
        ProgressBarPage.clickStartStopButton();
        ProgressBarPage.validateValue();
        ProgressBarPage.clickStartStopButton();
        ProgressBarPage.waitUntilComplete();
        ProgressBarPage.resetProgressBar();
       ProgressBarPage.validateProgressBarReset();
    });
});
