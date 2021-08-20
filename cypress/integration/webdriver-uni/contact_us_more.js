/// <reference types="Cypress" />

describe("Test Contacs Us form via Webdriver Uni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        // cypress code
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        // cy.get('#contact-us').click({force: true})
        cy.xpath("//input[@name='first_name']").type("Joe")
        cy.get('[name="last_name"]').type("Bowey")
        cy.get('[data-top="266"]').should('have.arrt', 'firts_name', 'first_name')
        cy.get("[name='email'][placeholder='Email Address']").type("joebowey@ya.hoo")
        cy.get('textarea.feedback-input').type("Comment for this field")
        cy.get('[type="submit"]').click()
       // cy.get("[class='navbar navbar-inverse navbar-fixed-top']").click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    })
})