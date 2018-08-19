describe("Address", () => {
  it("thing added to cart", () => {
    cy.visit("/");
    cy.addFirstProduct();
    cy.openCart();
    cy.clickNextInCart();
  });
  it("address form filled", () => {
    cy.get("#fullname").type("native inhabitant of the console.log planet");
    cy.get("#street").type("Nieporęcka 33C");
    cy.get("#city").type("WarsawJS");
    cy.get(".ant-cascader-picker")
      .contains("United")
      .click();
    cy.get(".ant-cascader-menu")
      .contains("Poland")
      .click();
    cy.clickNextInForm();
  });
  it("delivery method choosed", () => {
    cy.get("#deliveryMethod").click();
    cy.get(".ant-select-dropdown-menu")
      .contains("Post")
      .click();
    cy.clickNextInDelivery();
  });
  it("message appeared", () => {
    cy.contains("Order");
  });
});
