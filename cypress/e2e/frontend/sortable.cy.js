import SortablePage from "../../pages/SortablePage";

describe('Frontend - Sortable', () => {
    it('ordena a lista em ordem crescente', () => {
        cy.visit('/');
        cy.contains('h5', 'Interactions').click({force: true});
        cy.get('.element-group').contains('span', 'Sortable').click({force: true});
        cy.url().should('include', '/sortable');

        SortablePage.dragToTop('Six');
        SortablePage.getTexts().should('not.deep.equal', ['One', 'Two', 'Three', 'Four', 'Five', 'Six']);

        ['Six', 'Five', 'Four', 'Three', 'Two', 'One'].forEach(item => SortablePage.dragToTop(item));
        SortablePage.validateOrder(['One', 'Two', 'Three', 'Four', 'Five', 'Six']);
    });
});