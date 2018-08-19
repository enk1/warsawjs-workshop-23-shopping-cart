describe("Buy", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("click add item", () => {
    cy.addFirstProduct();
  });
  it("remove from card", () => {
    cy.addFirstProduct();
    cy.openCart();
    cy.get("[data-test-id=card-list]")
      .contains("remove")
      .click();
    cy.get("[data-test-id=main-content]").contains("No data");
  });

  it("can clear th whole cart", () => {
    cy.addFirstProduct();
    cy.addFirstProduct();
    cy.addFirstProduct();
    cy.openCart();
    cy.get("[data-test-id=menu-cart-list]")
      .contains("Clear cart")
      .click();
    cy.get("[data-test-id=main-content]").contains("No data");
  });

  //   it("go to the card", () => {
  //     cy.get("a[href$='/cart']").click();
  //   });

  //   it("check if product exists", () => {
  //     cy.getFirstProductName();
  //     //cy.contains(`${product}`);
  //   });
  //   it("proceed next btn", () => {
  //     //cy.get();
  //   });
});
