import login from "../../integration/Pages/LoginPage/loginPage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the CWR website", () => {
  cy.visit("https://qa--classy-centaur-61f660.netlify.app/", {
    failOnStatusCode: false,
  });
});

When("I entered valid credential", (datatable) => {
  datatable.hashes().forEach((element) => {
    login.enterUserNamePassword(element.email, element.validpassword);
  });
});

When("User clicks on sign in button", () => {
  login.clickOnSignInButton();
});

Then("Validate the title after login", () => {
  login.verifyPageTitle();
});

// Scenario 2: Login with Invalid credential and Verify error message

When("I entered invalid credential", (datatable) => {
  datatable.hashes().forEach((element) => {
    login.enterUserNamePassword(element.email, element.invalidpassword);
  });
});

When("User clicks on sign in button", () => {
  login.clickOnSignInButton();
});

Then("Error message should display", (datatable) => {
  datatable.hashes().forEach((element) => {
    login.validateErrorMessage(element.errormessage);
  });
});
