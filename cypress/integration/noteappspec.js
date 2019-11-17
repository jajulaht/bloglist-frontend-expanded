describe('Login page ', function() {
  it('Reset database', function() {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    const user = {
      name: 'Matti Luukkainen',
      username: 'mluukkai',
      password: 'salainen'
    }
    cy.request('POST', 'http://localhost:3003/api/users/', user)
  })

  describe('When logged in', function() {
    beforeEach(function() {
      cy.visit('http://localhost:3000')
      cy.get('[data-cy=username]')
        .type('mluukkai')
      cy.get('[data-cy=password]')
        .type('salainen')
      cy.get('[data-cy=submit]')
        .click()
    })

    it('Name of the user is shown', function() {
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

    it('Blog info can be opened and liked', function() {
      cy.get('tr > :nth-child(1) > a')
        .click()
      cy.contains('0 likes')
      cy.get('[data-cy=like]')
        .click()
      cy.contains('1 likes')
    })

    it('Blog can be commented', function() {
      cy.get('tr > :nth-child(1) > a')
        .click()
      cy.contains('No comments yet...')
      cy.get('[data-cy=commentContent]')
        .type('A comment created by cypress')
      cy.get('[data-cy=commentCreate]')
        .click()
      cy.contains('A comment created by cypress')
    })

    it('Users page can be opened and users blogs reviewed', function() {
      cy.get('[data-cy=users]')
        .click()
      cy.get('[data-cy=usersHeading]')
        .contains('Users')
      cy.get('tr > :nth-child(1) > a')
        .click()
      cy.contains('A blog created by cypress')
    })

    it('User can logout', function() {
      cy.contains('Matti Luukkainen logged in')
      cy.get('[data-cy=logout]')
        .click()
      cy.contains('Log in to application')
    })
  })
})