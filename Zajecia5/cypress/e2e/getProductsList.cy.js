describe('Retrieve list of products', () => {
  it('Displays the list of products from the server', () => {
    cy.visit('http://localhost:3000/products');

    cy.contains('.item', 'product 1');
    cy.contains('.item', 'product 2');
    cy.contains('.item', 'product 3');
  });
});