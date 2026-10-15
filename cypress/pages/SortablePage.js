class SortablePage {
    elements = {
        listItems: () => cy.get('#demo-tabpane-list .list-group-item'),
        itemByText: (text) => cy.contains('#demo-tabpane-list .list-group-item', text),
    };
    getTexts(){
        return this.elements.listItems().then($items => [...$items].map(el => el.innerText.trim()));
    }
    dragToTop(text){
        this.elements.itemByText(text).drag('#demo-tabpane-list .list-group-item:first-child', {
                target: {position: 'top'},
                force: true
            });
        this.elements.listItems().first().should('have.text', text);
    }
    validateOrder(expected){
      this.getTexts().should('deep.equal', expected);
    }
}

export default new SortablePage();