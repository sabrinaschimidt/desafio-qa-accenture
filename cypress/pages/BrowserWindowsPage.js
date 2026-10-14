class BrowserWindowsPage{
    elements = {
        newWindowButton: () => cy.get('#windowButton'),
        sampleHeading: () => cy.get('#sampleHeading')
    };

    clickNewWindow(){
        this.elements.newWindowButton().click();
    }
}

export default new BrowserWindowsPage();
