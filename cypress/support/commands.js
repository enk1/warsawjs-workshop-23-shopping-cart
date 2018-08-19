Cypress.Commands.add("addFirstProduct", () => {
  cy.get("[data-test-id=product-list]")
    .contains("Buy")
    .click();
});
Cypress.Commands.add("selectProduct", number => {
  cy.get(`[data-test-id=product-list-item-${number}]`)
    .contains("Buy")
    .click();
});
Cypress.Commands.add("openCart", () => {
  cy.get("[data-test-id=header-menu]")
    .contains("Cart")
    .click();
});
Cypress.Commands.add("clickNextInCart", () => {
  cy.get("[data-test-id=menu-cart-list]")
    .contains("Next")
    .click();
});
Cypress.Commands.add("clickNextInForm", () => {
  cy.get("[data-test-id=address-form-menu]")
    .contains("Next")
    .click();
});
Cypress.Commands.add("clickNextInDelivery", () => {
  cy.get("[data-test-id=delivery-form]")
    .contains("Next")
    .click();
});
