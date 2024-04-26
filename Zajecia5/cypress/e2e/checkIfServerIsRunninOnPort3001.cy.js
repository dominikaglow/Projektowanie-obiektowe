describe('Server running on port', () => {
  it('checks if server is running on the specified port', () => {
    cy.request('http://localhost:3001').then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.include('Server is running');
    });
  });
});