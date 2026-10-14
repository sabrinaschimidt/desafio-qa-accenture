class PracticeFormPage{
    elements = {
        firstNameInput: () => cy.get('#firstName'),
        lastNameInput: () => cy.get('#lastName'),
        emailInput: () => cy.get('#userEmail'),
        genderRadiobutton: (gender) => cy.get(`#gender-radio-${gender}`),
        userNumberInput: () => cy.get('#userNumber'),
        subjectsInput: () => cy.get('#subjectsInput'),
        hobbiesCheckbox: (hobbyValue) => cy.get(`#hobbies-checkbox-${hobbyValue}`),
        uploadPictureInput: () => cy.get('#uploadPicture'),
        currentAddressInput: () => cy.get('#currentAddress'),
        stateDropdown: () => cy.get('#state input'),
        cityDropdown: () => cy.get('#city input'),
        submitButton: () => cy.get('#submit'),
        modalDialog: () => cy.get('.modal-dialog'),
        modalTitle: () => cy.get('#example-modal-sizes-title-lg'),
        closeModalButton: () => cy.get('#closeLargeModal')
    };

    fillBasicInfo(data){
        this.elements.firstNameInput().type(data.firstName);
        this.elements.lastNameInput().type(data.lastName);
        this.elements.emailInput().type(data.email);
        this.elements.genderRadiobutton(data.gender).check({force: true});
        this.elements.userNumberInput().type(data.mobile);
    }
    fillSubject(subject){
         this.elements.subjectsInput().type(`${subject}{enter}`);
    }
    selectHobby(hobbyValue){
        this.elements.hobbiesCheckbox(hobbyValue).check({force: true});
    }
    uploadFile(fileName){
        this.elements.uploadPictureInput().selectFile(`cypress/fixtures/${fileName}`, {force: true});
    }
    fillAdress(data){
        this.elements.currentAddressInput().type(data.currentAddress, {force: true});
        this.elements.stateDropdown().type(`${data.state}{enter}`, {force: true});
        this.elements.cityDropdown().type(`${data.city}{enter}`, {force: true});
    }
    submit(){
        this.elements.submitButton().click({force: true});
    }
    closeModal(){
        cy.get('body').type('{esc}');
    }
}

export default new PracticeFormPage();