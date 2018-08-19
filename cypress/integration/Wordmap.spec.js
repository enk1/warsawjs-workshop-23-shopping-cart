describe("Wordmap", function() {
  it("found AmazonBasics", function() {
    cy.visit("/");
    cy.contains("AmazonBasics Carrying Case for Nintendo Switch - Red");
  });
  it("didn't find Apple :(", function() {
    cy.visit("/");
    cy.contains("MacBook");
  });
});
