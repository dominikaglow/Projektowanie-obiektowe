describe('Verify number of products in cart', () => {
  it('Adds products to the cart 3 times and checks if the number of products in the cart is 3', () => {
    const expectedQuantity = 3;
    const prodName = 'product 1';

    cy.visit('http://localhost:3000/products');
    cy.get('.item').first().contains('Add to cart').click();
    cy.get('.item').first().contains('Add to cart').click();
    cy.get('.item').first().contains('Add to cart').click();

    cy.get('button').contains('View Cart').click();
    cy.contains('.list', prodName).should('contain.text', `Quantity: ${expectedQuantity}`);

  });
});