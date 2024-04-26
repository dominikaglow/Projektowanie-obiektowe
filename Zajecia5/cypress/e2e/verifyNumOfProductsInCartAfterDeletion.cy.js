describe('Verify number of products in cart after deletion', () => {
  it('Adds product to the cart 2 times and checks if the number of products in the cart is 1 after one deletion', () => {
    const expectedQuantityBeforeDeletion = 2;
    const expectedQuantityAfterDeletion = 1;
    const prodName = 'product 1';

    cy.visit('http://localhost:3000/products');
    cy.get('.item').first().contains('Add to cart').click();
    cy.get('.item').first().contains('Add to cart').click();

    cy.get('button').contains('View Cart').click();
    cy.contains('.list', prodName).should('contain.text', `Quantity: ${expectedQuantityBeforeDeletion}`);

    cy.get('button.backToProducts').click();
    cy.get('.removeFromCart').first().click();

    cy.get('button').contains('View Cart').click();
    cy.contains('.list', prodName).should('contain.text', `Quantity: ${expectedQuantityAfterDeletion}`);

  });
});