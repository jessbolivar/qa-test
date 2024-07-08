Feature: I want to login into the site with valid and invalid data and search T-shirt

  Background:
    Given I navigate to the CWR website

  Scenario: Login as new sign up user with valid data
    When I entered valid credential
      | email                             | validpassword |
      | testemail@chemistwarehouse.com.au |               |
    When User clicks on sign in button
    Then Validate the title after login

  Scenario: Login as new sign up user with invalid data
    When I entered invalid credential
      | email                             | invalidpassword |
      | testemail@chemistwarehouse.com.au |          123456 |
    When User clicks on sign in button
    Then Error message should display
      | errormessage                      |
      | Wrong password, please try again. |
