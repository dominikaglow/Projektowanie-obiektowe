describe('Check submitting incomplete payment form', () => {
  it('Should not navigate to the payment confirmation page if any field is not filled', () => {
    cy.visit('http://localhost:3000/payments');

    cy.get('input[type="text"]').eq(0).type('1234567890123456');
    cy.get('input[type="text"]').eq(1).type('John Doe');

    cy.get('button').contains('Pay').click();

    cy.on('window:alert', (str) => {
      expect(str).to.contains('Expiry date is required');
      expect(str).to.contains('CVV is required');
    });

    cy.url().should('eq', 'http://localhost:3000/payments');
  });
});