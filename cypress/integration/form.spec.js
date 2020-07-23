describe('Input and submit form', () => {
    it('can navigate to the site', ()=> {
        cy.visit('http://localhost:3000')
        cy.url().should('include', 'localhost')
    })
    it('submit button is disabled', () => {
        cy.get('.btn-disabled').should('be.disabled')
    })
    it('Populate all fields', () => {
        cy.get('input[name="first_name"]').type('Royer')
        cy.get('input[name="last_name"]').type('Adames')
        cy.get('input[name="email"]').type('royeraadames@gmail.com')
        cy.get('input[name="password"]').type('password12345')
        cy.get('input[name="termsOfService"]').click()
    })
    it('Check that the form is has all needed fields', () => {
        cy.get('input[name="first_name"]').should('have.value', 'Royer')
        cy.get('input[name="last_name"]').should('have.value', 'Adames')
        cy.get('input[name="email"]').should('have.value','royeraadames@gmail.com')
        cy.get('input[name="password"]').should('have.value','password12345')
        cy.get('input[name="termsOfService"]').should('be.enabled')
    })
    it('submit the form', () => {
        cy.get('button.btn').click()
    })
    it('Check that new user is displaying on the user list', () => {
        cy.contains('Royer')
        cy.contains('Adames')
        cy.contains('royeraadames')
        cy.contains('password12345')
    })
})