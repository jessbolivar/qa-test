const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qa--classy-centaur-61f660.netlify.app/",
    //specPattern: "cypress/integration/**/*.{feature,features}",
    specPattern: "**/*.{feature,features}",
    supportFile: false,
    viewportWidth: 1536,
    viewportHeight: 960,
    experimentalRunAllSpecs: true,
    //testFile: "**/*.{feature,features}",
    setupNodeEvents(on, config) {
      // Register the cucumber preprocessor
      on("file:preprocessor", cucumber());

      // Add other node event listeners if needed
    },
  },
});
