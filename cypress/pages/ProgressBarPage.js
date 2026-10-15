class ProgressBarPage {
    elements = {
        startStopButton: () => cy.get('#startStopButton'),
        resetButton: () => cy.get('#resetButton'),
        progressBar: () => cy.get('[role="progressbar"]')
    };

    clickStartStopButton() {
        this.elements.startStopButton().click();
    }    
    waitUntilReaches(minValue) {
        this.elements.progressBar().should($el => {
            expect(Number($el.attr('aria-valuenow'))).to.be.gte(minValue);
        });
    }
    validateValue() {
         this.elements.progressBar().should($el => {
            expect(Number($el.attr('aria-valuenow'))).to.be.lte(25);
        });
        this.elements.startStopButton().should('have.text', 'Start');
    }
    waitUntilComplete() {
        cy.get('[role="progressbar"]', {timeout: 25000}).should('have.attr', 'aria-valuenow', '100');
        this.elements.resetButton().should('be.visible');
    }
    resetProgressBar(){
        this.elements.resetButton().should('be.visible').then($btn => {
        $btn[0].click();
    });
    }
    validateProgressBarReset() {
        this.elements.progressBar().should('have.attr', 'aria-valuenow', '0');
        this.elements.startStopButton().should('have.text', 'Start');
    }
}

export default new ProgressBarPage();