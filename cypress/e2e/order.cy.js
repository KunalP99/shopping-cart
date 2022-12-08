beforeEach(() => {
  cy.visit("http://localhost:3000/shopping-cart/order");
});

describe("Order component", () => {
  it("should render 'Back to Shop' button", () => {
    cy.contains("Back to Shop");
  });

  it("should direct user to the 'Shop' page when the 'Back to Shop' button is clicked", () => {
    cy.contains("Back to Shop").click();
    cy.url().should("include", "/shopping-cart/shop");
    cy.contains("HOODIE");
  });
});
