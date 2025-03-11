// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('loginblaze',(username,password) =>{
    cy.visit('https://www.demoblaze.com/')
    cy.url().should('include', 'demoblaze.com')

    cy.get('#login2').click()
    cy.get('#loginusername', { timeout: 10000 }).should('be.visible').type(username, {force : true})
    cy.get('#loginpassword',{ timeout: 10000 }).should('be.visible').type(password, {force : true})
    cy.get("button[onclick='logIn()']").click()
})

Cypress.Commands.add('cartblaze',()=> {
    cy.xpath("//a[normalize-space()='Samsung galaxy s6']").click({force : true})
    cy.get('.btn.btn-success.btn-lg').click()
     


     cy.xpath("//li[@class='nav-item active']//a[@class='nav-link']").click({force : true})
     cy.wait(1500)

     cy.xpath('//a[3]').click()
     cy.xpath("//a[normalize-space()='Sony vaio i5']").click({force : true})
     cy.get('.btn.btn-success').click()

    
     cy.xpath("//li[@class='nav-item active']//a[@class='nav-link']").click({force : true})
     cy.xpath('//a[4]').click()
     cy.xpath("//a[normalize-space()='Apple monitor 24']").click({force : true})
     cy.get('.btn.btn-success').click()

     cy.get('#cartur').click()
     cy.get('.btn.btn-success').click()
})