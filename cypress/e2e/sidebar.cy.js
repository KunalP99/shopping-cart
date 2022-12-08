beforeEach(() => {
  cy.visit("http://localhost:3000/shopping-cart/shop");
});

describe("Sidebar component", () => {
  it("should contain £0 for the sub-total and should not render 'Buy Now' button", () => {
    cy.get('[data-test-basket="basket"]').click();
    cy.get('[data-test-buy-btn="buy-now-btn"]').should("not.exist");
    cy.contains("£0");
  });

  it("should render 'Buy Now' button when an item is in the basket", () => {
    cy.get('[data-test-btn="basket-btn-0"]').click();
    cy.get('[data-test-basket="basket"]').click();
    cy.get('[data-test-buy-btn="buy-now-btn"]').should("exist");
  });

  it("should render the correct total when one item is added to basket", () => {
    cy.get('[data-test-btn="basket-btn-0"]').click();
    cy.get('[data-test-basket="basket"]').click();
    cy.contains("£40");
  });

  it("should render the correct total when multiple of the same item is added to basket", () => {
    cy.get('[data-test-btn="basket-btn-1"]').click();
    cy.get('[data-test-btn="basket-btn-1"]').click();
    cy.get('[data-test-basket="basket"]').click();
    cy.contains("£130");
  });

  it("should render the correct total when different items are added to the basket", () => {
    cy.get('[data-test-btn="basket-btn-1"]').click();
    cy.get('[data-test-btn="basket-btn-2"]').click();
    cy.get('[data-test-btn="basket-btn-3"]').click();
    cy.get('[data-test-basket="basket"]').click();
    cy.contains("£190");
  });

  it("should increment quantity of item by 1 when the plus button is clicked", () => {
    cy.get('[data-test-btn="basket-btn-1"]').click();
    cy.get('[data-test-basket="basket"]').click();
    cy.get('[data-test-plus="plus-1"]').click();
    cy.contains("£130");
  });

  it("should decrement quantity of item by 1 when the minus button is clicked", () => {
    cy.get('[data-test-btn="basket-btn-1"]').click();
    cy.get('[data-test-btn="basket-btn-1"]').click();
    cy.get('[data-test-basket="basket"]').click();
    cy.get('[data-test-minus="minus-1"]').click();
    cy.contains("£65");
  });

  it("should increment items and decrement items and show the correct total", () => {
    cy.get('[data-test-btn="basket-btn-1"]').click();
    cy.get('[data-test-btn="basket-btn-1"]').click();
    cy.get('[data-test-btn="basket-btn-1"]').click();
    cy.get('[data-test-btn="basket-btn-4"]').click();
    cy.get('[data-test-btn="basket-btn-4"]').click();
    cy.get('[data-test-btn="basket-btn-2"]').click();
    cy.get('[data-test-btn="basket-btn-2"]').click();
    cy.get('[data-test-basket="basket"]').click();

    cy.get('[data-test-minus="minus-1"]').click();
    cy.get('[data-test-minus="minus-1"]').click();
    cy.get('[data-test-minus="minus-4"]').click();
    cy.get('[data-test-minus="minus-4"]').click();
    cy.contains("£238.75");
  });

  it("should remove item when the remove button is clicked", () => {
    cy.get('[data-test-btn="basket-btn-0"]').click();
    cy.get('[data-test-btn="basket-btn-1"]').click();
    cy.get('[data-test-basket="basket"]').click();
    cy.get('[data-test-remove="remove-0"]').click();

    cy.contains("£65");
  });

  it("should close sidebar once the cross is clicked", () => {
    cy.get('[data-test-basket="basket"]').click();
    cy.get(".close-icon").click();
    cy.contains("Sub-total").should("not.be.visible");
  });

  it("should direct user to the 'Order Successful' page when 'Buy Now' is clicked", () => {
    cy.get('[data-test-btn="basket-btn-0"]').click();
    cy.get('[data-test-basket="basket"]').click();
    cy.contains("Buy Now").click();
    cy.url().should("include", "/shopping-cart/order");
    cy.contains("Order Successful");
  });
});
