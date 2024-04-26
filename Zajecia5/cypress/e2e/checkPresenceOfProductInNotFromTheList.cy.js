describe('Checking presence of product not form the list of products', () => {
  it('Attempts to look for a product that is not listed', () => {
    const nonExistentProduct = 'Non-existent product';
    cy.visit('http://localhost:3000/products');
    cy.get('.item').contains(nonExistentProduct).should('not.exist');
  });
});
