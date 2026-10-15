class WebTablesPage{
    elements = {
        addButton: () => cy.get('#addNewRecordButton'),
        firstNameInput: () => cy.get('#firstName'),
        lastNameInput: () => cy.get('#lastName'),
        emailInput: () => cy.get('#userEmail'),
        ageInput: () => cy.get('#age'),
        salaryInput: () => cy.get('#salary'),
        departmentInput: () => cy.get('#department'),
        submitButton: () => cy.get('#submit'),
        searchBox: () => cy.get('#searchBox'),
        tableRows: () => cy.get('.rt-tbody .rt-tr-group'),
        editRecordButton: (rowNumber) => cy.get(`#edit-record-${rowNumber}`),
        deleteRecordButton: (rowNumber) => cy.get(`#delete-record-${rowNumber}`)
    };

    openAddbuttonModal(){
        this.elements.addButton().click();
    }
    fillRegistrationForm(data){
        this.elements.firstNameInput().clear().type(data.firstName);
        this.elements.lastNameInput().clear().type(data.lastName);
        this.elements.emailInput().clear().type(data.email);
        this.elements.ageInput().clear().type(data.age);
        this.elements.salaryInput().clear().type(data.salary);
        this.elements.departmentInput().clear().type(data.department);
    }
    submit(){
        this.elements.submitButton().click({force: true});
    }
    editRecordByEmail(email, updatedData){
        cy.contains('td', email)
        .closest('tr')
        .within(() => {
            cy.get('[title="Edit"]').click();
        });
        this.fillRegistrationForm(updatedData);
    }
    deleteRecordByEmail(email){
        cy.contains('td', email)
        .closest('tr')
        .within(() => {
            cy.get('[title="Delete"]').click({force: true});
        });
    }
}

export default new WebTablesPage();