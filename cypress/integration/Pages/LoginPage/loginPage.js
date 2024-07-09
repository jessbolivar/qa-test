/// <reference types="cypress"/>

class LoginPage {
  enetURL() {
    cy.visit("https://qa--classy-centaur-61f660.netlify.app/");
  }

  enterUserNamePassword(username, password) {
    cy.get('[type="password"]').click();
    cy.get('[type="password"]').clear();
    cy.get('[type="password"]').type(password);

    return this;
  }

  clickOnSignInButton() {
    return cy.get(".button").click();
  }

  verifyPageTitle() {
    return cy.title().should("eq", "Welcome to chemistwarehouse-au!");
  }

  validateErrorMessage(errorMessage) {
    return cy.contains(errorMessage);
  }
}

const login = new LoginPage();

export default login;
