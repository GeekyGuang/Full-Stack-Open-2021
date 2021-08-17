describe('Note app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000')
  })
  it('from page can be opened', function () {
    cy.contains('Notes')
    cy.contains('Note app, Department of Computer Science, University of Helsinki 2021')
  })

  // it('front page contains random text', function () {
  //   cy.visit('http://localhost:3000')
  //   cy.contains('wtf is this app?')
  // })

  it('login form can be opened', function () {
    cy.contains('login').click()
    cy.get('#username').type('root')
    cy.get('#password').type('salainen')
    cy.get('#login-button').click()

    cy.contains('Superuser logged-in')
  })
})
