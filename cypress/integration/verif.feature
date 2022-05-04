Feature: check mail

Scenario: mail verification
    Given i received a mail
    When i click on the email
    Then i got the document url
   

   Scenario: signature
    Given i got an email and click 'Accéder au document'
    When i click 'Commencer'
    And i click on 'Signer'
    Then message "Il ne vous reste plus qu'à signer !" is displayed 