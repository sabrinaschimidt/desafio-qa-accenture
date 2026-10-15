import '@4tw/cypress-drag-drop';

Cypress.on('uncaught:exception', () => {
  return false;
});