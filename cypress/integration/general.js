describe('Flagfinder', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Welcome to Prideflags.info');
  });

  it('navigates to /search', () => {
    cy.get('a.button__search').click();
    cy.url().should('include', '/search');
  });
});
