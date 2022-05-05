import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("I got an email and click 'Accéder au document'", () => {

    // Get the link from json file
    cy.fixture('link').then(link => {
        cy.visit(link.url);
    })
});

When("I click 'Commencer'", () => {
    cy.get('.c-jVeNWd > .c-bmkHyA').click()    
});

And("I click on 'Signer'", () => {   
    cy.wait(5000)
    cy.get('.c-bTkIqM > .c-bmkHyA').click({force:true})    
});


Then("The message {string} is displayed", (message) => {    
    cy.contains(message).should('be.visible')
});