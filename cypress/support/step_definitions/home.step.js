import login from "../../integration/Pages/LoginPage/loginPage";
import homePage from "../../integration/Pages/HomePage/homePage";
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

When("Validate the title after login", () => {
  login.verifyPageTitle();
});

Then("I view links in Home Page of the site", (datatable) => {
  datatable.hashes().forEach((row) => {
    const linkText = row.HomePageLinks;
    homePage.verifyLink(linkText);
  });
});
