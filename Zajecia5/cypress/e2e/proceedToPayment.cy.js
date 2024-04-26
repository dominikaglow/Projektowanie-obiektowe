describe('Add product to cart and proceed to payment', () => {
  it('Adds a product to the cart and proceeds to payment', () => {
    cy.visit('http://localhost:3000/products');
    cy.get('.item').first().contains('Add to cart').click();

    cy.get('button').contains('Proceed to Payment').click();
    cy.url().should('include', '/payments');
  });
});
