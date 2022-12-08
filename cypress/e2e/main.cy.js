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

describe("Full end to end testing", () => {
  it("should go through a typical user experience from start to finish", () => {
    cy.contains("Shop Now").click();
    cy.get('[data-test-btn="basket-btn-0"]').click();
    cy.get('[data-test-btn="basket-btn-1"]').click();
    cy.get('[data-test-btn="basket-btn-5"]').click();
    cy.get('[data-test-basket="basket"]').click();

    cy.get('[data-test-plus="plus-1"]').click();
    cy.get('[data-test-plus="plus-1"]').click();
    cy.get('[data-test-minus="minus-1"]').click();

    cy.get('[data-test-remove="remove-5"]').click();
    cy.get(".close-icon").click();

    cy.get('[data-test-btn="basket-btn-2"]').click();
    cy.get('[data-test-basket="basket"]').click();
    cy.contains("Buy Now").click();

    cy.contains("Order Successful");
    cy.contains("Back to Shop").click();
    cy.contains("HOODIE");
    cy.contains("x0");
  });
});
