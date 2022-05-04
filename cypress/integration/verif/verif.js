import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";

Given("i received a mail", () => {

    cy.visit("https://mailcare.datasolution.site/")
});

When("i click on the email", () => {

    
        cy.request({
            url: "https://mailcare.datasolution.site/api/emails",
            method: "GET",
            qs: {
                "inbox": "destiney@mailcare.datasolution.site",
                "sender": "app@yousign.com",
                "subject": " YS vous invite à signer signature_wcs sur Yousign",
                "limit": 1
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
                const link = emailBody.querySelector('[href="https://yousign.app/signatures/b1c596ee-93cf-4031-a45c-2cfd59b3deb7?s=4d32a133021e967460cc34e84402abf91a7eaa14aa3de410e5dc8570dcda6022ef3158d22de8df164fa3ec70d09d0f6cfcc27acfd528672f52b7f4a733ad9573&r=cf100ec101597ce9975a5b0a1947b6c6&source=email&lang=fr&magic_link_id=cdbfdec6-76ee-4f26-ac81-0c5f2e1f883c&domain_id=c67cf5c2dc&k=a2rxamR0vfd98UVgiTmwg3buJ6a9E2XF&sandbox=true"]').getAttribute('href')
                cy.log(link)
                
                cy.writeFile('cypress/fixtures/link.json', { 'url': link })

                
    
               
    
            })
        })
    
});

Then("i got the document url", () => {

    
});


