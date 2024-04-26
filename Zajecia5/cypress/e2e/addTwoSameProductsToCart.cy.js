describe('Add the same product to cart twice and check if it is possible to remove it twice', () => {
  it('Adds the same product to cart twice and checks if it is possible to remove it twice', () => {
    const prodToAdd = 'product 3';
    cy.visit('http://localhost:3000/products');

    cy.contains('.item', prodToAdd).within(() => {
      cy.get('button').contains('Add to cart').click();
      cy.get('button').contains('Add to cart').click();
    });

    cy.contains('.item', prodToAdd).within(() => {
      cy.get('button').contains('Remove from cart').click();
      cy.get('button').contains('Remove from cart').click();
    });

  })
});