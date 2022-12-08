beforeEach(() => {
  cy.visit("http://localhost:3000/shopping-cart");
});

describe("App component", () => {
  it("renders Shop Now button", () => {
    cy.contains("Shop Now");
  });

  it("should direct user to Shop page once Shop Now button is clicked", () => {
    cy.contains("Shop Now").click();
    cy.url().should("include", "/shopping-cart/shop");
    cy.contains("HOODIE");
  });
});
