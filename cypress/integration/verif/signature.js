import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("i got an email and click 'Accéder au document'", () => {

    // Get the link from json file

cy.fixture('link').then(link => {
    cy.visit(link.url);
})
});

When("i click 'Commencer'", () => {

    cy.get('.c-jVeNWd > .c-bmkHyA').click()
    
});

And("i click on 'Signer'", () => {

    
    
    cy.wait(5000)
    cy.get('.c-bTkIqM > .c-bmkHyA').click({force:true})

    
});

//And("i confirm", () => {



  
  //cy.get('.sliderThumb').trigger('mousedown').trigger('mousemove', { which: 1, pageX: 800, pageY: 0 }).trigger('mouseup');
  //cy.get('.sliderThumb').get('div[draggable="false"]', {force:true})
   

    
//});

Then("message {string} is displayed", (message) => {

    
    cy.contains(message).should('exist')
  });