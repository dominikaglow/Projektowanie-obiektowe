describe('Navigate back to Cart from Payments page', () => {
  it('Attempts to navigate back to Cart when clicking "Back to Cart" on Payments page', () => {
    cy.visit('http://localhost:3000/payments');

    cy.get('button').contains('Back to Cart').click();

    cy.url().should('include', '/cart');
  });
});
