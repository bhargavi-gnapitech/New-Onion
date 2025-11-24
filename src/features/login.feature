
Feature: Onion Login
  @login
  Scenario: Verify user can login successfully
    Given user launches Onion application
    When user enters username "bhargavi"
    And user enters password "mypassword"
    And user clicks login button
    Then user should land on dashboard page
