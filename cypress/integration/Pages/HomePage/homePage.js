require("cypress-xpath"); // Make sure you've installed the cypress-xpath plugin

class HomePage {
  constructor() {
    this.HomePageLinks = {
      Products: "//*[@id='radix-:Rj6:-trigger-radix-:Rmj6:']",
      Brands: "//button[@id='radix-:Rj6:-trigger-radix-:R16j6:']",
      Offers: "//a[contains(@class, 'relative') and text()='Offers']",
      Catalogue: "//p[normalize-space()='Catalogue']",
      "Find a Store":
        "//div[@class='flex flex-row items-center justify-center space-x-space-200']//p[@class='whitespace-pre'][normalize-space()='Find a Store']",
    };
  }

  verifyLink(linkText) {
    const locator = this.HomePageLinks[linkText];

    switch (linkText) {
      case "Products":
        cy.xpath(locator).should("be.visible").and("have.text", linkText);
        break;
      case "Brands":
        cy.xpath(locator).should("be.visible").and("have.text", linkText);
        break;
      case "Offers": // Add other cases for different link types if needed
        cy.xpath(locator).should("be.visible").and("have.text", linkText);
        break;
      case "Catalogue": // Add other cases for different link types if needed
        cy.xpath(locator).should("be.visible").and("have.text", linkText);
        break;
      case "Find a Store": // Add other cases for different link types if needed
        cy.xpath(locator).should("be.visible").and("have.text", linkText);
        break;
      default:
        throw new Error(
          `Link with text "${linkText}" not found in HomePageLinks.`
        );
    }
  }
}

export default new HomePage();
