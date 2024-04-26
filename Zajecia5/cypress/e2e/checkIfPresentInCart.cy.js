describe('Add product to cart and check if it exists in cart', () => {
  it('Adds a product to the cart and checks if it exists in cart', () => {
    const prodToAdd = 'product 2';
    cy.visit('http://localhost:3000/products');
    cy.get('.item').contains(prodToAdd).siblings('button').click();
    cy.get('button').contains('View Cart').click();
    cy.contains('.list', prodToAdd).should('exist');
  });
});