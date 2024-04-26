describe('Verify redirection to Products view from Cart view', () => {
  it('Adds a product, goes to Cart view, and verifies redirection to Products view', () => {
    cy.visit('http://localhost:3000/products');
    cy.get('.item').first().contains('Add to cart').click();
    cy.get('button').contains('View Cart').click();
    cy.get('.backToProducts').click();
    cy.url().should('include', '/products');
  })
})