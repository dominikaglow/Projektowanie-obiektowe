describe('Add to cart', () => {
  it('Adds a product to the cart', () => {
    cy.visit('http://localhost:3000/products');
    cy.get('.item').first().contains('Add to cart').click();
    cy.get('.item').first().contains('Remove from cart').should('exist');
  });
});