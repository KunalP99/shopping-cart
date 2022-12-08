beforeEach(() => {
  cy.visit("http://localhost:3000/shopping-cart/shop");
});

describe("Shop component", () => {
  it("should render Shop Component", () => {
    cy.contains("Nike Training Dri-FIT fleece hoodie in black");
    cy.contains("Farah Gladstone back print cotton hoodie in black");
    cy.contains("Jordan Jumpman mini logo fleece hoodie in gym red");
  });

  it("should increment basket quantity counter by 1 when a 'Add to basket' button is clicked", () => {
    cy.get('[data-test-btn="basket-btn-0"').click();
    cy.contains("x1");
  });

  it("should increment basket quantity by 4 when the same 'Add to basket' button is clicked", () => {
    cy.get('[data-test-btn="basket-btn-0"').click();
    cy.get('[data-test-btn="basket-btn-0"').click();
    cy.get('[data-test-btn="basket-btn-0"').click();
    cy.get('[data-test-btn="basket-btn-0"').click();
    cy.contains("x4");
  });

  it("should increment basket quantity by 3 when different 'Add to basket' buttons are clicked", () => {
    cy.get('[data-test-btn="basket-btn-1"').click();
    cy.get('[data-test-btn="basket-btn-2"').click();
    cy.get('[data-test-btn="basket-btn-3"').click();
    cy.contains("x3");
  });
});

describe("Header component", () => {
  it("should show sidebar component once basket button is clicked", () => {
    cy.get('[data-test-basket="basket"]').click();
    cy.get('[data-test-sidebar="sidebar"]').should("be.visible");
  });
});
