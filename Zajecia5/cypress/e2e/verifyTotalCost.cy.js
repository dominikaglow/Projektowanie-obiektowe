describe('Verify total cost of the cart', () => {
  it('Adds multiple products to the cart and verifies the total cost', () => {
    cy.visit('http://localhost:3000/products');

    cy.get('.item').first().contains('Add to cart').click();
    cy.get('.item').first().contains('Add to cart').click();

    cy.contains('.item', 'product 2').within(() => {
      cy.get('button').contains('Add to cart').click();
    });

    cy.contains('.item', 'product 3').within(() => {
      cy.get('button').contains('Add to cart').click();
    });

    cy.get('button').contains('View Cart').click();

    let expectedCost = 0;
    cy.get('.list').each(($el) => {
      const price = parseFloat($el.text().match(/Price: (\d+\.\d+)/)[1]);
      const quantity = parseFloat($el.text().match(/Quantity: (\d+)/)[1]);
      expectedCost += price * quantity;
    }).then(() => {
      cy.get('.totalCost').should('contain', `Total Cost: $${expectedCost.toFixed(2)}`);
    });
  });
});