describe('Proceed To Payment button availability', () => {
  it('Checks if Proceed To Payment button is disabled when the cart is empty', () => {
    cy.visit('http://localhost:3000/products');
    cy.get('button').contains('Proceed To Payment').should('not.exist');
  });
});
