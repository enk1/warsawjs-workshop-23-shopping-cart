describe("Multiple", () => {
  it("3 products added to card", () => {
    cy.visit("/");
    cy.selectProduct(1);
    cy.selectProduct(2);
    cy.selectProduct(3);
    cy.openCart();
  });
  it("3 products in card", () => {
    cy.get(".ant-list-item").should(item => {
      expect(item).to.have.length(3);
    });
  });
});
