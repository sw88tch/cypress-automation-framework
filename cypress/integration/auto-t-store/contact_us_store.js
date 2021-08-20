/// <reference types="Cypress" />

describe("Test Contacs Us form via Automation Test Store", () => {
    before(function () {
        cy.fixture("userDetails").as("user")
    })
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit("https://automationteststore.com/")
        cy.get("a[href$='contact']").click().then(function (linkText) {
            cy.log("Clicked on link using text: " + linkText.text())
        })
        // cy.xpath("//a[contains(@href, 'contact')]").click()
        cy.get("@user").then((user) => {
            cy.get('#ContactUsFrm_first_name').type(user.first_name)
            cy.get('#ContactUsFrm_email').type(user.email)
        })
        cy.get('#ContactUsFrm_enquiry').type("Do you send my order?")
        cy.get("button[title='Submit']").click()
    })
})