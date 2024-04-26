describe('Empty cart message', () => {
  it('Displays empty cart message when the cart is empty', () => {
    cy.visit('http://localhost:3000/cart');
    cy.contains('p', 'Your cart is empty').should('be.visible');
  });
});
