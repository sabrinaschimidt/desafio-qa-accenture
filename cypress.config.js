const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com",
    viewportWidth: 1920,
    viewportHeight: 1080,
    specPattern: ["cypress/e2e/**/*.cy.js", "cypress/e2e/**/*.feature"],
    async setupNodeEvents(on, config) {
        await addCucumberPreprocessorPlugin(on, config);

        on("file:preprocessor", createBundler({
            plugins: [createEsbuildPlugin(config)],
            })
        );

        return config;
    },
  },
});