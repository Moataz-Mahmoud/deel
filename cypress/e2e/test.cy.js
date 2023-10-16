describe('deel salary insights', () => {
  const env = Cypress.env();
  beforeEach(() => {
    cy.visit('/');
  })

  context('search for salaries for different positions in different countries', () => {
    it('salaries for senior accountant in Brazil', () => {
      cy.get('[data-qa="role-field"] .MuiButtonBase-root').click();
      cy.contains(env.titles[0]).click(); // select Accountant
      cy.get('[data-qa="country-field"] .MuiButtonBase-root').click();
      cy.contains(env.countries[0]).click(); // select Brazil
      cy.get('.MuiButton-root').click(); // click search

      cy.contains(`Senior ${env.titles[0]} compensation in ${env.countries[0]}`);
    })

    it('salaries for qa engineer in Canada', () => {
      cy.get('[data-qa="role-field"] .MuiButtonBase-root').click();
      cy.contains(env.titles[1]).click(); // select QA Engineer
      cy.get('[data-qa="country-field"] .MuiButtonBase-root').click();
      cy.contains(env.countries[1]).click(); // select Canada
      cy.get('.MuiButton-root').click(); // click search

      cy.contains(`Senior ${env.titles[1]} compensation in ${env.countries[1]}`);
    })

    it('salaries for software engineer in Japan', () => {
      cy.get('[data-qa="role-field"] .MuiButtonBase-root').click();
      cy.contains(env.titles[2]).click(); // select Software Engineer
      cy.get('[data-qa="country-field"] .MuiButtonBase-root').click();
      cy.contains(env.countries[2]).click(); // select Japan
      cy.get('.MuiButton-root').click(); // click search

      cy.contains(`Senior ${env.titles[2]} compensation in ${env.countries[2]}`);
    })
  })
})