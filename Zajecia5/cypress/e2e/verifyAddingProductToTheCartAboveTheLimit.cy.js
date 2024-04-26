describe('Attempt to add first product to the cart 11 times', () => {
  it('Displays message when attempting to add 11th product with a given name to the cart', () => {
    cy.visit('http://localhost:3000/products');
    for (let i = 0; i < 11; i++) {
      cy.get('.item').first().contains('Add to cart').click();
    }
    cy.on('window:alert', (message) => {
      expect(message).to.equal('Maximum quantity reached for this product.');
    });
  })
})