import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
let link;

Given("I received a mail", () => {

    cy.visit("https://mailcare.datasolution.site/")
});

When("I click on the email", () => {    
        cy.request({
            url: "https://mailcare.datasolution.site/api/emails",
            method: "GET",
            qs: {
                "inbox": "pascale@mailcare.datasolution.site",
                "sender": "app@yousign.com",
                "subject": " YS vous invite à signer signature_wcs sur Yousign",
                "limit": 5
            }
        }).then(response => {    
            cy.request({
                url: `https://mailcare.datasolution.site/api/emails/${response.body.data[0].id}`,
                method: "GET",
                headers: {
                    'Accept': 'text/html'
                }
            }).then(resp => {
                const parser = new DOMParser();
                const emailBody = parser.parseFromString(resp.body, "text/html");
                link = emailBody.querySelector('a[style="display: inline-block; background: #5de8c1; color: #002b44; font-family: URWGeometric, Arial; font-size: 16px; font-weight: bold; line-height: 22px; margin: 0; text-decoration: none; text-transform: none; padding: 14px 22px; mso-padding-alt: 0px; border-radius: 25px;"]').getAttribute('href')
                cy.log(link)                
                // cy.writeFile('cypress/fixtures/link.json', { 'url': link })     
            })
        })   
});

Then("I got the document url", () => {
    cy.writeFile('cypress/fixtures/link.json', { 'url': link })    
});


