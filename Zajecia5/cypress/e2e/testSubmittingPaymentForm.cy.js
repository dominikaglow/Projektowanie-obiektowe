describe('Submit payment form', () => {
  it('Submits payment form data to the server', () => {
    cy.visit('http://localhost:3000/payments');

    cy.get('input[type="text"]').eq(0).type('John Doe');
    cy.get('input[type="text"]').eq(1).type('1234567890123456');
    cy.get('input[type="text"]').eq(2).type('12/25');
    cy.get('input[type="text"]').eq(3).type('123');
    cy.get('button').contains('Pay').click();

    cy.intercept('POST', 'http://localhost:3001/payments').as('paymentRequest');

    cy.wait('@paymentRequest').then((interception) => {
      console.log('Interception:', interception);
      
      expect(interception).to.have.property('request');
      expect(interception.request.method).to.eq('POST');
      expect(interception.request.url).to.eq('http://localhost:3001/payments');

      expect(interception).to.have.property('response');
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body).to.eq('Payment received');
    });
  });
});