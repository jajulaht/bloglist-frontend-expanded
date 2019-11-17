describe('Login page ', function() {
  it('Front page can be opened', function() {
    cy.visit('http://localhost:3000')
    cy.contains('Log in to application')
  })

  it('User can login', function () {
    cy.get('[data-cy=username]')
      .type('mluukkai')
    cy.get('[data-cy=password]')
      .type('salainen')
    cy.get('[data-cy=submit]')
      .click()
    cy.contains('Matti Luukkainen logged in')
  })

  it('A new blog note can be created', function() {
    cy.contains('New blog note')
      .click()
    cy.get('[data-cy=title]')
      .type('A blog created by cypress')
    cy.get('[data-cy=author]')
      .type('Author created by cypress')
    cy.get('[data-cy=url]')
      .type('Url created by cypress')
    cy.get('[data-cy=create]')
      .click()
    cy.contains('A blog created by cypress')
    cy.contains('Author created by cypress')
  })
})