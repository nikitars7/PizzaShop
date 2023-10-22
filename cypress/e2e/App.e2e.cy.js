describe("PizzaShop e2e", () => {
  it("should open main page", () => {
    cy.visit("/");
    cy.get('[data-testid="search-input"]').type("Learn React");
    cy.get('[data-testid="search-input"]').should("have.value", "Learn React");
    cy.get('[data-testid="search-remove-button"]').click();
    cy.get('[data-testid="search-input"]').should("have.value", "");
  });
  it("should add an item to basket", () => {
    cy.visit("/");
    cy.get('[data-testid="header-cart"] span:first-of-type').should(
      "have.text",
      "0 $"
    );
    cy.get('[data-testid="header-cart"] span:last-child').should(
      "have.text",
      "0"
    );
    cy.get('[data-testid="button-add"]').each(($el, index) => {
      if (index === 0) {
        $el.click();
      }
      cy.get('[data-testid="header-cart"] span:first-of-type').should(
        "have.text",
        "450 $"
      );
      cy.get('[data-testid="header-cart"] span:last-child').should(
        "have.text",
        "1"
      );
    });
    cy.get('[data-testid="types-id"').each(($el, index) => {
      if (index === 1) {
        $el.click()
      }
    });
    cy.get('[data-testid="sizes-id"').each(($el, index) => {
      if (index === 1) {
        $el.click();
      }
    });
    cy.get('[data-testid="button-add"]').each(($el, index) => {
      if (index === 0) {
        $el.click();
      }
    });
  });
  it("should change category", () => {
    cy.visit("/");
    cy.get('[data-testid="categories-id"]').each(($el, index) => {
      if (index !== 0) {
        $el.click();
      }
    });
  });
});
