Feature: I want open the Site and verify links in Home Page

  Background:
    Given I navigate to the CWR website

  Scenario: Verify content in Home Page
    When I entered valid credential
      | email                             | validpassword |
      | testemail@chemistwarehouse.com.au | cwretail      |
    When User clicks on sign in button
    Then I view links in Home Page of the site
      | HomePageLinks |
      | Products      |
      | Brands        |
      | Offers        |
      | Catalogue     |
      | Find a Store  |
