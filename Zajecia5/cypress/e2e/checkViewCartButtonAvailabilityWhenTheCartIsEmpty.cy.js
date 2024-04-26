describe('View Cart button availability', () => {
  it('Checks if View Cart button is disabled when the cart is empty', () => {
    cy.visit('http://localhost:3000/products');
    cy.get('button').contains('View Cart').should('not.exist');
  });
});
