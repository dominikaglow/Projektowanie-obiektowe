describe('Remove from cart', () => {
  it('Removes a product from the cart', () => {
    cy.visit('http://localhost:3000/products');
    cy.get('.item').first().contains('Add to cart').click();
    cy.get('.item').first().contains('Remove from cart').click();
    cy.get('.item').first().contains('Remove from cart').should('not.exist');
  });
});