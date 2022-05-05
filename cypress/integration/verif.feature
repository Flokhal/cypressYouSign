Feature: check mail

Scenario: mail verification
    Given I received a mail
    When I click on the email
    Then I got the document url
   

   Scenario: signature
    Given I got an email and click 'Accéder au document'
    When I click 'Commencer'
    And I click on 'Signer'
    Then The message "Il ne vous reste plus qu'à signer !" is displayed 