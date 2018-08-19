describe("HomePage", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("can be added to cart", () => {
    const productList = cy.get("[data-test-id=product-list]");
    productList
      .get(".ant-card")
      .first()
      .contains("Buy")
      .click();
    productList
      .get(".ant-card")
      .first()
      .find(".ant-card-meta-title")
      .then(titleTag => {
        cy.openCart();
        cy.get("[data-test-id=main-content]").contains(titleTag.text());
      });
  });
});
